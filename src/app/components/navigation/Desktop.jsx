
import NavData from "./NavData";

export default function Desktop() {
  return (
    <ul className="md:flex space-x-4 md:flex-row hidden justify-around items-center text-slate-50 bg-slate-950 h-32 font-semibold text-2xl capitalize">
       <NavData />
    </ul>
  )
}