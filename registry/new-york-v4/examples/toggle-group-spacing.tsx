import { BookmarkIcon, HeartIcon, StarIcon } from "lucide-react"

import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/registry/new-york-v4/ui/toggle-group"

export default function ToggleGroupSpacing() {
  return (
    <ToggleGroup type="multiple" variant="outline" spacing={2} size="sm">
      <ToggleGroupItem
        value="star"
        aria-label="スターをトグル"
        className="data-[state=on]:bg-transparent data-[state=on]:*:[svg]:fill-yellow-500 data-[state=on]:*:[svg]:stroke-yellow-500"
      >
        <StarIcon />
        スター
      </ToggleGroupItem>
      <ToggleGroupItem
        value="heart"
        aria-label="ハートをトグル"
        className="data-[state=on]:bg-transparent data-[state=on]:*:[svg]:fill-red-500 data-[state=on]:*:[svg]:stroke-red-500"
      >
        <HeartIcon />
        ハート
      </ToggleGroupItem>
      <ToggleGroupItem
        value="bookmark"
        aria-label="ブックマークをトグル"
        className="data-[state=on]:bg-transparent data-[state=on]:*:[svg]:fill-blue-500 data-[state=on]:*:[svg]:stroke-blue-500"
      >
        <BookmarkIcon />
        ブックマーク
      </ToggleGroupItem>
    </ToggleGroup>
  )
}
