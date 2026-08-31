import { Link } from 'react-router-dom';
import {
  Download, Mail, Briefcase, GraduationCap, Award, Wrench, CheckCircle2, ArrowRight,
} from 'lucide-react';
import {
  PROFILE, RESUME_EXPERIENCE, RESUME_EDUCATION, RESUME_CERTIFICATIONS, RESUME_SKILLS,
} from '../data/content';
import { PageHero } from '../components/PageHero';
import { Reveal } from '../components/Reveal';

function downloadResume() {
  // Generate a clean, printable text resume from the structured data.
  const lines: string[] = [];
  lines.push(PROFILE.name);
  lines.push(PROFILE.tagline);
  lines.push(`${PROFILE.location} | ${PROFILE.email} | ${PROFILE.socials.map((s) => s.href).join(' | ')}`);
  lines.push('');
  lines.push('PROFILE');
  lines.push(PROFILE.intro);
  lines.push('');

  lines.push('EXPERIENCE');
  RESUME_EXPERIENCE.forEach((j) => {
    lines.push(`${j.role} — ${j.org} (${j.period}, ${j.location})`);
    j.bullets.forEach((b) => lines.push(`  - ${b}`));
    lines.push('');
  });

  lines.push('EDUCATION');
  RESUME_EDUCATION.forEach((e) => {
    lines.push(`${e.degree} — ${e.school} (${e.period})`);
    lines.push(`  ${e.detail}`);
  });
  lines.push('');

  lines.push('CERTIFICATIONS');
  RESUME_CERTIFICATIONS.forEach((c) => lines.push(`- ${c.name} — ${c.issuer} (${c.year})`));
  lines.push('');

  lines.push('SKILLS');
  Object.entries(RESUME_SKILLS).forEach(([group, skills]) => {
    lines.push(`${group}: ${skills.join(', ')}`);
  });

  const blob = new Blob([lines.join('\n')], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${PROFILE.name.replace(/\s+/g, '_')}_CV.txt`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

export function ResumePage() {
  return (
    <>
      <PageHero
        eyebrow="Resume"
        crumb="Resume"
        title="Curriculum Vitae"
        description="A complete view of experience, education, skills, and certifications — or download it for later."
      >
        <div className="flex flex-wrap gap-3">
          <button onClick={downloadResume} className="btn-primary">
            <Download size={16} />
            Download CV
          </button>
          <Link to="/contact" className="btn-secondary">
            <Mail size={16} />
            Get in touch
          </Link>
        </div>
      </PageHero>

      <section className="section">
        <div className="container-page grid gap-12 lg:grid-cols-[1.6fr_1fr] lg:gap-16">
          {/* Main column: experience + education */}
          <div>
            {/* Experience */}
            <Reveal>
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-accent-50 text-accent-600 dark:bg-accent-950/50 dark:text-accent-400">
                  <Briefcase size={20} />
                </div>
                <h2 className="text-2xl font-bold text-ink-900 dark:text-white">Experience</h2>
              </div>
            </Reveal>

            <div className="mt-8 space-y-8">
              {RESUME_EXPERIENCE.map((job, i) => (
                <Reveal key={job.role} delay={i * 80}>
                  <div className="relative border-l-2 border-ink-200 pl-6 dark:border-ink-800">
                    <span className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full border-2 border-white bg-accent-500 dark:border-ink-950" />
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h3 className="text-lg font-bold text-ink-900 dark:text-white">{job.role}</h3>
                      <span className="text-xs font-medium text-ink-500 dark:text-ink-400">
                        {job.period}
                      </span>
                    </div>
                    <p className="text-sm font-medium text-accent-600 dark:text-accent-400">
                      {job.org} · {job.location}
                    </p>
                    <ul className="mt-3 space-y-2">
                      {job.bullets.map((b) => (
                        <li key={b} className="flex gap-2.5 text-sm leading-relaxed text-ink-600 dark:text-ink-400 text-pretty">
                          <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-accent-500" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Education */}
            <Reveal>
              <div className="mt-12 flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-accent-50 text-accent-600 dark:bg-accent-950/50 dark:text-accent-400">
                  <GraduationCap size={20} />
                </div>
                <h2 className="text-2xl font-bold text-ink-900 dark:text-white">Education</h2>
              </div>
            </Reveal>
            <div className="mt-6 space-y-4">
              {RESUME_EDUCATION.map((e, i) => (
                <Reveal key={e.school} delay={i * 80}>
                  <div className="card">
                    <h3 className="text-base font-bold text-ink-900 dark:text-white">{e.degree}</h3>
                    <p className="text-sm text-ink-600 dark:text-ink-400">{e.school}</p>
                    <p className="mt-1 text-xs text-ink-400 dark:text-ink-500">{e.period}</p>
                    <p className="mt-2 text-sm text-ink-600 dark:text-ink-400">{e.detail}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Sidebar: skills + certs */}
          <div className="space-y-8 lg:sticky lg:top-24 lg:self-start">
            {/* Skills */}
            <Reveal>
              <div className="card">
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-accent-50 text-accent-600 dark:bg-accent-950/50 dark:text-accent-400">
                    <Wrench size={20} />
                  </div>
                  <h2 className="text-lg font-bold text-ink-900 dark:text-white">Skills</h2>
                </div>
                <div className="mt-5 space-y-4">
                  {Object.entries(RESUME_SKILLS).map(([group, skills]) => (
                    <div key={group}>
                      <p className="text-xs font-semibold uppercase tracking-wider text-ink-400 dark:text-ink-500">
                        {group}
                      </p>
                      <div className="mt-2 flex flex-wrap gap-1.5">
                        {skills.map((s) => (
                          <span key={s} className="chip">{s}</span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Certifications */}
            <Reveal delay={80}>
              <div className="card">
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-accent-50 text-accent-600 dark:bg-accent-950/50 dark:text-accent-400">
                    <Award size={20} />
                  </div>
                  <h2 className="text-lg font-bold text-ink-900 dark:text-white">Certifications</h2>
                </div>
                <ul className="mt-5 space-y-3">
                  {RESUME_CERTIFICATIONS.map((c) => (
                    <li key={c.name} className="border-l-2 border-accent-300 pl-3 dark:border-accent-700">
                      <p className="text-sm font-semibold text-ink-900 dark:text-white">{c.name}</p>
                      <p className="text-xs text-ink-500 dark:text-ink-400">{c.issuer} · {c.year}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>

        {/* CTA */}
        <Reveal>
          <div className="container-page mt-16">
            <div className="flex flex-col items-center justify-between gap-4 rounded-2xl border border-ink-200 bg-ink-50/60 px-6 py-8 text-center sm:flex-row sm:text-left dark:border-ink-800 dark:bg-ink-900/40">
              <div>
                <h3 className="text-lg font-bold text-ink-900 dark:text-white">
                  Want the full picture?
                </h3>
                <p className="mt-1 text-sm text-ink-600 dark:text-ink-400">
                  Download the CV, or reach out to talk about a role.
                </p>
              </div>
              <div className="flex shrink-0 gap-3">
                <button onClick={downloadResume} className="btn-primary">
                  <Download size={16} /> Download CV
                </button>
                <Link to="/contact" className="btn-secondary">
                  Contact <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
