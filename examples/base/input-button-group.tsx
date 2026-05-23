import { Button } from "@/styles/base/ui/button"
import { ButtonGroup } from "@/styles/base/ui/button-group"
import { Field, FieldLabel } from "@/styles/base/ui/field"
import { Input } from "@/styles/base/ui/input"

export function InputButtonGroup() {
  return (
    <Field>
      <FieldLabel htmlFor="input-button-group">Search</FieldLabel>
      <ButtonGroup>
        <Input id="input-button-group" placeholder="Type to search..." />
        <Button variant="outline">Search</Button>
      </ButtonGroup>
    </Field>
  )
}
