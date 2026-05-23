import { Badge } from "@/styles/base-nova/ui/badge"
import { Spinner } from "@/styles/base-nova/ui/spinner"

export function SpinnerBadge() {
  return (
    <div className="flex items-center gap-2">
      <Badge>
        <Spinner />
        同期中
      </Badge>
      <Badge variant="secondary">
        <Spinner />
        更新中
      </Badge>
      <Badge variant="outline">
        <Spinner />
        読み込み中
      </Badge>
    </div>
  )
}
