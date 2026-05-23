import {
  NumberField,
  NumberFieldDecrement,
  NumberFieldGroup,
  NumberFieldIncrement,
  NumberFieldInput,
  NumberFieldScrubArea,
} from "@/styles/base-nova/ui/number-field"

export function NumberField2() {
  return (
    <div className="flex w-full max-w-48 flex-col gap-4">
      <NumberField defaultValue={5} min={0} max={100} size="sm">
        <NumberFieldScrubArea label="Small" />
        <NumberFieldGroup>
          <NumberFieldDecrement />
          <NumberFieldInput />
          <NumberFieldIncrement />
        </NumberFieldGroup>
      </NumberField>
      <NumberField defaultValue={5} min={0} max={100} size="default">
        <NumberFieldScrubArea label="Default" />
        <NumberFieldGroup>
          <NumberFieldDecrement />
          <NumberFieldInput />
          <NumberFieldIncrement />
        </NumberFieldGroup>
      </NumberField>
      <NumberField defaultValue={5} min={0} max={100} size="lg">
        <NumberFieldScrubArea label="Large" />
        <NumberFieldGroup>
          <NumberFieldDecrement />
          <NumberFieldInput />
          <NumberFieldIncrement />
        </NumberFieldGroup>
      </NumberField>
    </div>
  )
}
