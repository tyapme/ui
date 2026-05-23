import { Checkbox } from "@/styles/base-nova/ui/checkbox"
import { Field, FieldLabel } from "@/styles/base-nova/ui/field"

export function FieldCheckbox() {
  return (
    <FieldLabel htmlFor="checkbox-demo">
      <Field orientation="horizontal">
        <Checkbox id="checkbox-demo" defaultChecked />
        <FieldLabel htmlFor="checkbox-demo" className="line-clamp-1">
          利用規約に同意します
        </FieldLabel>
      </Field>
    </FieldLabel>
  )
}
