import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { NotFoundContent } from "@/components/not-found-content"

// Root boundary for fully-unmatched URLs. The root layout has no chrome, so the
// header/footer shell is mirrored here to match the rest of the app.
export default function NotFound() {
  return (
    <div
      data-slot="layout"
      className="group/layout relative z-10 flex min-h-svh flex-col bg-background"
    >
      <SiteHeader />
      <main className="flex min-h-0 flex-1 flex-col">
        <NotFoundContent />
      </main>
      <SiteFooter />
    </div>
  )
}
