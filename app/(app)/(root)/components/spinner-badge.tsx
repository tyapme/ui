import { Badge } from "@/styles/base/ui/badge"
import { Spinner } from "@/styles/base/ui/spinner"

export function SpinnerBadge() {
  return (
    <div className="flex items-center gap-2">
      <Badge>
        <Spinner className="size-3" />
        同期中
      </Badge>
      <Badge variant="secondary">
        <Spinner className="size-3" />
        更新中
      </Badge>
      <Badge variant="outline">
        <Spinner className="size-3" />
        読み込み中
      </Badge>
    </div>
  )
}
