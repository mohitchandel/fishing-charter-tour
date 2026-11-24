/** Plain text sections shared by the guides and the policy pages. */
export function Prose({ children }: { children: React.ReactNode }) {
  return <div className="max-w-2xl space-y-14">{children}</div>;
}

export function ProseSection({ heading, children }: { heading: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="text-3xl leading-tight font-light">{heading}</h2>
      <div className="mt-5 space-y-5 text-lg leading-relaxed text-muted-foreground [&_a]:text-ink [&_a]:underline [&_a]:decoration-line [&_a]:underline-offset-4 [&_a:hover]:decoration-ink [&_li]:border-b [&_li]:border-line [&_li]:py-3 [&_ul]:border-t [&_ul]:border-line">
        {children}
      </div>
    </section>
  );
}
