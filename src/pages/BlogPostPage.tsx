import { Link, useParams, Navigate } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar, ArrowRight, Tag } from 'lucide-react';
import { BLOG_POSTS } from '../data/content';
import { Reveal } from '../components/Reveal';

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) return <Navigate to="/blog" replace />;

  const more = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <article className="section pt-12 sm:pt-16">
      <div className="container-page">
        <Reveal>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium text-ink-600 transition-colors hover:text-accent-600 dark:text-ink-400 dark:hover:text-accent-400"
          >
            <ArrowLeft size={16} /> Back to blog
          </Link>
        </Reveal>

        {/* Header */}
        <Reveal delay={60} className="mx-auto mt-8 max-w-prose">
          <div className="flex flex-wrap items-center gap-3 text-xs">
            <span className="tag-accent">
              <Tag size={11} /> {post.category}
            </span>
            <span className="inline-flex items-center gap-1.5 text-ink-500 dark:text-ink-400">
              <Calendar size={13} /> {formatDate(post.date)}
            </span>
            <span className="inline-flex items-center gap-1.5 text-ink-500 dark:text-ink-400">
              <Clock size={13} /> {post.readingTime}
            </span>
          </div>
          <h1 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-ink-900 sm:text-4xl dark:text-white text-balance">
            {post.title}
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-ink-600 dark:text-ink-400 text-pretty">
            {post.excerpt}
          </p>
        </Reveal>

        {/* Body — clean reading typography */}
        <Reveal delay={120} className="mx-auto mt-10 max-w-prose">
          <div className="prose-body space-y-5 text-[1.075rem] leading-[1.8] text-ink-700 dark:text-ink-300">
            {post.body.map((para, i) => (
              <p key={i} className="text-pretty">
                {para}
              </p>
            ))}
          </div>

          {/* share / author footer */}
          <div className="mt-12 flex items-center justify-between border-t border-ink-200 pt-6 dark:border-ink-800">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-accent-500 font-serif text-sm font-bold text-white">
                I
              </span>
              <div>
                <p className="text-sm font-bold text-ink-900 dark:text-white">Isiaq A. Olugbenga</p>
                <p className="text-xs text-ink-500 dark:text-ink-400">Enterprise Lead &amp; Engineer</p>
              </div>
            </div>
            <Link to="/contact" className="btn-ghost text-sm">
              Reply <ArrowRight size={15} />
            </Link>
          </div>
        </Reveal>

        {/* More posts */}
        {more.length > 0 && (
          <div className="mx-auto mt-16 max-w-5xl">
            <Reveal>
              <h2 className="text-xl font-bold text-ink-900 dark:text-white">Keep reading</h2>
            </Reveal>
            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              {more.map((p, i) => (
                <Reveal key={p.slug} delay={i * 80}>
                  <Link to={`/blog/${p.slug}`} className="card group flex h-full flex-col">
                    <span className="tag-accent self-start">{p.category}</span>
                    <h3 className="mt-3 text-base font-bold text-ink-900 transition-colors group-hover:text-accent-600 dark:text-white dark:group-hover:text-accent-400">
                      {p.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-600 dark:text-ink-400">
                      {p.excerpt}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-accent-600 dark:text-accent-400">
                      Read <ArrowRight size={13} />
                    </span>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  );
}
