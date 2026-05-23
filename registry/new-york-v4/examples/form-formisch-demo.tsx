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
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/registry/new-york-v4/ui/field"
import { Input } from "@/registry/new-york-v4/ui/input"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  InputGroupTextarea,
} from "@/registry/new-york-v4/ui/input-group"

const FormSchema = v.object({
  title: v.pipe(
    v.string(),
    v.minLength(5, "バグタイトルは5文字以上で入力してください。"),
    v.maxLength(32, "バグタイトルは32文字以内で入力してください。")
  ),
  description: v.pipe(
    v.string(),
    v.minLength(20, "説明は20文字以上で入力してください。"),
    v.maxLength(100, "説明は100文字以内で入力してください。")
  ),
})

export default function BugReportForm() {
  const form = useForm({
    schema: FormSchema,
    initialInput: {
      title: "",
      description: "",
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
    <Card className="w-full sm:max-w-md">
      <CardHeader>
        <CardTitle>バグ報告</CardTitle>
        <CardDescription>
          気づいたバグを報告して、改善にご協力ください。
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form of={form} id="form-formisch-demo" onSubmit={handleSubmit}>
          <FieldGroup>
            <FormischField of={form} path={["title"]}>
              {(field) => (
                <Field data-invalid={field.errors !== null}>
                  <FieldLabel htmlFor="form-formisch-demo-title">
                    バグタイトル
                  </FieldLabel>
                  <Input
                    {...field.props}
                    id="form-formisch-demo-title"
                    value={field.input ?? ""}
                    aria-invalid={field.errors !== null}
                    placeholder="モバイルでログインボタンが機能しない"
                    autoComplete="off"
                  />
                  {field.errors && (
                    <FieldError
                      errors={field.errors.map((message) => ({ message }))}
                    />
                  )}
                </Field>
              )}
            </FormischField>
            <FormischField of={form} path={["description"]}>
              {(field) => (
                <Field data-invalid={field.errors !== null}>
                  <FieldLabel htmlFor="form-formisch-demo-description">
                    説明
                  </FieldLabel>
                  <InputGroup>
                    <InputGroupTextarea
                      {...field.props}
                      id="form-formisch-demo-description"
                      value={field.input ?? ""}
                      placeholder="モバイルでログインボタンに問題があります。"
                      rows={6}
                      className="min-h-24 resize-none"
                      aria-invalid={field.errors !== null}
                    />
                    <InputGroupAddon align="block-end">
                      <InputGroupText className="tabular-nums">
                        {(field.input ?? "").length}/100 文字
                      </InputGroupText>
                    </InputGroupAddon>
                  </InputGroup>
                  <FieldDescription>
                    再現手順、期待される振る舞い、実際の振る舞いを記入してください。
                  </FieldDescription>
                  {field.errors && (
                    <FieldError
                      errors={field.errors.map((message) => ({ message }))}
                    />
                  )}
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
          <Button type="submit" form="form-formisch-demo">
            送信
          </Button>
        </Field>
      </CardFooter>
    </Card>
  )
}
