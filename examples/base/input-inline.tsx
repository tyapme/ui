import { Button } from "@/styles/base/ui/button"
import { Field } from "@/styles/base/ui/field"
import { Input } from "@/styles/base/ui/input"

export function InputInline() {
  return (
    <Field orientation="horizontal">
      <Input type="search" placeholder="Search..." />
      <Button>Search</Button>
    </Field>
  )
}
