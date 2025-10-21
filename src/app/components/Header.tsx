import Link from 'next/link'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full py-4 border-b bg-white/70 backdrop-blur-md z-50">
      <nav className="container mx-auto flex justify-between items-center">
        <Link
          href="/"
          className="font-bold text-2xl tracking-wider text-gray-800"
        >
          JAEHUN
        </Link>

        <div className="text-1.5xl hidden md:flex items-center space-x-8 text-gray-600 font-bold">
          <Link href="/about" className="hover:text-blue-600">
            About
          </Link>
          <Link href="/projects" className="hover:text-blue-600">
            Projects
          </Link>
          <Link href="/team" className="hover:text-blue-600">
            Team
          </Link>
        </div>
      </nav>
    </header>
  )
}
