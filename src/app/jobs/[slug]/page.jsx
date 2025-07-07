
import SaveButton from "@/app/components/SaveButton";
import jobs from "@/app/data/jobs";
import Image from "next/image";
import Link from "next/link";
import { MdOutlineEditNote } from "react-icons/md";

export default async function JobDescription({params}) {

    const { slug } = await params;

    const jobDetails = jobs.find(job => job.title.toLowerCase().replace(/(,*\s+)/g, '-') === slug);

    const jobsRelated = [...jobs.filter(job => (job.category === jobDetails.category && job.title.toLowerCase().replace(/(,*\s+)/g, '-') !== slug) || (job.location === jobDetails.location && job.title.toLowerCase().replace(/(,*\s+)/g, '-') !== slug))].sort(() => 0.5 - Math.random());
  return (
    <div className="flex flex-col items-start justify-center p-4 w-4/5 m-auto">
        {/* <span>
            <IoIosArrowBack className="cursor-pointer text-2xl" onClick={() => router.back()} />
            <span className="text-2xl font-semibold ml-2">Back</span>
        </span> */}
        
        <div className="flex justify-between items-center w-full">
        <h1 className="font-bold text-5xl py-4 border-b-8 my-5 space-y-5 border-double border-slate-950">{jobDetails.title}</h1>

        <p className={`text-2xl   text-white px-4 py-2 rounded-lg
            ${Math.ceil((new Date(jobDetails.endDate) - new Date()) / (1000 * 60 * 60 * 24)) < 4 ? 'bg-red-500 animate-pulse' : 'bg-slate-600'}`}>
             {Math.ceil((new Date(jobDetails.endDate) - new Date()) / (1000 * 60 * 60 * 24)) < 0 ? 'Expired' :'Days left:'+ Math.ceil((new Date(jobDetails.endDate) - new Date()) / (1000 * 60 * 60 * 24)) + ' days'}
        </p>
        </div>

        <h2>{jobDetails.company}</h2>
        <h3>{jobDetails.category}</h3>
        <p>{jobDetails.location}</p>

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

        <div className="flex items-center gap-4 my-4">

        <Link href={`/apply/${jobDetails.title.toLowerCase().replace(/(,*\s+)/g, '-')}`}>
        <input type="button" value={Math.ceil((new Date(jobDetails.endDate) - new Date()) / (1000 * 60 * 60 * 24)) < 0 ?  'no longer available' : "apply for this role" }  className="capitalize text-lg bg-slate-950 hover:bg-slate-700 rounded-lg p-4 text-white cursor-pointer" 
        {...Math.ceil((new Date(jobDetails.endDate) - new Date()) / (1000 * 60 * 60 * 24)) < 0 ? {disabled: true} : {}}
        />
        </Link>
        {new Date(jobDetails.endDate) > new Date() &&

            <SaveButton title={jobDetails.title} company={jobDetails.company}/>
        }

        </div>

        <section>
            <h2 className="capitalize text-3xl my-4 font-semibold">related jobs</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

            {
                jobsRelated.map((job) => (
                    <Link key={job.id} href={`/jobs/${job.title.toLowerCase().replace(/(,*\s+)/g, '-')}`} className="block my-4 p-4 bg-slate-100 hover:bg-slate-200  border-4 border-slate-950 rounded-lg">
                        <h3 className="text-xl font-semibold">{job.title}</h3>
                        <p>{job.company}</p>
                        <p>{job.category}</p>
                        <p>{job.location}</p>
                    </Link>
                ))
            }

            </div>

        </section>

    </div>
  )
}
