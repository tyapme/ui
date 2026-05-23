import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
} from "@/registry/new-york-v4/ui/field"
import { Switch } from "@/registry/new-york-v4/ui/switch"

export default function FieldSwitch() {
  return (
    <div className="w-full max-w-md">
      <Field orientation="horizontal">
        <FieldContent>
          <FieldLabel htmlFor="2fa">多要素認証</FieldLabel>
          <FieldDescription>
            多要素認証を有効にします。二要素認証デバイスがない場合、メールに送信されるワンタイムコードを使用できます。
          </FieldDescription>
        </FieldContent>
        <Switch id="2fa" />
      </Field>
    </div>
  )
}
