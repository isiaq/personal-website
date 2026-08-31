import { Link, useParams, Navigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Calendar, User, FolderOpen, CheckCircle2 } from 'lucide-react';
import { PROJECTS } from '../data/content';
import { PageHero } from '../components/PageHero';
import { ProjectLinks } from '../components/ProjectCard';
import { Reveal } from '../components/Reveal';

export function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) return <Navigate to="/portfolio" replace />;

  const related = PROJECTS.filter((p) => p.slug !== project.slug).slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow={project.category}
        crumb={project.title}
        title={project.title}
        description={project.tagline}
      >
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-ink-500 dark:text-ink-400">
          <span className="inline-flex items-center gap-1.5">
            <Calendar size={14} className="text-accent-500" /> {project.year}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <User size={14} className="text-accent-500" /> {project.role}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <FolderOpen size={14} className="text-accent-500" /> {project.category}
          </span>
        </div>
      </PageHero>

      <section className="section">
        <div className="container-page">
          <Reveal>
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 text-sm font-medium text-ink-600 transition-colors hover:text-accent-600 dark:text-ink-400 dark:hover:text-accent-400"
            >
              <ArrowLeft size={16} /> Back to portfolio
            </Link>
          </Reveal>

          <div className="mt-8 grid gap-12 lg:grid-cols-[1.6fr_1fr] lg:gap-16">
            {/* Main */}
            <div>
              <Reveal>
                <h2 className="text-2xl font-bold text-ink-900 dark:text-white">Overview</h2>
                <p className="mt-4 text-base leading-relaxed text-ink-700 dark:text-ink-300 text-pretty">
                  {project.description}
                </p>
              </Reveal>

              <Reveal delay={80}>
                <h2 className="mt-10 text-2xl font-bold text-ink-900 dark:text-white">
                  What I did
                </h2>
                <ul className="mt-5 space-y-4">
                  {project.details.map((d) => (
                    <li key={d} className="flex gap-3">
                      <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-accent-500" />
                      <span className="text-base leading-relaxed text-ink-700 dark:text-ink-300 text-pretty">
                        {d}
                      </span>
                    </li>
                  ))}
                </ul>
              </Reveal>

              {project.metrics && (
                <Reveal delay={120}>
                  <h2 className="mt-10 text-2xl font-bold text-ink-900 dark:text-white">Impact</h2>
                  <div className="mt-5 grid grid-cols-3 gap-4">
                    {project.metrics.map((m) => (
                      <div
                        key={m.label}
                        className="rounded-2xl border border-ink-200 bg-ink-50/50 p-5 text-center dark:border-ink-800 dark:bg-ink-900/50"
                      >
                        <div className="text-2xl font-bold text-accent-600 dark:text-accent-400 sm:text-3xl">
                          {m.value}
                        </div>
                        <div className="mt-1 text-xs font-medium uppercase tracking-wide text-ink-500 dark:text-ink-400">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </Reveal>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:sticky lg:top-24 lg:self-start">
              <Reveal delay={80}>
                <div className="card">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-ink-400 dark:text-ink-500">
                    Tech stack
                  </h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span key={t} className="chip">{t}</span>
                    ))}
                  </div>

                  <div className="mt-6 border-t border-ink-100 pt-6 dark:border-ink-800">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-ink-400 dark:text-ink-500">
                      Links
                    </h3>
                    <div className="mt-4">
                      <ProjectLinks project={project} />
                      {!project.repo && !project.demo && (
                        <p className="text-sm text-ink-500 dark:text-ink-400">
                          Links available on request.
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="mt-6 border-t border-ink-100 pt-6 dark:border-ink-800">
                    <dl className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <dt className="text-ink-500 dark:text-ink-400">Role</dt>
                        <dd className="font-medium text-ink-900 dark:text-white">{project.role}</dd>
                      </div>
                      <div className="flex justify-between">
                        <dt className="text-ink-500 dark:text-ink-400">Year</dt>
                        <dd className="font-medium text-ink-900 dark:text-white">{project.year}</dd>
                      </div>
                      <div className="flex justify-between">
                        <dt className="text-ink-500 dark:text-ink-400">Category</dt>
                        <dd className="font-medium text-ink-900 dark:text-white">{project.category}</dd>
                      </div>
                    </dl>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>

          {/* Related */}
          <Reveal>
            <h2 className="mt-16 text-2xl font-bold text-ink-900 dark:text-white">More work</h2>
          </Reveal>
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {related.map((p) => (
              <Reveal key={p.slug} delay={60}>
                <Link
                  to={`/portfolio/${p.slug}`}
                  className="card group flex items-center justify-between gap-4"
                >
                  <div>
                    <span className="tag-accent">{p.category}</span>
                    <h3 className="mt-2 text-base font-bold text-ink-900 transition-colors group-hover:text-accent-600 dark:text-white dark:group-hover:text-accent-400">
                      {p.title}
                    </h3>
                  </div>
                  <ArrowRight size={18} className="shrink-0 text-ink-400 transition-transform group-hover:translate-x-1 group-hover:text-accent-500" />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
