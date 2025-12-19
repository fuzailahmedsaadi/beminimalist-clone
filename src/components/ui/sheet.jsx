import * as React from "react"
import * as Dialog from "@radix-ui/react-dialog"
import { cn } from "@/lib/utils"

const Sheet = Dialog.Root
const SheetTrigger = Dialog.Trigger
const SheetClose = Dialog.Close
const SheetPortal = Dialog.Portal

const SheetOverlay = React.forwardRef(({ className, ...props }, ref) => (
  <Dialog.Overlay
    ref={ref}
    className={cn(
      "fixed inset-0 z-50 bg-black/40 backdrop-blur-sm transition-opacity",
      className
    )}
    {...props}
  />
))
SheetOverlay.displayName = Dialog.Overlay.displayName

const SheetContent = React.forwardRef(
  ({ side = "right", className, children, ...props }, ref) => (
    <SheetPortal>
      <SheetOverlay />
      <Dialog.Content
        ref={ref}
        className={cn(
          "fixed z-50 h-full w-72 bg-white p-6 shadow-lg transition-transform",
          side === "right" && "right-0 top-0",
          className
        )}
        {...props}
      >
        {children}
      </Dialog.Content>
    </SheetPortal>
  )
)

SheetContent.displayName = Dialog.Content.displayName

export {
  Sheet,
  SheetTrigger,
  SheetClose,
  SheetContent,
}
