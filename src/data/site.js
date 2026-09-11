// ---------------------------------------------------------------------------
// Single place to edit everything about you. Components read from here, so you
// never have to go hunting through JSX to change a phone number or a headline.
//
// Source of truth: sajith-pradeep-professional-data.md (Sept 2026 extract).
// Claims here are held to the same standard as the resume — nothing on this
// site should be a number you can't source when asked.
// ---------------------------------------------------------------------------

export const profile = {
  name: 'Sajith Pradeep',

  // Resume tagline. Actual current job title is Senior Product Specialist,
  // which the About-page timeline states accurately.
  role: 'Product Manager',

  tagline: 'Building agentic AI systems on Deloitte\'s AI innovation team.',

  email: 'sajith.pradeep1993@gmail.com',
  phone: '+91 77363 05685',
  phoneHref: '+917736305685',
  location: 'Bangalore, India',

  // !! VERIFY !! The professional-data extract flags linkedin.com/in/sajithpradeep
  // as an unconfirmed inference. The URL below is the one from your own previous
  // site, so it is the better-evidenced of the two — but confirm it and update
  // both here and on the resume if the vanity URL is now live.
  linkedin: 'https://www.linkedin.com/in/sajith-pradeep-87b98bb5/',
  linkedinLabel: 'linkedin.com/in/sajith-pradeep',

  // Canonical domain, matching what the resume prints. The Netlify URL still
  // serves the same build.
  siteUrl: 'https://sajithpradeep.in',

  metaDescription:
    'Sajith Pradeep — Product Manager on Deloitte\'s AI innovation team, building ' +
    'agentic AI systems and Salesforce Agentforce products. 10+ years across ' +
    'frontend engineering, business analysis and product management.',
};

// Home page intro. Highest-read copy on the site, so it stays tight.
export const intro = [
  `I'm a product manager on Deloitte's AI innovation team, where I build agentic AI
   systems and Salesforce Agentforce products — writing the agent instructions myself,
   translating what SMEs know into something a team can actually build, and taking it
   through to release. Three of the proof-of-concepts I've built have converted into
   signed client engagements.`,

  `Before this I spent a decade getting here the long way round: five years as a
   business analyst, a stretch as a front-end engineer at Tesco and Shell, then
   release ownership on a Class II medical device app. I still write code, which is
   why I can prototype an idea rather than just describe it.`,
];

// --- AI positioning -------------------------------------------------------
// Deliberately scoped to the agent/product layer. The extract is explicit that
// there is no model-layer work — no fine-tuning, RAG architecture, or evaluation
// design — and claiming otherwise would collapse in a technical screen.
export const aiFocus = {
  heading: 'Where I work in AI',
  body: `I build at the agent layer: scoping what an agent should do, writing its
         instructions and skill files, setting acceptance criteria, and getting it
         through build, review and rollout. Not training models — directing them, and
         being accountable for whether the result is good enough to put in front of
         a customer.`,

  evidence: [
    {
      label: 'Agentforce',
      detail: 'Wrote the agent instructions and skill files for three pursuit POCs — case management, production scheduling, and partner relationship management.',
    },
    {
      label: 'Agentic products',
      detail: 'Offshore product owner on two multi-agent systems: Agency OS and Marketing OS.',
    },
    {
      label: 'AI tooling',
      detail: 'Build interactive prototypes with live backends in Cursor and Claude Code, and wrote the Claude Code skills the team now uses to generate user stories.',
    },
    {
      label: 'Governance',
      detail: 'Agency OS is in ethical-AI and legal review ahead of rollout.',
    },
  ],
};

// --- About page -----------------------------------------------------------

export const about = {
  heading: 'About',

  paragraphs: [
    `I'm a product manager at Deloitte, on the AI innovation team. My work is agentic
     AI — systems where an agent does something a person used to do by hand, and where
     most of the difficulty is deciding exactly how much the agent should be trusted to
     do on its own. I write the agent instructions and skill files myself, set the
     acceptance criteria, and run the ceremonies that get it built.`,

    `I got here the long way. Five years as a business analyst at Deloitte across
     Southwest Airlines, Giant Eagle, HP and Hitachi — discovery, requirements, and
     owning on-time delivery through test and deployment. Then a year of pure
     engineering, building in React for Shell and Tesco. Then two years as a product
     manager on a Class II medical device app for Eli Lilly, where release sequencing
     and UAT rigour matter more than anything clever.`,

    `That engineering stretch is the thing I'd point to if you asked what makes me
     different. I can read the codebase, I know roughly what a request costs before I
     make it, and when I want to test an idea I build a working prototype instead of
     describing one in a deck.`,

    `What I want next is a product I own end to end — one where I set the North Star,
     watch real users hit it, and change the thing based on what they actually do.
     Consulting gave me range across five industries. It rarely lets you stay long
     enough to see the number move, and that's the part I'm missing.`,
  ],

  principles: [
    {
      title: 'Say what you can source',
      body: 'I have cut more numbers from my own resume than I have added. A claim that survives two follow-up questions is worth more than a bigger one that does not.',
    },
    {
      title: 'Go and ask the users',
      body: 'A week of interviews on Agency OS changed which cloud platform we built on. Nobody would have found that in a requirements document.',
    },
    {
      title: 'Prototype before you commit a team',
      body: 'A working prototype with a live backend settles an argument that a slide deck will keep going for three weeks.',
    },
    {
      title: 'Be precise about what you owned',
      body: 'Influenced, contributed, decided and owned are four different things. Consulting work blurs them, and blurring them is how you lose credibility in an interview.',
    },
  ],
};

// Employment history. Dates and titles verified against the professional-data
// extract — these must continue to match your resume and LinkedIn exactly.
export const timeline = [
  {
    org: 'Deloitte Consulting India',
    role: 'Senior Product Specialist',
    period: 'Aug 2024 — Present',
    note: 'AI innovation team. Agentic AI systems and Salesforce Agentforce products.',
  },
  {
    org: 'Deloitte Consulting India',
    role: 'Product Manager',
    period: 'Mar 2022 — Jul 2024',
    note: 'Class II SaMD diabetes management app and connected medication tracking for Eli Lilly.',
  },
  {
    org: 'Coffeebeans Consulting',
    role: 'Frontend Engineer',
    period: 'Jun 2021 — Mar 2022',
    note: 'Consultant to Tesco on their delivery fulfilment portal.',
  },
  {
    org: 'Wipro Digital',
    role: 'Senior Software Developer',
    period: 'Jan 2021 — Jun 2021',
    note: 'Hybrid analyst, designer and developer on Shell\'s internal employee portal.',
  },
  {
    org: 'Deloitte Consulting India',
    role: 'Business Analyst',
    period: 'Oct 2015 — Dec 2020',
    note: 'Southwest Airlines, Giant Eagle, HP and Hitachi engagements.',
  },
];

// Four capabilities, each anchored to work that actually demonstrates it.
export const capabilities = [
  {
    title: 'Agentic AI product ownership',
    summary:
      'Scoping what an agent should do, then writing the instructions that make it do it.',
    detail:
      'Offshore product owner on two multi-agent systems, and hands-on author of the ' +
      'agent instructions and skill files for three Agentforce pursuit POCs — all three ' +
      'of which converted into signed client engagements.',
    skills: ['Salesforce Agentforce', 'Agent instruction authoring', 'Acceptance criteria', 'Multi-agent systems'],
  },
  {
    title: 'Turning SME knowledge into a buildable spec',
    summary:
      'The gap between what an expert knows and what a team can build is where I spend most of my time.',
    detail:
      'Marketing SMEs, IoT engineers, clinical stakeholders, client product owners — ' +
      'translating domain knowledge into requirements, user stories and acceptance ' +
      'criteria that a dev and QA team can work from without guessing.',
    skills: ['Requirement translation', 'User stories', 'Discovery interviews', 'Backlog grooming'],
  },
  {
    title: 'Release ownership in regulated software',
    summary:
      'Getting a medical device app out the door without a critical bug in it.',
    detail:
      'Owned release planning and rollout sequencing for a Class II SaMD diabetes app ' +
      'at Eli Lilly, coordinating dev teams of 12–14 across 5+ releases, clearing ' +
      'cross-team dependencies and supporting UAT through to production.',
    skills: ['Release planning', 'Dependency management', 'UAT', 'FDA compliance touchpoints', 'SAFe'],
  },
  {
    title: 'Engineering fluency',
    summary:
      'A decade of writing React, and I still build my own prototypes.',
    detail:
      'Shipped production front-end for Tesco and Shell before moving into product. ' +
      'Now build interactive prototypes with live backend integrations in Cursor and ' +
      'Claude Code, and wrote the internal Claude Code skills the team uses daily.',
    skills: ['React.js', 'JavaScript', 'Node.js', 'Cursor', 'Claude Code', 'Supabase / Firebase'],
  },
];

// Small full-stack things built outside work. Worth showing — they are the
// closest thing to end-to-end ownership in the whole portfolio.
export const sideProjects = [
  {
    name: 'Second brain',
    stack: 'Claude Code skills',
    detail:
      'A personal knowledge base that captures meeting notes and keeps a separate trail ' +
      'of key decisions, so past context is searchable through chat. Logging notes and ' +
      'decisions separately cut token consumption noticeably versus re-deriving from one ' +
      'large skill file.',
  },
  {
    name: 'Pregnancy journal',
    stack: 'React · Firebase · Android',
    detail:
      'Tracks medication schedules, symptoms and doctor-visit notes for expecting mothers.',
  },
  {
    name: 'Car expense tracker',
    stack: 'React · Supabase',
    detail: 'Logs fuel, maintenance and running costs.',
  },
];

export const certifications = [
  { name: 'Certified SAFe 6.0 Agilist', issuer: 'Scaled Agile', year: 'Mar 2025' },
  { name: 'Human–Computer Interaction for AI Systems Design', issuer: 'University of Cambridge Online', year: 'Apr 2025' },
  { name: 'Innovation of Products and Services: MIT\'s Approach to Design Thinking', issuer: 'MIT Sloan Executive Education', year: 'May 2025' },
];

export const education = {
  degree: 'B.Tech, Electronics and Communications Engineering',
  institution: 'Government Model Engineering College',
  period: '2011 — 2015',
};
