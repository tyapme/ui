"use client"

import * as React from "react"

import { PhoneInput } from "@/styles/base/ui/phone-input"

export default function PhoneInputDemo() {
  const [value, setValue] = React.useState("")

  return (
    <div className="w-full max-w-xs">
      <PhoneInput
        placeholder="Enter phone number"
        defaultCountry="US"
        value={value}
        onChange={(v) => setValue(v)}
      />
    </div>
  )
}
