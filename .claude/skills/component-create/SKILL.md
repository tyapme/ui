---
name: component-create
description: >
  End-to-end guide for adding a NEW UI component to this project — the component
  source, its demo example, registry entries, the build step, and the i18n-aware
  documentation page. Use whenever someone says "add/create a new component",
  "add X to the registry", "write docs for a new component", or scaffolds a
  component that needs a docs page. Pairs with the always-on `component-edit`
  skill (which governs WHERE component code lands) and `.impeccable.md` (design
  context). Read this BEFORE creating files so the new component follows the
  registry + i18n conventions and nothing is left half-wired.
user-invocable: true
---

# Creating a new component (end-to-end)

This project is a fumadocs-based documentation site for a personal shadcn-style
component library. A "new component" is not done until **five things** exist and
are wired together. Skipping any one leaves the preview broken or the page 404.

> Design rules live in `.impeccable.md` (maia style: Geist, `rounded-4xl`,
> OKLCH neutrals, generous spacing). Where component CSS lands is governed by the
> always-on `component-edit` skill: **all styles go in the `.tsx` file**, never
> in `style-maia.css`.

## The five files

| # | What | Where | Notes |
|---|------|-------|-------|
| 1 | Component source | `registry/ui/<name>.tsx` | The real component. `"use client"` only if it uses hooks/events. |
| 2 | Registry entry | `registry/ui/_registry.ts` | Adds `<name>` to the registry so installs + source view work. |
| 3 | Demo | `examples/base/<name>-demo.tsx` | Exported demo shown by `<ComponentPreview>`. Imports from `@/styles/base/*`. |
| 4 | Generated index | `examples/__index__.tsx` + `registry/__index__` | **Auto-generated** — never hand-edit. Run the build (step below). |
| 5 | Docs page | `content/docs/components/<name>.mdx` | English base file. See template + i18n rules below. |

The canonical reference to copy is **button**. Before writing anything, read:
`registry/ui/button.tsx`, the `"button"` entry in `registry/ui/_registry.ts`,
`examples/base/button-demo.tsx`, and `content/docs/components/button.mdx`.

## Steps

1. **Component** — create `registry/ui/<name>.tsx`. Follow `component-edit`:
   styles inline via `cva()`/`cn()`, preserve `"use client"` semantics.

2. **Register** — add an entry to `registry/ui/_registry.ts`:
   ```ts
   {
     name: "<name>",
     type: "registry:ui",
     // dependencies / registryDependencies as needed
     files: [{ path: "ui/<name>.tsx", type: "registry:ui" }],
     meta: { links: { docs: "https://ui.tyap.me/docs/components/<name>" } },
   }
   ```

3. **Demo** — create `examples/base/<name>-demo.tsx` exporting a demo component.
   Import the component from `@/styles/base/ui/<name>`. Keep it minimal and
   representative; this is what readers see first.

4. **Build the index** — regenerate the auto-generated indexes:
   ```bash
   pnpm registry:build
   ```
   This updates `examples/__index__.tsx` and `registry/__index__`. Do this after
   adding/removing any component or demo, or the preview shows "not found".

5. **Docs page** — create `content/docs/components/<name>.mdx` from the template
   below. `content/docs/components/meta.json` uses `["..."]` (auto-include), so a
   new page appears automatically — only edit `meta.json` to force ordering.

## Docs page template (English base — `<name>.mdx`)

```mdx
---
title: <Name>
description: One-sentence description of what the component does.
featured: false
base: base
component: true
---

<ComponentPreview styleName="base-nova" name="<name>-demo" />

## Installation

<CodeTabs>

<TabsList>
  <TabsTrigger value="cli">Command</TabsTrigger>
  <TabsTrigger value="manual">Manual</TabsTrigger>
</TabsList>
<TabsContent value="cli">

```bash
npx shadcn@latest add <name>
```

</TabsContent>

<TabsContent value="manual">

<Steps className="mb-0 pt-2">

<Step>Install the following dependencies:</Step>

```bash
npm install <deps>
```

<Step>Copy and paste the following code into your project.</Step>

<ComponentSource name="<name>" title="components/ui/<name>.tsx" styleName="base-nova" />

<Step>Update the import paths to match your project setup.</Step>

</Steps>

</TabsContent>

</CodeTabs>

## Usage

```tsx
import { <Name> } from "@/components/ui/<name>"
```

```tsx
<<Name> />
```
```

The preview, source, and install command are **registry-driven and
language-neutral** — they render the same in every locale from the component
`name`. Only the prose (`description`, headings' surrounding text, notes) is
language-specific.

## i18n authoring rules (READ THIS)

Docs are internationalized with fumadocs native i18n. **Default language = `en`.**

- **Always author the base file in English.** `content/docs/components/<name>.mdx`
  is the English (default) version. This is non-negotiable — the base file is the
  source of truth and the fallback for every other locale.
- **Translations use a locale suffix.** Japanese lives in
  `content/docs/components/<name>.ja.mdx`. Add it only when you actually translate
  the page; until then `/ja/docs/...` automatically **falls back to English**.
- **Translate prose, never structure.** A `.ja.mdx` file mirrors the base file's
  component tags and code blocks **exactly** (`<ComponentPreview>`,
  `<ComponentSource>`, `<CodeTabs>`, fenced code, `npx shadcn add ...`). Translate
  only: `title`, `description`, and the human-readable sentences. Keep all `name=`,
  `styleName=`, import paths, and code identical so the two locales never drift.
- **Don't translate `meta.json`** (nav titles) — it's shared UI chrome, out of
  scope, and falls back to English.
- **URLs are locale-prefixed.** Pages resolve at `/{lang}/docs/components/<name>`
  (e.g. `/en/docs/...`, `/ja/docs/...`). Internal links may still use `/docs/...`;
  the proxy redirect handles the default locale.

## Verification checklist

- [ ] `registry/ui/<name>.tsx` created; styles inline (not in `style-maia.css`).
- [ ] Entry added to `registry/ui/_registry.ts`.
- [ ] `examples/base/<name>-demo.tsx` created and exports a demo.
- [ ] `pnpm registry:build` run — indexes regenerated, no errors.
- [ ] `content/docs/components/<name>.mdx` created in **English** from the template.
- [ ] `pnpm dev`, then open `/en/docs/components/<name>` — preview renders, source
      shows, install command correct.
- [ ] (If translated) `<name>.ja.mdx` mirrors structure exactly; `/ja/docs/components/<name>`
      shows translated prose with identical previews/code.
```

> Tip: the fastest correct path is to copy an existing component's four non-doc
> files, rename, then adapt — rather than writing the registry/demo wiring from
> scratch.
