import { BadgeCheckIcon, ChevronRightIcon } from "lucide-react"

import { Button } from "@/styles/base-nova/ui/button"
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/styles/base-nova/ui/item"

export function ItemDemo() {
  return (
    <div className="flex w-full max-w-md flex-col gap-6">
      <Item variant="outline">
        <ItemContent>
          <ItemTitle>二要素認証</ItemTitle>
          <ItemDescription className="text-pretty xl:hidden 2xl:block">
            メールまたは電話番号で認証します。
          </ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button size="sm">有効にする</Button>
        </ItemActions>
      </Item>
      <Item variant="outline" size="sm" render={<a href="#" title="プロフィールが認証されました。" />}>
          <ItemMedia>
            <BadgeCheckIcon className="size-5" />
          </ItemMedia>
          <ItemContent>
            <ItemTitle>プロフィールが認証されました。</ItemTitle>
          </ItemContent>
          <ItemActions>
            <ChevronRightIcon className="size-4" />
          </ItemActions>
      </Item>
    </div>
  )
}
