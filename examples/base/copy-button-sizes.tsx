import { CopyButton } from "@/styles/base/ui/copy-button"

export default function CopyButtonSizes() {
  return (
    <div className="flex items-center gap-3">
      <CopyButton value="small" size="sm" />
      <CopyButton value="default" size="default" />
      <CopyButton value="large" size="lg" />
    </div>
  )
}
