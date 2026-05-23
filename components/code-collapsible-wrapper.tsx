"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/styles/base/ui/collapsible"

import { Button } from "@/styles/base/ui/button"

interface CodeCollapsibleWrapperProps extends React.ComponentPropsWithoutRef<typeof Collapsible> {
  expandButtonTitle?: string
}

export function CodeCollapsibleWrapper({
  className,
  children,
  expandButtonTitle = "コードを表示",
  ...props
}: CodeCollapsibleWrapperProps) {
  const [isOpened, setIsOpened] = React.useState(false)

  return (
    <Collapsible
      open={isOpened}
      onOpenChange={setIsOpened}
      className={cn("relative overflow-hidden my-6 rounded-xl border bg-code text-code-foreground md:-mx-1", className)}
      {...props}
    >
      <CollapsibleContent
        forceMount
        className={cn(
          "relative overflow-hidden [&_pre]:my-0 [&_pre]:max-h-none [&_pre]:pb-12",
          !isOpened && "max-h-32"
        )}
      >
        {children}
      </CollapsibleContent>
      <div
        className={cn(
          "absolute flex items-center justify-center p-2",
          isOpened
            ? "inset-x-0 bottom-0 h-12 bg-gradient-to-t from-code to-transparent"
            : "inset-0 bg-gradient-to-t from-code/95 via-code/50 to-transparent"
        )}
      >
        <CollapsibleTrigger asChild>
          <Button
            type="button"
            size="sm"
            variant="outline"
            className="relative z-10 rounded-lg bg-background text-foreground shadow-none hover:bg-muted dark:bg-background dark:text-foreground dark:hover:bg-muted"
          >
            {isOpened ? "コードを非表示" : expandButtonTitle}
          </Button>
        </CollapsibleTrigger>
      </div>
    </Collapsible>
  )
}

