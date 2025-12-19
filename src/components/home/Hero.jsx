import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="w-full bg-white">
      <div
        className="
          mx-auto 
          max-w-7xl 
          px-4 sm:px-6 
          py-16 sm:py-20 md:py-28 
          text-center
        "
      >
        {/* Headline */}
        <h1
          className="
            mx-auto 
            max-w-4xl
            text-2xl 
            font-semibold 
            tracking-tight 
            text-neutral-900
            sm:text-3xl
            md:text-4xl
            lg:text-5xl
            leading-snug
          "
        >
          Science-backed skincare
          <span className="block">made simple</span>
        </h1>

        {/* Description */}
        <p
          className="
            mx-auto 
            mt-4 sm:mt-6
            max-w-md sm:max-w-xl
            text-sm 
            text-neutral-600
            sm:text-base
            md:text-lg
          "
        >
          High-performance formulations with transparent ingredients,
          clinically studied actives, and no unnecessary additives.
        </p>

        {/* CTA Buttons */}
        <div
          className="
            mt-8 sm:mt-10
            flex 
            flex-col 
            gap-3
            sm:flex-row 
            sm:justify-center
          "
        >
          <Button className="px-8 py-6 text-sm sm:text-base">
            Shop Products
          </Button>

          <Button
            variant="outline"
            className="px-8 py-6 text-sm sm:text-base"
          >
            Take Skin Quiz
          </Button>
        </div>
      </div>
    </section>
  )
}

