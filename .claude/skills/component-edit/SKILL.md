---
name: component-edit
description: >
  Enforces the rule that ANY UI component edit in this project — layout,
  animation, styling, spacing, variants, interaction — MUST be written directly
  into the component file (registry/ui/*.tsx), never into style-maia.css or
  other CSS token files. Apply this skill whenever someone says "edit/improve/
  fix/redesign this component", or when /impeccable layout, /impeccable
  animation, /transitions-dev, or any similar skill edits a component.
  This skill is ALWAYS active during any component work in this project.
user-invocable: false
---

# Component Edit Rules

## The single most important rule

When making any change to a UI component — layout, spacing, animation,
interaction, color, variant, size — **write it directly into the component's
`.tsx` file**. Do not put it in `style-maia.css` or any other CSS token file.

This project previously used `.cn-*` CSS classes in `style-maia.css` to hold
component styles. That pattern is being deprecated. New work goes in the
component file.

## Where things live

```
registry/ui/button.tsx     ← ALL button styles, variants, sizes, animations
registry/ui/tabs.tsx       ← ALL tabs styles, animations, direction logic
registry/ui/alert.tsx      ← ALL alert styles
...
```

**`registry/styles/style-maia.css`** is for visual tokens that genuinely differ
between style variants (maia vs hypothetical future variants). If only one style
exists and the value isn't variant-specific, it goes in the component file.

## How to implement changes

Use Tailwind utility classes directly in the component's `cva()` definition or
`cn()` calls. The impeccable skill handles design decisions; this skill handles
where the code lands.

```tsx
// ✅ Correct — inline in the component
const buttonVariants = cva("rounded-4xl border ...", {
  variants: {
    variant: {
      default: "bg-primary text-primary-foreground hover:opacity-85",
      outline: "hover:bg-foreground hover:text-background hover:border-foreground",
    },
    size: {
      default: "h-10 gap-1.5 px-4.5",
      lg:      "h-12 gap-2 px-6",
    },
  },
})

// ❌ Wrong — don't add new rules to style-maia.css for this
.cn-button-size-default { @apply h-10 px-4.5; }
```

## Preserve existing file structure

Before editing, read the file and note:
- Whether `"use client"` is present at the top — preserve it exactly as-is
- Existing imports — don't add unnecessary ones
- The component's exported API — don't change function signatures without reason

The `"use client"` directive matters for Next.js server/client boundaries.
Removing it can break `buttonVariants` (and similar pure functions exported
from the same file) for server components that import them.

## For animations specifically

Animation CSS that is driven by attributes set by the component's own React
logic (like `data-direction`, `data-side`) belongs in the component file —
either as Tailwind utilities or as an injected `<style>` tag using React 19's
`<style precedence href>` for deduplication.

```tsx
// Injected style tag — use when @starting-style or complex selectors are needed
const ANIMATION_CSS = `
.cn-tabs-content {
  transition: opacity 280ms cubic-bezier(0.22, 1, 0.36, 1),
              transform 400ms cubic-bezier(0.22, 1, 0.36, 1);
}
@starting-style {
  .cn-tabs-content[data-direction="forward"]:not([hidden]) {
    opacity: 0;
    transform: translateX(40px);
  }
}
`
// In render:
<style precedence="component" href="cn-tabs-animation">{ANIMATION_CSS}</style>
```

## Summary checklist before saving

- [ ] Change is in `registry/ui/ComponentName.tsx`, not in `style-maia.css`
- [ ] `"use client"` directive is unchanged from the original
- [ ] No new `.cn-*` classes were added to any CSS file
- [ ] If a `.cn-*` class was previously driving this style, it has been removed
      from `style-maia.css` (don't leave dead CSS behind)
