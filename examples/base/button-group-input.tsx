import { SearchIcon } from "lucide-react"

import { Button } from "@/styles/base/ui/button"
import { ButtonGroup } from "@/styles/base/ui/button-group"
import { Input } from "@/styles/base/ui/input"

export default function ButtonGroupInput() {
  return (
    <ButtonGroup>
      <Input placeholder="Search..." />
      <Button variant="outline" aria-label="Search">
        <SearchIcon />
      </Button>
    </ButtonGroup>
  )
}
