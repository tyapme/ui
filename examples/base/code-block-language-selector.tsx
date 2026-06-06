"use client"

import { useState } from "react"
import type { BundledLanguage } from "shiki"
import { FileIcon } from "lucide-react"

import {
  CodeBlock,
  CodeBlockActions,
  CodeBlockCopyButton,
  CodeBlockFilename,
  CodeBlockHeader,
  CodeBlockLanguageSelector,
  CodeBlockLanguageSelectorContent,
  CodeBlockLanguageSelectorItem,
  CodeBlockLanguageSelectorTrigger,
  CodeBlockLanguageSelectorValue,
  CodeBlockTitle,
} from "@/styles/base/ui/code-block"

const SNIPPETS: Record<string, { filename: string; code: string }> = {
  tsx: {
    filename: "button.tsx",
    code: `import { cva } from "class-variance-authority"

const buttonVariants = cva(
  "inline-flex items-center rounded-full font-medium",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground",
        ghost: "hover:bg-muted hover:text-foreground",
      },
      size: {
        sm: "h-8 px-3 text-sm",
        md: "h-10 px-4",
      },
    },
    defaultVariants: { variant: "default", size: "md" },
  }
)`,
  },
  css: {
    filename: "button.css",
    code: `.button {
  display: inline-flex;
  align-items: center;
  border-radius: 9999px;
  font-weight: 500;
  padding: 0 1rem;
  height: 2.5rem;
  background: var(--color-primary);
  color: var(--color-primary-foreground);
  transition: opacity 150ms ease;
}

.button:hover { opacity: 0.85; }
.button:active { opacity: 0.7; }`,
  },
  json: {
    filename: "package.json",
    code: `{
  "name": "my-app",
  "dependencies": {
    "class-variance-authority": "^0.7.0",
    "lucide-react": "^0.475.0",
    "react": "^19.0.0"
  },
  "devDependencies": {
    "tailwindcss": "^4.0.0",
    "typescript": "^5.0.0"
  }
}`,
  },
}

export default function CodeBlockLanguageSelectorDemo() {
  const [lang, setLang] = useState<BundledLanguage>("tsx")
  const { filename, code } = SNIPPETS[lang]

  return (
    <div className="w-full max-w-xl">
      <CodeBlock code={code} language={lang}>
        <CodeBlockHeader>
          <CodeBlockTitle>
            <FileIcon className="size-3.5" />
            <CodeBlockFilename>{filename}</CodeBlockFilename>
          </CodeBlockTitle>
          <CodeBlockActions>
            <CodeBlockLanguageSelector
              value={lang}
              onValueChange={(v) => setLang(v as BundledLanguage)}
            >
              <CodeBlockLanguageSelectorTrigger>
                <CodeBlockLanguageSelectorValue />
              </CodeBlockLanguageSelectorTrigger>
              <CodeBlockLanguageSelectorContent>
                <CodeBlockLanguageSelectorItem value="tsx">TSX</CodeBlockLanguageSelectorItem>
                <CodeBlockLanguageSelectorItem value="css">CSS</CodeBlockLanguageSelectorItem>
                <CodeBlockLanguageSelectorItem value="json">JSON</CodeBlockLanguageSelectorItem>
              </CodeBlockLanguageSelectorContent>
            </CodeBlockLanguageSelector>
            <CodeBlockCopyButton />
          </CodeBlockActions>
        </CodeBlockHeader>
      </CodeBlock>
    </div>
  )
}
