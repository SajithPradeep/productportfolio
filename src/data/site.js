// ---------------------------------------------------------------------------
// Single place to edit everything about you. Components read from here, so you
// never have to go hunting through JSX to change a phone number or a headline.
// ---------------------------------------------------------------------------

export const profile = {
  name: 'Sajith Pradeep',
  role: 'Product Manager',

  // Shown under the name on the home page. Keep it to one line.
  tagline: 'Medical devices, travel, and enterprise tools — now building toward AI products.',

  email: 'sajith.pradeep1993@gmail.com',
  phone: '+91 77363 05685',
  phoneHref: '+917736305685',
  linkedin: 'https://www.linkedin.com/in/sajith-pradeep-87b98bb5/',
  linkedinLabel: 'linkedin.com/in/sajith-pradeep',
  location: 'India',

  // Used for <meta> and link-preview cards.
  siteUrl: 'https://sajithpradeep.netlify.app',
  metaDescription:
    'Sajith Pradeep — Product Manager. Shipped a Class 2 medical device app, ' +
    'an airline day-of-travel product, and enterprise tools across five industries. ' +
    'Engineer turned PM, now focused on AI products.',
};

// Home page intro. Two short paragraphs — this is the highest-read copy on the
// whole site, so it stays deliberately tight.
export const intro = [
  `I build products where the hard part is the constraint, not the feature list —
   a Class 2 medical device app that recommends insulin doses, an airline product
   measured in minutes saved before boarding, enterprise tools across life sciences,
   retail, and manufacturing.`,

  `I came up through engineering before moving into product, so I can argue with my
   team about the implementation and not just the roadmap. What I'm looking for next
   is a product where the impact is measurable and mine to own.`,
];

// --- AI positioning -------------------------------------------------------
// Deliberately modest and true. Fill `evidence` in as you build real AI work —
// courses, side projects, evals you've run, papers you've implemented. Until
// there's something concrete here, this section renders as intent, not claim.
export const aiFocus = {
  heading: 'Where I\'m heading',
  body: `Closest thing I've shipped to an AI product is a regulated decision-support
         system: an app that read glucose values off connected devices and recommended
         insulin dose changes, where being wrong had real consequences. That problem —
         how much authority you give an algorithm in a high-stakes workflow, and how you
         prove it's safe enough to ship — is the one I want to keep working on.`,

  // Add items as they become true. Each: { label, detail }
  // e.g. { label: 'Built', detail: 'A RAG evaluation harness for policy documents' }
  evidence: [],
};

// --- About page -----------------------------------------------------------

export const about = {
  heading: 'About',

  paragraphs: [
    `I'm a product manager at Deloitte, working with cross-functional teams on client
     products across life sciences, aviation, retail and manufacturing. My work sits
     between business, engineering and design — which in practice means translating
     what a client says they want into something a team can actually build, and then
     defending the parts that matter when the timeline gets tight.`,

    `I didn't start in product. I spent my first years as a front-end engineer and UX
     designer, building React applications for enterprise clients. That background is
     the thing I'd point to if you asked what makes me different from other PMs: I can
     read the codebase, I know roughly what a request costs before I make it, and
     design feedback from me tends to account for feasibility rather than ignore it.`,

    `The work I'm proudest of is the regulated kind — a Class 2 medical device
     application where a wrong recommendation is a clinical event rather than a bad
     review. That kind of constraint forces you to be precise about what a system is
     allowed to decide on its own, which is the same question sitting at the centre of
     every AI product being built right now.`,

    `What I want next is a product where the impact is measurable and mine to own.
     Consulting teaches you range — five industries, a dozen clients, constant context
     switching — but you hand the product over and rarely see the number move. I'd
     like to stay long enough to find out.`,
  ],

  // Short, specific, and checkable. Vague principles read as filler.
  principles: [
    {
      title: 'Define the metric before the feature',
      body: 'If nobody can say what number should move, the roadmap is a wish list. Most of my useful work happens in that argument.',
    },
    {
      title: 'Scope is the decision, not the constraint',
      body: 'Cutting the right two things is usually what saves a deadline. I would rather ship four things that work than seven that mostly do.',
    },
    {
      title: 'Resolve ambiguity on paper, not in code',
      body: 'Edge cases settled in a logic diagram cost minutes. The same case settled by a developer guessing at 6pm costs a sprint.',
    },
    {
      title: 'Put the output where the work already happens',
      body: 'A dashboard nobody opens has no value, however good the analysis behind it.',
    },
  ],
};

// Employment history for the About page timeline.
//
// !! VERIFY BEFORE PUBLISHING !!
// The old site listed these employers without dates, so the periods below are
// inferred from project ordering, not read from a source. Dates on a portfolio
// must match your resume and LinkedIn exactly — background checks compare them.
// Replace every `period` here once the Claude Desktop extraction comes back.
export const timeline = [
  {
    org: 'Deloitte',
    role: 'Product Manager',
    period: '2021 — Present',
    note: 'Client products across life sciences, aviation, retail and manufacturing.',
  },
  {
    org: 'Deloitte',
    role: 'Business Analyst · Scrum Master',
    period: '2019 — 2021',
    note: 'Requirements, user stories and agile delivery across five industries.',
  },
  {
    org: 'Coffeebeans Consulting',
    role: 'Frontend Engineer',
    period: '2019',
    note: 'Order fulfilment portal for a UK retail chain.',
  },
  {
    org: 'Wipro',
    role: 'UX Designer & Frontend Engineer',
    period: '2017 — 2019',
    note: 'Employee portal for a multinational oil & gas corporation.',
  },
];

// Reframed from the old PM / BA / Scrum / Frontend split, which read as a
// generalist. These four say "senior PM with unusual depth" instead.
export const capabilities = [
  {
    title: 'Product strategy & metrics',
    summary:
      'Defining what success actually means before anything gets built — then instrumenting it.',
    detail:
      'On the airline product I defined the core KPI as elapsed time from leaving home to ' +
      'boarding, then broke it into measurable segments. Most of the work was arguing the ' +
      'metric down to something a team could move.',
    skills: ['KPI definition', 'Roadmapping', 'Feature prioritisation', 'Release planning', 'PRDs'],
  },
  {
    title: 'Regulated & safety-critical products',
    summary:
      'Shipping where a wrong output is a clinical event, not a bad user experience.',
    detail:
      'Product manager on a Class 2 SAMD (Software as a Medical Device) application for a ' +
      'US pharmaceutical client — dose recommendations, connected-device data, and the ' +
      'documentation discipline that regulated software demands.',
    skills: ['Class 2 SAMD', 'Regulated documentation', 'Connected devices', 'Clinical workflows'],
  },
  {
    title: 'Discovery & research',
    summary:
      'Getting to the real problem before committing a team to a solution.',
    detail:
      'Ran discovery workshops that produced empathy maps and prioritised feature lists, ' +
      'then worked alongside design through wireframes to high-fidelity, writing the user ' +
      'stories and logic diagrams that kept engineering unblocked.',
    skills: ['Discovery workshops', 'Empathy mapping', 'User stories', 'Logic & flow diagrams'],
  },
  {
    title: 'Engineering fluency',
    summary:
      'Four years writing production front-end code before product — it still pays off daily.',
    detail:
      'Built and shipped React applications for oil & gas and UK retail clients, including ' +
      'raising test coverage on a live order-fulfilment portal. It means feasibility ' +
      'conversations with engineers are short, and design feedback accounts for cost.',
    skills: ['React', 'JavaScript', 'REST APIs', 'Git', 'Postman', 'Node.js'],
  },
];
