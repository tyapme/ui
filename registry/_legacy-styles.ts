export const legacyStyles: { name: string; title: string }[] = []

export type Style = (typeof legacyStyles)[number]

export async function getActiveStyle() {
  return null
}

export function getStyle(name: string) {
  return legacyStyles.find((style) => style.name === name)
}
