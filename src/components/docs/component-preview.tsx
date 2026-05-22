import { Suspense } from "react";
import { cn } from "@/registry/lib/utils";

interface ComponentPreviewProps {
  component: string;
  example?: string;
  children?: React.ReactNode;
  className?: string;
  code?: string;
}

export function ComponentPreview({
  children,
  className,
  code,
}: ComponentPreviewProps) {
  return (
    <div className={cn("group/preview my-6 rounded-lg border border-fd-border overflow-hidden", className)}>
      <div className="relative flex min-h-[200px] items-center justify-center p-10">
        <div
          className="absolute inset-0 [background-image:radial-gradient(circle,oklch(0%_0_0/0.06)_1px,transparent_1px)] [background-size:16px_16px] dark:[background-image:radial-gradient(circle,oklch(100%_0_0/0.04)_1px,transparent_1px)]"
          aria-hidden="true"
        />
        <Suspense
          fallback={
            <div className="flex items-center gap-2 text-fd-muted-foreground text-sm">
              <div className="h-4 w-4 animate-spin rounded-full border-2 border-fd-muted-foreground border-t-transparent" />
            </div>
          }
        >
          <div className="relative">{children}</div>
        </Suspense>
      </div>
      {code && (
        <div className="border-t border-fd-border bg-fd-muted/30 px-4 py-3">
          <pre className="text-sm text-fd-muted-foreground overflow-x-auto">
            <code>{code}</code>
          </pre>
        </div>
      )}
    </div>
  );
}
