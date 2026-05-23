import { promises as fs, readFileSync } from "fs"
import path from "path"

const SOURCE_REGISTRY_STYLES = ["base", "new-york-v4"] as const

export function readRegistrySourceFromBuiltJson(relativePath: string) {
  const normalizedPath = relativePath.replaceAll(path.sep, "/")
  const match = normalizedPath.match(
    /(?:^|\/)registry\/(?:bases\/)?[^/]+\/examples\/([^/]+)\.tsx$/
  )

  if (!match) {
    return null
  }

  const fileName = `${match[1]}.tsx`

  for (const styleName of SOURCE_REGISTRY_STYLES) {
    const jsonPath = path.join(
      process.cwd(),
      "public",
      "r",
      "styles",
      styleName,
      `${match[1]}.json`
    )

    try {
      const registryItem = JSON.parse(readFileSync(jsonPath, "utf-8")) as {
        files?: { path?: string; content?: string }[]
      }
      const file = registryItem.files?.find((item) =>
        item.path?.endsWith(fileName)
      )

      if (file?.content) {
        return file.content
      }
    } catch {
      continue
    }
  }

  return null
}

export async function readFileFromRoot(relativePath: string) {
  const absolutePath = path.join(process.cwd(), relativePath)
  try {
    return await fs.readFile(absolutePath, "utf-8")
  } catch (error) {
    const source = readRegistrySourceFromBuiltJson(relativePath)

    if (source) {
      return source
    }

    throw error
  }
}
