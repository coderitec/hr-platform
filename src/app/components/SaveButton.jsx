"use client"
import { useContext, useState } from "react"
import { SideContext } from "../providers"

export default function SaveButton({title, company}) {

    const { setLikes, updates, setUpdates } = useContext(SideContext)
    const [saves, setSaves] = useState('save')

    const handleSave = () => {
        setSaves('saved')
        setLikes(prev => prev + 1)
        setUpdates([...updates, {name:title, company:company}])
    }

      return (
    <>
            <button className={`capitalize text-lg bg-orange-800 ${saves == 'saved' ? 'bg-orange-700 ': 'hover:bg-slate-700 '} rounded-lg p-4 text-white cursor-pointer`}
            onClick={handleSave}
            >{saves}</button>
    </>
  )
}