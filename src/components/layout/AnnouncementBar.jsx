import { ChevronLeft, ChevronRight } from "lucide-react"

export default function AnnouncementBar() {
  return (
    <div className="w-full bg-orange-500 text-white">
      <div className="mx-auto flex h-10 max-w-7xl items-center justify-between px-4 text-sm">

        <ChevronLeft className="h-4 w-4 cursor-pointer" />

        <p className="text-center font-medium">
          Shop for ₹899 and get a free Glass Bottle!
        </p>

        <ChevronRight className="h-4 w-4 cursor-pointer" />

      </div>
    </div>
  )
}
