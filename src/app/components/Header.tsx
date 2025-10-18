import Link from 'next/link'

export default function Header() {
  return (
    <header className="py-4 border-b bg-white/70 backdrop-blur-md sticky top-0">
      <nav className="container mx-auto flex justify-between items-center">
        <Link
          href="/"
          className="font-bold text-2xl tracking-wider text-gray-800"
        >
          JAEHUN
        </Link>

        <div className="hidden md:flex items-center space-x-8 text-gray-600 font-medium">
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
