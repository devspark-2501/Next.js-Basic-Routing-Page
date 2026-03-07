'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function NavBar() {
    const pathname = usePathname()

    const linkStyle = (path) =>
    pathname === path
      ? "bg-gray-900 text-white px-4 py-2 rounded-full text-xl opacity-60"
      : "hover:bg-gray-900 rounded-4xl px-3 py-2 text-xl hover:opacity-30"
    
      return (
        <nav className="w-full bg-gray-950 text-white shadow-md">
            <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
                <Link href='/'>
                    <h1 className="text-4xl font-bold tracking-wide text-blue-400 pt-2 cursor-pointer">
                        DevSpark
                    </h1>
                </Link>

                <ul className="flex gap-8 text-lg font-medium">
                    <Link href='/' className={linkStyle('/')}>Home</Link>

                    <Link href='/About' className={linkStyle('/About')}>About</Link>
                    
                    <Link href='/Contact' className={linkStyle('/Contact')}>Contact</Link>
                    
                    <Link href='/Projects' className={linkStyle('/Projects')}>Projects</Link>
                </ul>

            </div>
        </nav>
    )
}