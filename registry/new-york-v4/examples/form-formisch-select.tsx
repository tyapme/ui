"use client"

import * as React from "react"
import { Form, Field as FormischField, reset, useForm } from "@formisch/react"
import type { SubmitHandler } from "@formisch/react"
import { toast } from "sonner"
import * as v from "valibot"

import { Button } from "@/registry/new-york-v4/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/new-york-v4/ui/card"
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/registry/new-york-v4/ui/field"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/registry/new-york-v4/ui/select"

const spokenLanguages = [
  { label: "英語", value: "en" },
  { label: "スペイン語", value: "es" },
  { label: "フランス語", value: "fr" },
  { label: "ドイツ語", value: "de" },
  { label: "イタリア語", value: "it" },
  { label: "中国語", value: "zh" },
  { label: "日本語", value: "ja" },
] as const

const FormSchema = v.object({
  language: v.pipe(
    v.string(),
    v.minLength(1, "使用言語を選択してください。"),
    v.check(
      (value) => value !== "auto",
      "自動検出は使用できません。特定の言語を選択してください。"
    )
  ),
})

export default function FormFormischSelect() {
  const form = useForm({
    schema: FormSchema,
    initialInput: {
      language: "",
    },
  })

  const handleSubmit: SubmitHandler<typeof FormSchema> = (output) => {
    toast("以下の内容を送信しました：", {
      description: (
        <pre className="mt-2 w-[320px] overflow-x-auto rounded-md bg-code p-4 text-code-foreground">
          <code>{JSON.stringify(output, null, 2)}</code>
        </pre>
      ),
      position: "bottom-right",
      classNames: {
        content: "flex flex-col gap-2",
      },
      style: {
        "--border-radius": "calc(var(--radius)  + 4px)",
      } as React.CSSProperties,
    })
  }

  return (
    <Card className="w-full sm:max-w-lg">
      <CardHeader>
        <CardTitle>言語設定</CardTitle>
        <CardDescription>
          使用言語を選択してください。
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form of={form} id="form-formisch-select" onSubmit={handleSubmit}>
          <FieldGroup>
            <FormischField of={form} path={["language"]}>
              {(field) => (
                <Field
                  orientation="responsive"
                  data-invalid={field.errors !== null}
                >
                  <FieldContent>
                    <FieldLabel htmlFor="form-formisch-select-language">
                      使用言語
                    </FieldLabel>
                    <FieldDescription>
                      最良の結果を得るため、実際に話す言語を選択してください。
                    </FieldDescription>
                    {field.errors && (
                      <FieldError
                        errors={field.errors.map((message) => ({ message }))}
                      />
                    )}
                  </FieldContent>
                  <Select
                    value={field.input ?? ""}
                    onValueChange={(value) => field.onChange(value)}
                  >
                    <SelectTrigger
                      id="form-formisch-select-language"
                      aria-invalid={field.errors !== null}
                      className="min-w-[120px]"
                    >
                      <SelectValue placeholder="選択" />
                    </SelectTrigger>
                    <SelectContent position="item-aligned">
                      <SelectItem value="auto">自動</SelectItem>
                      <SelectSeparator />
                      {spokenLanguages.map((language) => (
                        <SelectItem key={language.value} value={language.value}>
                          {language.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </Field>
              )}
            </FormischField>
          </FieldGroup>
        </Form>
      </CardContent>
      <CardFooter>
        <Field orientation="horizontal">
          <Button type="button" variant="outline" onClick={() => reset(form)}>
            リセット
          </Button>
          <Button type="submit" form="form-formisch-select">
            保存
          </Button>
        </Field>
      </CardFooter>
    </Card>
  )
}
