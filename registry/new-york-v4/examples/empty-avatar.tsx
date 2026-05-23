import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/new-york-v4/ui/avatar"
import { Button } from "@/registry/new-york-v4/ui/button"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/registry/new-york-v4/ui/empty"

export default function EmptyAvatar() {
  return (
    <Empty>
      <EmptyHeader>
        <EmptyMedia variant="default">
          <Avatar className="size-12">
            <AvatarImage
              src="https://github.com/shadcn.png"
              className="grayscale"
            />
            <AvatarFallback>LR</AvatarFallback>
          </Avatar>
        </EmptyMedia>
        <EmptyTitle>ユーザーがオフライン</EmptyTitle>
        <EmptyDescription>
          このユーザーは現在オフラインです。メッセージを残すか、後で再度お試しください。
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button size="sm">メッセージを残す</Button>
      </EmptyContent>
    </Empty>
  )
}
