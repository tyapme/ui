import {
  Calculator,
  Calendar,
  CreditCard,
  Settings,
  Smile,
  User,
} from "lucide-react"

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/registry/new-york-v4/ui/command"

export default function CommandDemo() {
  return (
    <Command className="rounded-lg border shadow-md md:min-w-[450px]">
      <CommandInput placeholder="コマンドを入力または検索..." />
      <CommandList>
        <CommandEmpty>該当なし。</CommandEmpty>
        <CommandGroup heading="ていあん">
          <CommandItem>
            <Calendar />
            <span>カレンダー</span>
          </CommandItem>
          <CommandItem>
            <Smile />
            <span>絵文字検索</span>
          </CommandItem>
          <CommandItem disabled>
            <Calculator />
            <span>電卓</span>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="設定">
          <CommandItem>
            <User />
            <span>プロフィール</span>
            <CommandShortcut>⌘P</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <CreditCard />
            <span>請求管理</span>
            <CommandShortcut>⌘B</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <Settings />
            <span>設定</span>
            <CommandShortcut>⌘S</CommandShortcut>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  )
}
