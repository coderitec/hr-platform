import jobs from "@/app/data/jobs"

export default function JobCategories({params}) {
    const filteredJobs = jobs.filter(job => job.category === params.cat.replace(/-/,' '))
  return (
    <div className="grid md:grid-cols-3 grid-cols-1 gap-4 md:px-16">
        {
            filteredJobs.map((job) => (
                <section key={job.id} className="border-4 shadow-2xl border-slate-800 rounded-md">
                    <h2>{job.title}</h2>
                    <p>{job.company}</p>
                </section>
            ))
        }
    </div>
  )
}