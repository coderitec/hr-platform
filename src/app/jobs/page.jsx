import Categories from "../components/Categories"
import JobCard from "../components/JobCard"
import jobs from "../data/jobs"

export default function Jobs() {
  return (

    <div>
        <Categories jobs={jobs}/>
        <JobCard val={jobs.length}  />
    </div>
  )
}