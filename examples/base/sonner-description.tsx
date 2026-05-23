"use client"

import { toast } from "@/registry/ui/sonner"

import { Button } from "@/styles/base/ui/button"

export function SonnerDescription() {
  return (
    <Button
      onClick={() =>
        toast("Event has been created", {
          description: "Monday, January 3rd at 6:00pm",
        })
      }
      variant="outline"
      className="w-fit"
    >
      Show Toast
    </Button>
  )
}
