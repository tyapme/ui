import { Button } from "@/styles/base-nova/ui/button"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/styles/base-nova/ui/empty"
import { Spinner } from "@/styles/base-nova/ui/spinner"

export function SpinnerEmpty() {
  return (
    <Empty className="w-full border md:p-6">
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
