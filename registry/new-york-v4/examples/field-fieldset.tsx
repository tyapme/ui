import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/registry/new-york-v4/ui/field"
import { Input } from "@/registry/new-york-v4/ui/input"

export default function FieldFieldset() {
  return (
    <div className="w-full max-w-md space-y-6">
      <FieldSet>
        <FieldLegend>住所情報</FieldLegend>
        <FieldDescription>
          お届けのためにご住所が必要です。
        </FieldDescription>
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="street">番地</FieldLabel>
            <Input id="street" type="text" placeholder="東京都渋谷区渋谷1–1" />
          </Field>
          <div className="grid grid-cols-2 gap-4">
            <Field>
              <FieldLabel htmlFor="city">市区町村</FieldLabel>
              <Input id="city" type="text" placeholder="渋谷区" />
            </Field>
            <Field>
              <FieldLabel htmlFor="zip">郵便番号</FieldLabel>
              <Input id="zip" type="text" placeholder="150-0001" />
            </Field>
          </div>
        </FieldGroup>
      </FieldSet>
    </div>
  )
}
