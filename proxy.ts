import { NextResponse, type NextRequest } from "next/server"

import { i18n } from "@/lib/i18n"

const PREFIXED = new RegExp(`^/(${i18n.languages.join("|")})(/|$)`)

/**
 * Docs-only locale routing.
 *
 * The documentation lives under a `[lang]` segment (`/en/docs/...`,
 * `/ja/docs/...`). Any unprefixed `/docs/...` request is redirected to the
 * default language so existing links keep working. Every other route
 * (`/blocks`, `/colors`, the landing page, API routes, assets) is left
 * untouched — only the docs are internationalized.
 */
export default function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Already locale-prefixed (e.g. `/en/docs/...`) — nothing to do.
  if (PREFIXED.test(pathname)) {
    return NextResponse.next()
  }

  // `/docs` or `/docs/...` → `/{defaultLanguage}/docs/...`
  const url = request.nextUrl.clone()
  url.pathname = `/${i18n.defaultLanguage}${pathname}`
  return NextResponse.redirect(url)
}

export const config = {
  // Scope strictly to documentation paths; everything else is non-localized.
  matcher: ["/docs/:path*"],
}
