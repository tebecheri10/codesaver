import { ReactNode } from "react"
import Link from "next/link"

interface HeaderProps {
    children: ReactNode
}

const Header = ({ children }:HeaderProps) => {
  return (
    <>
    <header className="w-full h-14 bg-slate-300 flex items-center justify-start px-5">
        <Link href="/" className="text-xl font-bold text-black">
            <h3>Code Saver</h3>
        </Link>
    </header>
        {children}
    </>
  )
}

export default Header