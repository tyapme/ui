"use client"

import * as React from "react"
import {
  FieldArray,
  Form,
  Field as FormischField,
  insert,
  remove,
  reset,
  useForm,
} from "@formisch/react"
import type { SubmitHandler } from "@formisch/react"
import { XIcon } from "lucide-react"
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
  FieldLegend,
  FieldSet,
} from "@/registry/new-york-v4/ui/field"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/registry/new-york-v4/ui/input-group"

const FormSchema = v.object({
  emails: v.pipe(
    v.array(
      v.object({
        address: v.pipe(
          v.string(),
          v.nonEmpty("メールアドレスを入力してください。"),
          v.email("有効なメールアドレスを入力してください。")
        ),
      })
    ),
    v.minLength(1, "メールアドレスを少なくとも1つ追加してください。"),
    v.maxLength(5, "メールアドレスは最大5つまで登録できます。")
  ),
})

export default function FormFormischArray() {
  const form = useForm({
    schema: FormSchema,
    initialInput: {
      emails: [{ address: "" }, { address: "" }],
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
      <CardHeader className="border-b">
        <CardTitle>連絡先メール</CardTitle>
        <CardDescription>連絡先のメールアドレスを管理します。</CardDescription>
      </CardHeader>
      <CardContent>
        <Form of={form} id="form-formisch-array" onSubmit={handleSubmit}>
          <FieldArray of={form} path={["emails"]}>
            {(fieldArray) => (
              <FieldSet className="gap-4">
                <FieldLegend variant="label">メールアドレス</FieldLegend>
                <FieldDescription>
                  連絡先のメールアドレスを最大5つまで追加できます。
                </FieldDescription>
                <FieldGroup className="gap-4">
                  {fieldArray.items.map((item, index) => (
                    <FormischField
                      key={item}
                      of={form}
                      path={["emails", index, "address"]}
                    >
                      {(field) => (
                        <Field
                          orientation="horizontal"
                          data-invalid={field.errors !== null}
                        >
                          <FieldContent>
                            <InputGroup>
                              <InputGroupInput
                                {...field.props}
                                id={`form-formisch-array-email-${index}`}
                                value={field.input ?? ""}
                                aria-invalid={field.errors !== null}
                                placeholder="name@example.com"
                                type="email"
                                autoComplete="email"
                              />
                              {fieldArray.items.length > 1 && (
                                <InputGroupAddon align="inline-end">
                                  <InputGroupButton
                                    type="button"
                                    variant="ghost"
                                    size="icon-xs"
                                    onClick={() =>
                                      remove(form, {
                                        path: ["emails"],
                                        at: index,
                                      })
                                    }
                                    aria-label={`メール ${index + 1} を削除`}
                                  >
                                    <XIcon />
                                  </InputGroupButton>
                                </InputGroupAddon>
                              )}
                            </InputGroup>
                            {field.errors && (
                              <FieldError
                                errors={field.errors.map((message) => ({
                                  message,
                                }))}
                              />
                            )}
                          </FieldContent>
                        </Field>
                      )}
                    </FormischField>
                  ))}
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() =>
                      insert(form, {
                        path: ["emails"],
                        initialInput: { address: "" },
                      })
                    }
                    disabled={fieldArray.items.length >= 5}
                  >
                    メールアドレスを追加
                  </Button>
                </FieldGroup>
                {fieldArray.errors && (
                  <FieldError
                    errors={fieldArray.errors.map((message) => ({ message }))}
                  />
                )}
              </FieldSet>
            )}
          </FieldArray>
        </Form>
      </CardContent>
      <CardFooter className="border-t">
        <Field orientation="horizontal">
          <Button type="button" variant="outline" onClick={() => reset(form)}>
            リセット
          </Button>
          <Button type="submit" form="form-formisch-array">
            保存
          </Button>
        </Field>
      </CardFooter>
    </Card>
  )
}
