import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/registry/new-york-v4/ui/field"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/new-york-v4/ui/select"

export default function FieldSelect() {
  return (
    <div className="w-full max-w-md">
      <Field>
        <FieldLabel>部門</FieldLabel>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="部門を選択" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="engineering">エンジニアリング</SelectItem>
            <SelectItem value="design">デザイン</SelectItem>
            <SelectItem value="marketing">マーケティング</SelectItem>
            <SelectItem value="sales">営業</SelectItem>
            <SelectItem value="support">カスタマーサポート</SelectItem>
            <SelectItem value="hr">人事</SelectItem>
            <SelectItem value="finance">財務</SelectItem>
            <SelectItem value="operations">オペレーションズ</SelectItem>
          </SelectContent>
        </Select>
        <FieldDescription>
          所属部門を選択してください。
        </FieldDescription>
      </Field>
    </div>
  )
}
