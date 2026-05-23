import { AlertCircleIcon, CheckCircle2Icon, PopcornIcon } from "lucide-react"

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/registry/new-york-v4/ui/alert"

export default function AlertDemo() {
  return (
    <div className="grid w-full max-w-xl items-start gap-4">
      <Alert>
        <CheckCircle2Icon />
        <AlertTitle>変更が保存されました</AlertTitle>
        <AlertDescription>
          アイコン・タイトル・説明付きのアラートです。
        </AlertDescription>
      </Alert>
      <Alert>
        <PopcornIcon />
        <AlertTitle>
          タイトルとアイコンのみのアラートです。説明はありません。
        </AlertTitle>
      </Alert>
      <Alert variant="destructive">
        <AlertCircleIcon />
        <AlertTitle>お支払いを処理できませんでした。</AlertTitle>
        <AlertDescription>
          <p>請求情報を確認して再度お試しください。</p>
          <ul className="list-inside list-disc text-sm">
            <li>カード情報を確認する</li>
            <li>残高が十分かどうか確認する</li>
            <li>請求先住所を確認する</li>
          </ul>
        </AlertDescription>
      </Alert>
    </div>
  )
}
