import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/registry/new-york-v4/ui/menubar"

export default function MenubarDemo() {
  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>ファイル</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            新しいタブ <MenubarShortcut>⌘T</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            新しいウィンドウ <MenubarShortcut>⌘N</MenubarShortcut>
          </MenubarItem>
          <MenubarItem disabled>シークレットウィンドウ</MenubarItem>
          <MenubarSeparator />
          <MenubarSub>
            <MenubarSubTrigger>共有</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>メールでリンクを送信</MenubarItem>
              <MenubarItem>メッセージ</MenubarItem>
              <MenubarItem>メモ</MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
          <MenubarSeparator />
          <MenubarItem>
            印刷... <MenubarShortcut>⌘P</MenubarShortcut>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>編集</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            元に戻す <MenubarShortcut>⌘Z</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            やり直す <MenubarShortcut>⇧⌘Z</MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarSub>
            <MenubarSubTrigger>検索</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>ウェブで検索</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>検索...</MenubarItem>
              <MenubarItem>次を検索</MenubarItem>
              <MenubarItem>前を検索</MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
          <MenubarSeparator />
          <MenubarItem>切り取り</MenubarItem>
          <MenubarItem>コピー</MenubarItem>
          <MenubarItem>貼り付け</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>表示</MenubarTrigger>
        <MenubarContent>
          <MenubarCheckboxItem>ブックマークバーを常に表示</MenubarCheckboxItem>
          <MenubarCheckboxItem checked>
            完全なURLを常に表示
          </MenubarCheckboxItem>
          <MenubarSeparator />
          <MenubarItem inset>
            再読み込み <MenubarShortcut>⌘R</MenubarShortcut>
          </MenubarItem>
          <MenubarItem disabled inset>
            強制再読み込み <MenubarShortcut>⇧⌘R</MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem inset>フルスクリーン切り替え</MenubarItem>
          <MenubarSeparator />
          <MenubarItem inset>サイドバーを隠す</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>プロフィール</MenubarTrigger>
        <MenubarContent>
          <MenubarRadioGroup value="benoit">
            <MenubarRadioItem value="andy">山田</MenubarRadioItem>
            <MenubarRadioItem value="benoit">田中</MenubarRadioItem>
            <MenubarRadioItem value="Luis">佐藤</MenubarRadioItem>
          </MenubarRadioGroup>
          <MenubarSeparator />
          <MenubarItem inset>編集...</MenubarItem>
          <MenubarSeparator />
          <MenubarItem inset>プロフィールを追加...</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  )
}
