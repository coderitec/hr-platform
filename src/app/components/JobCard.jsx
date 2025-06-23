import jobs from "../data/jobs"
import { MdHomeWork } from "react-icons/md";


export default function JobCard(props) {
    const jobList = jobs.map((job) => (
        <article key={job.id} className="job-card">
            <p className="flex items-center justify-center space-x-2 text-slate-50 bg-slate-950 w-fit p-2">
                <MdHomeWork className="text-2xl ml-2" />
                <span>{job.company}</span>
            </p>
            <div className="flex flex-col items-center justify-center text-lg capitalize p-4">
                <h2 className="text-2xl font-semibold">{job.title}</h2>
                <p>{job.category}</p>
                <p>{job.location}</p>
            </div>
        </article>
    ))
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[...jobList].sort(()=>0.5-Math.random()).slice(0,props.val)}
    </div>
  )
}