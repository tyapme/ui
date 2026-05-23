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

const FormSchema = v.object({
  plan: v.pipe(
    v.string(),
    v.minLength(1, "サブスクリプションプランを選択してください"),
    v.check(
      (value) => value === "basic" || value === "pro",
      "無効なプランです。BasicまたはProを選択してください"
    )
  ),
  billingPeriod: v.pipe(
    v.string(),
    v.minLength(1, "請求期間を選択してください")
  ),
  addons: v.pipe(
    v.array(v.string()),
    v.minLength(1, "アドオンを少なくとも1つ選択してください"),
    v.maxLength(3, "アドオンは最大3つまで選択できます"),
    v.check(
      (value) => value.every((addon) => addons.some((a) => a.id === addon)),
      "無効なアドオンが選ばれています"
    )
  ),
  emailNotifications: v.boolean(),
})

export default function FormFormischComplex() {
  const form = useForm({
    schema: FormSchema,
    initialInput: {
      plan: "basic",
      billingPeriod: "",
      addons: [],
      emailNotifications: false,
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
    <Card className="w-full max-w-sm">
      <CardHeader className="border-b">
        <CardTitle>もう少しで完了です！</CardTitle>
        <CardDescription>
          サブスクリプションプランと請求期間を選択してください。
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form of={form} id="form-formisch-complex" onSubmit={handleSubmit}>
          <FieldGroup>
            <FormischField of={form} path={["plan"]}>
              {(field) => (
                <FieldSet data-invalid={field.errors !== null}>
                  <FieldLegend variant="label">サブスクリプションプラン</FieldLegend>
                  <FieldDescription>
                    プランを選択してください。
                  </FieldDescription>
                  <RadioGroup
                    value={field.input ?? ""}
                    onValueChange={(value) => field.onChange(value)}
                    aria-invalid={field.errors !== null}
                  >
                    <FieldLabel htmlFor="form-formisch-complex-basic">
                      <Field orientation="horizontal">
                        <FieldContent>
                          <FieldTitle>Basic</FieldTitle>
                          <FieldDescription>
                            個人や小規模チーム向け
                          </FieldDescription>
                        </FieldContent>
                        <RadioGroupItem
                          value="basic"
                          id="form-formisch-complex-basic"
                        />
                      </Field>
                    </FieldLabel>
                    <FieldLabel htmlFor="form-formisch-complex-pro">
                      <Field orientation="horizontal">
                        <FieldContent>
                          <FieldTitle>Pro</FieldTitle>
                          <FieldDescription>
                            高い需求のあるビジネス向け
                          </FieldDescription>
                        </FieldContent>
                        <RadioGroupItem
                          value="pro"
                          id="form-formisch-complex-pro"
                        />
                      </Field>
                    </FieldLabel>
                  </RadioGroup>
                  {field.errors && (
                    <FieldError
                      errors={field.errors.map((message) => ({ message }))}
                    />
                  )}
                </FieldSet>
              )}
            </FormischField>
            <FieldSeparator />
            <FormischField of={form} path={["billingPeriod"]}>
              {(field) => (
                <Field data-invalid={field.errors !== null}>
                  <FieldLabel htmlFor="form-formisch-complex-billingPeriod">
                    請求期間
                  </FieldLabel>
                  <Select
                    value={field.input ?? ""}
                    onValueChange={(value) => field.onChange(value)}
                  >
                    <SelectTrigger
                      id="form-formisch-complex-billingPeriod"
                      aria-invalid={field.errors !== null}
                    >
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
                  {field.errors && (
                    <FieldError
                      errors={field.errors.map((message) => ({ message }))}
                    />
                  )}
                </Field>
              )}
            </FormischField>
            <FieldSeparator />
            <FormischField of={form} path={["addons"]}>
              {(field) => {
                const current = field.input ?? []
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
                          data-invalid={field.errors !== null}
                        >
                          <Checkbox
                            id={`form-formisch-complex-${addon.id}`}
                            aria-invalid={field.errors !== null}
                            checked={current.includes(addon.id)}
                            onCheckedChange={(checked) => {
                              field.onChange(
                                checked === true
                                  ? [...current, addon.id]
                                  : current.filter(
                                      (value) => value !== addon.id
                                    )
                              )
                            }}
                          />
                          <FieldContent>
                            <FieldLabel
                              htmlFor={`form-formisch-complex-${addon.id}`}
                            >
                              {addon.title}
                            </FieldLabel>
                            <FieldDescription>
                              {addon.description}
                            </FieldDescription>
                          </FieldContent>
                        </Field>
                      ))}
                    </FieldGroup>
                    {field.errors && (
                      <FieldError
                        errors={field.errors.map((message) => ({ message }))}
                      />
                    )}
                  </FieldSet>
                )
              }}
            </FormischField>
            <FieldSeparator />
            <FormischField of={form} path={["emailNotifications"]}>
              {(field) => (
                <Field
                  orientation="horizontal"
                  data-invalid={field.errors !== null}
                >
                  <FieldContent>
                    <FieldLabel htmlFor="form-formisch-complex-emailNotifications">
                      メール通知
                    </FieldLabel>
                    <FieldDescription>
                      サブスクリプションの更新情報をメールで受け取る
                    </FieldDescription>
                  </FieldContent>
                  <Switch
                    id="form-formisch-complex-emailNotifications"
                    checked={field.input ?? false}
                    onCheckedChange={(checked) => field.onChange(checked)}
                    aria-invalid={field.errors !== null}
                  />
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
      <CardFooter className="border-t">
        <Field>
          <Button type="submit" form="form-formisch-complex">
            設定を保存
          </Button>
          <Button type="button" variant="outline" onClick={() => reset(form)}>
            リセット
          </Button>
        </Field>
      </CardFooter>
    </Card>
  )
}
