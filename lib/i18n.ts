import { defineI18n } from "fumadocs-core/i18n"

/**
 * Documentation i18n configuration.
 *
 * - Default language is English; the base `*.mdx` file is the English source.
 * - Japanese translations live in `*.ja.mdx`; missing translations fall back to
 *   the default language automatically.
 * - `hideLocale: "never"` keeps every locale prefixed in the URL
 *   (`/en/docs/...`, `/ja/docs/...`).
 */
export const i18n = defineI18n({
  defaultLanguage: "en",
  languages: ["en", "ja"],
  hideLocale: "never",
})

export type DocsLanguage = (typeof i18n.languages)[number]
