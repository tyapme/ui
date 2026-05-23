"use client"

import * as React from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import { toast } from "sonner"
import * as z from "zod"

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
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
} from "@/registry/new-york-v4/ui/field"

const tasks = [
  {
    id: "push",
    label: "プッシュ通知",
  },
  {
    id: "email",
    label: "メール通知",
  },
] as const

const formSchema = z.object({
  responses: z.boolean(),
  tasks: z
    .array(z.string())
    .min(1, "通知の種類を少なくとも1つ選択してください。")
    .refine(
      (value) => value.every((task) => tasks.some((t) => t.id === task)),
      {
        message: "無効な通知の種類が選択されています。",
      }
    ),
})

export default function FormRhfCheckbox() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      responses: true,
      tasks: [],
    },
  })

  function onSubmit(data: z.infer<typeof formSchema>) {
    toast("以下の内容を送信しました：", {
      description: (
        <pre className="mt-2 w-[320px] overflow-x-auto rounded-md bg-code p-4 text-code-foreground">
          <code>{JSON.stringify(data, null, 2)}</code>
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
        <CardTitle>通知</CardTitle>
        <CardDescription>通知の設定を管理します。</CardDescription>
      </CardHeader>
      <CardContent>
        <form id="form-rhf-checkbox" onSubmit={form.handleSubmit(onSubmit)}>
          <FieldGroup>
            <Controller
              name="responses"
              control={form.control}
              render={({ field, fieldState }) => (
                <div>
                  <FieldSet data-invalid={fieldState.invalid}>
                    <FieldLegend variant="label">返信</FieldLegend>
                    <FieldDescription>
                      リサーチや画像生成など時間のかかるリクエストで通知を受け取ります。
                    </FieldDescription>
                    <FieldGroup data-slot="checkbox-group">
                      <Field orientation="horizontal">
                        <Checkbox
                          id="form-rhf-checkbox-responses"
                          name={field.name}
                          checked={field.value}
                          onCheckedChange={field.onChange}
                          disabled
                        />
                        <FieldLabel
                          htmlFor="form-rhf-checkbox-responses"
                          className="font-normal"
                        >
                          プッシュ通知
                        </FieldLabel>
                      </Field>
                    </FieldGroup>
                  </FieldSet>
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </div>
              )}
            />
            <FieldSeparator />
            <Controller
              name="tasks"
              control={form.control}
              render={({ field, fieldState }) => (
                <FieldGroup>
                  <FieldSet data-invalid={fieldState.invalid}>
                    <FieldLegend variant="label">タスク</FieldLegend>
                    <FieldDescription>
                      作成したタスクに更新があるときに通知を受け取ります。
                    </FieldDescription>
                    <FieldGroup data-slot="checkbox-group">
                      {tasks.map((task) => (
                        <Field
                          key={task.id}
                          orientation="horizontal"
                          data-invalid={fieldState.invalid}
                        >
                          <Checkbox
                            id={`form-rhf-checkbox-${task.id}`}
                            name={field.name}
                            aria-invalid={fieldState.invalid}
                            checked={field.value.includes(task.id)}
                            onCheckedChange={(checked) => {
                              const newValue = checked
                                ? [...field.value, task.id]
                                : field.value.filter(
                                    (value) => value !== task.id
                                  )
                              field.onChange(newValue)
                            }}
                          />
                          <FieldLabel
                            htmlFor={`form-rhf-checkbox-${task.id}`}
                            className="font-normal"
                          >
                            {task.label}
                          </FieldLabel>
                        </Field>
                      ))}
                    </FieldGroup>
                  </FieldSet>
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </FieldGroup>
              )}
            />
          </FieldGroup>
        </form>
      </CardContent>
      <CardFooter>
        <Field orientation="horizontal">
          <Button type="button" variant="outline" onClick={() => form.reset()}>
            リセット
          </Button>
          <Button type="submit" form="form-rhf-checkbox">
            保存
          </Button>
        </Field>
      </CardFooter>
    </Card>
  )
}
