import type { Locale } from "date-fns"
import {
  ar,
  de,
  enUS,
  es,
  fr,
  it,
  ja,
  ko,
  ptBR,
  ru,
  zhCN,
  zhTW,
} from "date-fns/locale"

const LOCALE_MAP: Record<string, Locale> = {
  ar: ar,
  "ar-SA": ar,
  de: de,
  en: enUS,
  "en-US": enUS,
  "en-GB": enUS,
  es: es,
  fr: fr,
  it: it,
  ja: ja,
  "ja-JP": ja,
  ko: ko,
  "ko-KR": ko,
  pt: ptBR,
  "pt-BR": ptBR,
  ru: ru,
  zh: zhCN,
  "zh-CN": zhCN,
  "zh-TW": zhTW,
}

export function getDateFnsLocale(locale: string): Locale {
  return (
    LOCALE_MAP[locale] ??
    LOCALE_MAP[locale.split("-")[0]] ??
    enUS
  )
}
