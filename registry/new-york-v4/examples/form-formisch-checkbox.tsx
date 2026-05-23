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

const FormSchema = v.object({
  responses: v.boolean(),
  tasks: v.pipe(
    v.array(v.string()),
    v.minLength(1, "Please select at least one notification type."),
    v.check(
      (value) => value.every((task) => tasks.some((t) => t.id === task)),
      "Invalid notification type selected."
    )
  ),
})

export default function FormFormischCheckbox() {
  const form = useForm({
    schema: FormSchema,
    initialInput: {
      responses: true,
      tasks: [],
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
        <CardTitle>通知</CardTitle>
        <CardDescription>通知の設定を管理します。</CardDescription>
      </CardHeader>
      <CardContent>
        <Form of={form} id="form-formisch-checkbox" onSubmit={handleSubmit}>
          <FieldGroup>
            <FormischField of={form} path={["responses"]}>
              {(field) => (
                <div>
                  <FieldSet data-invalid={field.errors !== null}>
                    <FieldLegend variant="label">返信</FieldLegend>
                    <FieldDescription>
                      リサーチや画像生成など時間のかかるリクエストで通知を受け取ります。
                    </FieldDescription>
                    <FieldGroup data-slot="checkbox-group">
                      <Field orientation="horizontal">
                        <Checkbox
                          id="form-formisch-checkbox-responses"
                          checked={field.input ?? false}
                          onCheckedChange={(checked) =>
                            field.onChange(checked === true)
                          }
                          disabled
                        />
                        <FieldLabel
                          htmlFor="form-formisch-checkbox-responses"
                          className="font-normal"
                        >
                          プッシュ通知
                        </FieldLabel>
                      </Field>
                    </FieldGroup>
                  </FieldSet>
                  {field.errors && (
                    <FieldError
                      errors={field.errors.map((message) => ({ message }))}
                    />
                  )}
                </div>
              )}
            </FormischField>
            <FieldSeparator />
            <FormischField of={form} path={["tasks"]}>
              {(field) => (
                <FieldGroup>
                  <FieldSet data-invalid={field.errors !== null}>
                    <FieldLegend variant="label">タスク</FieldLegend>
                    <FieldDescription>
                      作成したタスクに更新があるときに通知を受け取ります。
                    </FieldDescription>
                    <FieldGroup data-slot="checkbox-group">
                      {tasks.map((task) => {
                        const current = field.input ?? []
                        return (
                          <Field
                            key={task.id}
                            orientation="horizontal"
                            data-invalid={field.errors !== null}
                          >
                            <Checkbox
                              id={`form-formisch-checkbox-${task.id}`}
                              aria-invalid={field.errors !== null}
                              checked={current.includes(task.id)}
                              onCheckedChange={(checked) => {
                                field.onChange(
                                  checked === true
                                    ? [...current, task.id]
                                    : current.filter(
                                        (value) => value !== task.id
                                      )
                                )
                              }}
                            />
                            <FieldLabel
                              htmlFor={`form-formisch-checkbox-${task.id}`}
                              className="font-normal"
                            >
                              {task.label}
                            </FieldLabel>
                          </Field>
                        )
                      })}
                    </FieldGroup>
                  </FieldSet>
                  {field.errors && (
                    <FieldError
                      errors={field.errors.map((message) => ({ message }))}
                    />
                  )}
                </FieldGroup>
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
          <Button type="submit" form="form-formisch-checkbox">
            保存
          </Button>
        </Field>
      </CardFooter>
    </Card>
  )
}
