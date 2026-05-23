import {
  IconBookmark,
  IconHeart,
  IconInbox,
  IconStar,
} from "@tabler/icons-react"

import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/registry/new-york-v4/ui/empty"

export default function EmptyIcon() {
  return (
    <div className="grid gap-8 md:grid-cols-2">
      <Empty>
        <EmptyHeader>
          <EmptyMedia variant="icon">
            <IconInbox />
          </EmptyMedia>
          <EmptyTitle>メッセージなし</EmptyTitle>
          <EmptyDescription>
            受信トレイは空です。新しいメッセージはここに表示されます。
          </EmptyDescription>
        </EmptyHeader>
      </Empty>

      <Empty>
        <EmptyHeader>
          <EmptyMedia variant="icon">
            <IconStar />
          </EmptyMedia>
          <EmptyTitle>お気に入りなし</EmptyTitle>
          <EmptyDescription>
            お気に入りに登録したアイテムはここに表示されます。
          </EmptyDescription>
        </EmptyHeader>
      </Empty>

      <Empty>
        <EmptyHeader>
          <EmptyMedia variant="icon">
            <IconHeart />
          </EmptyMedia>
          <EmptyTitle>まだイイネなし</EmptyTitle>
          <EmptyDescription>
            イイネしたコンテンツはここに保存されます。
          </EmptyDescription>
        </EmptyHeader>
      </Empty>

      <Empty>
        <EmptyHeader>
          <EmptyMedia variant="icon">
            <IconBookmark />
          </EmptyMedia>
          <EmptyTitle>ブックマークなし</EmptyTitle>
          <EmptyDescription>
            ブックマークすることでコンテンツを保存できます。
          </EmptyDescription>
        </EmptyHeader>
      </Empty>
    </div>
  )
}
