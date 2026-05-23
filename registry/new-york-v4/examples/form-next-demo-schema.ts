import { z } from "zod"

export const formSchema = z.object({
  title: z
    .string()
    .min(5, "バグタイトルは5文字以上で入力してください。")
    .max(32, "バグタイトルは32文字以内で入力してください。"),
  description: z
    .string()
    .min(20, "説明は20文字以上で入力してください。")
    .max(100, "説明は100文字以内で入力してください。"),
})

export type FormState = {
  values: z.infer<typeof formSchema>
  errors: null | Partial<Record<keyof z.infer<typeof formSchema>, string[]>>
  success: boolean
}
