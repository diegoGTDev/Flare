import PostCard from "../components/postCard"
import NewPost from "../components/newPost";
import { createClient } from "@/utils/supabase/server";
import PostList from "../components/post-list";
;
export default async function Home() {
    const supabase = await createClient();
    const posts = await supabase.from("posts").select('*, user:users(name, avatar_url, user_name)');
    const session = await supabase.auth.getSession();
    return (
        <main className="w-full h-screen xl:grid xl:grid-cols-3">
            <aside className="hidden xl:block">

            </aside>
            <section id="posts" className="xl:border-gray-500 xl:border-1 overflow-hidden h-full flex flex-col gap-0.5 w-full">
                <NewPost avatar_url={session.data.session?.user.user_metadata.avatar_url}/>
                <PostList posts={posts?.data || null}/>
            </section>
            <aside className="hidden xl:block">

            </aside>
        </main>
    )
}