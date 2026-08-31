import { Link } from 'react-router-dom';
import { ArrowRight, Quote, GraduationCap, Award } from 'lucide-react';
import { PROFILE, TIMELINE, SKILL_CATEGORIES, RESUME_EDUCATION, RESUME_CERTIFICATIONS } from '../data/content';
import { PageHero } from '../components/PageHero';
import { SectionHeading } from '../components/SectionHeading';
import { Reveal } from '../components/Reveal';
import { Avatar } from '../components/Avatar';

function Bio() {
  return (
    <section className="section">
      <div className="container-page grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
        {/* Photo + quick facts */}
        <Reveal className="lg:sticky lg:top-24 lg:self-start">
          <div className="relative">
            <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-accent-400/20 to-transparent blur-2xl" />
            <div className="relative rounded-[2rem] border border-ink-200/70 bg-white p-5 shadow-xl shadow-ink-900/5 dark:border-ink-800/70 dark:bg-ink-900/60 dark:shadow-black/30">
              <Avatar size={260} withStatus className="mx-auto" />
              <div className="mt-5 space-y-2.5 border-t border-ink-100 pt-5 dark:border-ink-800">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-ink-500 dark:text-ink-400">Based in</span>
                  <span className="font-medium text-ink-900 dark:text-white">{PROFILE.location}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-ink-500 dark:text-ink-400">Focus</span>
                  <span className="font-medium text-ink-900 dark:text-white">Enterprise &amp; Engineering</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-ink-500 dark:text-ink-400">Status</span>
                  <span className="font-semibold text-emerald-600 dark:text-emerald-400">Available</span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Bio narrative */}
        <div>
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-600 dark:text-accent-400">
              The longer story
            </p>
          </Reveal>
          <Reveal delay={60}>
            <h1 className="mt-3 text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl dark:text-white text-balance">
              A career spent connecting the pieces
            </h1>
          </Reveal>

          <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-700 dark:text-ink-300 text-pretty">
            <Reveal delay={120}>
              <p>
                I started in the server room — literally. My first real job was keeping a fleet of Linux machines alive at three in the morning, and that work taught me the lesson that has run through everything since: the most valuable systems are the boring ones. The ones that just run, quietly, while everyone else gets their work done.
              </p>
            </Reveal>
            <Reveal delay={160}>
              <p>
                From systems administration I moved into data analysis, because I kept wanting to understand <em>why</em> the systems behaved the way they did — and the answers were in the data. Building executive dashboards and finding a $1.2M billing leak showed me that the right number, surfaced at the right time, changes a decision. That is a kind of engineering too.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <p>
                Web development came next, and it is where I fell in love with the craft of building interfaces that respect people&apos;s time. A fast, accessible, well-architected front end is not a luxury — it is the difference between a tool people tolerate and one they reach for. I led the architecture for a multi-tenant SaaS platform and built component libraries that kept five product teams in sync.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <p>
                Today, as an enterprise lead, I draw on all three every single day. I am not a leader who forgot the code, or an engineer who avoids the strategy. I am someone who believes the gap between those worlds is where the best work happens — and where the most expensive mistakes get made when no one is minding it. My job is to mind it.
              </p>
            </Reveal>
          </div>

          <Reveal delay={280}>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/portfolio" className="btn-primary">
                See my work
                <ArrowRight size={16} />
              </Link>
              <Link to="/resume" className="btn-secondary">
                Full resume
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function PullQuote() {
  return (
    <section className="section py-0">
      <div className="container-page">
        <Reveal>
          <figure className="mx-auto max-w-3xl rounded-3xl border border-ink-200/70 bg-ink-50/60 px-6 py-10 text-center sm:px-12 dark:border-ink-800/70 dark:bg-ink-900/40">
            <Quote size={28} className="mx-auto text-accent-500" />
            <blockquote className="mt-4 text-xl font-medium leading-relaxed text-ink-800 sm:text-2xl dark:text-ink-100 text-balance">
              &ldquo;The goal is not heroic saves at 3am. The goal is to engineer the drama out of the system so the pager stays silent.&rdquo;
            </blockquote>
            <figcaption className="mt-4 text-sm text-ink-500 dark:text-ink-400">
              {PROFILE.name}, on the craft of operations
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}

function Timeline() {
  return (
    <section className="section">
      <div className="container-page">
        <SectionHeading
          eyebrow="The path"
          title="Career milestones"
          description="A decade of moving between the server room, the spreadsheet, the codebase, and the boardroom."
        />

        <div className="mt-14 max-w-3xl">
          <ol className="relative border-l-2 border-ink-200 dark:border-ink-800">
            {TIMELINE.map((item, i) => (
              <Reveal key={item.role} delay={i * 90} as="li" className="relative mb-10 pl-8 last:mb-0">
                {/* node */}
                <span className="absolute -left-[11px] top-1.5 grid h-5 w-5 place-items-center rounded-full border-2 border-white bg-accent-500 dark:border-ink-950">
                  <span className="h-1.5 w-1.5 rounded-full bg-white" />
                </span>
                <span className="tag-accent">{item.year}</span>
                <h3 className="mt-3 text-lg font-bold text-ink-900 dark:text-white">
                  {item.role}
                  <span className="font-normal text-ink-500 dark:text-ink-400"> · {item.org}</span>
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-600 dark:text-ink-400 text-pretty">
                  {item.description}
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {item.tags.map((t) => (
                    <span key={t} className="chip">{t}</span>
                  ))}
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function SkillsBreakdown() {
  return (
    <section className="section bg-ink-50/40 dark:bg-ink-900/20">
      <div className="container-page">
        <SectionHeading
          eyebrow="Capabilities"
          title="Skills, broken down"
          description="Grouped by where they live in the work — technical depth, leadership breadth, and the tools that hold it all together."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {SKILL_CATEGORIES.map((cat, i) => (
            <Reveal key={cat.category} delay={i * 100}>
              <div className="card h-full">
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-accent-50 text-accent-600 dark:bg-accent-950/50 dark:text-accent-400">
                    <cat.icon size={20} />
                  </div>
                  <h3 className="text-base font-bold text-ink-900 dark:text-white">{cat.category}</h3>
                </div>
                <ul className="mt-5 space-y-4">
                  {cat.skills.map((s) => (
                    <li key={s.name}>
                      <div className="flex items-center justify-between text-sm">
                        <span className="font-medium text-ink-700 dark:text-ink-200">{s.name}</span>
                        <span className="text-xs text-ink-400 dark:text-ink-500">{s.level}%</span>
                      </div>
                      <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-ink-200 dark:bg-ink-800">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-accent-400 to-accent-600 transition-all duration-700"
                          style={{ width: `${s.level}%` }}
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Credentials() {
  return (
    <section className="section py-0">
      <div className="container-page grid gap-6 md:grid-cols-2">
        <Reveal>
          <div className="card h-full">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-accent-50 text-accent-600 dark:bg-accent-950/50 dark:text-accent-400">
                <GraduationCap size={20} />
              </div>
              <h3 className="text-base font-bold text-ink-900 dark:text-white">Education</h3>
            </div>
            <ul className="mt-5 space-y-4">
              {RESUME_EDUCATION.map((e) => (
                <li key={e.school} className="border-l-2 border-accent-300 pl-4 dark:border-accent-700">
                  <p className="text-sm font-bold text-ink-900 dark:text-white">{e.degree}</p>
                  <p className="text-sm text-ink-600 dark:text-ink-400">{e.school}</p>
                  <p className="mt-0.5 text-xs text-ink-400 dark:text-ink-500">{e.period}</p>
                  <p className="mt-1 text-sm text-ink-600 dark:text-ink-400">{e.detail}</p>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="card h-full">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-accent-50 text-accent-600 dark:bg-accent-950/50 dark:text-accent-400">
                <Award size={20} />
              </div>
              <h3 className="text-base font-bold text-ink-900 dark:text-white">Certifications</h3>
            </div>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {RESUME_CERTIFICATIONS.map((c) => (
                <li
                  key={c.name}
                  className="rounded-xl border border-ink-200 p-3 dark:border-ink-800"
                >
                  <p className="text-sm font-semibold text-ink-900 dark:text-white">{c.name}</p>
                  <p className="mt-0.5 text-xs text-ink-500 dark:text-ink-400">
                    {c.issuer} · {c.year}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        crumb="About"
        title="The person behind the systems"
        description="Enterprise lead, engineer, analyst, and sysadmin — not four careers, but four lenses on the same one."
      />
      <Bio />
      <PullQuote />
      <Timeline />
      <SkillsBreakdown />
      <Credentials />
    </>
  );
}
