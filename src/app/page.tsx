import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex min-h-svh flex-col items-center justify-center px-6">
      <div className="animate-in-content flex max-w-lg flex-col items-center gap-4 text-center">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          tyap/ui
        </h1>
        <p className="text-fd-muted-foreground text-balance">
          コピー&ペーストで使える、プロダクション対応のUIコンポーネント。
        </p>
        <div className="flex items-center gap-3 mt-2">
          <Link
            href="/docs"
            className="transition-interactive inline-flex h-9 items-center rounded-md bg-fd-primary px-4 text-sm font-medium text-fd-primary-foreground hover:bg-fd-primary/90"
          >
            ドキュメント
          </Link>
          <Link
            href="https://github.com/yki-t/ui.tyap.me"
            className="transition-interactive inline-flex h-9 items-center rounded-md border border-fd-border px-4 text-sm font-medium text-fd-foreground hover:bg-fd-accent"
          >
            GitHub
          </Link>
        </div>
        <div className="mt-6 w-full rounded-lg border border-fd-border bg-fd-muted/50 p-4 text-left">
          <code className="text-sm text-fd-muted-foreground">
            <span className="select-none text-fd-muted-foreground/60">$ </span>
            npx shadcn add https://ui.tyap.me/r/button.json
          </code>
        </div>
      </div>
    </main>
  );
}
