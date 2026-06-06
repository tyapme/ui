import * as React from "react"

import { cn } from "@/registry/bases/base/lib/utils"
import { Button } from "@/registry/ui/button"
import { IconPlaceholder } from "@/app/(create)/components/icon-placeholder"

/* Active page fades in when it first appears (e.g. on navigation) */
const ACTIVE_CSS = `
[data-slot="pagination-link"][data-active="true"] {
  transition:
    background-color 180ms cubic-bezier(0.22, 1, 0.36, 1),
    color 180ms cubic-bezier(0.22, 1, 0.36, 1);
}
@starting-style {
  [data-slot="pagination-link"][data-active="true"] {
    background-color: transparent;
    color: inherit;
  }
}
@media (prefers-reduced-motion: reduce) {
  [data-slot="pagination-link"][data-active="true"] { transition: none !important; }
}
`

function Pagination({ className, ...props }: React.ComponentProps<"nav">) {
  return (
    <>
      <style href="pagination-active" precedence="component">{ACTIVE_CSS}</style>
      <nav
        role="navigation"
        aria-label="pagination"
        data-slot="pagination"
        className={cn(
          "cn-pagination mx-auto flex w-full justify-center",
          className
        )}
        {...props}
      />
    </>
  )
}

function PaginationContent({
  className,
  ...props
}: React.ComponentProps<"ul">) {
  return (
    <ul
      data-slot="pagination-content"
      className={cn("cn-pagination-content flex items-center gap-1", className)}
      {...props}
    />
  )
}

function PaginationItem({ ...props }: React.ComponentProps<"li">) {
  return <li data-slot="pagination-item" {...props} />
}

type PaginationLinkProps = {
  isActive?: boolean
} & Pick<React.ComponentProps<typeof Button>, "size"> &
  React.ComponentProps<"a">

function PaginationLink({
  className,
  isActive,
  size = "icon",
  ...props
}: PaginationLinkProps) {
  return (
    <Button
      variant="ghost"
      size={size}
      className={cn("cn-pagination-link", isActive && "bg-muted! font-medium", className)}
      nativeButton={false}
      render={
        <a
          aria-current={isActive ? "page" : undefined}
          data-slot="pagination-link"
          data-active={isActive}
          {...props}
        />
      }
    />
  )
}

function PaginationPrevious({
  className,
  text: _text = "Previous",
  ...props
}: React.ComponentProps<typeof PaginationLink> & { text?: string }) {
  return (
    <PaginationLink
      aria-label="Go to previous page"
      size="icon"
      className={cn("cn-pagination-previous", className)}
      {...props}
    >
      <IconPlaceholder
        lucide="ChevronLeftIcon"
        tabler="IconChevronLeft"
        hugeicons="ArrowLeft01Icon"
        phosphor="CaretLeftIcon"
        remixicon="RiArrowLeftSLine"
        className="cn-rtl-flip"
      />
    </PaginationLink>
  )
}

function PaginationNext({
  className,
  text: _text = "Next",
  ...props
}: React.ComponentProps<typeof PaginationLink> & { text?: string }) {
  return (
    <PaginationLink
      aria-label="Go to next page"
      size="icon"
      className={cn("cn-pagination-next", className)}
      {...props}
    >
      <IconPlaceholder
        lucide="ChevronRightIcon"
        tabler="IconChevronRight"
        hugeicons="ArrowRight01Icon"
        phosphor="CaretRightIcon"
        remixicon="RiArrowRightSLine"
        className="cn-rtl-flip"
      />
    </PaginationLink>
  )
}

function PaginationEllipsis({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      aria-hidden
      data-slot="pagination-ellipsis"
      className={cn(
        "cn-pagination-ellipsis text-muted-foreground flex size-9 items-center justify-center",
        className
      )}
      {...props}
    >
      <IconPlaceholder
        lucide="MoreHorizontalIcon"
        tabler="IconDots"
        hugeicons="MoreHorizontalCircle01Icon"
        phosphor="DotsThreeIcon"
        remixicon="RiMoreLine"
      />
      <span className="sr-only">More pages</span>
    </span>
  )
}

export {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
}
