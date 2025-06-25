export default async function JobApplication({params}) {
    const { id } = await params;
  return (
    <div className="w-4/5 m-auto p-4">
        <h1 className="text-3xl font-bold">Job Application Document </h1>

        <p className="mt-4">Please fill out the application form below:</p>

        <form className="mt-6 space-y-4">
            <div>
                <label className="">Job Title</label>
                <input type="text" className=" focus:border-indigo-500 bg-slate-300 focus:ring-indigo-500" value={id.replaceAll('-',' ').toUpperCase()} disabled required />
            </div>
            <div>
                <label className="">Full Name</label>
                <input type="text" className=" focus:border-indigo-500 focus:ring-indigo-500" required />
            </div>

            <div>
                <label className="">Email Address</label>
                <input type="email" className=" focus:border-indigo-500 focus:ring-indigo-500" required />
            </div>

            <div>
                <label className="">Resume/CV</label>
                <input type="file" className=" focus:border-indigo-500 focus:ring-indigo-500" accept=".pdf,.doc,.docx" required />
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700">Cover Letter</label>
                <textarea className=" focus:border-indigo-500 focus:ring-indigo-500" rows="4" ></textarea>
                <span>
                    <small className="text-gray-500">Please provide a brief cover letter explaining your interest in the position or upload a pdf.</small>
                    <input type="file" className=" focus:border-indigo-500 focus:ring-indigo-500" accept=".pdf,.docx"  />
                </span>
            </div>

            <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">Submit Application</button>
        </form>

    </div>
  )
}