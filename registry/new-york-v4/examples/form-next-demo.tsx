"use client"

import * as React from "react"
import Form from "next/form"
import { toast } from "sonner"

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
import { Spinner } from "@/registry/new-york-v4/ui/spinner"

import { demoFormAction } from "./form-next-demo-action"
import { type FormState } from "./form-next-demo-schema"

export default function FormNextDemo() {
  const [formState, formAction, pending] = React.useActionState<
    FormState,
    FormData
  >(demoFormAction, {
    values: {
      title: "",
      description: "",
    },
    errors: null,
    success: false,
  })
  const [descriptionLength, setDescriptionLength] = React.useState(0)

  React.useEffect(() => {
    if (formState.success) {
      toast("フィードバックありがとうございます", {
        description: "内容を確認して、近日中にご連絡いたします。",
      })
    }
  }, [formState.success])

  React.useEffect(() => {
    setDescriptionLength(formState.values.description.length)
  }, [formState.values.description])

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>バグ報告</CardTitle>
        <CardDescription>
          気づいたバグを報告して、改善にご協力ください。
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form action={formAction} id="bug-report-form">
          <FieldGroup>
            <Field data-invalid={!!formState.errors?.title?.length}>
              <FieldLabel htmlFor="title">バグタイトル</FieldLabel>
              <Input
                id="title"
                name="title"
                defaultValue={formState.values.title}
                disabled={pending}
                aria-invalid={!!formState.errors?.title?.length}
                placeholder="モバイルでログインボタンが機能しない"
                autoComplete="off"
              />
              {formState.errors?.title && (
                <FieldError>{formState.errors.title[0]}</FieldError>
              )}
            </Field>
            <Field data-invalid={!!formState.errors?.description?.length}>
              <FieldLabel htmlFor="description">説明</FieldLabel>
              <InputGroup>
                <InputGroupTextarea
                  id="description"
                  name="description"
                  defaultValue={formState.values.description}
                  placeholder="モバイルでログインボタンに問題があります。"
                  rows={6}
                  className="min-h-24 resize-none"
                  disabled={pending}
                  aria-invalid={!!formState.errors?.description?.length}
                  onChange={(e) => setDescriptionLength(e.target.value.length)}
                />
                <InputGroupAddon align="block-end">
                  <InputGroupText className="tabular-nums">
                    {descriptionLength}/100 文字
                  </InputGroupText>
                </InputGroupAddon>
              </InputGroup>
              <FieldDescription>
                再現手順、期待される振る舞い、実際の振る舞いを記入してください。
              </FieldDescription>
              {formState.errors?.description && (
                <FieldError>{formState.errors.description[0]}</FieldError>
              )}
            </Field>
          </FieldGroup>
        </Form>
      </CardContent>
      <CardFooter>
        <Field orientation="horizontal">
          <Button type="submit" disabled={pending} form="bug-report-form">
            {pending && <Spinner />}
            送信
          </Button>
        </Field>
      </CardFooter>
    </Card>
  )
}
