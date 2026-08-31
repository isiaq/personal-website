import { User } from 'lucide-react';
import { PROFILE } from '../data/content';

interface AvatarProps {
  size?: number;
  className?: string;
  withStatus?: boolean;
}

/** Neutral placeholder avatar — no real photo until one is provided. */
export function Avatar({ size = 120, className = '', withStatus = false }: AvatarProps) {
  return (
    <div className={`relative ${className}`} style={{ width: size, height: size }}>
      <div
        className="h-full w-full overflow-hidden rounded-3xl border border-ink-200 bg-gradient-to-br from-ink-100 to-ink-200 dark:border-ink-700 dark:from-ink-800 dark:to-ink-900"
        aria-label={`${PROFILE.name} — placeholder avatar`}
      >
        <div className="flex h-full w-full items-center justify-center text-ink-400 dark:text-ink-500">
          <User size={size * 0.42} strokeWidth={1.2} />
        </div>
      </div>
      {withStatus && PROFILE.available && (
        <span className="absolute -bottom-2 -right-2 flex items-center gap-1.5 rounded-full border border-ink-200 bg-white px-2.5 py-1 text-[11px] font-semibold text-emerald-600 shadow-sm dark:border-ink-700 dark:bg-ink-900 dark:text-emerald-400">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          Available
        </span>
      )}
    </div>
  );
}
