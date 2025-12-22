import ProductCard from "@/components/product/ProductCard"

const products = [
  {
    id: 1,
    name: "Salicylic Acid Cleanser",
    price: 299,
  },
  {
    id: 2,
    name: "Niacinamide 10% Serum",
    price: 599,
  },
  {
    id: 3,
    name: "Vitamin C 10% Serum",
    price: 699,
  },
  {
    id: 4,
    name: "Alpha Arbutin Serum",
    price: 599,
  },
  {
    id: 5,
    name: "AHA 10% + BHA 2% Peeling Solution",
    price: 699,
  },
  {
    id: 6,
    name: "Hyaluronic Acid 2% + B5",
    price: 599,
  },
]

export default function BestSellers() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-20">

        {/* Section Heading */}
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-semibold text-neutral-900 sm:text-3xl">
            Best Sellers
          </h2>
          <p className="mt-2 text-sm text-neutral-600 sm:text-base">
            Our most loved skincare products
          </p>
        </div>

        {/* Product Grid */}
        <div
          className="
            grid
            grid-cols-2
            gap-4
            sm:grid-cols-3
            sm:gap-6
            lg:grid-cols-4
            lg:gap-8
          "
        >
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

      </div>
    </section>
  )
}
