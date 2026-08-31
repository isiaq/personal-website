import { Link } from 'react-router-dom';
import { ArrowUpRight, Github, ExternalLink } from 'lucide-react';
import type { Project } from '../data/content';
import { Reveal } from './Reveal';

export function ProjectCard({ project, index = 0 }: { project: Project; index?: number }) {
  return (
    <Reveal delay={index * 80}>
      <Link to={`/portfolio/${project.slug}`} className="card group block h-full">
        <div className="flex items-start justify-between gap-3">
          <span className="tag-accent">{project.category}</span>
          <span className="text-xs font-medium text-ink-400 dark:text-ink-500">{project.year}</span>
        </div>

        <h3 className="mt-4 text-lg font-bold text-ink-900 transition-colors group-hover:text-accent-600 dark:text-white dark:group-hover:text-accent-400">
          {project.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-ink-600 dark:text-ink-400">
          {project.tagline}
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tech.slice(0, 4).map((t) => (
            <span key={t} className="chip">{t}</span>
          ))}
          {project.tech.length > 4 && (
            <span className="chip">+{project.tech.length - 4}</span>
          )}
        </div>

        <div className="mt-5 flex items-center justify-between border-t border-ink-100 pt-4 dark:border-ink-800">
          <span className="text-xs font-medium text-ink-500 dark:text-ink-400">{project.role}</span>
          <span className="inline-flex items-center gap-1 text-xs font-semibold text-accent-600 transition-transform group-hover:translate-x-0.5 dark:text-accent-400">
            View case study
            <ArrowUpRight size={14} />
          </span>
        </div>
      </Link>
    </Reveal>
  );
}

export function ProjectLinks({ project }: { project: Project }) {
  return (
    <div className="flex flex-wrap gap-2">
      {project.repo && (
        <a
          href={project.repo}
          target="_blank"
          rel="noreferrer noopener"
          className="btn-secondary"
        >
          <Github size={16} /> Source
        </a>
      )}
      {project.demo && (
        <a
          href={project.demo}
          target="_blank"
          rel="noreferrer noopener"
          className="btn-primary"
        >
          <ExternalLink size={16} /> Live demo
        </a>
      )}
    </div>
  );
}
