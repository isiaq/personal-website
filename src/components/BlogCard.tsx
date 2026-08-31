import { Link } from 'react-router-dom';
import { ArrowUpRight, Clock } from 'lucide-react';
import type { BlogPost } from '../data/content';
import { Reveal } from './Reveal';

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

export function BlogCard({ post, index = 0 }: { post: BlogPost; index?: number }) {
  return (
    <Reveal delay={index * 80}>
      <Link to={`/blog/${post.slug}`} className="card group flex h-full flex-col">
        <div className="flex items-center gap-3 text-xs">
          <span className="tag-accent">{post.category}</span>
          <span className="text-ink-400 dark:text-ink-500">{formatDate(post.date)}</span>
        </div>

        <h3 className="mt-4 text-lg font-bold leading-snug text-ink-900 transition-colors group-hover:text-accent-600 dark:text-white dark:group-hover:text-accent-400">
          {post.title}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-600 dark:text-ink-400">
          {post.excerpt}
        </p>

        <div className="mt-5 flex items-center justify-between border-t border-ink-100 pt-4 dark:border-ink-800">
          <span className="inline-flex items-center gap-1.5 text-xs text-ink-500 dark:text-ink-400">
            <Clock size={13} /> {post.readingTime}
          </span>
          <span className="inline-flex items-center gap-1 text-xs font-semibold text-accent-600 transition-transform group-hover:translate-x-0.5 dark:text-accent-400">
            Read
            <ArrowUpRight size={14} />
          </span>
        </div>
      </Link>
    </Reveal>
  );
}
