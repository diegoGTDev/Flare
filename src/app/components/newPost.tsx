'use client'
import { ImagenIcon } from "../icons/imagenIcon";
import { create_post } from "./actions";
import { useRouter } from 'next/navigation'
import { PostButton } from "./post-button";
export default function NewPost({avatar_url}: {avatar_url?:string}) {
    const router = useRouter();
    const buttons = [
        {
            title: "Foto",
            icon: ImagenIcon
        },
    ]
    return (
        <div className="flex flex-row gap-2 p-2 w-full">
            <div>
                <img className="rounded-full min-w-10 min-h-10 max-w-10 max-h-10" src={avatar_url || "/Diego.webp"} width={50} height={50} alt="Foto de perfil" />
            </div>
            <form action={create_post} className="w-full">
                <div className="">
                    <textarea id="content" name="content" maxLength={280} className="text-white text-xl w-full h-fit p-2 rounded-lg outline-0 decoration-0 resize-none" placeholder="¿Qué está pasando?"></textarea>
                </div>
                <div className="flex flex-row justify-around">
                    {buttons.map((button, index) => (
                        <button
                            key={index}
                            title={button.title}
                            className="text-white hover:cursor-pointer
                            hover:text-blue-400 
                            font-bold p-1 rounded-full duration-300
                            flex flex-row gap-2 items-center
                            hover:bg-sky-300/20">
                            {button.icon == null ? null : <button.icon className="w-5 h-5"/>}
                        </button>
                        
                    ))}
                    <PostButton/>
                </div>
            </form>
        </div>
    )
}