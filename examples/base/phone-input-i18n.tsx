"use client"

import * as React from "react"
import ar from "react-phone-number-input/locale/ar.json"
import de from "react-phone-number-input/locale/de.json"
import en from "react-phone-number-input/locale/en.json"
import es from "react-phone-number-input/locale/es.json"
import fr from "react-phone-number-input/locale/fr.json"
import ja from "react-phone-number-input/locale/ja.json"
import ko from "react-phone-number-input/locale/ko.json"
import pt from "react-phone-number-input/locale/pt.json"
import ru from "react-phone-number-input/locale/ru.json"
import zh from "react-phone-number-input/locale/zh.json"

import { PhoneInput } from "@/styles/base/ui/phone-input"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/styles/base/ui/select"

type Dir = "ltr" | "rtl"

const LANGUAGES: {
  value: string
  label: string
  dir: Dir
  country: "US" | "JP" | "CN" | "KR" | "ES" | "FR" | "DE" | "BR" | "RU" | "EG"
  labels: Record<string, string>
  search: string
  noResults: string
  placeholder: string
}[] = [
  { value: "en", label: "English", dir: "ltr", country: "US", labels: en, search: "Search country…", noResults: "No country found.", placeholder: "Enter phone number" },
  { value: "ja", label: "日本語", dir: "ltr", country: "JP", labels: ja, search: "国を検索…", noResults: "該当する国がありません。", placeholder: "電話番号を入力" },
  { value: "zh", label: "中文（简体）", dir: "ltr", country: "CN", labels: zh, search: "搜索国家/地区…", noResults: "未找到国家/地区。", placeholder: "输入电话号码" },
  { value: "ko", label: "한국어", dir: "ltr", country: "KR", labels: ko, search: "국가 검색…", noResults: "국가를 찾을 수 없습니다.", placeholder: "전화번호 입력" },
  { value: "es", label: "Español", dir: "ltr", country: "ES", labels: es, search: "Buscar país…", noResults: "No se encontró ningún país.", placeholder: "Introduce el número" },
  { value: "fr", label: "Français", dir: "ltr", country: "FR", labels: fr, search: "Rechercher un pays…", noResults: "Aucun pays trouvé.", placeholder: "Saisir le numéro" },
  { value: "de", label: "Deutsch", dir: "ltr", country: "DE", labels: de, search: "Land suchen…", noResults: "Kein Land gefunden.", placeholder: "Telefonnummer eingeben" },
  { value: "pt", label: "Português", dir: "ltr", country: "BR", labels: pt, search: "Buscar país…", noResults: "Nenhum país encontrado.", placeholder: "Digite o número" },
  { value: "ru", label: "Русский", dir: "ltr", country: "RU", labels: ru, search: "Поиск страны…", noResults: "Страна не найдена.", placeholder: "Введите номер" },
  { value: "ar", label: "العربية", dir: "rtl", country: "EG", labels: ar, search: "ابحث عن دولة…", noResults: "لم يتم العثور على دولة.", placeholder: "أدخل رقم الهاتف" },
]

export default function PhoneInputI18n() {
  const [lang, setLang] = React.useState("en")
  const [value, setValue] = React.useState("")
  const current = LANGUAGES.find((l) => l.value === lang) ?? LANGUAGES[0]

  return (
    <div className="flex w-full max-w-xs flex-col gap-4">
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

      <div dir={current.dir}>
        <PhoneInput
          key={current.value}
          labels={current.labels}
          defaultCountry={current.country}
          placeholder={current.placeholder}
          messages={{ searchPlaceholder: current.search, noResults: current.noResults }}
          value={value}
          onChange={(v) => setValue(v)}
        />
      </div>
    </div>
  )
}
