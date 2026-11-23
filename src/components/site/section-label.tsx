import { cn } from "@/lib/utils";

/** "(01) — The experience" style section index. */
export function SectionLabel({ index, children, className }: { index: string; children: React.ReactNode; className?: string }) {
  return (
    <p className={cn("label flex items-center gap-3", className)}>
      <span className="font-serif text-sm tracking-normal normal-case italic opacity-70">({index})</span>
      <span className="h-px w-8 bg-current opacity-40" />
      {children}
    </p>
  );
}
