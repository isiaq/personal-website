import { type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { Reveal } from './Reveal';

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description?: string;
  children?: ReactNode;
  crumb?: string;
}

export function PageHero({ eyebrow, title, description, children, crumb }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-ink-200/70 bg-gradient-to-b from-ink-50/60 to-white pt-20 pb-14 dark:border-ink-800/70 dark:from-ink-900/40 dark:to-ink-950 sm:pt-24 sm:pb-20">
      {/* decorative glow */}
      <div className="pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full bg-accent-500/10 blur-3xl" />
      <div className="container-page relative">
        <Reveal>
          <nav className="mb-5 flex items-center gap-1.5 text-xs text-ink-400 dark:text-ink-500">
            <Link to="/" className="transition-colors hover:text-accent-600 dark:hover:text-accent-400">
              Home
            </Link>
            <ChevronRight size={13} />
            <span className="text-ink-600 dark:text-ink-300">{crumb ?? eyebrow}</span>
          </nav>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-600 dark:text-accent-400">
            {eyebrow}
          </p>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight text-ink-900 sm:text-5xl dark:text-white text-balance">
            {title}
          </h1>
          {description && (
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-600 dark:text-ink-400 text-pretty">
              {description}
            </p>
          )}
          {children && <div className="mt-6">{children}</div>}
        </Reveal>
      </div>
    </section>
  );
}
