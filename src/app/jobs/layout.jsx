import Categories from "../components/Categories";
import jobs from "../data/jobs";

export default function JobLayout({children}) {
  return (
    <div>
        <Categories jobs={jobs}/>
        {children}
    </div>
  )
}