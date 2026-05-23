import { Kbd, KbdGroup } from "@/registry/new-york-v4/ui/kbd"

export default function KbdGroupExample() {
  return (
    <div className="flex flex-col items-center gap-4">
      <p className="text-sm text-muted-foreground">
        コマンドパレットを開くには{" "}
        <KbdGroup>
          <Kbd>Ctrl + B</Kbd>
          <Kbd>Ctrl + K</Kbd>
        </KbdGroup>{" "}
        を使用してください
      </p>
    </div>
  )
}
