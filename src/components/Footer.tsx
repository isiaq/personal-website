import { Link } from 'react-router-dom';
import { Github, Linkedin, Twitter, Mail, ArrowUpRight, Heart } from 'lucide-react';
import { PROFILE } from '../data/content';

const SOCIALS = [
  { label: 'GitHub', href: PROFILE.socials[0].href, icon: Github },
  { label: 'LinkedIn', href: PROFILE.socials[1].href, icon: Linkedin },
  { label: 'X', href: PROFILE.socials[2].href, icon: Twitter },
  { label: 'Email', href: `mailto:${PROFILE.email}`, icon: Mail },
];

const FOOTER_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/resume', label: 'Resume' },
  { to: '/blog', label: 'Blog' },
  { to: '/contact', label: 'Contact' },
];

export function Footer() {
  return (
    <footer className="border-t border-ink-200/70 bg-ink-50/50 dark:border-ink-800/70 dark:bg-ink-950">
      <div className="container-page py-14">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          {/* Brand */}
          <div className="max-w-sm">
            <Link to="/" className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-accent-500 font-serif text-lg font-bold text-white">
                I
              </span>
              <span className="text-sm font-bold tracking-tight text-ink-900 dark:text-white">
                {PROFILE.shortName}
                <span className="text-accent-500">.</span>
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-ink-600 dark:text-ink-400">
              {PROFILE.positioning}
            </p>
            <div className="mt-5 flex items-center gap-2.5">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={s.label}
                  className="grid h-9 w-9 place-items-center rounded-full border border-ink-200 text-ink-600 transition-all hover:-translate-y-0.5 hover:border-accent-400 hover:text-accent-600 dark:border-ink-700 dark:text-ink-400 dark:hover:border-accent-500 dark:hover:text-accent-400"
                >
                  <s.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Nav links */}
          <div className="grid grid-cols-2 gap-x-12 gap-y-2.5 sm:grid-cols-3">
            <div className="col-span-2 sm:col-span-1">
              <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-ink-400 dark:text-ink-500">
                Navigate
              </p>
              <ul className="space-y-2">
                {FOOTER_LINKS.map((l) => (
                  <li key={l.to}>
                    <Link
                      to={l.to}
                      className="text-sm text-ink-600 transition-colors hover:text-accent-600 dark:text-ink-400 dark:hover:text-accent-400"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-ink-400 dark:text-ink-500">
                Elsewhere
              </p>
              <ul className="space-y-2">
                {SOCIALS.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="group inline-flex items-center gap-1 text-sm text-ink-600 transition-colors hover:text-accent-600 dark:text-ink-400 dark:hover:text-accent-400"
                    >
                      {s.label}
                      <ArrowUpRight size={13} className="opacity-0 transition-opacity group-hover:opacity-100" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-ink-400 dark:text-ink-500">
                Location
              </p>
              <p className="text-sm text-ink-600 dark:text-ink-400">{PROFILE.location}</p>
              <a
                href={`mailto:${PROFILE.email}`}
                className="mt-2 inline-block text-sm text-accent-600 link-underline dark:text-accent-400"
              >
                {PROFILE.email}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-ink-200/70 pt-6 text-xs text-ink-500 dark:border-ink-800/70 dark:text-ink-500 sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} {PROFILE.name}. All rights reserved.
          </p>
          <p className="inline-flex items-center gap-1.5">
            Built with <Heart size={12} className="text-accent-500" /> using React &amp; Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
}
