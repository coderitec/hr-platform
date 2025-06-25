"use client"
import { useRouter } from "next/navigation"

export default function Button({title}) {
    const router = useRouter()

    const handleClick = () => {
        router.push(`/jobs/${title.toLowerCase().replace(/(,*\s+)/g, '-')}`)
    }
  return (
    <button className="bg-slate-950 text-white px-4 py-2 rounded-md hover:bg-slate-700 transition duration-300 capitalize cursor-pointer"
    onClick={handleClick}>
        read more
    </button>
  )
}