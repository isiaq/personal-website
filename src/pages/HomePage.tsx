import { Link } from 'react-router-dom';
import {
  ArrowUpRight, ArrowRight, Download, Mail, MapPin, Sparkles, Rss,
} from 'lucide-react';
import { PROFILE, EXPERTISE, PROJECTS, BLOG_POSTS, SKILL_ICONS } from '../data/content';
import { Reveal } from '../components/Reveal';
import { SectionHeading } from '../components/SectionHeading';
import { ProjectCard } from '../components/ProjectCard';
import { BlogCard } from '../components/BlogCard';
import { Avatar } from '../components/Avatar';

function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* background decoration */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 -right-32 h-[28rem] w-[28rem] rounded-full bg-accent-500/10 blur-3xl" />
        <div className="absolute top-40 -left-40 h-96 w-96 rounded-full bg-accent-400/5 blur-3xl" />
        <div className="absolute inset-0 grain opacity-[0.025] dark:opacity-[0.04]" />
      </div>

      <div className="container-page grid items-center gap-12 py-20 sm:py-28 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
        {/* Left: copy */}
        <div>
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-ink-200 bg-white/70 px-3 py-1.5 text-xs font-medium text-ink-600 backdrop-blur dark:border-ink-700 dark:bg-ink-900/70 dark:text-ink-300">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              Available for select engagements
            </div>
          </Reveal>

          <Reveal delay={80} as="h1" className="mt-6 text-4xl font-bold leading-[1.1] tracking-tight text-ink-900 sm:text-5xl lg:text-6xl dark:text-white text-balance">
            {PROFILE.name.split(' ').slice(0, 2).join(' ')}
            <span className="block text-accent-500">
              {PROFILE.name.split(' ').slice(2).join(' ')}
            </span>
          </Reveal>

          <Reveal delay={140}>
            <p className="mt-5 max-w-xl text-lg font-medium text-ink-700 dark:text-ink-200 text-pretty">
              {PROFILE.tagline}
            </p>
          </Reveal>

          <Reveal delay={200}>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-ink-600 dark:text-ink-400 text-pretty">
              {PROFILE.intro}
            </p>
          </Reveal>

          <Reveal delay={260}>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link to="/portfolio" className="btn-primary">
                View Work
                <ArrowRight size={16} />
              </Link>
              <Link to="/resume" className="btn-secondary">
                <Download size={16} />
                Download CV
              </Link>
              <Link to="/contact" className="btn-ghost">
                <Mail size={16} />
                Contact Me
              </Link>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <div className="mt-8 flex items-center gap-2 text-sm text-ink-500 dark:text-ink-400">
              <MapPin size={15} className="text-accent-500" />
              {PROFILE.location}
            </div>
          </Reveal>
        </div>

        {/* Right: avatar + stat card */}
        <Reveal delay={200} className="flex justify-center lg:justify-end">
          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-accent-400/20 to-transparent blur-2xl" />
            <div className="relative rounded-[2rem] border border-ink-200/70 bg-white/80 p-6 shadow-xl shadow-ink-900/5 backdrop-blur dark:border-ink-800/70 dark:bg-ink-900/60 dark:shadow-black/30">
              <Avatar size={220} withStatus className="mx-auto" />
              <div className="mt-6 grid grid-cols-2 gap-3">
                {PROFILE.stats.map((s) => (
                  <div
                    key={s.label}
                    className="rounded-2xl bg-ink-50 px-4 py-3 text-center dark:bg-ink-800/60"
                  >
                    <div className="text-2xl font-bold text-accent-600 dark:text-accent-400">
                      {s.value}
                    </div>
                    <div className="mt-0.5 text-[11px] font-medium uppercase tracking-wide text-ink-500 dark:text-ink-400">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      {/* skills marquee */}
      <Reveal>
        <div className="border-y border-ink-200/70 bg-ink-50/40 py-5 dark:border-ink-800/70 dark:bg-ink-900/30">
          <div className="container-page flex items-center gap-6">
            <span className="hidden shrink-0 text-xs font-semibold uppercase tracking-wider text-ink-400 dark:text-ink-500 sm:block">
              Toolbox
            </span>
            <div className="relative flex-1 overflow-hidden mask-fade-r">
              <div className="flex w-max animate-marquee gap-3">
                {[...SKILL_ICONS, ...SKILL_ICONS].map((s, i) => (
                  <span
                    key={`${s.name}-${i}`}
                    className="inline-flex shrink-0 items-center gap-2 rounded-full border border-ink-200 bg-white px-4 py-2 text-sm font-medium text-ink-600 dark:border-ink-700 dark:bg-ink-900 dark:text-ink-300"
                  >
                    <s.icon size={15} className="text-accent-500" />
                    {s.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function ExpertiseStrip() {
  return (
    <section className="section">
      <div className="container-page">
        <SectionHeading
          eyebrow="What I do"
          icon={Sparkles}
          title="Four disciplines, one practice"
          description="My career has moved across leadership, software, data, and infrastructure — not as separate hats, but as one connected practice of building dependable systems."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {EXPERTISE.map((e, i) => (
            <Reveal key={e.title} delay={i * 90}>
              <div className="card group h-full">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-accent-50 text-accent-600 transition-all duration-300 group-hover:scale-110 group-hover:bg-accent-500 group-hover:text-white dark:bg-accent-950/50 dark:text-accent-400">
                  <e.icon size={22} />
                </div>
                <h3 className="mt-4 text-base font-bold text-ink-900 dark:text-white">
                  {e.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-600 dark:text-ink-400">
                  {e.blurb}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturedProjects() {
  const featured = PROJECTS.filter((p) => p.featured).slice(0, 3);
  return (
    <section className="section bg-ink-50/40 dark:bg-ink-900/20">
      <div className="container-page">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Selected work"
            title="Featured projects"
            description="A few projects where strategy, code, data, and infrastructure all had to line up."
          />
          <Reveal delay={120}>
            <Link to="/portfolio" className="btn-secondary shrink-0">
              All projects
              <ArrowUpRight size={16} />
            </Link>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function LatestBlog() {
  const posts = BLOG_POSTS.slice(0, 3);
  return (
    <section className="section">
      <div className="container-page">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Writing"
            icon={Rss}
            title="Latest from the blog"
            description="Notes on leadership, data, and the quiet craft of keeping systems running."
          />
          <Reveal delay={120}>
            <Link to="/blog" className="btn-secondary shrink-0">
              All posts
              <ArrowUpRight size={16} />
            </Link>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((p, i) => (
            <BlogCard key={p.slug} post={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactCTA() {
  return (
    <section className="section">
      <div className="container-page">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-accent-200 bg-gradient-to-br from-accent-50 via-white to-accent-50/40 px-6 py-14 text-center dark:border-accent-900/50 dark:from-accent-950/40 dark:via-ink-900 dark:to-accent-950/20 sm:px-14">
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent-400/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-accent-500/10 blur-3xl" />
            <div className="relative">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-600 dark:text-accent-400">
                Let&apos;s build something dependable
              </p>
              <h2 className="mx-auto mt-3 max-w-2xl text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl dark:text-white text-balance">
                Have a system that needs leading, building, or fixing?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-ink-600 dark:text-ink-300 text-pretty">
                I am open to enterprise leadership roles, complex web builds, data work, and infrastructure engagements. Tell me what you are working on.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <Link to="/contact" className="btn-primary">
                  Start a conversation
                  <ArrowRight size={16} />
                </Link>
                <a href={`mailto:${PROFILE.email}`} className="btn-secondary">
                  <Mail size={16} />
                  {PROFILE.email}
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function HomePage() {
  return (
    <>
      <Hero />
      <ExpertiseStrip />
      <FeaturedProjects />
      <LatestBlog />
      <ContactCTA />
    </>
  );
}
