import { PlusIcon } from "lucide-react"

import { Button } from "@/registry/new-york-v4/ui/button"
import { ButtonGroup } from "@/registry/new-york-v4/ui/button-group"

export default function ButtonGroupSize() {
  return (
    <div className="flex flex-col items-start gap-8">
      <ButtonGroup>
        <Button variant="outline" size="sm">
          小
        </Button>
        <Button variant="outline" size="sm">
          ボタン
        </Button>
        <Button variant="outline" size="sm">
          グループ
        </Button>
        <Button variant="outline" size="icon-sm">
          <PlusIcon />
        </Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button variant="outline">デフォルト</Button>
        <Button variant="outline">ボタン</Button>
        <Button variant="outline">グループ</Button>
        <Button variant="outline" size="icon">
          <PlusIcon />
        </Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button variant="outline" size="lg">
          大
        </Button>
        <Button variant="outline" size="lg">
          ボタン
        </Button>
        <Button variant="outline" size="lg">
          グループ
        </Button>
        <Button variant="outline" size="icon-lg">
          <PlusIcon />
        </Button>
      </ButtonGroup>
    </div>
  )
}
