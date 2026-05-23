import { Button } from "@/registry/new-york-v4/ui/button"
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
} from "@/registry/new-york-v4/ui/field"
import { Input } from "@/registry/new-york-v4/ui/input"
import { Textarea } from "@/registry/new-york-v4/ui/textarea"

export default function FieldResponsive() {
  return (
    <div className="w-full max-w-4xl">
      <form>
        <FieldSet>
          <FieldLegend>プロフィール</FieldLegend>
          <FieldDescription>プロフィール情報を入力してください。</FieldDescription>
          <FieldSeparator />
          <FieldGroup>
            <Field orientation="responsive">
              <FieldContent>
                <FieldLabel htmlFor="name">氏名</FieldLabel>
                <FieldDescription>
                  本名を入力してください
                </FieldDescription>
              </FieldContent>
              <Input id="name" placeholder="山田 太郎" required />
            </Field>
            <FieldSeparator />
            <Field orientation="responsive">
              <FieldContent>
                <FieldLabel htmlFor="lastName">メッセージ</FieldLabel>
                <FieldDescription>
                  メッセージをここに入力してください《100文字以内が望ましい。
                </FieldDescription>
              </FieldContent>
              <Textarea
                id="message"
                placeholder="ハロー、ワールド！"
                required
                className="min-h-[100px] resize-none sm:min-w-[300px]"
              />
            </Field>
            <FieldSeparator />
            <Field orientation="responsive">
              <Button type="submit">送信</Button>
              <Button type="button" variant="outline">
                キャンセル
              </Button>
            </Field>
          </FieldGroup>
        </FieldSet>
      </form>
    </div>
  )
}
