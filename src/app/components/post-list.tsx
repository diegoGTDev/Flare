import PostCard from "./postCard";
import {type Post} from "@/utils/types/post";
export default function PostList({ posts } : {posts:Post[] | null}) {
    return (
        <div className="overflow-auto">
            {posts?.map(post => {
                const {
                    id, 
                    user,
                    content
                    } = post;

                    const {
                        user_name: userName,
                        name: userFullName,
                        avatar_url: avatarUrl
                    } = user;

                    return (
                        <PostCard 
                            key={id} 
                            post={{
                                id,
                                user: {
                                    userName,
                                    userFullName,
                                    avatarUrl
                                },
                                content
                            }} 
                        />
                    )
                })
            }
        </div>
    );

}