import { Button } from "@/registry/new-york-v4/ui/button"
import { Input } from "@/registry/new-york-v4/ui/input"
import { Label } from "@/registry/new-york-v4/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/registry/new-york-v4/ui/sheet"

export default function SheetDemo() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">開く</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>プロフィールを編集</SheetTitle>
          <SheetDescription>
            ここでプロフィールを変更できます。完了したら「保存」をクリックしてください。
          </SheetDescription>
        </SheetHeader>
        <div className="grid flex-1 auto-rows-min gap-6 px-4">
          <div className="grid gap-3">
            <Label htmlFor="sheet-demo-name">氏名</Label>
            <Input id="sheet-demo-name" defaultValue="田中 太郎" />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="sheet-demo-username">ユーザー名</Label>
            <Input id="sheet-demo-username" defaultValue="@tanaka" />
          </div>
        </div>
        <SheetFooter>
          <Button type="submit">変更を保存</Button>
          <SheetClose asChild>
            <Button variant="outline">閉じる</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
