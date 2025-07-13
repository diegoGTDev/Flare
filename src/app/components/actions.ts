'use server'
import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";
export async function create_post(formdata:  FormData) {
  const supabase = await createClient();  
  const session = await supabase.auth.getSession();
  const rawFormData = {
    content: formdata.get('content')
  }

  const post = {
    content: rawFormData.content,
    user_id: session.data.session?.user.id
  }
  console.log(`El contenido es: ${post.content} y el usuario es: ${post.user_id}`)
  if (typeof post.content === "string" && post.user_id) {
    await supabase.from('posts').insert([
      {
        user_id: post.user_id,
        content: post.content
      }
    ]);
  }
  revalidatePath('/')
  

}
