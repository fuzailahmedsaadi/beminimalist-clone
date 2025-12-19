import { Search, ShoppingBag, User } from "lucide-react"

const navLinks = [
  { name: "Shop", href: "#" },
  { name: "Science", href: "#" },
  { name: "Skin Care Quiz", href: "#" },
  { name: "About", href: "#" },
]

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-6">

        <div className="text-base font-semibold tracking-wide">
          Be Minimalist
        </div>

        <nav className="hidden md:flex items-center gap-10 text-sm font-medium text-neutral-800">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-5">
          <Search className="h-5 w-5 cursor-pointer text-neutral-700 hover:text-black transition" />
          <User className="h-5 w-5 cursor-pointer text-neutral-700 hover:text-black transition" />
          <ShoppingBag className="h-5 w-5 cursor-pointer text-neutral-700 hover:text-black transition" />
        </div>

      </div>
    </header>
  )
}

