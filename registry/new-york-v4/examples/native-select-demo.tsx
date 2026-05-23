import {
  NativeSelect,
  NativeSelectOption,
} from "@/registry/new-york-v4/ui/native-select"

export default function NativeSelectDemo() {
  return (
    <NativeSelect>
      <NativeSelectOption value="">ステータスを選択</NativeSelectOption>
      <NativeSelectOption value="todo">未対応</NativeSelectOption>
      <NativeSelectOption value="in-progress">進行中</NativeSelectOption>
      <NativeSelectOption value="done">完了</NativeSelectOption>
      <NativeSelectOption value="cancelled">キャンセル</NativeSelectOption>
    </NativeSelect>
  )
}
