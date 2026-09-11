// ---------------------------------------------------------------------------
// Work, written as case studies rather than bullet lists.
//
// Source: sajith-pradeep-professional-data.md (Sept 2026 extract).
//
// `outcome.tier` marks how solid each claim is:
//   'measured'  — someone recorded this number
//   'modeled'   — derived from known inputs; be ready to show the arithmetic
//   'scope'     — a fact about size, not about results
//
// Numbers the extract marked REMOVED (Shell 40%, Southwest 30%, Giant Eagle 25%,
// HP 45%, broadcaster 60%, PRM 40%/90%) are deliberately absent. Two figures the
// extract flags as UNSOURCED — Agency OS "week to under an hour" and the Eli Lilly
// 25% release-time improvement — are also held back pending confirmation. See the
// notes on those entries.
//
// `decisions` is the field hiring managers actually read. Where the extract was
// explicit that a call was influenced rather than owned, the wording reflects it.
// ---------------------------------------------------------------------------

export const groups = [
  { id: 'ai', label: 'AI & Agentic Systems' },
  { id: 'pm', label: 'Product Management' },
  { id: 'ba', label: 'Business Analysis' },
  { id: 'eng', label: 'Engineering' },
];

export const caseStudies = [
  // ----------------------------------------------------- current role: AI ---
  {
    id: 'agency-os',
    group: 'ai',
    featured: true,
    title: 'Agency OS — campaign briefs without the week of assembly',
    org: 'Deloitte · AI innovation team',
    role: 'Offshore Product Owner',
    period: '2024 — Present',
    industry: 'Agentic AI · Marketing',
    tags: ['Agentic AI', 'User research', 'GCP', 'Ethical-AI review'],
    status: 'In review',

    summary:
      'An agentic AI system that turns a marketing team\'s raw inputs — a long bill of ' +
      'materials, meeting notes, historical campaign data — into campaign briefs, ' +
      'Plan-on-a-Page documents and partner plans.',

    problem:
      'Producing a campaign brief meant a person reading through a bill of materials ' +
      'that runs long, plus meeting notes, loose documents and historical campaign ' +
      'data, then hand-filling the mandatory fields across several template documents. ' +
      'It took somewhere between a few days and a week each time, and it was the kind ' +
      'of work nobody could point to as valuable once it was done.',

    approach: [
      'Took the build as assigned rather than proposed — it was handed to me to go and build — and started by interviewing the people who would use it.',
      'Ran technical feasibility checks jointly with the design team before committing to an approach.',
      'Scoped the agents to crunch the raw inputs and draw on historical campaign data to auto-fill the documents.',
      'Built in a usability-tracking agent that measures time-to-completion and where people drop off, so there will be real numbers once real users arrive.',
      'Now running the rollout — release activities and cross-team showcases to build adoption ahead of launch.',
    ],

    decisions: [
      'The user interviews turned up something the requirements did not: the team worked almost entirely inside Google\'s ecosystem, not Deloitte\'s internal platform the build was planned for. I surfaced that finding and the build direction changed to GCP. The final call sat with a technical architect and the product owner — I found it and made the case, I did not decide it alone.',
      'Instrumented usability tracking into the first release rather than leaving it for later, on the basis that a tool claiming to save time should be able to prove it.',
    ],

    outcome: [
      { text: 'Built, tested and delivered; currently in ethical-AI and legal review ahead of rollout', tier: 'measured' },
      { text: 'Demonstrated turnaround in testing is dramatically faster than the manual process — but there are no live users yet, so this is a tested capability rather than a production result', tier: 'scope' },
    ],

    reflection:
      'The honest limitation here is that nothing has been through real usage yet. I ' +
      'instrumented the product so that when it does, there will be an actual number ' +
      'rather than an estimate — which is the position I would rather be in.',

    stack: ['Agentic AI', 'GCP', 'User interviews', 'Figma'],
  },

  {
    id: 'agco-case-management',
    group: 'ai',
    featured: true,
    title: 'AGCO — cutting case research from days to minutes',
    org: 'Deloitte · AI innovation team',
    role: 'Product Owner · Agent author',
    period: '2024 — 2025',
    industry: 'Agentforce · Agriculture',
    tags: ['Salesforce Agentforce', 'Case management', 'Document search', 'Converted'],
    status: 'Converted to engagement',

    summary:
      'A Salesforce Agentforce agent that searches workshop manuals, technical specs ' +
      'and historical case resolutions to diagnose equipment faults for customer ' +
      'service reps.',

    problem:
      'AGCO\'s service reps diagnosed equipment problems by manually searching workshop ' +
      'manuals, technical specifications and past case resolutions. A single case took ' +
      'two to three days to research. The knowledge existed — it was just spread across ' +
      'documents nobody could search properly.',

    approach: [
      'Wrote the agent instructions and skill files myself, rather than specifying them for someone else to implement.',
      'Connected the agent to a data lake holding the workshop manuals, technical specs and historical case resolutions.',
      'Scoped it to surface relevant past cases alongside specific manual and specification page references, then propose a resolution — so the rep can check the source rather than take the answer on trust.',
      'Worked with the tech and QA teams to deliver within the agreed pursuit timeline.',
    ],

    decisions: [
      'Made the agent cite specific manual and spec pages rather than just returning an answer. In a diagnostic workflow a rep needs to verify before acting, and an uncitable recommendation is one they will ignore.',
    ],

    outcome: [
      { text: 'Cut case research from 2–3 days to minutes, against the client\'s own stated baseline', tier: 'measured' },
      { text: 'Converted into a signed Deloitte engagement — I built the POC, leadership closed the deal', tier: 'measured' },
    ],

    reflection:
      'Worth being precise about what "measured" means here: the 2–3 day baseline was ' +
      'the client\'s own stated pain point, and the improvement was demonstrated against ' +
      'it. It was not a controlled before-and-after study, and I would say so if asked.',

    stack: ['Salesforce Agentforce', 'Data lake', 'Agent skill files'],
  },

  {
    id: 'marketing-os',
    group: 'ai',
    featured: true,
    title: 'Marketing OS — four agents watching a campaign in flight',
    org: 'Deloitte · AI innovation team',
    role: 'Offshore Product Owner',
    period: '2024 — Present',
    industry: 'Agentic AI · Marketing',
    tags: ['Multi-agent', 'KPI measurement', 'Marketing mix modelling'],
    status: 'In build',

    summary:
      'A four-agent system that measures live marketing campaigns against the KPIs set ' +
      'in each campaign brief, recommends corrections while the campaign is still ' +
      'running, and reports on what happened afterwards.',

    problem:
      'Campaign performance tends to get assessed once the campaign is over, which is ' +
      'exactly when nothing can be done about it. The KPIs differ per campaign because ' +
      'they are set in each brief, so the system has to read what success means for this ' +
      'campaign rather than apply a fixed definition.',

    approach: [
      'Translated the marketing SME\'s domain design into buildable requirements, agent by agent.',
      'Scoped four agents with distinct jobs: performance analysis against the brief\'s KPIs, optimisation recommendations that consume that analysis, continuous real-time monitoring with alerting, and post-campaign reporting.',
      'Set the acceptance criteria for each agent individually rather than for the system as a whole.',
      'Ran grooming and sprint ceremonies with the dev and QA teams against the delivery timeline.',
    ],

    decisions: [
      'Sequenced the build around an external dependency — channel attribution comes from a separate marketing-mix-modelling workstream owned by a data science team. We consume it; we do not build it. Getting that sequencing wrong would have blocked the optimisation agent entirely.',
      'Kept KPI definition with the marketing SME and out of the product. The tool\'s job is measuring the brief\'s KPIs correctly, not deciding what they should be.',
    ],

    outcome: [
      { text: 'Agent logic built and validated on synthetic data; no live campaign data has run through it yet', tier: 'scope' },
      { text: 'Now being built out as a standalone product for multi-client sale', tier: 'scope' },
    ],

    reflection:
      'I am the offshore product owner here, feeding into an onshore product owner who ' +
      'sits closer to the SME and makes the final roadmap calls. I own the requirements ' +
      'and the acceptance criteria, not the roadmap — worth stating plainly.',

    stack: ['Agentic AI', 'Marketing mix modelling', 'Jira'],
  },

  {
    id: 'agentforce-pocs',
    group: 'ai',
    featured: false,
    title: 'Two more Agentforce POCs, both signed',
    org: 'Deloitte · AI innovation team',
    role: 'Agent author',
    period: '2024 — 2025',
    industry: 'Agentforce · Broadcast & Partner ops',
    tags: ['Salesforce Agentforce', 'Scheduling', 'Partner relations', 'Converted'],
    status: 'Converted to engagement',

    summary:
      'Agent instructions and skill files for two further pursuit proof-of-concepts — ' +
      'a production crew scheduler for a broadcaster, and a partner relationship agent ' +
      'replacing a call centre.',

    problem:
      'The broadcaster\'s production manager checked five separate systems to work out ' +
      'who was available, what they cost, and what travel would add, then did the ' +
      'budget arithmetic by hand. Separately, a partner network relied on a human call ' +
      'centre plus a stack of documents to answer product and tiering questions and to ' +
      'book appointments with interested prospects.',

    approach: [
      'Wrote the agent instructions and skill files for both, working with tech and QA to deliver each within the agreed pursuit timeline.',
      'Scheduling agent: recommends an optimal, budget-compliant crew automatically from availability, travel cost and resource cost.',
      'Partner agent: answers product and tiering questions directly, offers appointment slots to interested prospects and captures the preferred slot — available around the clock rather than in call-centre hours.',
    ],

    decisions: [],

    outcome: [
      { text: 'Both converted into signed Deloitte engagements', tier: 'measured' },
      { text: 'Replaced a five-system manual check with a single automated recommendation, and a business-hours call centre with 24/7 availability', tier: 'scope' },
    ],

    // The extract is explicit that the 60% efficiency and 40%/90% support figures
    // were guesstimates. They stay off the site.
    reflection:
      'Both of these carried impressive-sounding efficiency percentages in an earlier ' +
      'version of my resume. Neither was ever measured, so I removed them. What is ' +
      'defensible is that both converted into signed work.',

    stack: ['Salesforce Agentforce', 'Agent skill files'],
  },

  {
    id: 'internal-ai-tooling',
    group: 'ai',
    featured: false,
    title: 'Internal tooling — prototypes and Claude Code skills',
    org: 'Deloitte · AI innovation team',
    role: 'Builder',
    period: '2024 — Present',
    industry: 'Internal tooling',
    tags: ['Claude Code', 'Cursor', 'Prototyping', 'Developer experience'],
    status: 'In use',

    summary:
      'Interactive prototypes used in client pitches, and a set of Claude Code skills ' +
      'that the team now uses to automate the mechanical parts of product work.',

    problem:
      'Two separate frictions. Agent concepts are hard to sell from a deck — clients ' +
      'commit budget more readily to something they can click. And writing user stories ' +
      'in the team\'s required format, then moving them into Git and the Kanban board, ' +
      'is repetitive work that eats time better spent on the actual product.',

    approach: [
      'Build interactive HTML prototypes with live backend integrations using Cursor and Claude Code, used in client pitches to make agent concepts tangible before anyone commits to a build.',
      'Wrote a Claude Code skill that generates user stories in the team\'s required format and pushes them straight to Git and the Kanban board.',
      'Wrote a second skill that converts Figma designs into frontend-ready user stories.',
    ],

    decisions: [
      'Built the tooling for the team rather than just for myself. A personal script saves one person an afternoon; a shared skill changes how the team works.',
    ],

    outcome: [
      { text: 'Both skills adopted across the team', tier: 'measured' },
      { text: 'Cuts the time spent hand-writing user stories — no specific figure measured', tier: 'scope' },
    ],

    reflection: '',
    stack: ['Claude Code', 'Cursor', 'Figma', 'Git', 'Kanban'],
  },

  // ------------------------------------------------------ product manager ---
  {
    id: 'lilly-samd',
    group: 'pm',
    featured: false,
    title: 'Class II medical device app for Eli Lilly',
    org: 'Deloitte Consulting',
    role: 'Product Manager',
    period: 'Mar 2022 — Jul 2024',
    industry: 'Life Sciences · Class II SaMD',
    tags: ['SaMD', 'Regulated', 'Release management', 'FDA compliance'],
    status: 'Shipped',

    summary:
      'Release ownership for a Class II Software as a Medical Device diabetes ' +
      'management app, a Bluetooth-connected medication tracker, and a patient ' +
      'companion app on iOS and Android.',

    problem:
      'Regulated medical software has a different failure mode from ordinary product ' +
      'work: a defect that reaches production is a clinical and compliance event, not a ' +
      'bad review. With dev teams of 12–14 working across more than five releases, most ' +
      'of the risk sat in sequencing and cross-team dependencies rather than in any ' +
      'single feature.',

    approach: [
      'Owned release planning and rollout sequencing across the diabetes management app and the connected medication tracker.',
      'Cleared cross-team dependencies to keep sprints unblocked — the bulk of the job, and the least visible part of it.',
      'Translated agreed priorities into user stories with acceptance criteria, and supported UAT through to production release.',
      'Coordinated with Eli Lilly\'s product owners to define and build a patient companion app with integrated health monitoring on iOS and Android, meeting FDA compliance requirements throughout.',
    ],

    decisions: [
      'Feature prioritisation for each release was a joint call with Lilly\'s product owners, weighing technical feasibility, sequencing dependencies and delivery impact. Lilly\'s product team defined the roadmap — I shaped what went into each release against it.',
    ],

    outcome: [
      { text: 'Zero critical bugs through UAT and production release', tier: 'measured' },
      { text: '95% satisfaction score for the Bluetooth medication tracker — from a pilot group of UAT testers, not live production users', tier: 'measured' },
      { text: 'Dev teams of 12–14, across 5+ releases', tier: 'scope' },
    ],

    // The 25% release-delivery-time improvement is on the resume but flagged
    // UNSOURCED in the extract. Held back until you can confirm how it was measured.
    reflection:
      'I want to be accurate about the ownership here: I did not own the product ' +
      'decisions. Lilly\'s product team held the roadmap. What I owned was release ' +
      'planning, sequencing, dependency clearing and the quality of what shipped — and ' +
      'zero critical bugs on a Class II device is the number I would stand behind.',

    stack: ['Jira', 'Confluence', 'iOS', 'Android', 'Bluetooth', 'SAFe'],
  },

  // -------------------------------------------------------------- BA years ---
  {
    id: 'southwest-day-of-travel',
    group: 'ba',
    featured: false,
    title: 'Southwest Airlines — Day of Travel',
    org: 'Deloitte Consulting',
    role: 'Business Analyst',
    period: '2015 — 2020',
    industry: 'Aviation',
    tags: ['Innovation', 'Indoor navigation', 'Mobile'],
    status: 'Shipped',

    summary:
      'An innovation app covering the whole journey from home to boarding gate — car ' +
      'booking, then indoor airport navigation from drop-off through security and ' +
      'baggage to the gate.',

    problem:
      'The stretch of a journey between leaving home and reaching the gate is where ' +
      'passenger time actually goes, and no single system owned it.',

    approach: [
      'Worked with the design team through discovery sessions and design reviews to shape the app\'s look and feel.',
      'Ran sprint ceremonies and owned on-time delivery through development, testing and deployment.',
    ],

    decisions: [
      'Indoor airport navigation was not in Southwest\'s brief. The project team, myself included, arrived at it through internal discussion and proposed it as an addition — the part of the product that addressed the largest chunk of unaccounted-for passenger time.',
    ],

    outcome: [
      { text: 'Delivered through development, testing and deployment', tier: 'scope' },
    ],

    reflection:
      'An earlier version of my resume claimed this reduced boarding delays by 30%. I ' +
      'could not stand that number up, so it is gone. The part worth telling is the ' +
      'scope addition — spotting something valuable the client had not asked for.',

    stack: ['Discovery workshops', 'Design reviews', 'Agile'],
  },

  {
    id: 'hitachi-iot',
    group: 'ba',
    featured: false,
    title: 'Hitachi — IoT asset health monitoring',
    org: 'Deloitte Consulting',
    role: 'Business Analyst',
    period: '2015 — 2020',
    industry: 'Industrial · IoT',
    tags: ['IoT', 'Predictive maintenance', 'ML', 'Image processing'],
    status: 'POC pilot',

    summary:
      'A dashboard pulling real-time sensor data from IoT-enabled machinery across ' +
      'Hitachi factories, using ML and image processing to assess asset health and flag ' +
      'predictive maintenance needs.',

    problem:
      'Factory machinery was monitored reactively. The sensor data needed to anticipate ' +
      'failures was being generated but not turned into anything anyone acted on.',

    approach: [
      'Worked with IoT subject-matter experts and the design team to define the requirements jointly — genuinely defining them, not collecting a pre-written specification.',
      'Scoped monitoring of asset health against measured parameters, with predictive maintenance suggestions surfaced to the people who could act on them.',
      'Ran sprint ceremonies and owned delivery through build and test.',
    ],

    decisions: [],

    outcome: [
      { text: 'Delivered as a proof-of-concept pilot; it did not go to full production deployment', tier: 'measured' },
    ],

    reflection:
      'This is the closest thing to model-layer work in my background, and I want to be ' +
      'straight about my part in it: I defined requirements with the SMEs. The ML and ' +
      'image processing were not mine.',

    stack: ['IoT sensors', 'ML', 'Image processing', 'Dashboards'],
  },

  {
    id: 'giant-eagle-loyalty',
    group: 'ba',
    featured: false,
    title: 'Giant Eagle — customer loyalty app',
    org: 'Deloitte Consulting',
    role: 'Business Analyst',
    period: '2015 — 2020',
    industry: 'Retail · Grocery',
    tags: ['Loyalty', 'Personalisation', 'Vendor management'],
    status: 'Shipped',

    summary:
      'A loyalty application where customers earn and redeem points, with ' +
      'location-based offers and shopping-preference personalisation.',

    problem:
      'Delivering loyalty-based push offers and personalisation meant coordinating ' +
      'across internal engineering, third-party vendors and local teams in multiple ' +
      'locations — with the offer logic itself owned elsewhere.',

    approach: [
      'Managed stakeholders across engineering and the third-party vendors delivering push offers and shopping-preference personalisation.',
      'Collaborated with local teams across multiple locations on location-based offers tied to loyalty point balances.',
      'Ran sprint ceremonies and owned on-time delivery through development, testing and deployment.',
    ],

    decisions: [],

    outcome: [
      { text: 'Delivered across multiple locations with third-party vendor dependencies', tier: 'scope' },
    ],

    reflection:
      'My role here was coordination and vendor management. I did not define the ' +
      'personalisation or loyalty logic, and an earlier resume line implying a 25% lift ' +
      'in store visits was not accurate.',

    stack: ['Vendor management', 'Agile', 'Jira'],
  },

  {
    id: 'hp-support-portal',
    group: 'ba',
    featured: false,
    title: 'HP — customer support portal',
    org: 'Deloitte Consulting',
    role: 'Business Analyst',
    period: '2015 — 2020',
    industry: 'Consumer electronics',
    tags: ['Support', 'Backlog ownership', 'Release planning'],
    status: 'Shipped',

    summary:
      'Enhancements to HP\'s existing customer service portal, from scoping through ' +
      'to release.',

    problem:
      'The portal needed continuous enhancement, with the client\'s product owners ' +
      'holding the intent and a delivery team needing it in a form they could build.',

    approach: [
      'Worked with HP\'s product owners to scope the enhancements they needed.',
      'Owned backlog grooming, sprint ceremonies and release planning.',
      'Owned on-time ticket delivery through development, testing and release, and supported UAT.',
    ],

    decisions: [],

    outcome: [
      { text: 'Delivered enhancements on time across multiple releases', tier: 'scope' },
    ],

    reflection: '',
    stack: ['Jira', 'Agile', 'UAT'],
  },

  // ------------------------------------------------------------ engineering ---
  {
    id: 'tesco-fulfilment',
    group: 'eng',
    featured: false,
    title: 'Tesco — delivery fulfilment portal',
    org: 'Coffeebeans Consulting',
    role: 'Frontend Engineer',
    period: 'Jun 2021 — Mar 2022',
    industry: 'Retail · Grocery',
    tags: ['React', 'Test coverage', 'Code review'],
    status: 'Shipped',

    summary:
      'Feature development on Tesco\'s delivery fulfilment portal, staffed as an ' +
      'external consultant inside their in-house team.',

    problem:
      'The portal needed continued feature work, and its test coverage was below where ' +
      'the team wanted it before making significant changes.',

    approach: [
      'Built features in React.js as part of Tesco\'s in-house development team.',
      'Collaborated daily with Tesco\'s scrum master and engineers through sprint ceremonies and code reviews.',
      'Raised coverage alongside feature work rather than as a separate cleanup effort.',
    ],

    decisions: [],

    outcome: [
      { text: 'Increased code coverage by 20%', tier: 'measured' },
    ],

    reflection: '',
    stack: ['React.js', 'JavaScript', 'Jest'],
  },

  {
    id: 'shell-portal',
    group: 'eng',
    featured: false,
    title: 'Shell — internal employee portal',
    org: 'Wipro Digital',
    role: 'Senior Software Developer',
    period: 'Jan 2021 — Jun 2021',
    industry: 'Energy',
    tags: ['React', 'Wireframing', 'Design systems'],
    status: 'Shipped',

    summary:
      'A hybrid analyst, designer and developer role on Shell\'s internal employee ' +
      'portal — understanding the requirement, wireframing it, then building it.',

    problem:
      'The engagement needed someone who could sit with product owners to work out what ' +
      'they wanted, turn it into a design, and then implement it — rather than three ' +
      'people handing work between them.',

    approach: [
      'Worked with product owners to understand what they wanted built.',
      'Produced high-level wireframes using the portal\'s existing design component library.',
      'Built the workflows in React.js against those wireframes.',
    ],

    decisions: [
      'Designed strictly within the existing component library rather than proposing new patterns, which is what made one person viable across all three roles.',
    ],

    outcome: [
      { text: 'Delivered portal workflows across analysis, design and implementation single-handedly', tier: 'scope' },
    ],

    reflection:
      'An earlier resume claimed a 40% front-end performance improvement here. I was ' +
      'not confident in it, so it is gone.',

    stack: ['React.js', 'Design component library', 'Wireframing'],
  },
];

export const featured = caseStudies.filter((c) => c.featured);
