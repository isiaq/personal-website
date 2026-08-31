import {
  Briefcase, Code2, Server, BarChart3, Users, GitBranch,
  Cloud, ShieldCheck, Layers, Terminal, Cpu, Workflow, Network,
  type LucideIcon,
} from 'lucide-react';

export const PROFILE = {
  name: 'Isiaq Abdul-Azeez Olugbenga',
  shortName: 'Isiaq',
  initials: 'IAO',
  tagline: 'Enterprise Lead, Web Developer, Data Analyst & Systems Administrator',
  positioning:
    'I lead enterprise teams and ship the systems they run on — bridging strategy, software, and infrastructure into one resilient whole.',
  intro:
    'For over a decade I have sat at the intersection of enterprise leadership and hands-on engineering — directing cross-functional teams, building production web platforms, turning raw data into decisions, and keeping the servers quietly humming underneath it all. My work is about making complex systems feel simple, dependable, and human.',
  location: 'Lagos, Nigeria',
  email: 'hello@isiaqolugbenga.dev',
  phone: '+234 800 000 0000',
  available: true,
  socials: [
    { label: 'GitHub', href: 'https://github.com/yourname', handle: '@yourname' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/yourname', handle: 'in/yourname' },
    { label: 'X', href: 'https://x.com/yourname', handle: '@yourname' },
  ],
  stats: [
    { value: '12+', label: 'Years across roles' },
    { value: '40+', label: 'Systems shipped' },
    { value: '6', label: 'Teams led' },
    { value: '99.9%', label: 'Uptime maintained' },
  ],
};

export interface Expertise {
  icon: LucideIcon;
  title: string;
  blurb: string;
}

export const EXPERTISE: Expertise[] = [
  {
    icon: Users,
    title: 'Enterprise Leadership',
    blurb: 'Leading cross-functional teams, governance, roadmaps, and stakeholder alignment across large organizations.',
  },
  {
    icon: Code2,
    title: 'Web Development',
    blurb: 'Production-grade web apps with React, TypeScript, and modern APIs — accessible, fast, and maintainable.',
  },
  {
    icon: BarChart3,
    title: 'Data Analysis',
    blurb: 'Turning raw data into decisions with SQL, Python, and dashboards that tell a clear story.',
  },
  {
    icon: Server,
    title: 'Systems Administration',
    blurb: 'Linux, networking, and cloud infrastructure designed for reliability, security, and calm on-call nights.',
  },
];

export interface SkillCategory {
  category: string;
  icon: LucideIcon;
  skills: { name: string; level: number }[];
}

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: 'Technical',
    icon: Code2,
    skills: [
      { name: 'TypeScript / React', level: 92 },
      { name: 'Node.js / APIs', level: 88 },
      { name: 'SQL / PostgreSQL', level: 90 },
      { name: 'Python (Pandas, NumPy)', level: 82 },
      { name: 'Linux / Bash', level: 90 },
      { name: 'Networking / TCP-IP', level: 85 },
    ],
  },
  {
    category: 'Leadership',
    icon: Users,
    skills: [
      { name: 'Team Leadership', level: 93 },
      { name: 'Roadmap & Strategy', level: 90 },
      { name: 'Stakeholder Management', level: 88 },
      { name: 'Vendor & Budget Mgmt', level: 84 },
      { name: 'Governance & Compliance', level: 80 },
      { name: 'Mentorship', level: 91 },
    ],
  },
  {
    category: 'Tools & Platforms',
    icon: Layers,
    skills: [
      { name: 'Docker / Kubernetes', level: 84 },
      { name: 'AWS / GCP', level: 80 },
      { name: 'Git / CI-CD', level: 88 },
      { name: 'Grafana / Prometheus', level: 82 },
      { name: 'Tableau / Power BI', level: 78 },
      { name: 'Ansible / Terraform', level: 76 },
    ],
  },
];

export interface TimelineItem {
  year: string;
  role: string;
  org: string;
  description: string;
  tags: string[];
}

export const TIMELINE: TimelineItem[] = [
  {
    year: '2021 — Present',
    role: 'Enterprise Lead',
    org: 'Meridian Systems',
    description:
      'Direct a 14-person engineering and operations division. Own the enterprise roadmap, vendor relationships, and governance for mission-critical platforms serving 200k+ users.',
    tags: ['Leadership', 'Roadmap', 'Governance'],
  },
  {
    year: '2018 — 2021',
    role: 'Senior Web Developer',
    org: 'Northpeak Digital',
    description:
      'Led the front-end architecture for a multi-tenant SaaS platform. Built a component library adopted across five product teams and cut page load times by 40%.',
    tags: ['React', 'TypeScript', 'Architecture'],
  },
  {
    year: '2016 — 2018',
    role: 'Data Analyst',
    org: 'BlueGrid Analytics',
    description:
      'Designed reporting pipelines and executive dashboards. Surfaced a billing leakage pattern that recovered $1.2M in the first year.',
    tags: ['SQL', 'Python', 'Dashboards'],
  },
  {
    year: '2013 — 2016',
    role: 'Systems Administrator',
    org: 'CoreNet Infrastructure',
    description:
      'Managed a Linux estate of 300+ servers. Automated provisioning, hardened security baselines, and took average incident response from 45 minutes to under 8.',
    tags: ['Linux', 'Automation', 'Security'],
  },
];

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  details: string[];
  tech: string[];
  category: string;
  year: string;
  role: string;
  featured: boolean;
  repo?: string;
  demo?: string;
  metrics?: { label: string; value: string }[];
}

export const PROJECTS: Project[] = [
  {
    slug: 'meridian-enterprise-portal',
    title: 'Meridian Enterprise Portal',
    tagline: 'A unified operations portal for 200k+ internal users.',
    description:
      'A single sign-on portal consolidating seven legacy enterprise tools into one governed, role-aware interface — replacing a tangled web of bookmarks with a coherent home base.',
    details: [
      'Architected a modular micro-frontend shell so each business unit could ship independently without breaking the whole.',
      'Introduced role-based access governance with audit trails, satisfying the internal compliance review on the first pass.',
      'Reduced average task completion time by 38% and removed three manual reconciliation steps from the daily workflow.',
    ],
    tech: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Keycloak', 'AWS'],
    category: 'Enterprise',
    year: '2023',
    role: 'Enterprise Lead & Architect',
    featured: true,
    metrics: [
      { label: 'Users', value: '200k+' },
      { label: 'Task time', value: '-38%' },
      { label: 'Tools unified', value: '7' },
    ],
  },
  {
    slug: 'northpeak-saas-platform',
    title: 'Northpeak SaaS Platform',
    tagline: 'Multi-tenant analytics SaaS with a shared component library.',
    description:
      'A multi-tenant SaaS platform serving marketing teams, built around a reusable component library that kept five product teams visually and behaviorally consistent.',
    details: [
      'Designed the component library contract so teams could compose features without bespoke styling or duplicated logic.',
      'Implemented edge-rendered dashboards that cut time-to-interactive from 4.2s to 1.1s on cold loads.',
      'Introduced a CI gate that blocked visual regressions before merge, catching UI drift early.',
    ],
    tech: ['React', 'TypeScript', 'Vite', 'Tailwind', 'Supabase', 'Vercel'],
    category: 'Web Development',
    year: '2020',
    role: 'Senior Web Developer',
    featured: true,
    repo: 'https://github.com/yourname/northpeak-saas',
    demo: 'https://northpeak.example.com',
    metrics: [
      { label: 'Load time', value: '-74%' },
      { label: 'Teams using lib', value: '5' },
      { label: 'Tenants', value: '120' },
    ],
  },
  {
    slug: 'bluegrid-revenue-dashboard',
    title: 'Revenue Leakage Dashboard',
    tagline: 'An executive dashboard that recovered $1.2M in year one.',
    description:
      'A SQL + Python pipeline feeding an executive dashboard that surfaced a recurring billing-leakage pattern across subscriptions — driving a recovery process that paid for the project many times over.',
    details: [
      'Built an ETL pipeline normalizing billing data across three payment providers into one reconciled model.',
      'Designed the dashboard around a single "leakage this month" headline so executives could act in under a minute.',
      'Quantified the recovered revenue at $1.2M in the first year, presented to the board.',
    ],
    tech: ['Python', 'Pandas', 'PostgreSQL', 'Tableau', 'Airflow'],
    category: 'Data Analysis',
    year: '2017',
    role: 'Data Analyst',
    featured: true,
    metrics: [
      { label: 'Recovered', value: '$1.2M' },
      { label: 'Data sources', value: '3' },
      { label: 'Refresh', value: 'Daily' },
    ],
  },
  {
    slug: 'corenet-auto-provision',
    title: 'CoreNet Auto-Provisioning',
    tagline: 'Infrastructure-as-code for a 300-server Linux estate.',
    description:
      'An Ansible + Terraform provisioning system that turned a manual, error-prone server setup into a repeatable, version-controlled pipeline — with security baselines baked in.',
    details: [
      'Replaced ad-hoc shell scripts with idempotent Ansible playbooks tracked in Git.',
      'Hardened the baseline with CIS benchmarks, passing the annual security audit with zero findings.',
      'Dropped new-server provisioning time from a half-day to under 15 minutes.',
    ],
    tech: ['Ansible', 'Terraform', 'Linux', 'Git', 'Bash', 'Prometheus'],
    category: 'Systems Administration',
    year: '2015',
    role: 'Systems Administrator',
    featured: false,
    repo: 'https://github.com/yourname/corenet-provision',
    metrics: [
      { label: 'Provision time', value: '<15 min' },
      { label: 'Servers', value: '300+' },
      { label: 'Audit findings', value: '0' },
    ],
  },
  {
    slug: 'observability-stack',
    title: 'Unified Observability Stack',
    tagline: 'One pane of glass for logs, metrics, and traces.',
    description:
      'A Grafana + Prometheus + Loki stack giving the on-call team a single correlated view of system health, replacing four disjointed monitoring tools.',
    details: [
      'Correlated metrics, logs, and traces under shared labels so an incident could be triaged from one screen.',
      'Tuned alerting to cut noise by 60% while keeping every genuine incident above the threshold.',
      'Documented runbooks linked directly from dashboards, shrinking mean-time-to-resolution.',
    ],
    tech: ['Grafana', 'Prometheus', 'Loki', 'Docker', 'Kubernetes'],
    category: 'Systems Administration',
    year: '2022',
    role: 'Enterprise Lead',
    featured: false,
    metrics: [
      { label: 'Alert noise', value: '-60%' },
      { label: 'Tools replaced', value: '4' },
      { label: 'MTTR', value: '-45%' },
    ],
  },
  {
    slug: 'realtime-signup-funnel',
    title: 'Realtime Signup Funnel',
    tagline: 'A live conversion funnel with streaming analytics.',
    description:
      'A realtime funnel visualization tracking signups end-to-end, streaming events through a lightweight pipeline into a live dashboard the growth team could watch during launches.',
    details: [
      'Streamed events through a serverless pipeline with sub-second dashboard updates.',
      'Segmented the funnel by source and device, revealing a mobile drop-off that informed a redesign.',
      'Gave the growth team a shared live view during launches, replacing a manual spreadsheet ritual.',
    ],
    tech: ['React', 'TypeScript', 'Supabase', 'Edge Functions'],
    category: 'Web Development',
    year: '2023',
    role: 'Web Developer',
    featured: false,
    demo: 'https://funnel.example.com',
    metrics: [
      { label: 'Latency', value: '<1s' },
      { label: 'Conversion', value: '+18%' },
      { label: 'Events/day', value: '50k' },
    ],
  },
];

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  readingTime: string;
  category: string;
  excerpt: string;
  body: string[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'leading-and-shipping',
    title: 'On Leading and Still Shipping',
    date: '2024-09-12',
    readingTime: '6 min read',
    category: 'Leadership',
    excerpt:
      'The hardest part of moving into enterprise leadership is not the meetings — it is staying technically credible while you do it. A few practices that have kept me honest.',
    body: [
      'There is a quiet trap in enterprise leadership: the further you move up, the easier it is to drift from the work your team actually does. The meetings multiply, the strategy documents lengthen, and somewhere along the way you stop touching the systems you are responsible for.',
      'I made a rule a few years ago that I have tried to keep: spend at least one morning a week in the codebase or the infrastructure, not reviewing — building. Not to micromanage, but to keep my mental model of the system honest. A leader who has forgotten what the deploy pipeline feels like will make worse roadmap calls.',
      'The second practice is writing. When I make an architectural decision, I write a short note explaining the tradeoffs. Not for the team — for me, six months later, when someone asks why we chose this path. Memory is a poor architect; notes are a better one.',
      'And the third is candor. Enterprise environments reward polite ambiguity, but polite ambiguity is how projects quietly fail. I would rather be the leader who says "this will not scale past the next quarter" in the room than the one who writes the postmortem.',
      'Leadership and shipping are not opposites. They are two views of the same responsibility: making sure the right thing gets built and that it actually works. Keeping a hand in the work is how I keep the other hand honest.',
    ],
  },
  {
    slug: 'dashboards-that-decide',
    title: 'Dashboards That Decide, Not Decorate',
    date: '2024-07-03',
    readingTime: '5 min read',
    category: 'Data',
    excerpt:
      'Most dashboards are admired and ignored. The good ones change a decision in under a minute. Here is how I tell the difference, and how I design for the second kind.',
    body: [
      'A dashboard is a tool for making a decision. If it does not help someone decide something, it is a decoration — and most dashboards I see in enterprises are decorations. They are full of charts that look impressive and prompt no action.',
      'The test I use is simple: what decision does this screen enable, and who makes it? If I cannot answer that in one sentence, the dashboard is not done. The Revenue Leakage Dashboard I built years ago had one headline number — "leakage this month" — and every other chart existed to explain that number.',
      'Hierarchy matters. The most important metric should be the largest thing on the screen, and it should be the one a busy executive can read while walking past the monitor. Everything else is supporting evidence. If the supporting charts are equally prominent, you have built a wall of noise.',
      'Context matters too. A number without a baseline is meaningless. "1,200 errors today" is alarming or fine depending on whether yesterday had 50 or 5,000. I always pair a current value with a comparison — yesterday, last week, or a target — so the reader never has to do the math in their head.',
      'The dashboards I am proudest of are not the ones with the most charts. They are the ones where someone looked at them, said "oh, that needs fixing," and went and fixed it. That is the whole job.',
    ],
  },
  {
    slug: 'quiet-on-call',
    title: 'The Quiet Art of On-Call',
    date: '2024-04-18',
    readingTime: '7 min read',
    category: 'Systems',
    excerpt:
      'Good infrastructure is boring. The goal of on-call is not heroic saves — it is engineering the drama out of the system so the pager stays silent. Some lessons from the Linux trenches.',
    body: [
      'When I started in systems administration, I thought good on-call meant fast responses — being the hero who fixes the server at 3am. After a few years of 3am fixes, I realized the goal was the opposite: to build a system boring enough that the pager never goes off.',
      'The first lever is automation. Every manual step is a future incident, because humans are unreliable at 3am and reliable automation does not sleep. The CoreNet provisioning work was not really about saving time — it was about removing the dozen small decisions a tired admin makes wrong under pressure.',
      'The second lever is observability. You cannot fix what you cannot see, and you cannot prevent what you cannot predict. The observability stack I helped build was designed so that when something broke, the first dashboard already told you where. Correlated metrics, logs, and traces under shared labels — not three tabs you have to stitch together in your head.',
      'The third is alerting hygiene. An alert that does not require action is not an alert; it is noise, and noise trains people to ignore the real ones. We cut alert volume by 60% not by hiding problems, but by removing the alerts that no one ever acted on. The ones that remained meant something.',
      'Quiet on-call is not glamorous. No one writes postmortems about the night nothing happened. But the systems I trust most are the ones where the on-call rotation is genuinely calm — because someone did the unglamorous work of making it that way.',
    ],
  },
  {
    slug: 'bridging-the-roles',
    title: 'Why I Stayed T-Shaped',
    date: '2024-02-20',
    readingTime: '4 min read',
    category: 'Career',
    excerpt:
      'Specialists go deep; generalists go wide. I have spent a career trying to do both, and the tension is the point. A note on the T-shaped path for people who cannot pick just one thing.',
    body: [
      'Early in my career, I was told to pick a lane: developer, analyst, or sysadmin. I never quite could. Each role taught me something the others had left out, and the connections between them kept turning out to be where the interesting work was.',
      'The T-shaped metaphor gets used a lot, and it fits: a broad base of understanding across disciplines, with real depth in one or two. The horizontal bar is what lets me talk to a front-end developer, a data analyst, and a sysadmin in the same meeting and understand what each one is worried about. The vertical bar is what lets me actually contribute, not just translate.',
      'The cost is real. Being T-shaped means you are never the single deepest expert in the room on any one thing. There is always someone who has spent ten thousand more hours on Kubernetes than you. The trade is that you can see the shape of the whole system in a way a narrow specialist often cannot.',
      'For anyone early in their career feeling the pressure to specialize immediately: you do not have to pick on day one. Breadth early is not wasted time — it is the raw material for depth later. The roles will start to connect, and the connections are the career.',
    ],
  },
];

export interface ResumeJob {
  role: string;
  org: string;
  period: string;
  location: string;
  bullets: string[];
}

export const RESUME_EXPERIENCE: ResumeJob[] = [
  {
    role: 'Enterprise Lead',
    org: 'Meridian Systems',
    period: '2021 — Present',
    location: 'Lagos, NG',
    bullets: [
      'Direct a 14-person engineering and operations division owning the enterprise roadmap and vendor relationships.',
      'Govern mission-critical platforms serving 200k+ users with a 99.9% uptime record.',
      'Led a consolidation program unifying seven legacy tools into one governed portal, cutting task time by 38%.',
    ],
  },
  {
    role: 'Senior Web Developer',
    org: 'Northpeak Digital',
    period: '2018 — 2021',
    location: 'Remote',
    bullets: [
      'Led front-end architecture for a multi-tenant SaaS platform used by 120 tenants.',
      'Built a component library adopted across five product teams, cutting page load times by 40%.',
      'Introduced a CI visual-regression gate that blocked UI drift before merge.',
    ],
  },
  {
    role: 'Data Analyst',
    org: 'BlueGrid Analytics',
    period: '2016 — 2018',
    location: 'Lagos, NG',
    bullets: [
      'Designed reporting pipelines and executive dashboards in Tableau and Power BI.',
      'Surfaced a billing-leakage pattern that recovered $1.2M in the first year.',
      'Standardized metrics definitions across departments to end recurring reconciliation disputes.',
    ],
  },
  {
    role: 'Systems Administrator',
    org: 'CoreNet Infrastructure',
    period: '2013 — 2016',
    location: 'Lagos, NG',
    bullets: [
      'Managed a Linux estate of 300+ servers across two data centers.',
      'Automated provisioning with Ansible and Terraform, dropping setup time from half a day to under 15 minutes.',
      'Hardened security baselines to CIS standards, passing annual audits with zero findings.',
    ],
  },
];

export const RESUME_EDUCATION = [
  {
    school: 'University of Lagos',
    degree: 'B.Sc. Computer Science',
    period: '2009 — 2013',
    detail: 'Graduated with Second Class Honours (Upper Division).',
  },
];

export const RESUME_CERTIFICATIONS = [
  { name: 'Certified Kubernetes Administrator (CKA)', issuer: 'CNCF', year: '2022' },
  { name: 'AWS Solutions Architect — Associate', issuer: 'Amazon Web Services', year: '2021' },
  { name: 'ITIL Foundation', issuer: 'AXELOS', year: '2019' },
  { name: 'Microsoft Certified: Data Analyst Associate', issuer: 'Microsoft', year: '2018' },
];

export const RESUME_SKILLS = {
  Languages: ['TypeScript', 'JavaScript', 'Python', 'SQL', 'Bash'],
  'Frontend': ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
  'Backend': ['Node.js', 'PostgreSQL', 'Supabase', 'REST', 'Edge Functions'],
  'Data': ['SQL', 'Pandas', 'NumPy', 'Tableau', 'Power BI'],
  'Infrastructure': ['Linux', 'Docker', 'Kubernetes', 'Ansible', 'Terraform'],
  'Cloud': ['AWS', 'GCP', 'Vercel'],
  'Leadership': ['Roadmap', 'Governance', 'Vendor Mgmt', 'Mentorship', 'ITIL'],
};

// Icon registry for skill badges / marquee
export const SKILL_ICONS: { name: string; icon: LucideIcon }[] = [
  { name: 'Enterprise Leadership', icon: Briefcase },
  { name: 'Web Development', icon: Code2 },
  { name: 'Data Analysis', icon: BarChart3 },
  { name: 'Systems Admin', icon: Server },
  { name: 'DevOps', icon: Workflow },
  { name: 'Cloud', icon: Cloud },
  { name: 'Security', icon: ShieldCheck },
  { name: 'Git', icon: GitBranch },
  { name: 'Networking', icon: Network },
  { name: 'Automation', icon: Cpu },
  { name: 'Observability', icon: Layers },
  { name: 'Linux', icon: Terminal },
];
