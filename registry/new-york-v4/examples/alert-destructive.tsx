import { AlertCircleIcon } from "lucide-react"

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/registry/new-york-v4/ui/alert"

export default function AlertDestructive() {
  return (
    <Alert variant="destructive">
      <AlertCircleIcon />
      <AlertTitle>エラー</AlertTitle>
      <AlertDescription>
        セッションが切れました。再度ログインしてください。
      </AlertDescription>
    </Alert>
  )
}
