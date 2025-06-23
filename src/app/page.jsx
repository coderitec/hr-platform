import Header from "./components/Header";
import franc  from './components/home.module.css';
import JobCategory from "./components/JobCategory";

export default function Home() {
  return (
    <>
    <div className={franc.back}>
      <Header />
    </div>
    <JobCategory />
    </>
  )
}