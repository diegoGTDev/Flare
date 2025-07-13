import { ReactNode } from "react";
import Image from "next/image";
import MensajeIcon from "../icons/mensajeIcon";
import CompartirIcon from "../icons/compartirIcon";
import MeGustaIcon from "../icons/megustaIcon";
import GuardarIcon from "../icons/guardarIcon";
export default function PostCard({post} : {post: any}) {
    return (
        <div className="p-2 w-full h-fit flex flex-row gap-2">
            <div className="w-fit">
                <img className="rounded-full min-w-10 min-h-10 max-w-10 max-h-10" src={post.user.avatarUrl} width={50} height={50} alt="Foto de perfil" />
            </div>
            <div className="flex flex-col w-full">
                <div className="flex flex-row gap-1">

                    <span><strong>{post.user.userFullName}</strong></span>
                    <span className="text-gray-500/60">@{post.user.userName}</span>
                </div>
                <div className="text-white justify-left text-justify mb-5">
                    {post.content}
                </div>
                <div id="controls" className="flex flex-row justify-around text-[#EAECEB] [&>button]:hover:cursor-pointer">
                    <button
                        title="comentar"
                        type="button"
                        className="hover:text-blue-400 hover:bg-sky-300/20 rounded-full p-1 hover:transition-normal hover:duration-400"><MensajeIcon className="size-5" /></button>
                    <button
                        title="compartir"
                        type="button"
                        className="hover:bg-lime-400/20 hover:text-lime-500 hover:duration-400
                    rounded-full p-1 hover:transition-normal"><CompartirIcon className="size-5" /></button>
                    <button
                        title="me gusta"
                        type="button"
                        className="hover:text-red-400 hover:bg-red-600/20 rounded-full p-1 hover:duration-300"><MeGustaIcon className="size-5" /></button>
                    <button
                        title="guardar"
                        type="button"
                        className="hover:text-blue-400 hover:bg-sky-300/20 rounded-full p-1 hover:transition-normal hover:duration-400"><GuardarIcon className="size-5" /></button>
                </div>
            </div>

        </div>
    )
}