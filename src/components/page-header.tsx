import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  intro,
  crumb,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  crumb?: { to: string; label: string };
}) {
  return (
    <section className="border-b border-border bg-secondary py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {crumb ? (
          <Link
            to={crumb.to}
            className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground hover:text-foreground"
          >
            ← {crumb.label}
          </Link>
        ) : null}
        <p className="eyebrow mt-4">{eyebrow}</p>
        <h1 className="section-title max-w-3xl">{title}</h1>
        {intro ? (
          <p className="mt-5 max-w-2xl leading-7 text-muted-foreground">{intro}</p>
        ) : null}
      </div>
    </section>
  );
}

export function Prose({ children }: { children: ReactNode }) {
  return (
    <section className="bg-background py-16 sm:py-20">
      <div className="prose-block mx-auto max-w-3xl px-5 lg:px-8">{children}</div>
    </section>
  );
}
