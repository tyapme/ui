import { Button } from "@/registry/new-york-v4/ui/button"
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemTitle,
} from "@/registry/new-york-v4/ui/item"

export default function ItemVariant() {
  return (
    <div className="flex flex-col gap-6">
      <Item>
        <ItemContent>
          <ItemTitle>デフォルト</ItemTitle>
          <ItemDescription>
            標準的なスタイル。
          </ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button variant="outline" size="sm">
            開く
          </Button>
        </ItemActions>
      </Item>
      <Item variant="outline">
        <ItemContent>
          <ItemTitle>アウトライン</ItemTitle>
          <ItemDescription>
            明確なボーダーと透明背景のアウトラインスタイル。
          </ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button variant="outline" size="sm">
            開く
          </Button>
        </ItemActions>
      </Item>
      <Item variant="muted">
        <ItemContent>
          <ItemTitle>ミューテッド</ItemTitle>
          <ItemDescription>
            サブコンテンツ向けのシンプルなデザイン。
          </ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button variant="outline" size="sm">
            開く
          </Button>
        </ItemActions>
      </Item>
    </div>
  )
}
