import {
  Example,
  ExampleWrapper,
} from "@/registry/bases/base/components/example"
import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/registry/ui/field"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/registry/ui/select"

export default function NativeSelectExample() {
  return (
    <ExampleWrapper>
      <NativeSelectBasic />
      <NativeSelectWithGroups />
      <NativeSelectSizes />
      <NativeSelectWithField />
      <NativeSelectDisabled />
      <NativeSelectInvalid />
    </ExampleWrapper>
  )
}

function NativeSelectBasic() {
  return (
    <Example title="Basic">
      <Select kind="native">
        <SelectTrigger>
          <SelectValue placeholder="Select a fruit" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="blueberry">Blueberry</SelectItem>
          <SelectItem value="grapes" disabled>
            Grapes
          </SelectItem>
          <SelectItem value="pineapple">Pineapple</SelectItem>
        </SelectContent>
      </Select>
    </Example>
  )
}

function NativeSelectWithGroups() {
  return (
    <Example title="With Groups">
      <Select kind="native">
        <SelectTrigger>
          <SelectValue placeholder="Select a food" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Fruits</SelectLabel>
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
            <SelectItem value="blueberry">Blueberry</SelectItem>
          </SelectGroup>
          <SelectGroup>
            <SelectLabel>Vegetables</SelectLabel>
            <SelectItem value="carrot">Carrot</SelectItem>
            <SelectItem value="broccoli">Broccoli</SelectItem>
            <SelectItem value="spinach">Spinach</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </Example>
  )
}

function NativeSelectSizes() {
  return (
    <Example title="Sizes">
      <div className="flex flex-col gap-4">
        <Select kind="native">
          <SelectTrigger size="sm">
            <SelectValue placeholder="Select a fruit" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
            <SelectItem value="blueberry">Blueberry</SelectItem>
          </SelectContent>
        </Select>
        <Select kind="native">
          <SelectTrigger size="default">
            <SelectValue placeholder="Select a fruit" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
            <SelectItem value="blueberry">Blueberry</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </Example>
  )
}

function NativeSelectWithField() {
  return (
    <Example title="With Field">
      <Field>
        <FieldLabel htmlFor="native-select-country">Country</FieldLabel>
        <Select kind="native">
          <SelectTrigger id="native-select-country">
            <SelectValue placeholder="Select a country" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="us">United States</SelectItem>
            <SelectItem value="uk">United Kingdom</SelectItem>
            <SelectItem value="ca">Canada</SelectItem>
            <SelectItem value="au">Australia</SelectItem>
          </SelectContent>
        </Select>
        <FieldDescription>Select your country of residence.</FieldDescription>
      </Field>
    </Example>
  )
}

function NativeSelectDisabled() {
  return (
    <Example title="Disabled">
      <Select kind="native" disabled>
        <SelectTrigger>
          <SelectValue placeholder="Disabled" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="blueberry">Blueberry</SelectItem>
        </SelectContent>
      </Select>
    </Example>
  )
}

function NativeSelectInvalid() {
  return (
    <Example title="Invalid">
      <Select kind="native">
        <SelectTrigger aria-invalid="true">
          <SelectValue placeholder="Error state" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="blueberry">Blueberry</SelectItem>
        </SelectContent>
      </Select>
    </Example>
  )
}
