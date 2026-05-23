import Link from "next/link"

import { PAGES_NEW } from "@/lib/docs"
import { getGroupedPagesFromFolder, type PageTreeFolder } from "@/lib/page-tree"

export function ComponentsList({
  componentsFolder,
}: {
  componentsFolder: PageTreeFolder
}) {
  const groups = getGroupedPagesFromFolder(componentsFolder)

  return (
    <div className="space-y-10">
      {groups.map((group) => (
        <div key={group.category.label}>
          <h3 className="mb-3 text-sm font-semibold text-muted-foreground">
            {group.category.label}
          </h3>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-x-8 lg:gap-x-16 lg:gap-y-6 xl:gap-x-20">
            {group.pages.map((component) => (
              <Link
                key={component.$id}
                href={component.url}
                className="inline-flex items-center gap-2 text-lg font-medium underline-offset-4 hover:underline md:text-base"
              >
                {component.name}
                {PAGES_NEW.includes(component.url) && (
                  <span
                    className="flex size-2 rounded-full bg-blue-500"
                    title="New"
                  />
                )}
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
