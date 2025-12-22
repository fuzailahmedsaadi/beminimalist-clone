const categories = [
  "Skin Care",
  "Hair Care",
  "Body Care",
  "Baby Care",
]

export default function Categories() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-20">

        {/* Heading */}
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-semibold sm:text-3xl">
            Shop by Category
          </h2>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {categories.map((cat) => (
            <div
              key={cat}
              className="
                flex
                h-40
                cursor-pointer
                items-center
                justify-center
                rounded-lg
                bg-neutral-100
                text-sm
                font-medium
                transition
                hover:bg-neutral-200
              "
            >
              {cat}
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
