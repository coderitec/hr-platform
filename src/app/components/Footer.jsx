export default function Footer() {
  return (
    <footer>
        <div className="flex flex-col items-center justify-center bg-slate-950 py-4">
            <p className="text-slate-100 text-sm">
            &copy; {new Date().getFullYear()} HR Platform. All rights reserved.
            </p>
            <p className="text-slate-100 text-xs">
            Made  by Coderite
            </p>
        </div>
    </footer>
  )
}