"use client"

import { useRtlTranslation } from "@/components/language-selector"
import { Checkbox } from "@/styles/base/ui-rtl/checkbox"
import { Field, FieldLabel } from "@/styles/base/ui-rtl/field"

const translations = {
  ar: {
    dir: "rtl" as const,
    terms: "أوافق على الشروط والأحكام",
  },
  he: {
    dir: "rtl" as const,
    terms: "אני מסכים לתנאים וההגבלות",
  },
}

export function FieldCheckbox() {
  const { dir, terms } = useRtlTranslation(translations)

  return (
    <div dir={dir}>
      <FieldLabel htmlFor="checkbox-demo-rtl">
        <Field orientation="horizontal">
          <Checkbox id="checkbox-demo-rtl" defaultChecked />
          <FieldLabel htmlFor="checkbox-demo-rtl" className="line-clamp-1">
            {terms}
          </FieldLabel>
        </Field>
      </FieldLabel>
    </div>
  )
}
