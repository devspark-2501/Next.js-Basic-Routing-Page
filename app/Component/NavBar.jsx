import Link from "next/link"

export default function NavBar() {
    return (
        <nav className="w-full bg-gray-950 text-white shadow-md">
            <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
                
                <h1 className="text-2xl font-bold tracking-wide text-blue-400">
                    DevSpark
                </h1>

                <ul className="flex gap-8 text-lg font-medium">
                    <Link href='/' className="hover:bg-gray-900 rounded-4xl px-3 py-2 text-xl hover:opacity-30">Home</Link>

                    <Link href='/About' className="hover:bg-gray-900 rounded-4xl px-3 py-2 text-xl hover:opacity-30">About</Link>
                    
                    <Link href='/Contact' className="hover:bg-gray-900 rounded-4xl px-3 py-2 text-xl hover:opacity-30">Contact</Link>
                    
                    <Link href='/Projects' className="hover:bg-gray-900 rounded-4xl px-3 py-2 text-xl hover:opacity-30">Projects</Link>
                </ul>

            </div>
        </nav>
    )
}