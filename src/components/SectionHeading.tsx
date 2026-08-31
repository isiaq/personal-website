import { type LucideIcon } from 'lucide-react';
import { Reveal } from './Reveal';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  icon?: LucideIcon;
  align?: 'left' | 'center';
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  icon: Icon,
  align = 'left',
}: SectionHeadingProps) {
  return (
    <Reveal className={align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      {eyebrow && (
        <div
          className={`flex items-center gap-2 ${align === 'center' ? 'justify-center' : ''}`}
        >
          {Icon && <Icon size={16} className="text-accent-500" />}
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-600 dark:text-accent-400">
            {eyebrow}
          </span>
        </div>
      )}
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl dark:text-white text-balance">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-ink-600 dark:text-ink-400 text-pretty">
          {description}
        </p>
      )}
    </Reveal>
  );
}
