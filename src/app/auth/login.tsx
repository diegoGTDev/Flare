import Link from 'next/link'
import { AuthButtonServer } from '../components/auth-button-server'
export default function Login() {

    
    return (
        <div className="rounded font-sans">
            <div className="flex flex-col justify-center items-center text-center gap-2 mb-5 w-full">
                <h1 className="text-3xl">Bienvenido a <span className="text-orange-400">Flare</span></h1>
                <p className="text-neutral-300">Inicia sesión</p>
            </div>
            <form className="flex flex-col gap-4">
                <div className="flex flex-col gap-4">
                    <label htmlFor="first_name" className="block mb-2 text-sm font-medium">Correo electrónico</label>
                    <input type="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="example@flare.com" required />
                </div>
                <div className="flex flex-col gap-4">
                    <label htmlFor="password" className="block mb-2 text-sm font-medium">Contraseña</label>
                    <input type="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="••••••" required />
                </div>

            </form>
            <div className="flex flex-col justify-center items-center gap-4 mt-4">
                <AuthButtonServer />
                {/* <Link href="/home" type="button" className="text-center p-2 cursor-pointer bg-neutral-100 text-black rounded w-full font-sans hover:bg-neutral-200 active:bg-neutral-300">Iniciar Sesión</Link> */}
                <a className="text-gray-400 text-sm cursor-pointer hover:text-gray-300">¿Aún no tienes cuenta?</a>
            </div>
        </div>

    )
}