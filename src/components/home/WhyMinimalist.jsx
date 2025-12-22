import { Beaker, ShieldCheck, Microscope } from "lucide-react"

const features = [
  {
    icon: Beaker,
    title: "Science Backed",
    desc: "Formulated with clinically proven actives",
  },
  {
    icon: Microscope,
    title: "Transparency",
    desc: "Full ingredient disclosure with concentrations",
  },
  {
    icon: ShieldCheck,
    title: "Safe & Effective",
    desc: "No unnecessary fragrances or fillers",
  },
]

export default function WhyMinimalist() {
  return (
    <section className="w-full bg-neutral-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-20">

        {/* Heading */}
        <div className="mb-12 text-center">
          <h2 className="text-2xl font-semibold text-neutral-900 sm:text-3xl">
            Why Minimalist?
          </h2>
          <p className="mt-2 text-sm text-neutral-600 sm:text-base">
            Honest, transparent, and science-first skincare
          </p>
        </div>

        {/* Features */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((item) => (
            <div
              key={item.title}
              className="flex flex-col items-center text-center"
            >
              <item.icon className="h-8 w-8 text-neutral-900" />
              <h3 className="mt-4 text-base font-medium">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-neutral-600 max-w-xs">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
