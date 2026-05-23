import { Button } from "@/registry/new-york-v4/ui/button"
import {
  ButtonGroup,
  ButtonGroupSeparator,
} from "@/registry/new-york-v4/ui/button-group"

export default function ButtonGroupSeparatorDemo() {
  return (
    <ButtonGroup>
      <Button variant="secondary" size="sm">
        コピー
      </Button>
      <ButtonGroupSeparator />
      <Button variant="secondary" size="sm">
        貼り付け
      </Button>
    </ButtonGroup>
  )
}
