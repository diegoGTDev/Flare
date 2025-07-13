import {NextResponse} from 'next/server'
import { createClient } from '@/utils/supabase/server'

export async function GET(request : Request){
    const {searchParams, origin} = new URL(request.url)
    const code = searchParams.get('code')
    let next = searchParams.get('next') ?? '/'
    if (!next.startsWith('/')) {
        next = '/home'
    }

    if (code){
        const supabase = await createClient()
        //usando el codigo que le hemos pasado por URL
        //Nos devuelve la sesion del usuario
        const {error} = await supabase.auth.exchangeCodeForSession(code)
        if (!error){
            return NextResponse.redirect(`${origin}/home`)
        }
    }
    return NextResponse.redirect(`${origin}/login?error=invalid_code`)
}

