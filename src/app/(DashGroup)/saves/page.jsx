"use client";

import { SideContext } from "@/app/providers"
import { useRouter } from "next/navigation";
import { useContext } from "react"

export default function Saves() {

    const router = useRouter()

    const {updates, setUpdates, removed, setRemoved, setLikes} = useContext(SideContext)

    const handleRemove = (index) => {
        const updatedList = updates.filter((_, data) => data !== index);
        setRemoved([...removed, updates[index]]);
        setLikes(prev => prev - 1);
        setUpdates(updatedList);
    }
  return (
    <div className="p-16">
        <h1 className="font-semibold uppercase text-2xl text-right">total saves: {updates.length}</h1>

        {
        updates.length === 0 ? (
            <div className="flex items-center justify-center h-64">
                <p className="text-gray-500">No saved updates yet.</p>
            </div>
        ) : 

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
            {updates.map((update, index) => (
                <div key={index} className="px-4 py-16 border-4 border-slate-700 rounded-2xl text-center">
                    <h2 className="text-xl font-bold">{update.name}</h2>
                    <p className="text-gray-600">{update.company}</p>

                    <div className="flex items-center justify-center mt-4">
                        <button className="ml-4 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-700 transition duration-300 cursor-pointer"
                        onClick={() => router.push(`/jobs/${update.name.toLowerCase().replace(/(,*\s+)/g, '-')}`)}>
                            read more
                        </button>
                        <button className="ml-4 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-700 transition duration-300 cursor-pointer" 
                        onClick={() => handleRemove(index)}>
                            remove

                        </button>
                    </div>
                </div>
            ))}
        </div>
        }
    </div>
  )
}