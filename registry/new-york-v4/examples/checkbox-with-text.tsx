"use client"

import { Checkbox } from "@/registry/new-york-v4/ui/checkbox"

export default function CheckboxWithText() {
  return (
    <div className="items-top flex gap-2">
      <Checkbox id="terms1" />
      <div className="grid gap-1.5 leading-none">
        <label
          htmlFor="terms1"
          className="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          利用規約に同意する
        </label>
        <p className="text-sm text-muted-foreground">
          利用規約およびプライバシーポリシーに同意します。
        </p>
      </div>
    </div>
  )
}
