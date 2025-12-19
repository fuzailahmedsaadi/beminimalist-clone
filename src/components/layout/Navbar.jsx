import { Search, ShoppingBag, User, Menu } from "lucide-react"

import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetClose,
} from "@/components/ui/sheet"

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

        {/* Logo */}
        <div className="text-base font-semibold tracking-wide">
          Be Minimalist
        </div>

        {/* Desktop Navigation */}
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

        {/* Desktop Icons */}
        <div className="hidden md:flex items-center gap-5">
          <Search className="h-5 w-5 cursor-pointer text-neutral-700 hover:text-black transition" />
          <User className="h-5 w-5 cursor-pointer text-neutral-700 hover:text-black transition" />
          <ShoppingBag className="h-5 w-5 cursor-pointer text-neutral-700 hover:text-black transition" />
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <button aria-label="Open Menu">
                <Menu className="h-6 w-6 text-neutral-800" />
              </button>
            </SheetTrigger>

            <SheetContent side="right">
              <div className="flex flex-col gap-6 mt-8 text-base font-medium text-neutral-900">
                {navLinks.map((link) => (
                  <SheetClose asChild key={link.name}>
                    <a
                      href={link.href}
                      className="hover:opacity-70 transition"
                    >
                      {link.name}
                    </a>
                  </SheetClose>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>

      </div>
    </header>
  )
}


