"use client"

import * as React from "react"
import { IconMinus, IconPlus } from "@tabler/icons-react"

import { Button } from "@/styles/base-nova/ui/button"
import { ButtonGroup } from "@/styles/base-nova/ui/button-group"
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  FieldTitle,
} from "@/styles/base-nova/ui/field"
import { Input } from "@/styles/base-nova/ui/input"
import { RadioGroup, RadioGroupItem } from "@/styles/base-nova/ui/radio-group"
import { Switch } from "@/styles/base-nova/ui/switch"

export function AppearanceSettings() {
  const [gpuCount, setGpuCount] = React.useState(8)

  const handleGpuAdjustment = React.useCallback((adjustment: number) => {
    setGpuCount((prevCount) =>
      Math.max(1, Math.min(99, prevCount + adjustment))
    )
  }, [])

  const handleGpuInputChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = parseInt(e.target.value, 10)
      if (!isNaN(value) && value >= 1 && value <= 99) {
        setGpuCount(value)
      }
    },
    []
  )

  return (
    <FieldSet>
      <FieldGroup>
        <FieldSet>
          <FieldLegend>コンピュート環境</FieldLegend>
          <FieldDescription>
            クラスターのコンピュート環境を選択してください。
          </FieldDescription>
          <RadioGroup defaultValue="kubernetes">
            <FieldLabel htmlFor="kubernetes-r2h">
              <Field orientation="horizontal">
                <FieldContent>
                  <FieldTitle>Kubernetes</FieldTitle>
                  <FieldDescription>
                    K8s構成のクラスターでGPUワークロードを実行します。デフォルト設定です。
                  </FieldDescription>
                </FieldContent>
                <RadioGroupItem
                  value="kubernetes"
                  id="kubernetes-r2h"
                  aria-label="Kubernetes"
                />
              </Field>
            </FieldLabel>
            <FieldLabel htmlFor="vm-z4k">
              <Field orientation="horizontal">
                <FieldContent>
                  <FieldTitle>仮想マシン</FieldTitle>
                  <FieldDescription>
                    VM構成のクラスターでワークロードを実行します。（準備中）
                  </FieldDescription>
                </FieldContent>
                <RadioGroupItem
                  value="vm"
                  id="vm-z4k"
                  aria-label="仮想マシン"
                />
              </Field>
            </FieldLabel>
          </RadioGroup>
        </FieldSet>
        <FieldSeparator />
        <Field orientation="horizontal">
          <FieldContent>
            <FieldLabel htmlFor="number-of-gpus-f6l">GPU数</FieldLabel>
            <FieldDescription>後から追加することもできます。</FieldDescription>
          </FieldContent>
          <ButtonGroup>
            <Input
              id="number-of-gpus-f6l"
              value={gpuCount}
              onChange={handleGpuInputChange}
              size={3}
              className="h-7 w-14! font-mono"
              maxLength={3}
            />
            <Button
              variant="outline"
              size="icon-sm"
              type="button"
              aria-label="減算"
              onClick={() => handleGpuAdjustment(-1)}
              disabled={gpuCount <= 1}
            >
              <IconMinus />
            </Button>
            <Button
              variant="outline"
              size="icon-sm"
              type="button"
              aria-label="加算"
              onClick={() => handleGpuAdjustment(1)}
              disabled={gpuCount >= 99}
            >
              <IconPlus />
            </Button>
          </ButtonGroup>
        </Field>
        <FieldSeparator />
        <Field orientation="horizontal">
          <FieldContent>
            <FieldLabel htmlFor="tinting">壁紙の色灰色化</FieldLabel>
            <FieldDescription>
              壁紙にティントを適用します。
            </FieldDescription>
          </FieldContent>
          <Switch id="tinting" defaultChecked />
        </Field>
      </FieldGroup>
    </FieldSet>
  )
}
