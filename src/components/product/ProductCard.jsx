import { Button } from "@/components/ui/button"

export default function ProductCard({ product }) {
  return (
    <div
      className="
        group
        flex
        flex-col
        rounded-lg
        border
        border-neutral-200
        bg-white
        p-4
        transition
        hover:shadow-md
      "
    >
      {/* Product Image */}
      <div
        className="
          aspect-square
          w-full
          overflow-hidden
          rounded-md
          bg-neutral-100
        "
      >
        <div className="flex h-full items-center justify-center text-xs text-neutral-400">
          PRODUCT IMAGE
        </div>
      </div>

      {/* Product Info */}
      <div className="mt-4 flex-1 space-y-1">
        <h3 className="text-sm font-medium text-neutral-900 line-clamp-2">
          {product.name}
        </h3>
        <p className="text-sm text-neutral-600">
          ₹{product.price}
        </p>
      </div>

      {/* CTA */}
      <Button
        variant="outline"
        className="
          mt-4
          w-full
          text-sm
          transition
          group-hover:bg-black
          group-hover:text-white
        "
      >
        View Product
      </Button>
    </div>
  )
}
