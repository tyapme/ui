import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "@/registry/new-york-v4/ui/field"
import { Input } from "@/registry/new-york-v4/ui/input"

export default function FieldInput() {
  return (
    <div className="w-full max-w-md">
      <FieldSet>
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="username">ユーザー名</FieldLabel>
            <Input id="username" type="text" placeholder="山田太郎" />
            <FieldDescription>
              アカウントのユニークなユーザー名を選んでください。
            </FieldDescription>
          </Field>
          <Field>
            <FieldLabel htmlFor="password">パスワード</FieldLabel>
            <FieldDescription>
              8文字以上で入力してください。
            </FieldDescription>
            <Input id="password" type="password" placeholder="••••••••" />
          </Field>
        </FieldGroup>
      </FieldSet>
    </div>
  )
}
