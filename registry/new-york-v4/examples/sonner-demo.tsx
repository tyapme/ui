"use client"

import { toast } from "sonner"

import { Button } from "@/registry/new-york-v4/ui/button"

export default function SonnerDemo() {
  return (
    <Button
      variant="outline"
      onClick={() =>
        toast("イベントが作成されました", {
          description: "2023年12月3日 （日） 告9:00",
          action: {
            label: "元に戻す",
            onClick: () => console.log("Undo"),
          },
        })
      }
    >
      トーストを表示
    </Button>
  )
}
