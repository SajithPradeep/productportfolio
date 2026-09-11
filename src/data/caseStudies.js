// ---------------------------------------------------------------------------
// Work, written as case studies rather than bullet lists.
//
// Each entry follows the same spine: what the situation was, what you actually
// decided, and what came of it. The `decisions` field is the one that matters
// most to a hiring manager — deliverables show you executed, decisions show you
// owned something. Fill it in even when it feels obvious.
//
// `outcome.tier` marks how solid each claim is:
//   'measured'  — someone recorded this number
//   'modeled'   — derived from known inputs; be ready to show the arithmetic
//   'scope'     — a fact about size, not about results
// Anything you can't back at one of those three levels should not be here.
// ---------------------------------------------------------------------------

export const groups = [
  { id: 'pm', label: 'Product Management' },
  { id: 'ba', label: 'Business Analysis' },
  { id: 'eng', label: 'Engineering' },
];

export const caseStudies = [
  {
    id: 'samd-insulin',
    group: 'pm',
    featured: true,
    title: 'Insulin dosing app for a weekly-dose diabetes drug',
    org: 'Deloitte Consulting',
    role: 'Product Manager',
    period: '2022 – 2023',
    industry: 'Life Sciences · Class 2 SAMD',
    tags: ['Medical device', 'Decision support', 'Connected devices', 'Regulated'],
    status: 'Shipped',

    summary:
      'A regulated medical-device app that read blood glucose from connected devices and ' +
      'recommended insulin dose adjustments — re-architected for a new weekly dosing regimen.',

    problem:
      'The client was releasing a new insulin designed for weekly rather than daily doses. ' +
      'Their existing patient applications assumed a daily regimen throughout — the tracking ' +
      'model, the reminder logic, and the dose-adjustment guidance were all built around it. ' +
      'As Class 2 Software as a Medical Device, anything we changed carried regulatory weight, ' +
      'and the whole adaptation had a two-month window.',

    approach: [
      'Ran a discovery workshop with clinical and business stakeholders to separate what was genuinely broken by weekly dosing from what merely looked unfamiliar.',
      'Produced an empathy map and a prioritised feature list from that workshop, which became the basis for wireframing.',
      'Worked directly with the design team through wireframes into high-fidelity screens, rather than handing over a spec and waiting.',
      'Wrote the user stories, functional flows, and logic diagrams covering dose-adjustment behaviour and the Bluetooth sync from connected glucose meters.',
    ],

    decisions: [
      'Scoped the work as an adaptation of the existing regimen model rather than a rebuild — the two-month deadline made a ground-up redesign a way to miss it entirely.',
      'Pushed dose-recommendation edge cases into explicit logic diagrams early, so the ambiguity got resolved with clinical stakeholders rather than by a developer at implementation time.',
    ],

    outcome: [
      { text: 'Delivered the full design and specification set within the two-month window', tier: 'measured' },
      { text: 'Covered a Class 2 SAMD product where incorrect guidance is a clinical risk, not a usability issue', tier: 'scope' },
    ],

    reflection:
      'This is the closest I have come to an AI product: a system given real authority over a ' +
      'high-stakes decision, where most of the design effort went into bounding what it was ' +
      'allowed to recommend and when it had to defer to a human. That question is what pulled ' +
      'me toward AI product work.',

    stack: ['Figma', 'Jira', 'Confluence', 'Bluetooth / connected devices'],
  },

  {
    id: 'day-of-travel',
    group: 'pm',
    featured: true,
    title: 'Day of Travel — cutting the time from home to boarding gate',
    org: 'Deloitte Consulting',
    role: 'Product Manager',
    period: '2020',
    industry: 'Aviation',
    tags: ['KPI definition', 'Geofencing', 'Mobile', 'MVP'],
    status: 'MVP · halted',

    summary:
      'A mobile product for a US domestic airline that treated the entire journey from a ' +
      'passenger\'s front door to the boarding gate as one measurable window.',

    problem:
      'The airline wanted shorter boarding delays and a better passenger experience, but ' +
      'framed as "improve the travel experience" it was not a problem a team could build ' +
      'against. Delays accumulated well before anyone reached the airport, and nobody owned ' +
      'that stretch of the journey.',

    approach: [
      'Researched airline ground operations and observed how passengers actually move through boarding, rather than how the process is documented.',
      'Defined the product KPI as total elapsed time from leaving home to reaching the gate, split into two measurable segments: home to airport, and airport entry to gate.',
      'Designed traffic-aware departure reminders using Google Maps integration, so the prompt to leave reflected live conditions rather than a fixed buffer.',
      'Extended the product across the ground journey — transport and car-rental options, parking guidance, geofenced airport-entry detection, and indoor navigation through check-in and security to the gate.',
      'Built an MVP and started user acceptance testing.',
    ],

    decisions: [
      'Insisted the KPI start at the passenger\'s home, not at airport arrival. It widened scope, but measuring only the in-airport segment would have optimised the part of the journey that was already working.',
      'Sequenced geofencing and indoor navigation behind the reminder engine — the reminders delivered most of the time saving at a fraction of the integration cost.',
    ],

    outcome: [
      { text: 'MVP built and entered UAT with the client', tier: 'measured' },
      { text: 'Project halted before launch when COVID-19 removed the budget', tier: 'measured' },
    ],

    reflection:
      'The product never launched, so I cannot claim a result. What I take from it is the ' +
      'KPI work: the difference between "improve the travel experience" and "reduce elapsed ' +
      'minutes from home to gate" was the difference between a wish and a roadmap.',

    stack: ['Google Maps API', 'Geofencing', 'iOS / Android', 'Figma'],
  },

  {
    id: 'salesforce-assets',
    group: 'pm',
    featured: false,
    title: 'Predicting asset failure before it happens',
    org: 'Deloitte Consulting',
    role: 'Product Manager',
    period: '2021',
    industry: 'Internal tooling · Manufacturing',
    tags: ['Salesforce', 'Predictive maintenance', 'Dashboards'],
    status: 'Shipped',

    summary:
      'An internal Salesforce tool that used asset performance history to flag equipment ' +
      'likely to fail, so maintenance could happen before a breakdown rather than after.',

    problem:
      'Asset maintenance across locations was reactive — teams found out something had failed ' +
      'when it stopped working. The performance history needed to anticipate failures existed, ' +
      'but was not being used to drive any decision.',

    approach: [
      'Framed the KPI as identifying at-risk assets early enough for remediation to be possible, rather than simply reporting failures faster.',
      'Used historical asset performance to establish failure rates as the basis for risk scoring.',
      'Built Salesforce dashboards that surfaced asset status where maintenance teams already worked, instead of adding another system to check.',
    ],

    decisions: [
      'Put the output inside Salesforce rather than in a standalone tool — a risk score nobody opens has no value, however good the model behind it.',
    ],

    outcome: [
      { text: 'Shifted asset maintenance from reactive repair to advance remediation', tier: 'scope' },
      { text: 'ADD A NUMBER HERE — assets covered, sites live, or failures caught early', tier: 'scope' },
    ],

    reflection:
      'A risk score is only as useful as the workflow it lands in. That lesson transfers ' +
      'directly to any model-backed product.',

    stack: ['Salesforce', 'Dashboards', 'Historical performance data'],
  },

  {
    id: 'patient-companion',
    group: 'ba',
    featured: false,
    title: 'Patient companion app for medication adherence',
    org: 'Deloitte Consulting',
    role: 'Business Analyst',
    period: '2021 – 2022',
    industry: 'Life Sciences',
    tags: ['Healthcare', 'Adherence', 'Mobile'],
    status: 'Shipped',

    summary:
      'An application helping patients track medication, receive timely reminders, refill on ' +
      'schedule, and log symptoms over time.',

    problem:
      'Patients on long-term medication miss doses, refill late, and lose track of symptom ' +
      'patterns between appointments — all of which degrade outcomes and none of which the ' +
      'prescribing clinician sees until the next visit.',

    approach: [
      'Worked with the client product owner to translate clinical requirements into detailed user stories for design and development.',
      'Mapped user flows and logic diagrams covering reminder timing, refill windows, and symptom capture.',
      'Supported the QA team through UAT, resolving requirement ambiguity as it surfaced.',
    ],

    decisions: [],

    outcome: [
      { text: 'Shipped for a US pharmaceutical client', tier: 'scope' },
    ],

    reflection: '',
    stack: ['Jira', 'Confluence', 'User flow diagrams'],
  },

  {
    id: 'retail-loyalty',
    group: 'ba',
    featured: false,
    title: 'Loyalty programme that drove store visits',
    org: 'Deloitte Consulting',
    role: 'Business Analyst',
    period: '2020 – 2021',
    industry: 'Retail',
    tags: ['Loyalty', 'Personalisation', 'Mobile'],
    status: 'Shipped',

    summary:
      'A customer loyalty application for a US retail chain offering reward points and ' +
      'personalised discounts, aimed at increasing repeat store visits.',

    problem:
      'The client needed a reason for customers to return to physical stores, and generic ' +
      'discounting was expensive and indiscriminate.',

    approach: [
      'Documented requirements for reward accrual, redemption, and personalised offer logic.',
      'Created user stories and flow diagrams supporting development and QA.',
    ],

    decisions: [],

    outcome: [
      { text: 'ADD A NUMBER HERE — enrolled users, participating stores, or visit uplift', tier: 'scope' },
    ],

    reflection: '',
    stack: ['Jira', 'Confluence'],
  },

  {
    id: 'support-portal',
    group: 'ba',
    featured: false,
    title: 'Customer support portal for a computer manufacturer',
    org: 'Deloitte Consulting',
    role: 'Business Analyst · Scrum Master',
    period: '2019 – 2020',
    industry: 'Technology · Customer Support',
    tags: ['Support', 'Web portal', 'Agile'],
    status: 'Shipped',

    summary:
      'A web support portal for a US computer manufacturer, delivered while also running the ' +
      'team\'s agile ceremonies.',

    problem:
      'New support functionality needed translating from the client product owner\'s intent ' +
      'into something a distributed team could build without constant clarification.',

    approach: [
      'Worked directly with the client product owner to understand new functionality and wrote the detailed user stories behind it.',
      'Ran sprint planning, standups, demos, and retrospectives as scrum master, and handled capacity planning across the delivery team.',
    ],

    decisions: [],

    outcome: [
      { text: 'Delivered across multiple sprints as both analyst and scrum master', tier: 'scope' },
    ],

    reflection: '',
    stack: ['Jira', 'Agile / Scrum'],
  },

  {
    id: 'oil-gas-portal',
    group: 'eng',
    featured: false,
    title: 'Employee portal for a multinational oil & gas corporation',
    org: 'Wipro',
    role: 'UX Designer & Frontend Engineer',
    period: '2018 – 2019',
    industry: 'Energy',
    tags: ['React', 'UX', 'Design systems'],
    status: 'Shipped',

    summary:
      'Designed and built a section of a global employee portal against a five-month deadline, ' +
      'covering both the design and the front-end implementation.',

    problem:
      'The engagement needed a designer and a front-end engineer, and had budget for one ' +
      'person. The portal already had an established component library.',

    approach: [
      'Built wireframes from the portal\'s existing components with cross-functional stakeholders and the product owner, which removed the need for a separate designer.',
      'Implemented the front end in React.js, HTML, CSS, and jQuery.',
      'Mentored team members on front-end practice.',
    ],

    decisions: [
      'Designed strictly within the existing component library rather than proposing new patterns — it kept one person viable in a two-person role and cut build time.',
    ],

    outcome: [
      { text: 'Delivered a portal section single-handedly across design and implementation', tier: 'scope' },
      { text: 'Scope creep extended the timeline — the clearest lesson I have had in scope management', tier: 'measured' },
    ],

    reflection:
      'Watching requirements arrive steadily after sign-off, with no mechanism to price them, ' +
      'is why I now insist on an explicit change process before a deadline is committed.',

    stack: ['React.js', 'HTML', 'CSS', 'jQuery'],
  },

  {
    id: 'order-fulfilment',
    group: 'eng',
    featured: false,
    title: 'Order fulfilment portal for a UK retail chain',
    org: 'Coffeebeans Consulting',
    role: 'Frontend Engineer',
    period: '2019',
    industry: 'Retail',
    tags: ['React', 'Test coverage', 'Code quality'],
    status: 'Shipped',

    summary:
      'Improved delivery efficiency on a live order-management portal while raising the ' +
      'codebase\'s test coverage.',

    problem:
      'The portal needed order-management improvements, and its test coverage was well below ' +
      'the level the team wanted before changing anything significant.',

    approach: [
      'Implemented feature requirements against the existing order fulfilment flow.',
      'Modernised the codebase using current React patterns.',
      'Raised coding standards alongside feature work rather than as a separate cleanup effort.',
    ],

    decisions: [],

    outcome: [
      { text: 'Improved overall code coverage by 20%', tier: 'measured' },
    ],

    reflection: '',
    stack: ['React', 'JavaScript', 'Jest'],
  },
];

export const featured = caseStudies.filter((c) => c.featured);
