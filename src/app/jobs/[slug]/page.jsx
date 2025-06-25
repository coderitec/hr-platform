import jobs from "@/app/data/jobs";
import Image from "next/image";
import { MdOutlineEditNote } from "react-icons/md";


export default async function JobDescription({params}) {

    const { slug } = await params;

    const jobDetails = jobs.find(job => job.title.toLowerCase().replace(/(,*\s+)/g, '-') === slug);
  return (
    <div className="flex flex-col items-start justify-center p-4 w-4/5 m-auto">
        
        <div className="flex justify-between items-center w-full">
        <h1 className="font-bold text-5xl py-4 border-b-8 my-5 space-y-5 border-double border-slate-950">{jobDetails.title}</h1>

        <p className={`text-2xl font-semibold  text-white px-4 py-2 rounded-lg
            ${Math.ceil((new Date(jobDetails.endDate) - new Date()) / (1000 * 60 * 60 * 24)) < 4 ? 'bg-red-500 animate-pulse' : 'bg-slate-600'}`}>
            Dates left: {Math.ceil((new Date(jobDetails.endDate) - new Date()) / (1000 * 60 * 60 * 24))} days
        </p>
        </div>

        <h2>{jobDetails.company}</h2>
        <h3>{jobDetails.category}</h3>

        <p>Closing date: {new Date(jobDetails.endDate).toLocaleDateString('en-US',{
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        })}</p>
        <Image src={`/${jobDetails.id == 1 ? jobDetails.id : 'hire'}.jpg`} alt={jobDetails.title} width={500} height={300} />

        <section>
            <h2 className="capitalize text-3xl my-4 font-semibold">job description</h2>
            {
                jobDetails.description.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="my-4 text-lg-2">
                        {paragraph}
                    </p>
                ))
            }
       
        </section>

        <section>
            <h2 className="capitalize text-3xl my-4 font-semibold">requirements</h2>
            <ul>
            {
                jobDetails.requirements.map((requirement, index) => (
                    <li key={index} className="my-4 text-lg flex items-center gap">
                        <MdOutlineEditNote />
                        <span>{requirement}</span>
                    </li>
                ))
            }
            </ul>
        </section>

        <button className="">apply for this role</button>

    </div>
  )
}
