import { FONT_DEFINITIONS } from "@/lib/font-definitions"

export const FONTS = FONT_DEFINITIONS.map((font) => ({
  name: font.title,
  value: font.name,
  type: font.type,
  variable: font.previewVariable,
}))
