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
  FieldLegend,
  FieldSet,
  FieldTitle,
} from "@/registry/new-york-v4/ui/field"
import {
  RadioGroup,
  RadioGroupItem,
} from "@/registry/new-york-v4/ui/radio-group"

const plans = [
  {
    id: "starter",
    title: "Starter（月100Kトークン）",
    description: "基本機能で毎日の作業に。",
  },
  {
    id: "pro",
    title: "Pro（月100万トークン）",
    description: "高度なAI機能を多く利用する方向け。",
  },
  {
    id: "enterprise",
    title: "Enterprise（無制限トークン）",
    description: "大規模チームや重度利用向け。",
  },
] as const

const FormSchema = v.object({
  plan: v.pipe(
    v.string(),
    v.minLength(1, "プランを選択して続行してください。")
  ),
})

export default function FormFormischRadioGroup() {
  const form = useForm({
    schema: FormSchema,
    initialInput: {
      plan: "",
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
        <CardTitle>サブスクリプションプラン</CardTitle>
        <CardDescription>
          各プランの料金と機能を確認してください。
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form of={form} id="form-formisch-radiogroup" onSubmit={handleSubmit}>
          <FieldGroup>
            <FormischField of={form} path={["plan"]}>
              {(field) => (
                <FieldSet data-invalid={field.errors !== null}>
                  <FieldLegend>プラン</FieldLegend>
                  <FieldDescription>
                    プランはいつでもアップグレードまたはダウングレードできます。
                  </FieldDescription>
                  <RadioGroup
                    value={field.input ?? ""}
                    onValueChange={(value) => field.onChange(value)}
                    aria-invalid={field.errors !== null}
                  >
                    {plans.map((plan) => (
                      <FieldLabel
                        key={plan.id}
                        htmlFor={`form-formisch-radiogroup-${plan.id}`}
                      >
                        <Field
                          orientation="horizontal"
                          data-invalid={field.errors !== null}
                        >
                          <FieldContent>
                            <FieldTitle>{plan.title}</FieldTitle>
                            <FieldDescription>
                              {plan.description}
                            </FieldDescription>
                          </FieldContent>
                          <RadioGroupItem
                            value={plan.id}
                            id={`form-formisch-radiogroup-${plan.id}`}
                            aria-invalid={field.errors !== null}
                          />
                        </Field>
                      </FieldLabel>
                    ))}
                  </RadioGroup>
                  {field.errors && (
                    <FieldError
                      errors={field.errors.map((message) => ({ message }))}
                    />
                  )}
                </FieldSet>
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
          <Button type="submit" form="form-formisch-radiogroup">
            保存
          </Button>
        </Field>
      </CardFooter>
    </Card>
  )
}
