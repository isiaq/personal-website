import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon, ArrowUpRight } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { PROFILE } from '../data/content';

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/resume', label: 'Resume' },
  { to: '/blog', label: 'Blog' },
  { to: '/contact', label: 'Contact' },
];

export function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => setOpen(false), [location.pathname]);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-ink-200/70 bg-white/80 backdrop-blur-xl dark:border-ink-800/70 dark:bg-ink-950/80'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav className="container-page flex h-16 items-center justify-between gap-4 sm:h-18">
        {/* Logo */}
        <Link to="/" className="group flex items-center gap-2.5" aria-label="Home">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-accent-500 font-serif text-lg font-bold text-white shadow-lg shadow-accent-500/30 transition-transform duration-300 group-hover:scale-105">
            I
          </span>
          <span className="hidden text-sm font-bold tracking-tight text-ink-900 dark:text-white sm:block">
            {PROFILE.shortName}
            <span className="text-accent-500">.</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `relative rounded-full px-3.5 py-2 text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? 'text-accent-600 dark:text-accent-400'
                      : 'text-ink-600 hover:text-ink-900 dark:text-ink-300 dark:hover:text-white'
                  }`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Right actions */}
        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            className="grid h-9 w-9 place-items-center rounded-full text-ink-600 transition-all hover:bg-ink-100 hover:text-ink-900 dark:text-ink-300 dark:hover:bg-ink-800 dark:hover:text-white"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <Link to="/contact" className="btn-primary hidden md:inline-flex">
            Let&apos;s talk
            <ArrowUpRight size={16} />
          </Link>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen((p) => !p)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="grid h-9 w-9 place-items-center rounded-full text-ink-700 transition-all hover:bg-ink-100 dark:text-ink-200 dark:hover:bg-ink-800 md:hidden"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden border-t border-ink-200/70 bg-white/95 backdrop-blur-xl transition-[max-height,opacity] duration-300 dark:border-ink-800/70 dark:bg-ink-950/95 md:hidden ${
          open ? 'max-h-[480px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="container-page flex flex-col gap-1 py-4">
          {NAV_LINKS.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `block rounded-xl px-4 py-3 text-base font-medium transition-colors ${
                    isActive
                      ? 'bg-accent-50 text-accent-700 dark:bg-accent-950/40 dark:text-accent-300'
                      : 'text-ink-700 hover:bg-ink-100 dark:text-ink-200 dark:hover:bg-ink-800'
                  }`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
          <li className="pt-2">
            <Link to="/contact" className="btn-primary w-full">
              Let&apos;s talk
              <ArrowUpRight size={16} />
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
