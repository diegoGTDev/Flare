
import Login from "./login"
export default async function LoginPage() {

    return (
        <div className="h-screen flex flex-row items-center">
            <div className="w-full xl:w-1/2 flex items-center justify-center">
                <div className="flex justify-center items-center w-1/2">
                    <Login />
                </div>
            </div>
            <div className="hidden xl:block bg-[url(../../public/paisaje.webp)] bg-cover bg-center w-full h-full flex flex-col justify-center items-center">
                <div className="bg-neutral-900/50 w-full h-full flex flex-col justify-center items-center">
                    <h1 className="text-2xl text-white">Bienvenido a <span className="text-orange-400">Flare</span></h1>
                    <p className="text-white">La mejor manera de <span className="text-blue-200">comunicarse</span> está aquí</p>
                </div>
            </div>
        </div>

    )
}