import { createClient } from "@/utils/supabase/server";
import { Session } from "@supabase/supabase-js";
import { AuthButton } from "./auth-button-client";

export async function AuthButtonServer(){
    const supabase = await createClient();
    const {data : {session}, error} = await supabase.auth.getSession();
    if (error) {
        console.error('Error getting session:', error);
        // Manejar el error apropiadamente

    }
    return <AuthButton session={session}/>
}