import { IconCloud } from "@tabler/icons-react"

import { Button } from "@/registry/new-york-v4/ui/button"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/registry/new-york-v4/ui/empty"

export default function EmptyOutline() {
  return (
    <Empty className="border border-dashed">
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <IconCloud />
        </EmptyMedia>
        <EmptyTitle>クラウドストレージが空です</EmptyTitle>
        <EmptyDescription>
          ファイルをアップロードしてどこでもアクセスできます。
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button variant="outline" size="sm">
          ファイルをアップロード
        </Button>
      </EmptyContent>
    </Empty>
  )
}
