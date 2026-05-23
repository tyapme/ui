import { ShieldAlertIcon } from "lucide-react"

import { Button } from "@/registry/new-york-v4/ui/button"
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/registry/new-york-v4/ui/item"

export default function ItemIcon() {
  return (
    <div className="flex w-full max-w-lg flex-col gap-6">
      <Item variant="outline">
        <ItemMedia variant="icon">
          <ShieldAlertIcon />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>セキュリティアラート</ItemTitle>
          <ItemDescription>
            不明なデバイスから新たなログインが検知されました。
          </ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button size="sm" variant="outline">
            確認
          </Button>
        </ItemActions>
      </Item>
    </div>
  )
}
