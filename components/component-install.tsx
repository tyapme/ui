import * as React from "react"

import { getDictionary } from "@/lib/docs/dictionary"
import { highlightCode } from "@/lib/highlight-code"
import { getRegistryItem, getRegistryItemUrl } from "@/lib/registry"
import { cn } from "@/lib/utils"
import { CodeBlockCommand } from "@/components/code-block-command"
import { CodeTabs } from "@/components/code-tabs"
import { ComponentSource } from "@/components/component-source"
import { CopyButton } from "@/components/copy-button"
import {
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/styles/base/ui/tabs"

// Fallback runtime dep for base-* styles that have no per-component dep listed.
function getDefaultDep(styleName: string): string | null {
  if (styleName.startsWith("base")) return "@base-ui/react"
  return null
}

export async function ComponentInstall({
  name,
  styleName = "base-nova",
  lang = "en",
  className,
}: {
  name: string
  styleName?: string
  lang?: string
  className?: string
}) {
  const dict = getDictionary(lang)
  const installUrl = getRegistryItemUrl(name, styleName)
  const item = await getRegistryItem(name, styleName)
  const deps: string[] =
    item?.dependencies && item.dependencies.length > 0
      ? item.dependencies
      : [getDefaultDep(styleName)].filter(Boolean) as string[]

  const depsCode = deps.length ? `npm install ${deps.join(" ")}` : null
  const highlightedDeps = depsCode ? await highlightCode(depsCode, "bash") : null

  return (
    <CodeTabs className={cn("mt-6", className)}>
      <TabsList variant="line" className="justify-start gap-6 px-0">
        <TabsTrigger value="cli" className="px-0 pb-3 text-base">
          {dict.cliTab}
        </TabsTrigger>
        <TabsTrigger value="manual" className="px-0 pb-3 text-base">
          {dict.manualTab}
        </TabsTrigger>
      </TabsList>

      <TabsContent keepMounted value="cli">
        <CodeBlockCommand
          __npm__={`npx shadcn@latest add ${installUrl}`}
          __yarn__={`npx shadcn@latest add ${installUrl}`}
          __pnpm__={`pnpm dlx shadcn@latest add ${installUrl}`}
          __bun__={`bunx --bun shadcn@latest add ${installUrl}`}
        />
      </TabsContent>

      <TabsContent
        keepMounted
        value="manual"
        className="relative [&_h3.font-heading]:text-base [&_h3.font-heading]:font-medium *:[figure]:first:mt-0 [&>.steps]:mt-6"
      >
        <div className="steps mb-12 [counter-reset:step] md:ml-4 md:border-l md:pl-8 [&>h3]:step">
          <h3 className="mt-8 scroll-m-32 font-heading text-lg font-medium tracking-tight">
            {dict.installDeps}
          </h3>

          {highlightedDeps && (
            <figure
              data-rehype-pretty-code-figure=""
              className="!mt-0"
            >
              <CopyButton value={depsCode!} />
              {/* highlightedDeps rendered server-side via trusted shiki — safe from XSS */}
              <div dangerouslySetInnerHTML={{ __html: highlightedDeps }} />
            </figure>
          )}

          <h3 className="mt-8 scroll-m-32 font-heading text-lg font-medium tracking-tight">
            {dict.copyPaste}
          </h3>

          <ComponentSource
            name={name}
            title={`components/ui/${name}.tsx`}
            styleName={styleName}
          />

          <h3 className="mt-8 scroll-m-32 font-heading text-lg font-medium tracking-tight">
            {dict.updateImports}
          </h3>
        </div>
      </TabsContent>
    </CodeTabs>
  )
}
