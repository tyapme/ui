import { source } from "@/lib/source"
import { DocsSidebar } from "@/components/docs-sidebar"
import { SidebarProvider } from "@/styles/base/ui/sidebar"

export default async function DocsLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params

  return (
    <div className="container-wrapper flex flex-1 flex-col px-2" lang={lang}>
      <SidebarProvider
        className="min-h-min flex-1 items-start px-0 [--top-spacing:0] lg:grid lg:grid-cols-[var(--sidebar-width)_minmax(0,1fr)] lg:[--top-spacing:calc(var(--spacing)*4)] 3xl:fixed:container 3xl:fixed:px-3"
        style={
          {
            "--sidebar-width": "calc(var(--spacing) * 72)",
          } as React.CSSProperties
        }
      >
        <DocsSidebar tree={source.getPageTree(lang)} />
        <div className="h-full w-full">{children}</div>
      </SidebarProvider>
    </div>
  )
}
