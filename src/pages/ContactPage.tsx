import { useState, type FormEvent } from 'react';
import {
  Mail, MapPin, Github, Linkedin, Twitter, Send, CheckCircle2, AlertCircle, Loader2,
} from 'lucide-react';
import { PROFILE } from '../data/content';
import { PageHero } from '../components/PageHero';
import { Reveal } from '../components/Reveal';
import { supabase } from '../lib/supabase';

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

type Status = 'idle' | 'submitting' | 'success' | 'error';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const SOCIAL_LINKS = [
  { label: 'GitHub', href: PROFILE.socials[0].href, icon: Github, handle: PROFILE.socials[0].handle },
  { label: 'LinkedIn', href: PROFILE.socials[1].href, icon: Linkedin, handle: PROFILE.socials[1].handle },
  { label: 'X', href: PROFILE.socials[2].href, icon: Twitter, handle: PROFILE.socials[2].handle },
];

function validate(values: FormState): Partial<Record<keyof FormState, string>> {
  const errors: Partial<Record<keyof FormState, string>> = {};
  if (!values.name.trim()) errors.name = 'Please enter your name.';
  else if (values.name.trim().length < 2) errors.name = 'Name is a bit short.';
  else if (values.name.length > 120) errors.name = 'Please keep your name under 120 characters.';

  if (!values.email.trim()) errors.email = 'Please enter your email.';
  else if (!EMAIL_RE.test(values.email.trim())) errors.email = 'That email does not look right.';
  else if (values.email.length > 320) errors.email = 'That email is too long.';

  if (!values.message.trim()) errors.message = 'Please write a message.';
  else if (values.message.trim().length < 10) errors.message = 'A little more detail would help.';
  else if (values.message.length > 5000) errors.message = 'Please keep your message under 5,000 characters.';

  if (values.subject.length > 200) errors.subject = 'Please keep the subject under 200 characters.';

  return errors;
}

export function ContactPage() {
  const [values, setValues] = useState<FormState>({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [touched, setTouched] = useState<Partial<Record<keyof FormState, boolean>>>({});
  const [status, setStatus] = useState<Status>('idle');
  const [serverError, setServerError] = useState('');

  function update<K extends keyof FormState>(key: K, val: string) {
    setValues((p) => ({ ...p, [key]: val }));
    if (touched[key]) {
      setErrors(validate({ ...values, [key]: val }));
    }
  }

  function blur<K extends keyof FormState>(key: K) {
    setTouched((p) => ({ ...p, [key]: true }));
    setErrors(validate(values));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    setTouched({ name: true, email: true, subject: true, message: true });
    if (Object.keys(found).length > 0) return;

    setStatus('submitting');
    setServerError('');

    const { error } = await supabase.from('contact_submissions').insert({
      name: values.name.trim(),
      email: values.email.trim(),
      subject: values.subject.trim() || null,
      message: values.message.trim(),
    });

    if (error) {
      setStatus('error');
      setServerError('Something went wrong sending your message. Please try again, or email me directly.');
      return;
    }

    setStatus('success');
    setValues({ name: '', email: '', subject: '', message: '' });
    setTouched({});
    setErrors({});
  }

  const inputBase = 'field peer';
  const labelBase = 'mb-1.5 block text-sm font-medium text-ink-700 dark:text-ink-200';

  return (
    <>
      <PageHero
        eyebrow="Contact"
        crumb="Contact"
        title="Let's talk"
        description="Whether it is a leadership role, a complex build, or an infrastructure problem — tell me what you are working on and I will get back to you."
      />

      <section className="section">
        <div className="container-page grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
          {/* Left: contact info */}
          <div>
            <Reveal>
              <h2 className="text-2xl font-bold text-ink-900 dark:text-white">Reach me directly</h2>
              <p className="mt-3 text-base leading-relaxed text-ink-600 dark:text-ink-400 text-pretty">
                Prefer email or socials? Use any of the channels below. I usually reply within a day or two.
              </p>
            </Reveal>

            <Reveal delay={80}>
              <div className="mt-8 space-y-3">
                <a
                  href={`mailto:${PROFILE.email}`}
                  className="card group flex items-center gap-4 !py-4"
                >
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent-50 text-accent-600 transition-colors group-hover:bg-accent-500 group-hover:text-white dark:bg-accent-950/50 dark:text-accent-400">
                    <Mail size={20} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-medium uppercase tracking-wide text-ink-400 dark:text-ink-500">Email</p>
                    <p className="truncate text-sm font-semibold text-ink-900 dark:text-white">{PROFILE.email}</p>
                  </div>
                </a>

                <div className="card flex items-center gap-4 !py-4">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent-50 text-accent-600 dark:bg-accent-950/50 dark:text-accent-400">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wide text-ink-400 dark:text-ink-500">Location</p>
                    <p className="text-sm font-semibold text-ink-900 dark:text-white">{PROFILE.location}</p>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={140}>
              <h3 className="mt-8 text-sm font-bold uppercase tracking-wider text-ink-400 dark:text-ink-500">
                Find me online
              </h3>
              <div className="mt-4 flex flex-wrap gap-3">
                {SOCIAL_LINKS.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="group inline-flex items-center gap-2.5 rounded-xl border border-ink-200 bg-white px-4 py-2.5 transition-all hover:-translate-y-0.5 hover:border-accent-400 hover:shadow-md dark:border-ink-700 dark:bg-ink-900 dark:hover:border-accent-600"
                  >
                    <s.icon size={18} className="text-ink-600 transition-colors group-hover:text-accent-600 dark:text-ink-300 dark:group-hover:text-accent-400" />
                    <span className="text-sm font-medium text-ink-700 dark:text-ink-200">{s.label}</span>
                    <span className="text-xs text-ink-400 dark:text-ink-500">{s.handle}</span>
                  </a>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Right: form */}
          <Reveal delay={100}>
            <div className="card">
              {status === 'success' ? (
                <div className="flex flex-col items-center py-10 text-center">
                  <div className="grid h-16 w-16 place-items-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-400">
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 className="mt-5 text-xl font-bold text-ink-900 dark:text-white">Message sent</h3>
                  <p className="mt-2 max-w-sm text-sm leading-relaxed text-ink-600 dark:text-ink-400">
                    Thanks for reaching out. I will get back to you shortly — usually within a day or two.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="btn-secondary mt-6"
                  >
                    Send another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className={labelBase}>
                        Name <span className="text-accent-500">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        value={values.name}
                        onChange={(e) => update('name', e.target.value)}
                        onBlur={() => blur('name')}
                        className={inputBase}
                        placeholder="Your name"
                        maxLength={120}
                        aria-invalid={!!errors.name}
                        aria-describedby={errors.name ? 'name-error' : undefined}
                      />
                      {errors.name && (
                        <p id="name-error" className="mt-1.5 flex items-center gap-1.5 text-xs text-red-600 dark:text-red-400">
                          <AlertCircle size={13} /> {errors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="email" className={labelBase}>
                        Email <span className="text-accent-500">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        value={values.email}
                        onChange={(e) => update('email', e.target.value)}
                        onBlur={() => blur('email')}
                        className={inputBase}
                        placeholder="you@example.com"
                        maxLength={320}
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? 'email-error' : undefined}
                      />
                      {errors.email && (
                        <p id="email-error" className="mt-1.5 flex items-center gap-1.5 text-xs text-red-600 dark:text-red-400">
                          <AlertCircle size={13} /> {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className={labelBase}>
                      Subject <span className="text-ink-400 dark:text-ink-500">(optional)</span>
                    </label>
                    <input
                      id="subject"
                      type="text"
                      value={values.subject}
                      onChange={(e) => update('subject', e.target.value)}
                      className={inputBase}
                      placeholder="What is this about?"
                      maxLength={200}
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className={labelBase}>
                      Message <span className="text-accent-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={6}
                      value={values.message}
                      onChange={(e) => update('message', e.target.value)}
                      onBlur={() => blur('message')}
                      className={`${inputBase} resize-y`}
                      placeholder="Tell me about your project, role, or problem..."
                      maxLength={5000}
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? 'message-error' : undefined}
                    />
                    {errors.message && (
                      <p id="message-error" className="mt-1.5 flex items-center gap-1.5 text-xs text-red-600 dark:text-red-400">
                        <AlertCircle size={13} /> {errors.message}
                      </p>
                    )}
                  </div>

                  {status === 'error' && serverError && (
                    <div className="flex items-start gap-2.5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700 dark:border-red-900/50 dark:bg-red-950/30 dark:text-red-300">
                      <AlertCircle size={18} className="mt-0.5 shrink-0" />
                      <span>{serverError}</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="btn-primary w-full"
                  >
                    {status === 'submitting' ? (
                      <>
                        <Loader2 size={16} className="animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Send message
                      </>
                    )}
                  </button>

                  <p className="text-center text-xs text-ink-400 dark:text-ink-500">
                    Your details are only used to reply to you. Never shared.
                  </p>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
