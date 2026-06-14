"use client"

import { useState } from "react"

import {
  Example,
  ExampleWrapper,
} from "@/registry/bases/base/components/example"
import {
  createFilter,
  Filters,
  type Filter,
  type FilterFieldConfig,
} from "@/registry/ui/filters"

const fields: FilterFieldConfig[] = [
  {
    key: "status",
    label: "ステータス",
    type: "multiselect",
    options: [
      { value: "todo", label: "未着手" },
      { value: "in_progress", label: "進行中" },
      { value: "done", label: "完了" },
    ],
  },
  {
    key: "priority",
    label: "優先度",
    type: "multiselect",
    options: [
      { value: "high", label: "高" },
      { value: "medium", label: "中" },
      { value: "low", label: "低" },
    ],
  },
]

const i18n = {
  addFilter: "フィルター追加",
  searchFields: "フィルター検索...",
  noFieldsFound: "フィルターが見つかりません。",
  noResultsFound: "結果がありません。",
  select: "選択...",
  selectedCount: "件選択",
  operators: {
    isAnyOf: "いずれか",
    isNotAnyOf: "いずれでもない",
    includesAll: "すべて含む",
    excludesAll: "すべて除く",
    empty: "空",
    notEmpty: "空でない",
    is: "が",
    isNot: "でない",
    contains: "を含む",
    notContains: "を含まない",
    startsWith: "で始まる",
    endsWith: "で終わる",
    isExactly: "と完全一致",
    before: "より前",
    after: "より後",
    between: "の間",
    notBetween: "の間以外",
    equals: "等しい",
    notEquals: "等しくない",
    greaterThan: "より大きい",
    lessThan: "より小さい",
    overlaps: "重なる",
    includes: "含む",
    excludes: "除く",
    includesAllOf: "すべて含む",
    includesAnyOf: "いずれか含む",
  },
}

export default function FiltersI18nExample() {
  const [filters, setFilters] = useState<Filter[]>([
    createFilter("status", "is_any_of", ["in_progress"]),
  ])

  return (
    <ExampleWrapper>
      <Example className="items-start p-4">
        <Filters filters={filters} fields={fields} onChange={setFilters} i18n={i18n} />
      </Example>
    </ExampleWrapper>
  )
}
