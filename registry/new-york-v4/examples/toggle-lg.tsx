import { Italic } from "lucide-react"

import { Toggle } from "@/registry/new-york-v4/ui/toggle"

export default function ToggleLg() {
  return (
    <Toggle size="lg" aria-label="イタリックをトグル">
      <Italic />
    </Toggle>
  )
}
