import Image from 'next/image';
import Link from 'next/link';

export default function NavData() {
  return (
    <>
         <li>
            <Link href="/">
                <Image src="/logo.jpg" alt="logo" width={50} height={50} className="rounded-full" />
            </Link>
        </li>
        <li>
            <Link href="/about">about</Link>
        </li>
        <li>    
            <Link href="/jobs">jobs</Link>
        </li>
        <li>
            <Link href="/contact">contact</Link>
        </li>
        <li>
            <Link href="/sign-up">sign up</Link>
        </li>
        <li>
            <Link href="/dashboard">dashboard</Link>
        </li>
    </>
    
  )
}