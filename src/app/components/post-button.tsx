
import { useFormStatus } from "react-dom";

export function PostButton() {
    const status = useFormStatus();
    console.log(`Pending es ${status.pending}`)
    return (
        <button 
        type="submit"
        disabled={status.pending}
            className="text-[#000000] rounded-full bg-neutral-50 w-25 h-10 font-bold hover:cursor-pointer hover:bg-neutral-300 duration-300 disabled:bg-neutral-400">
            Postear
        </button>
    )
}