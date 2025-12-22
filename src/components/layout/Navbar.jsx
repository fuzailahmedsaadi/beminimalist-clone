import {
  Search,
  ShoppingCart,
  User,
  Menu,
  Star,
} from "lucide-react"

import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetClose,
} from "@/components/ui/sheet"

const navLinks = [
  "Shop",
  "Best Sellers",
  "Skin & Body Care",
  "Baby Care",
  "Hair Care",
  "AI Assistants",
  "Track Order",
]

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-200 bg-white">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-6">

        {/* LOGO */}
        <div className="text-xl font-bold tracking-tight">
          Minimalist
        </div>

        {/* DESKTOP NAV LINKS */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="
                relative
                text-sm
                font-medium
                text-neutral-800
                after:absolute
                after:left-0
                after:-bottom-1
                after:h-0.5
                after:w-0
                after:bg-black
                after:transition-all
                after:duration-300
                hover:after:w-full
              "
            >
              {link}
            </a>
          ))}
        </nav>

        {/* DESKTOP ICONS */}
        <div className="hidden lg:flex items-center gap-5">
          <Star className="h-5 w-5 cursor-pointer text-neutral-800 hover:text-black" />
          <Search className="h-5 w-5 cursor-pointer text-neutral-800 hover:text-black" />
          <User className="h-5 w-5 cursor-pointer text-neutral-800 hover:text-black" />

          {/* CART WITH BADGE */}
          <div className="relative cursor-pointer">
            <ShoppingCart className="h-5 w-5 text-neutral-800 hover:text-black" />
            <span className="absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-black text-[10px] text-white">
              0
            </span>
          </div>
        </div>

        {/* MOBILE MENU */}
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <button aria-label="Open Menu">
                <Menu className="h-6 w-6 text-neutral-900" />
              </button>
            </SheetTrigger>

            <SheetContent side="right">
              <div className="mt-8 flex flex-col gap-6 text-base font-medium text-neutral-900">
                {navLinks.map((link) => (
                  <SheetClose asChild key={link}>
                    <a
                      href="#"
                      className="hover:opacity-70 transition"
                    >
                      {link}
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




