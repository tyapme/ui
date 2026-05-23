"use client"

import { toast } from "sonner"

import { Button } from "@/registry/new-york-v4/ui/button"

export default function SonnerTypes() {
  return (
    <div className="flex flex-wrap gap-2">
      <Button variant="outline" onClick={() => toast("イベントが登録されました")}>
        Default
      </Button>
      <Button
        variant="outline"
        onClick={() => toast.success("イベントが登録されました")}
      >
        Success
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          toast.info("イベント開始の10分前に現地にお越しください")
        }
      >
        Info
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          toast.warning("イベントの開始時刱80時以前は設定できません")
        }
      >
        Warning
      </Button>
      <Button
        variant="outline"
        onClick={() => toast.error("イベントの登録に失敗しました")}
      >
        Error
      </Button>
      <Button
        variant="outline"
        onClick={() => {
          toast.promise<{ name: string }>(
            () =>
              new Promise((resolve) =>
                setTimeout(() => resolve({ name: "Event" }), 2000)
              ),
            {
              loading: "読み込み中...",
              success: (data) => `${data.name} が登録されました`,
              error: "エラー",
            }
          )
        }}
      >
        Promise
      </Button>
    </div>
  )
}
