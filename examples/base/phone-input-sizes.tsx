"use client"

import * as React from "react"

import { PhoneInput } from "@/styles/base/ui/phone-input"

export default function PhoneInputSizes() {
  const [sm, setSm] = React.useState("")
  const [md, setMd] = React.useState("")
  const [lg, setLg] = React.useState("")

  return (
    <div className="flex w-full max-w-xs flex-col gap-4">
      <PhoneInput
        variant="sm"
        placeholder="Small"
        defaultCountry="US"
        value={sm}
        onChange={(v) => setSm(v)}
      />
      <PhoneInput
        placeholder="Default"
        defaultCountry="US"
        value={md}
        onChange={(v) => setMd(v)}
      />
      <PhoneInput
        variant="lg"
        placeholder="Large"
        defaultCountry="US"
        value={lg}
        onChange={(v) => setLg(v)}
      />
    </div>
  )
}
