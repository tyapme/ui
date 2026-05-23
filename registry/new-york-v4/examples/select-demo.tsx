import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/registry/new-york-v4/ui/select"

export default function SelectDemo() {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="果物を選択" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>果物</SelectLabel>
          <SelectItem value="apple">リンゴ</SelectItem>
          <SelectItem value="banana">バナナ</SelectItem>
          <SelectItem value="blueberry">ブルーベリー</SelectItem>
          <SelectItem value="grapes">ブドウ</SelectItem>
          <SelectItem value="pineapple">パイナップル</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
