import {
  NativeSelect,
  NativeSelectOption,
} from "@/registry/new-york-v4/ui/native-select"

export default function NativeSelectInvalid() {
  return (
    <NativeSelect aria-invalid="true">
      <NativeSelectOption value="">ロールを選択</NativeSelectOption>
      <NativeSelectOption value="admin">管理者</NativeSelectOption>
      <NativeSelectOption value="editor">編集者</NativeSelectOption>
      <NativeSelectOption value="viewer">閲覧者</NativeSelectOption>
      <NativeSelectOption value="guest">ゲスト</NativeSelectOption>
    </NativeSelect>
  )
}
