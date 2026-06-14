"use client"

import * as React from "react"
import { CircleIcon, FlagIcon } from "lucide-react"

import {
  createFilter,
  Filters,
  type Filter,
  type FilterFieldConfig,
  type FilterI18nConfig,
} from "@/styles/base/ui/filters"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/styles/base/ui/select"

type Dir = "ltr" | "rtl"

const LANGUAGES: { value: string; label: string; dir: Dir }[] = [
  { value: "en", label: "English", dir: "ltr" },
  { value: "ja", label: "日本語", dir: "ltr" },
  { value: "zh", label: "中文（简体）", dir: "ltr" },
  { value: "ko", label: "한국어", dir: "ltr" },
  { value: "es", label: "Español", dir: "ltr" },
  { value: "fr", label: "Français", dir: "ltr" },
  { value: "de", label: "Deutsch", dir: "ltr" },
  { value: "pt", label: "Português", dir: "ltr" },
  { value: "ru", label: "Русский", dir: "ltr" },
  { value: "ar", label: "العربية", dir: "rtl" },
]

type Strings = {
  filter: string
  search: string
  noFilters: string
  noResults: string
  select: string
  /** Word after the count, e.g. the "selected" in "2 selected". */
  selectedCount: string
  /** Placeholder for the option search box inside a select popover. */
  searchField: (name: string) => string
  op: {
    is: string
    isNot: string
    isAnyOf: string
    isNotAnyOf: string
    empty: string
    notEmpty: string
  }
  status: string
  priority: string
  backlog: string
  inProgress: string
  done: string
  high: string
  medium: string
  low: string
}

const T: Record<string, Strings> = {
  en: {
    filter: "Filter",
    search: "Filter...",
    noFilters: "No filters found.",
    noResults: "No results found.",
    select: "Select...",
    selectedCount: "selected",
    searchField: (n) => `Search ${n.toLowerCase()}...`,
    op: {
      is: "is",
      isNot: "is not",
      isAnyOf: "is any of",
      isNotAnyOf: "is not any of",
      empty: "is empty",
      notEmpty: "is not empty",
    },
    status: "Status",
    priority: "Priority",
    backlog: "Backlog",
    inProgress: "In Progress",
    done: "Done",
    high: "High",
    medium: "Medium",
    low: "Low",
  },
  ja: {
    filter: "フィルター",
    search: "フィルターを検索...",
    noFilters: "フィルターが見つかりません。",
    noResults: "結果が見つかりません。",
    select: "選択...",
    selectedCount: "件選択",
    searchField: (n) => `${n}を検索...`,
    op: {
      is: "が一致",
      isNot: "が不一致",
      isAnyOf: "のいずれか",
      isNotAnyOf: "のいずれでもない",
      empty: "が空",
      notEmpty: "が空でない",
    },
    status: "ステータス",
    priority: "優先度",
    backlog: "バックログ",
    inProgress: "対応中",
    done: "完了",
    high: "高",
    medium: "中",
    low: "低",
  },
  zh: {
    filter: "筛选",
    search: "搜索筛选条件...",
    noFilters: "未找到筛选条件。",
    noResults: "未找到结果。",
    select: "选择...",
    selectedCount: "项已选",
    searchField: (n) => `搜索${n}...`,
    op: {
      is: "等于",
      isNot: "不等于",
      isAnyOf: "是其中之一",
      isNotAnyOf: "不是其中任何一个",
      empty: "为空",
      notEmpty: "不为空",
    },
    status: "状态",
    priority: "优先级",
    backlog: "待办",
    inProgress: "进行中",
    done: "已完成",
    high: "高",
    medium: "中",
    low: "低",
  },
  ko: {
    filter: "필터",
    search: "필터 검색...",
    noFilters: "필터를 찾을 수 없습니다.",
    noResults: "결과를 찾을 수 없습니다.",
    select: "선택...",
    selectedCount: "개 선택됨",
    searchField: (n) => `${n} 검색...`,
    op: {
      is: "일치",
      isNot: "불일치",
      isAnyOf: "다음 중 하나",
      isNotAnyOf: "다음 중 어느 것도 아님",
      empty: "비어 있음",
      notEmpty: "비어 있지 않음",
    },
    status: "상태",
    priority: "우선순위",
    backlog: "백로그",
    inProgress: "진행 중",
    done: "완료",
    high: "높음",
    medium: "보통",
    low: "낮음",
  },
  es: {
    filter: "Filtro",
    search: "Buscar filtro...",
    noFilters: "No se encontraron filtros.",
    noResults: "No se encontraron resultados.",
    select: "Seleccionar...",
    selectedCount: "seleccionados",
    searchField: (n) => `Buscar ${n.toLowerCase()}...`,
    op: {
      is: "es",
      isNot: "no es",
      isAnyOf: "es cualquiera de",
      isNotAnyOf: "no es ninguno de",
      empty: "está vacío",
      notEmpty: "no está vacío",
    },
    status: "Estado",
    priority: "Prioridad",
    backlog: "Pendiente",
    inProgress: "En curso",
    done: "Hecho",
    high: "Alta",
    medium: "Media",
    low: "Baja",
  },
  fr: {
    filter: "Filtre",
    search: "Rechercher un filtre...",
    noFilters: "Aucun filtre trouvé.",
    noResults: "Aucun résultat trouvé.",
    select: "Sélectionner...",
    selectedCount: "sélectionnés",
    searchField: (n) => `Rechercher ${n.toLowerCase()}...`,
    op: {
      is: "est",
      isNot: "n'est pas",
      isAnyOf: "est l'un de",
      isNotAnyOf: "n'est aucun de",
      empty: "est vide",
      notEmpty: "n'est pas vide",
    },
    status: "Statut",
    priority: "Priorité",
    backlog: "À faire",
    inProgress: "En cours",
    done: "Terminé",
    high: "Élevée",
    medium: "Moyenne",
    low: "Faible",
  },
  de: {
    filter: "Filter",
    search: "Filter suchen...",
    noFilters: "Keine Filter gefunden.",
    noResults: "Keine Ergebnisse gefunden.",
    select: "Auswählen...",
    selectedCount: "ausgewählt",
    searchField: (n) => `${n} suchen...`,
    op: {
      is: "ist",
      isNot: "ist nicht",
      isAnyOf: "ist eines von",
      isNotAnyOf: "ist keines von",
      empty: "ist leer",
      notEmpty: "ist nicht leer",
    },
    status: "Status",
    priority: "Priorität",
    backlog: "Backlog",
    inProgress: "In Bearbeitung",
    done: "Erledigt",
    high: "Hoch",
    medium: "Mittel",
    low: "Niedrig",
  },
  pt: {
    filter: "Filtro",
    search: "Buscar filtro...",
    noFilters: "Nenhum filtro encontrado.",
    noResults: "Nenhum resultado encontrado.",
    select: "Selecionar...",
    selectedCount: "selecionados",
    searchField: (n) => `Buscar ${n.toLowerCase()}...`,
    op: {
      is: "é",
      isNot: "não é",
      isAnyOf: "é qualquer um de",
      isNotAnyOf: "não é nenhum de",
      empty: "está vazio",
      notEmpty: "não está vazio",
    },
    status: "Status",
    priority: "Prioridade",
    backlog: "Pendente",
    inProgress: "Em andamento",
    done: "Concluído",
    high: "Alta",
    medium: "Média",
    low: "Baixa",
  },
  ru: {
    filter: "Фильтр",
    search: "Поиск фильтра...",
    noFilters: "Фильтры не найдены.",
    noResults: "Результаты не найдены.",
    select: "Выбрать...",
    selectedCount: "выбрано",
    searchField: (n) => `Поиск: ${n.toLowerCase()}...`,
    op: {
      is: "равно",
      isNot: "не равно",
      isAnyOf: "любое из",
      isNotAnyOf: "ни одно из",
      empty: "пусто",
      notEmpty: "не пусто",
    },
    status: "Статус",
    priority: "Приоритет",
    backlog: "Бэклог",
    inProgress: "В работе",
    done: "Готово",
    high: "Высокий",
    medium: "Средний",
    low: "Низкий",
  },
  ar: {
    filter: "تصفية",
    search: "بحث في عوامل التصفية...",
    noFilters: "لا توجد عوامل تصفية.",
    noResults: "لا توجد نتائج.",
    select: "اختر...",
    selectedCount: "محدد",
    searchField: (n) => `بحث في ${n}...`,
    op: {
      is: "يساوي",
      isNot: "لا يساوي",
      isAnyOf: "أي من",
      isNotAnyOf: "ليس أيًا من",
      empty: "فارغ",
      notEmpty: "غير فارغ",
    },
    status: "الحالة",
    priority: "الأولوية",
    backlog: "قائمة الانتظار",
    inProgress: "قيد التنفيذ",
    done: "مكتمل",
    high: "عالية",
    medium: "متوسطة",
    low: "منخفضة",
  },
}

export default function I18nFilters() {
  const [lang, setLang] = React.useState("en")
  const current = LANGUAGES.find((l) => l.value === lang) ?? LANGUAGES[0]
  const t = T[lang]

  const i18n: Partial<FilterI18nConfig> = {
    addFilter: t.filter,
    searchFields: t.search,
    noFieldsFound: t.noFilters,
    noResultsFound: t.noResults,
    select: t.select,
    selected: t.selectedCount,
    selectedCount: t.selectedCount,
    operators: {
      is: t.op.is,
      isNot: t.op.isNot,
      isAnyOf: t.op.isAnyOf,
      isNotAnyOf: t.op.isNotAnyOf,
      empty: t.op.empty,
      notEmpty: t.op.notEmpty,
    } as FilterI18nConfig["operators"],
    placeholders: {
      searchField: t.searchField,
    } as FilterI18nConfig["placeholders"],
  }

  const fields: FilterFieldConfig[] = [
    {
      key: "status",
      label: t.status,
      type: "multiselect",
      icon: <CircleIcon className="size-4" />,
      options: [
        { value: "backlog", label: t.backlog },
        { value: "in_progress", label: t.inProgress },
        { value: "done", label: t.done },
      ],
    },
    {
      key: "priority",
      label: t.priority,
      type: "select",
      icon: <FlagIcon className="size-4" />,
      options: [
        { value: "high", label: t.high },
        { value: "medium", label: t.medium },
        { value: "low", label: t.low },
      ],
    },
  ]

  const [filters, setFilters] = React.useState<Filter[]>([
    createFilter("status", "is_any_of", ["backlog", "in_progress"]),
    createFilter("priority", "is", ["high"]),
  ])

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

      <div dir={current.dir}>
        <Filters
          filters={filters}
          fields={fields}
          onChange={setFilters}
          i18n={i18n}
          radius="full"
        />
      </div>
    </div>
  )
}
