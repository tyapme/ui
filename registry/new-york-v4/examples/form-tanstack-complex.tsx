/* eslint-disable react/no-children-prop */
"use client"

import * as React from "react"
import { useForm } from "@tanstack/react-form"
import { toast } from "sonner"
import * as z from "zod"

import { Button } from "@/registry/new-york-v4/ui/button"
import { Card, CardContent, CardFooter } from "@/registry/new-york-v4/ui/card"
import { Checkbox } from "@/registry/new-york-v4/ui/checkbox"
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  FieldTitle,
} from "@/registry/new-york-v4/ui/field"
import {
  RadioGroup,
  RadioGroupItem,
} from "@/registry/new-york-v4/ui/radio-group"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/new-york-v4/ui/select"
import { Switch } from "@/registry/new-york-v4/ui/switch"

const addons = [
  {
    id: "analytics",
    title: "分析",
    description: "高度な分析・レポート",
  },
  {
    id: "backup",
    title: "バックアップ",
    description: "毎日自動バックアップ",
  },
  {
    id: "support",
    title: "優先サポート",
    description: "24時間4強のプレミアムサポート",
  },
] as const

const formSchema = z.object({
  plan: z
    .string({
      required_error: "サブスクリプションプランを選択してください",
    })
    .min(1, "サブスクリプションプランを選択してください")
    .refine((value) => value === "basic" || value === "pro", {
      message: "無効なプランです。BasicまたはProを選択してください",
    }),
  billingPeriod: z
    .string({
      required_error: "請求期間を選択してください",
    })
    .min(1, "請求期間を選択してください"),
  addons: z
    .array(z.string())
    .min(1, "アドオンを少なくとも1つ選択してください")
    .max(3, "アドオンは最大3つまで選択できます")
    .refine(
      (value) => value.every((addon) => addons.some((a) => a.id === addon)),
      {
        message: "無効なアドオンが選ばれています",
      }
    ),
  emailNotifications: z.boolean(),
})

export default function FormTanstackComplex() {
  const form = useForm({
    defaultValues: {
      plan: "basic",
      billingPeriod: "monthly",
      addons: [] as string[],
      emailNotifications: false,
    },
    validators: {
      onSubmit: formSchema,
    },
    onSubmit: async ({ value }) => {
      toast("以下の内容を送信しました：", {
        description: (
          <pre className="mt-2 w-[320px] overflow-x-auto rounded-md bg-code p-4 text-code-foreground">
            <code>{JSON.stringify(value, null, 2)}</code>
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
    },
  })

  return (
    <Card className="w-full max-w-sm">
      <CardContent>
        <form
          id="subscription-form"
          onSubmit={(e) => {
            e.preventDefault()
            form.handleSubmit()
          }}
        >
          <FieldGroup>
            <form.Field
              name="plan"
              children={(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid
                return (
                  <FieldSet>
                    <FieldLegend>サブスクリプションプラン</FieldLegend>
                    <FieldDescription>
                      プランを選択してください。
                    </FieldDescription>
                    <RadioGroup
                      name={field.name}
                      value={field.state.value}
                      onValueChange={field.handleChange}
                    >
                      <FieldLabel htmlFor="basic">
                        <Field
                          orientation="horizontal"
                          data-invalid={isInvalid}
                        >
                          <FieldContent>
                            <FieldTitle>Basic</FieldTitle>
                            <FieldDescription>
                              個人や小規模チーム向け
                            </FieldDescription>
                          </FieldContent>
                          <RadioGroupItem
                            value="basic"
                            id="basic"
                            aria-invalid={isInvalid}
                          />
                        </Field>
                      </FieldLabel>
                      <FieldLabel htmlFor="pro">
                        <Field
                          orientation="horizontal"
                          data-invalid={isInvalid}
                        >
                          <FieldContent>
                            <FieldTitle>Pro</FieldTitle>
                            <FieldDescription>
                              高い需求のあるビジネス向け
                            </FieldDescription>
                          </FieldContent>
                          <RadioGroupItem
                            value="pro"
                            id="pro"
                            aria-invalid={isInvalid}
                          />
                        </Field>
                      </FieldLabel>
                    </RadioGroup>
                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                  </FieldSet>
                )
              }}
            />
            <FieldSeparator />
            <form.Field
              name="billingPeriod"
              children={(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid
                return (
                  <Field data-invalid={isInvalid}>
                    <FieldLabel htmlFor={field.name}>請求期間</FieldLabel>
                    <Select
                      name={field.name}
                      value={field.state.value}
                      onValueChange={field.handleChange}
                      aria-invalid={isInvalid}
                    >
                      <SelectTrigger id={field.name}>
                        <SelectValue placeholder="選択" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="monthly">毎月払い</SelectItem>
                        <SelectItem value="yearly">年払い</SelectItem>
                      </SelectContent>
                    </Select>
                    <FieldDescription>
                      請求の頻度を選択してください。
                    </FieldDescription>
                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                  </Field>
                )
              }}
            />
            <FieldSeparator />
            <form.Field
              name="addons"
              mode="array"
              children={(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid
                return (
                  <FieldSet>
                    <FieldLegend>アドオン</FieldLegend>
                    <FieldDescription>
                      追加したい機能を選択してください。
                    </FieldDescription>
                    <FieldGroup data-slot="checkbox-group">
                      {addons.map((addon) => (
                        <Field
                          key={addon.id}
                          orientation="horizontal"
                          data-invalid={isInvalid}
                        >
                          <Checkbox
                            id={addon.id}
                            name={field.name}
                            aria-invalid={isInvalid}
                            checked={field.state.value.includes(addon.id)}
                            onCheckedChange={(checked) => {
                              if (checked) {
                                field.pushValue(addon.id)
                              } else {
                                const index = field.state.value.indexOf(
                                  addon.id
                                )
                                if (index > -1) {
                                  field.removeValue(index)
                                }
                              }
                            }}
                          />
                          <FieldContent>
                            <FieldLabel htmlFor={addon.id}>
                              {addon.title}
                            </FieldLabel>
                            <FieldDescription>
                              {addon.description}
                            </FieldDescription>
                          </FieldContent>
                        </Field>
                      ))}
                    </FieldGroup>
                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                  </FieldSet>
                )
              }}
            />
            <FieldSeparator />
            <form.Field
              name="emailNotifications"
              children={(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid
                return (
                  <Field orientation="horizontal" data-invalid={isInvalid}>
                    <FieldContent>
                      <FieldLabel htmlFor={field.name}>
                        メール通知
                      </FieldLabel>
                      <FieldDescription>
                        サブスクリプションの更新情報をメールで受け取る
                      </FieldDescription>
                    </FieldContent>
                    <Switch
                      id={field.name}
                      name={field.name}
                      checked={field.state.value}
                      onCheckedChange={field.handleChange}
                      aria-invalid={isInvalid}
                    />
                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                  </Field>
                )
              }}
            />
          </FieldGroup>
        </form>
      </CardContent>
      <CardFooter>
        <Field orientation="horizontal" className="justify-end">
          <Button type="submit" form="subscription-form">
            設定を保存
          </Button>
        </Field>
      </CardFooter>
    </Card>
  )
}
