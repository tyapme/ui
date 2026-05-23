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

const FormSchema = v.object({
  username: v.pipe(
    v.string(),
    v.minLength(3, "ユーザー名は3文字以上で入力してください。"),
    v.maxLength(10, "ユーザー名は10文字以内で入力してください。"),
    v.regex(
      /^[a-zA-Z0-9_]+$/,
      "ユーザー名に使えるのは英数字とアンダースコアのみです。"
    )
  ),
})

export default function FormFormischInput() {
  const form = useForm({
    schema: FormSchema,
    initialInput: {
      username: "",
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
        <CardTitle>プロフィール設定</CardTitle>
        <CardDescription>
          プロフィール情報を更新してください。
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form of={form} id="form-formisch-input" onSubmit={handleSubmit}>
          <FieldGroup>
            <FormischField of={form} path={["username"]}>
              {(field) => (
                <Field data-invalid={field.errors !== null}>
                  <FieldLabel htmlFor="form-formisch-input-username">
                    ユーザー名
                  </FieldLabel>
                  <Input
                    {...field.props}
                    id="form-formisch-input-username"
                    value={field.input ?? ""}
                    aria-invalid={field.errors !== null}
                    placeholder="shadcn"
                    autoComplete="username"
                  />
                  <FieldDescription>
                    公開表示名です〃30文字3～10文字で、英数字・アンダースコアのみ使用できます。
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
          <Button type="submit" form="form-formisch-input">
            保存
          </Button>
        </Field>
      </CardFooter>
    </Card>
  )
}
