import type { SVGProps } from "react"

type IconPlaceholderProps = SVGProps<SVGSVGElement> & {
  hugeicons?: string
  library?: string
  lucide?: string
  name?: string
  phosphor?: string
  remixicon?: string
  tabler?: string
}

export function IconPlaceholder({
  hugeicons: _hugeicons,
  library: _library,
  lucide: _lucide,
  name: _name,
  phosphor: _phosphor,
  remixicon: _remixicon,
  tabler: _tabler,
  ...props
}: IconPlaceholderProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M4 4h16v16H4z" />
      <path d="M9 9h6v6H9z" />
    </svg>
  )
}
