export function SiteFooter() {
  return (
    <footer className="group-has-[.docs-nav]/body:pb-20 group-has-[.section-soft]/body:bg-surface/40 group-has-[[data-slot=designer]]/body:hidden group-has-[[data-slot=docs]]/body:hidden group-has-[.docs-nav]/body:sm:pb-0 dark:bg-transparent dark:group-has-[.section-soft]/body:bg-surface/40 3xl:fixed:bg-transparent">
      <div className="container-wrapper px-4 xl:px-6">
        <div className="flex h-(--footer-height) items-center justify-between">
          <div className="w-full px-1 text-center text-xs leading-loose text-muted-foreground sm:text-sm">
            制作:{" "}
            <a
              href="https://tyap.me"
              target="_blank"
              rel="noreferrer noopener"
              className="font-medium underline underline-offset-4"
            >
              TYAP
            </a>{" "}
            /{" "}
            <a
              href="https://tyap.me"
              target="_blank"
              rel="noreferrer noopener"
              className="font-medium underline underline-offset-4"
            >
              TYAP.ME
            </a>
            。ソースコードは{" "}
            <a
              href="https://github.com/tyapme/ui"
              target="_blank"
              rel="noreferrer noopener"
              className="font-medium underline underline-offset-4"
            >
              GitHub
            </a>
            {" "}で公開しています。
          </div>
        </div>
      </div>
    </footer>
  )
}
