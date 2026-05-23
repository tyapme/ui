"use client"

import { useState } from "react"

import {
  Field,
  FieldDescription,
  FieldTitle,
} from "@/styles/base-nova/ui/field"
import { Slider } from "@/styles/base-nova/ui/slider"

export function FieldSlider() {
  const [value, setValue] = useState([200, 800])
  return (
    <div className="w-full max-w-md">
      <Field>
        <FieldTitle>価格帯</FieldTitle>
        <FieldDescription>
          予算の範囲を設定してください（￥
          <span className="font-medium tabular-nums">{value[0]}</span> ～{" "}
          <span className="font-medium tabular-nums">{value[1]}</span>）。
        </FieldDescription>
        <Slider
          value={value}
          onValueChange={(val) => setValue(Array.isArray(val) ? [...val] : [val])}
          max={1000}
          min={0}
          step={10}
          className="mt-2 w-full"
          aria-label="価格帯"
        />
      </Field>
    </div>
  )
}
