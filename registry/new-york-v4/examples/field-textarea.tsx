import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "@/registry/new-york-v4/ui/field"
import { Textarea } from "@/registry/new-york-v4/ui/textarea"

export default function FieldTextarea() {
  return (
    <div className="w-full max-w-md">
      <FieldSet>
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="feedback">フィードバック</FieldLabel>
            <Textarea
              id="feedback"
              placeholder="フィードバックで改善にご協力ください..."
              rows={4}
            />
            <FieldDescription>
              サービスについてのご意見をお贸らせください。
            </FieldDescription>
          </Field>
        </FieldGroup>
      </FieldSet>
    </div>
  )
}
