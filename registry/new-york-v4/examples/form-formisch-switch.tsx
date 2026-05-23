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
import { Switch } from "@/registry/new-york-v4/ui/switch"

const FormSchema = v.object({
  twoFactor: v.pipe(
    v.boolean(),
    v.check(
      (value) => value === true,
      "二要素認証の有効化を強くお勧めします。"
    )
  ),
})

export default function FormFormischSwitch() {
  const form = useForm({
    schema: FormSchema,
    initialInput: {
      twoFactor: false,
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
        <CardTitle>セキュリティ設定</CardTitle>
        <CardDescription>
          アカウントのセキュリティ設定を管理します。
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form of={form} id="form-formisch-switch" onSubmit={handleSubmit}>
          <FieldGroup>
            <FormischField of={form} path={["twoFactor"]}>
              {(field) => (
                <Field
                  orientation="horizontal"
                  data-invalid={field.errors !== null}
                >
                  <FieldContent>
                    <FieldLabel htmlFor="form-formisch-switch-twoFactor">
                      多要素認証
                    </FieldLabel>
                    <FieldDescription>
                      多要素認証を有効にしてアカウントを守りましょう。
                    </FieldDescription>
                    {field.errors && (
                      <FieldError
                        errors={field.errors.map((message) => ({ message }))}
                      />
                    )}
                  </FieldContent>
                  <Switch
                    id="form-formisch-switch-twoFactor"
                    checked={field.input ?? false}
                    onCheckedChange={(checked) => field.onChange(checked)}
                    aria-invalid={field.errors !== null}
                  />
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
          <Button type="submit" form="form-formisch-switch">
            保存
          </Button>
        </Field>
      </CardFooter>
    </Card>
  )
}
