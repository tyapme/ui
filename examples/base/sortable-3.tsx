"use client"

import { useState } from "react"
import { GripVerticalIcon } from "lucide-react"

import {
  Sortable,
  SortableItem,
  SortableItemHandle,
} from "@/styles/base-nova/ui/sortable"
import { Card, CardContent } from "@/styles/base-nova/ui/card"

interface OptionValue {
  id: string
  value: string
}

interface OptionGroup {
  id: string
  name: string
  values: OptionValue[]
}

const defaultOptionGroups: OptionGroup[] = [
  {
    id: "1",
    name: "Colors",
    values: [
      { id: "1-1", value: "White" },
      { id: "1-2", value: "Black" },
      { id: "1-3", value: "Grey" },
      { id: "1-4", value: "Green" },
    ],
  },
  {
    id: "2",
    name: "Sizes",
    values: [
      { id: "2-1", value: "Small" },
      { id: "2-2", value: "Medium" },
      { id: "2-3", value: "Large" },
    ],
  },
  {
    id: "3",
    name: "Materials",
    values: [
      { id: "3-1", value: "Cotton" },
      { id: "3-2", value: "Polyester" },
      { id: "3-3", value: "Wool" },
    ],
  },
]

export function Sortable3() {
  const [optionGroups, setOptionGroups] =
    useState<OptionGroup[]>(defaultOptionGroups)

  const handleChildReorder = (groupId: string, newValues: OptionValue[]) => {
    setOptionGroups((prev) =>
      prev.map((group) =>
        group.id === groupId ? { ...group, values: newValues } : group
      )
    )
  }

  return (
    <div className="mx-auto w-full max-w-sm space-y-6 p-6">
      <Sortable
        value={optionGroups}
        onValueChange={setOptionGroups}
        getItemValue={(group) => group.id}
        strategy="vertical"
        className="space-y-4"
      >
        {optionGroups.map((group) => (
          <SortableItem key={group.id} value={group.id}>
            <Card className="p-2">
              <CardContent className="p-0">
                {/* Group Header */}
                <div className="mb-2 flex items-center gap-2">
                  <SortableItemHandle className="text-muted-foreground hover:text-foreground cursor-grab">
                    <GripVerticalIcon className="h-4 w-4" />
                  </SortableItemHandle>
                  <h3 className="text-sm font-semibold">{group.name}</h3>
                </div>

                {/* Option Values - Child Level */}
                <Sortable
                  value={group.values}
                  onValueChange={(newValues) =>
                    handleChildReorder(group.id, newValues)
                  }
                  getItemValue={(v) => v.id}
                  strategy="vertical"
                  className="space-y-2"
                >
                  {group.values.map((value) => (
                    <SortableItem key={value.id} value={value.id}>
                      <div className="border-border flex items-center gap-2 rounded-md border p-1.5">
                        <SortableItemHandle className="text-muted-foreground hover:text-foreground cursor-grab">
                          <GripVerticalIcon className="h-4 w-4" />
                        </SortableItemHandle>
                        <span className="flex-1 text-sm">{value.value}</span>
                      </div>
                    </SortableItem>
                  ))}
                </Sortable>
              </CardContent>
            </Card>
          </SortableItem>
        ))}
      </Sortable>
    </div>
  )
}
