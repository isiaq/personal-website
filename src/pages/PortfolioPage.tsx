import { useMemo, useState } from 'react';
import { PackageOpen } from 'lucide-react';
import { PROJECTS } from '../data/content';
import { PageHero } from '../components/PageHero';
import { ProjectCard } from '../components/ProjectCard';
import { Reveal } from '../components/Reveal';

const CATEGORIES = ['All', ...Array.from(new Set(PROJECTS.map((p) => p.category)))];

export function PortfolioPage() {
  const [active, setActive] = useState('All');

  const filtered = useMemo(
    () => (active === 'All' ? PROJECTS : PROJECTS.filter((p) => p.category === active)),
    [active],
  );

  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        crumb="Portfolio"
        title="Work across four disciplines"
        description="Enterprise platforms, web applications, data pipelines, and infrastructure — each project a case study in making something complex run reliably."
      />

      <section className="section">
        <div className="container-page">
          {/* Filter tabs */}
          <Reveal>
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
                    active === cat
                      ? 'bg-accent-500 text-white shadow-lg shadow-accent-500/25'
                      : 'border border-ink-200 bg-white text-ink-600 hover:border-accent-300 hover:text-accent-600 dark:border-ink-700 dark:bg-ink-900 dark:text-ink-300 dark:hover:border-accent-700 dark:hover:text-accent-400'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </Reveal>

          {/* Grid */}
          {filtered.length > 0 ? (
            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {filtered.map((p, i) => (
                <ProjectCard key={p.slug} project={p} index={i} />
              ))}
            </div>
          ) : (
            <div className="mt-16 flex flex-col items-center justify-center text-center">
              <PackageOpen size={40} className="text-ink-300 dark:text-ink-700" />
              <p className="mt-4 text-sm text-ink-500 dark:text-ink-400">
                No projects in this category yet.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
