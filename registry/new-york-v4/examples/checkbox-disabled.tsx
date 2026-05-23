import { Checkbox } from "@/registry/new-york-v4/ui/checkbox"

export default function CheckboxDisabled() {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox id="terms2" disabled />
      <label
        htmlFor="terms2"
        className="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        \u5229\u7528\u898f\u7d04\u306b\u540c\u610f\u3059\u308b
      </label>
    </div>
  )
}
