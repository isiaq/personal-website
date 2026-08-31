import { Rss } from 'lucide-react';
import { BLOG_POSTS } from '../data/content';
import { PageHero } from '../components/PageHero';
import { BlogCard } from '../components/BlogCard';

export function BlogPage() {
  const sorted = [...BLOG_POSTS].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <>
      <PageHero
        eyebrow="Blog"
        crumb="Blog"
        title="Notes on systems, data, and leadership"
        description="Essays from the intersection of enterprise leadership and hands-on engineering — what I have learned keeping teams and infrastructure running."
      >
        <div className="inline-flex items-center gap-2 text-sm text-ink-500 dark:text-ink-400">
          <Rss size={15} className="text-accent-500" />
          {BLOG_POSTS.length} posts · updated regularly
        </div>
      </PageHero>

      <section className="section">
        <div className="container-page">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {sorted.map((p, i) => (
              <BlogCard key={p.slug} post={p} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
