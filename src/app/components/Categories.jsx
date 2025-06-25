import Link from "next/link";

export default function Categories({jobs}) {

  const categories = [...new Set(jobs.map(job => job.category))];
  console.log(categories);
  return (
    <nav>
      <ul className="flex space-x-4 flex-col md:flex-row justify-around items-center bg-gray-100 p-4 text-lg">
        {categories.map((category, index) => (
          <li key={index} className="p-2 hover:bg-gray-200 hover:text-xl transition-all duration-300">
            <Link href={`/jobs?category=${category}`}>
              {category}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}