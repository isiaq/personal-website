import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import { Reveal } from '../components/Reveal';

export function NotFoundPage() {
  return (
    <section className="grid min-h-[70vh] place-items-center px-5">
      <Reveal className="text-center">
        <p className="text-7xl font-bold text-accent-500 sm:text-8xl">404</p>
        <h1 className="mt-4 text-2xl font-bold text-ink-900 dark:text-white">Page not found</h1>
        <p className="mt-2 max-w-sm mx-auto text-sm text-ink-600 dark:text-ink-400">
          The page you are looking for may have moved, or never existed. Let&apos;s get you back on track.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <Link to="/" className="btn-primary">
            <Home size={16} /> Back home
          </Link>
          <button onClick={() => window.history.back()} className="btn-secondary">
            <ArrowLeft size={16} /> Go back
          </button>
        </div>
      </Reveal>
    </section>
  );
}
