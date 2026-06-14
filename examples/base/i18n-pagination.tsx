"use client"

import * as React from "react"

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/styles/base/ui/pagination"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/styles/base/ui/select"

type Dir = "ltr" | "rtl"

type Strings = {
  prev: string
  next: string
  /** Visible status caption, e.g. "Page 2 of 10". */
  summary: (page: string, total: string) => string
}

const LANGUAGES: {
  value: string
  label: string
  dir: Dir
  locale: string
  t: Strings
}[] = [
  {
    value: "en",
    label: "English",
    dir: "ltr",
    locale: "en-US",
    t: { prev: "Previous", next: "Next", summary: (p, n) => `Page ${p} of ${n}` },
  },
  {
    value: "ja",
    label: "日本語",
    dir: "ltr",
    locale: "ja-JP",
    t: { prev: "前へ", next: "次へ", summary: (p, n) => `${n}ページ中 ${p}ページ目` },
  },
  {
    value: "zh",
    label: "中文（简体）",
    dir: "ltr",
    locale: "zh-CN",
    t: { prev: "上一页", next: "下一页", summary: (p, n) => `第 ${p} 页，共 ${n} 页` },
  },
  {
    value: "ko",
    label: "한국어",
    dir: "ltr",
    locale: "ko-KR",
    t: { prev: "이전", next: "다음", summary: (p, n) => `${n}페이지 중 ${p}페이지` },
  },
  {
    value: "es",
    label: "Español",
    dir: "ltr",
    locale: "es-ES",
    t: { prev: "Anterior", next: "Siguiente", summary: (p, n) => `Página ${p} de ${n}` },
  },
  {
    value: "fr",
    label: "Français",
    dir: "ltr",
    locale: "fr-FR",
    t: { prev: "Précédent", next: "Suivant", summary: (p, n) => `Page ${p} sur ${n}` },
  },
  {
    value: "de",
    label: "Deutsch",
    dir: "ltr",
    locale: "de-DE",
    t: { prev: "Zurück", next: "Weiter", summary: (p, n) => `Seite ${p} von ${n}` },
  },
  {
    value: "pt",
    label: "Português",
    dir: "ltr",
    locale: "pt-BR",
    t: { prev: "Anterior", next: "Próximo", summary: (p, n) => `Página ${p} de ${n}` },
  },
  {
    value: "ru",
    label: "Русский",
    dir: "ltr",
    locale: "ru-RU",
    t: { prev: "Назад", next: "Вперёд", summary: (p, n) => `Страница ${p} из ${n}` },
  },
  {
    value: "ar",
    label: "العربية",
    dir: "rtl",
    locale: "ar-EG",
    t: { prev: "السابق", next: "التالي", summary: (p, n) => `صفحة ${p} من ${n}` },
  },
]

const PAGE = 2
const TOTAL = 10

export default function I18nPagination() {
  const [lang, setLang] = React.useState("en")
  const current = LANGUAGES.find((l) => l.value === lang) ?? LANGUAGES[0]
  const { dir, locale, t } = current

  const nf = new Intl.NumberFormat(locale)
  const num = (n: number) => nf.format(n)

  return (
    <div className="flex w-full max-w-xl flex-col gap-4">
      <Select items={LANGUAGES} value={lang} onValueChange={(v) => setLang(v as string)}>
        <SelectTrigger size="sm" className="w-44" dir="ltr">
          <SelectValue />
        </SelectTrigger>
        <SelectContent dir="ltr">
          <SelectGroup>
            {LANGUAGES.map((l) => (
              <SelectItem key={l.value} value={l.value}>
                {l.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>

      <div dir={dir} className="flex flex-col items-center gap-3">
        <p className="text-sm text-muted-foreground">
          {t.summary(num(PAGE), num(TOTAL))}
        </p>
        <Pagination dir={dir}>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" aria-label={t.prev} />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">{num(1)}</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>
                {num(2)}
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">{num(3)}</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">{num(TOTAL)}</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" aria-label={t.next} />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  )
}
