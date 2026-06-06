"use client"

import { useLanguageContext } from "@/components/language-selector"
import { Badge } from "@/styles/base/ui-rtl/badge"
import { Spinner } from "@/styles/base/ui-rtl/spinner"

const translations = {
  ar: {
    dir: "rtl" as const,
    syncing: "جارٍ المزامنة",
    updating: "جارٍ التحديث",
    loading: "جارٍ التحميل",
  },
  he: {
    dir: "rtl" as const,
    syncing: "מסנכרן",
    updating: "מעדכן",
    loading: "טוען",
  },
}

export function SpinnerBadge() {
  const context = useLanguageContext()
  const lang = context?.language === "he" ? "he" : "ar"
  const t = translations[lang]

  return (
    <div dir={t.dir} className="flex items-center gap-2">
      <Badge>
        <Spinner className="size-3" />
        {t.syncing}
      </Badge>
      <Badge variant="secondary">
        <Spinner className="size-3" />
        {t.updating}
      </Badge>
      <Badge variant="outline">
        <Spinner className="size-3" />
        {t.loading}
      </Badge>
    </div>
  )
}
