import { Button } from "@/registry/new-york-v4/ui/button"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/registry/new-york-v4/ui/empty"
import { Spinner } from "@/registry/new-york-v4/ui/spinner"

export default function SpinnerEmpty() {
  return (
    <Empty className="w-full">
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <Spinner />
        </EmptyMedia>
        <EmptyTitle>リクエストを処理中</EmptyTitle>
        <EmptyDescription>
          処理が完了するまでお待ちください。ページを更新しないでください。
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button variant="outline" size="sm">
          キャンセル
        </Button>
      </EmptyContent>
    </Empty>
  )
}
