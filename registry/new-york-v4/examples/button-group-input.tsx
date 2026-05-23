import { SearchIcon } from "lucide-react"

import { Button } from "@/registry/new-york-v4/ui/button"
import { ButtonGroup } from "@/registry/new-york-v4/ui/button-group"
import { Input } from "@/registry/new-york-v4/ui/input"

export default function ButtonGroupInput() {
  return (
    <ButtonGroup>
      <Input placeholder="検索..." />
      <Button variant="outline" aria-label="検索">
        <SearchIcon />
      </Button>
    </ButtonGroup>
  )
}
