import {
  NativeSelect,
  NativeSelectOption,
} from "@/registry/new-york-v4/ui/native-select"

export default function NativeSelectDisabled() {
  return (
    <NativeSelect disabled>
      <NativeSelectOption value="">優先度を選択</NativeSelectOption>
      <NativeSelectOption value="low">低</NativeSelectOption>
      <NativeSelectOption value="medium">中</NativeSelectOption>
      <NativeSelectOption value="high">高</NativeSelectOption>
      <NativeSelectOption value="critical">緊急</NativeSelectOption>
    </NativeSelect>
  )
}
