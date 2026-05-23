import { z } from "zod"

export const formSchema = z.object({
  plan: z
    .string({
      required_error: "サブスクリプションプランを選択してください",
    })
    .min(1, "サブスクリプションプランを選択してください")
    .refine((value) => value === "basic" || value === "pro", {
      message: "無効なプラン選択です。BasicまたはProを選んでください",
    }),
  billingPeriod: z
    .string({
      required_error: "課金期間を選択してください",
    })
    .min(1, "課金期間を選択してください"),
  addons: z
    .array(z.string())
    .min(1, "アドオンを少なくとも1つ選択してください")
    .max(3, "アドオンは最大3つまで選択できます")
    .refine(
      (value) => value.every((addon) => addons.some((a) => a.id === addon)),
      {
        message: "無効なアドオンが選択されています",
      }
    ),
  emailNotifications: z.boolean(),
})

export type FormState = {
  values: z.infer<typeof formSchema>
  errors: null | Partial<Record<keyof z.infer<typeof formSchema>, string[]>>
  success: boolean
}

export const addons = [
  {
    id: "analytics",
    title: "分析",
    description: "高度な分析とレポート",
  },
  {
    id: "backup",
    title: "バックアップ",
    description: "毎日自動バックアップ",
  },
  {
    id: "support",
    title: "優先サポート",
    description: "24時間365日のプレミアムサポート",
  },
] as const
