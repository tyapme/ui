"use client"

import { useState } from "react"
import { CircleIcon, FlagIcon, UserIcon } from "lucide-react"

import {
  createFilter,
  Filters,
  type Filter,
  type FilterFieldConfig,
  type FilterI18nConfig,
} from "@/styles/base/ui/filters"

const fields: FilterFieldConfig[] = [
  {
    key: "status",
    label: "ステータス",
    type: "multiselect",
    icon: <CircleIcon className="size-4" />,
    options: [
      { value: "backlog", label: "バックログ" },
      { value: "in_progress", label: "対応中" },
      { value: "done", label: "完了" },
    ],
  },
  {
    key: "priority",
    label: "優先度",
    type: "select",
    icon: <FlagIcon className="size-4" />,
    options: [
      { value: "high", label: "高" },
      { value: "medium", label: "中" },
      { value: "low", label: "低" },
    ],
  },
  {
    key: "assignee",
    label: "担当者",
    type: "text",
    icon: <UserIcon className="size-4" />,
    placeholder: "名前で検索...",
  },
]

const i18n: Partial<FilterI18nConfig> = {
  addFilter: "フィルター",
  searchFields: "フィルターを検索...",
  noFieldsFound: "該当するフィルターがありません。",
  noResultsFound: "結果がありません。",
  select: "選択...",
  operators: {
    is: "が次に等しい",
    isNot: "が次に等しくない",
    isAnyOf: "がいずれか",
    isNotAnyOf: "がいずれでもない",
    contains: "を含む",
    notContains: "を含まない",
    startsWith: "で始まる",
    endsWith: "で終わる",
    empty: "が空",
    notEmpty: "が空でない",
  } as FilterI18nConfig["operators"],
}

export default function FiltersI18n() {
  const [filters, setFilters] = useState<Filter[]>([
    createFilter("status", "is_any_of", ["in_progress"]),
  ])

  return (
    <Filters
      filters={filters}
      fields={fields}
      onChange={setFilters}
      i18n={i18n}
      radius="full"
    />
  )
}
