// Content inventory extracted from the original site (archived March 2025).
// Copy is preserved in intent, lightly edited for typos and modern tone.

export type Service = {
  slug: string;
  name: string;
  tagline: string;
  icon: "compass" | "helm" | "anchor" | "waves";
  summary: string;
  intro: string[];
  sections: { heading: string; lede?: string; items: string[] }[];
};

export const SERVICES: Service[] = [
  {
    slug: "technology-consulting",
    name: "Technology Consulting",
    tagline: "Insights to drive decisions",
    icon: "compass",
    summary:
      "End-to-end consulting and advisory that sets new projects up for success — and recovers the ones that have drifted off course.",
    intro: [
      "Poseidon provides end-to-end technology consulting and advisory services to set new projects up for success and recover projects in situation management. We deliver strategic planning and implementation services focused on optimising your technology investment and modernising your processes — strategic roadmaps, IT enablement, project management, maturity assessment, KPI measurement and just-in-time technology services.",
      "We also provide specialist technology evaluation and vendor selection services, helping you make evidence-based decisions through a structured process that protects project success and sustainability.",
    ],
    sections: [
      {
        heading: "Vendor selection",
        lede: "A structured, probity-safe process from first contact to final recommendation.",
        items: [
          "Define the vendor engagement, identification and selection process; socialise it with stakeholders",
          "Define criteria for vendor identification",
          "Identify and shortlist vendors based on initial engagement",
          "Manage the RFP / RFI process and vendor engagement",
          "Run vendor interviews, demonstrations and site visits",
          "Collate responses and score vendor interactions",
          "Deliver an evidence-based recommendation",
        ],
      },
      {
        heading: "Technology evaluation",
        lede: "Agnostic, benchmark-driven selection aligned to reference architectures.",
        items: [
          "Review and validate the conceptual design view",
          "Identify distinct technology components in an agnostic manner, aligned to reference architectures",
          "Benchmark to identify best-of-breed technologies",
          "Define criteria for technology selection",
          "Identify technologies that meet requirements and design aspirations",
          "Compare and analyse shortlisted options",
          "Deliver an evidence-based recommendation",
        ],
      },
      {
        heading: "Questions we answer",
        items: [
          "Is the business case valid, complete — does it make sense?",
          "What is the problem and outcome definition across stakeholder groups?",
          "Is the technology choice and vendor appropriate and compatible?",
          "Is the operating model aligned to delivery?",
          "Can existing solutions be leveraged, or is new development needed?",
          "How will new solutions impact existing systems and stakeholders?",
          "Should the project be done in-house or outsourced?",
          "What are the potential risks?",
        ],
      },
      {
        heading: "Investment research",
        lede: "For companies invested — or investing — in technology-intensive businesses.",
        items: [
          "Risks and potential mitigation",
          "Issues and resolutions",
          "Competing technologies and competitors",
          "Team performance benchmarking",
          "Objective on-site assessment to get the real picture",
        ],
      },
      {
        heading: "Project recovery & delivery assurance",
        lede: "If a troubled project isn't recovered, it becomes a write-off — with reputational consequences beyond the balance sheet.",
        items: [
          "Wing-to-wing health check and project governance review",
          "Validate business value — redefine it if needed",
          "Identify root causes and define a recovery plan",
          "Realign with strategy and restructure the project",
          "Operating model and vendor management",
          "Success criteria, KPIs, interim milestones and a recovery roadmap",
        ],
      },
    ],
  },
  {
    slug: "cto-as-a-service",
    name: "CTO as a Service",
    tagline: "Navigate complexity",
    icon: "helm",
    summary:
      "Full-fledged CTO capability, delivered flexibly — full-time on site or on demand, for as long as you need it.",
    intro: [
      "CTO as a Service is a unique offering for organisations that need the full capability of a Chief Technology Officer — flexibly or temporarily. It can be delivered full-time on site, or on demand as your needs evolve.",
    ],
    sections: [
      {
        heading: "What's in scope",
        lede: "Broad by design — your technology function, led end to end.",
        items: [
          "Needs identification",
          "Developing the company's technology strategy and ensuring it serves business objectives",
          "Ensuring technologies are used efficiently, profitably and securely",
          "Evaluating and implementing new systems and infrastructure",
          "Discovering technologies that yield competitive advantage",
          "Helping departments use technology profitably",
          "Supervising system infrastructure for functionality and efficiency",
          "Building quality assurance and data protection processes",
          "Monitoring KPIs and IT budgets to assess technological performance",
          "Using stakeholder feedback to drive improvements",
          "Communicating technology strategy to partners and investors",
        ],
      },
    ],
  },
  {
    slug: "solution-architecture",
    name: "Solution Architecture",
    tagline: "Designs that deliver",
    icon: "anchor",
    summary:
      "A holistic approach to design that resolves competing requirements into a solution you can build, govern and cost with confidence.",
    intro: [
      "Solution architecture is a holistic approach to design. It addresses competing — often conflicting — requirements in the form of a solution design that becomes the reference point for everything that follows.",
    ],
    sections: [
      {
        heading: "What it delivers",
        items: [
          "Assurance that all relevant options have been explored",
          "A solution that meets functional and non-functional requirements — and can be implemented",
          "A basis for competitive quotations, ensuring the best cost outcome",
          "Alignment to strategy, with exceptions and technical debt identified",
          "A reference for governance and oversight during implementation",
          "Defined infrastructure and testing requirements",
        ],
      },
      {
        heading: "What it considers",
        items: [
          "Enterprise architecture and technology strategy",
          "Application architecture and workflow management",
          "Functional and non-functional requirements",
          "Information architecture",
          "Integration architecture",
          "Information security architecture",
          "Operations and the operating model",
        ],
      },
      {
        heading: "Why it matters",
        lede: "The basis of success for any project — regardless of size or complexity.",
        items: [
          "Ensures the solution is not driven by a vendor product, incumbent system or technology bias",
          "Integrates disparate technologies using proven frameworks and successful implementations worldwide",
          "Lets you visualise the viability and workability of the solution before you commit",
          "Provides traceability from design intent through to delivered system",
          "Underpins reliable costing — no components overlooked",
          "Keeps you out of single-supplier lock-in: tender it, build in-house, blend teams, or have Poseidon build it and recover your design costs",
        ],
      },
    ],
  },
  {
    slug: "software-engineering",
    name: "Software Engineering",
    tagline: "Excellence in execution",
    icon: "waves",
    summary:
      "Enterprise-grade delivery — and the recovery of projects that are under water or no longer returning business value.",
    intro: [
      "This service is specifically geared toward delivery — including projects that are in situation management or not delivering business value.",
      "Projects drift for many reasons: embedded design issues, infrastructure problems, testing gaps, vendor agreements. Often the business reality simply changes. Rather than accepting a substandard result — or a write-off on the balance sheet — we explore realistic options for uplifting project outcomes, leveraging industry-standard frameworks for diagnosis and recovery.",
    ],
    sections: [
      {
        heading: "Scope of development services",
        items: [
          "Application integration — API, microservices, web services, SOA",
          "Workflow automation",
          "Business intelligence and analytics",
          "UI design and development",
          "Big data",
          "Robotic process automation (RPA)",
          "Artificial intelligence (AI)",
          "Bespoke applications in Java, .NET, PHP, C#, C and C++",
          "Mobile application development (iOS and Android)",
        ],
      },
      {
        heading: "Project recovery & delivery assurance",
        items: [
          "Wing-to-wing health check and project governance review",
          "Validate business value — redefine it if needed",
          "Identify root causes and define a recovery plan",
          "Realignment with strategy and project restructuring",
          "Operating model and vendor management",
          "Success criteria, KPIs, interim milestones and a recovery roadmap",
        ],
      },
    ],
  },
];

export type CaseStudy = {
  slug: string;
  title: string;
  sector: string;
  service: string;
  headline: string; // the one number or fact that sells it
  summary: string;
  body: { heading: string; paragraphs: string[]; bullets?: string[] }[];
  outcomes: string[];
  stats: { value: string; label: string }[];
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "core-banking-program-recovery",
    title: "Core Banking Program Recovery",
    sector: "Banking",
    service: "Project Recovery",
    headline: "A$7m write-off avoided",
    summary:
      "A core banking program had failed to go live three times — and nobody could say why. A 360° review found the cause, and the recovery laid the foundation for a A$180m program returning A$266m.",
    body: [
      {
        heading: "Situation",
        paragraphs: [
          "A core banking implementation had failed to go live three times and been placed into situation management. The project team could not identify the cause of the repeated failures — which meant the project couldn't even be closed for accounting purposes, while losses mounted from sub-par customer experience and the cost of keeping the team standing.",
        ],
      },
      {
        heading: "Approach",
        paragraphs: [
          "A 360-degree, wing-to-wing review of project artefacts was conducted — from terms of reference through business requirements, technology solution and the vendor contract. The conclusion: a lack of contractual clarity and accountability for requirements, specifications and design.",
          "A fast-paced analysis and requirements exercise realigned the project to its problem and outcome definition, followed by a redesign of the technology solution, removal of implementation bottlenecks, and updated contracts with clearly defined handovers, scope and accountability. Three costed solution options were presented to the steering committee, which chose a phased approach with reduced scope.",
        ],
      },
    ],
    outcomes: [
      "A$7.0m write-off avoided",
      "Outstanding compliance, regulatory and audit issues resolved",
      "Foundation laid for a A$180m program returning A$266m in revenue uplift over 4 years",
    ],
    stats: [
      { value: "A$7m", label: "write-off avoided" },
      { value: "A$266m", label: "revenue uplift over 4 years" },
      { value: "3×", label: "prior failed go-lives recovered" },
    ],
  },
  {
    slug: "big-data-solution",
    title: "Big Data Solution",
    sector: "Transport & Government",
    service: "Software Engineering",
    headline: "5 billion transactions a year",
    summary:
      "A city transport regulator had no way to detect wrong fares on its smart bus card system. A Hadoop-based platform now flags wrong-fare incidents and emerging hardware fault trends automatically.",
    body: [
      {
        heading: "Objective",
        paragraphs: [
          "Commissioned by the regulatory authority of a city with a smart bus card system. There was no proactive way to tell when a commuter was charged a wrong fare — whether from faulty bus hardware or manual intervention — and claims required lengthy investigation. The brief: automate detection of wrong-fare occurrences and emerging fault trends.",
        ],
      },
      {
        heading: "Solution",
        paragraphs: [
          "With more than 15 million transactions per day — over 5 billion historical transactions a year to process — big data technology was the right fit.",
        ],
        bullets: [
          "Hadoop for storage and processing, MySQL for rapid reporting",
          "Hive and NoSQL as query tools",
          "Java and R MapReduce for the wrong-fare detection algorithms",
          "Pentaho for dashboards and reporting",
        ],
      },
    ],
    outcomes: [
      "Automated detection of wrong-fare incidents, with affected commuter cards flagged",
      "Early warning of emerging fault trends in buses and fare equipment, enabling timely corrective action",
    ],
    stats: [
      { value: "15m", label: "transactions per day" },
      { value: "5b+", label: "historical transactions processed yearly" },
    ],
  },
  {
    slug: "risk-grids-for-var-calculation",
    title: "Risk Grids for VaR Calculation",
    sector: "Capital Markets",
    service: "Solution Architecture",
    headline: "26 weeks → under 6",
    summary:
      "A major Australian bank's new-product lead time was 26 weeks, throttled by its VaR model review process. A twice-failed risk grids project was delivered — cutting speed to market to under six weeks.",
    body: [
      {
        heading: "Background",
        paragraphs: [
          "The market risk function of a major Australian bank ran customised VaR models in Algorithmics. Granular control came at a price: compliance and model review alone took up to 8 weeks, pushing new-product lead time to 26 weeks and capping the range of products that could be offered to institutional clients.",
          "The quant team's answer — risk grids for VaR calculation — had already failed twice, defeated by the complexity of extracting transactional data from Murex and integrating with the wider landscape.",
        ],
      },
      {
        heading: "Approach",
        paragraphs: [
          "Janak Mistry took accountability for delivery, starting agnostic: process redesign and risk grids were both explored with business and technology teams. Risk grids won on merit — and this time the groundwork held:",
        ],
        bullets: [
          "The modelling approach was clearly articulated and tested, with data requirements defined",
          "Data extracts were tuned so existing Murex infrastructure could sustain them",
          "The right Algorithmics module was identified and tested, avoiding custom development",
          "Holistic solution architecture and specifications were defined before implementation began",
        ],
      },
    ],
    outcomes: [
      "Structured products enabled for institutional clients — all product-range restrictions removed",
      "Speed to market cut from over 26 weeks to under 6",
      "A$775,000 in annual operational savings from process deprecation",
    ],
    stats: [
      { value: "6 wks", label: "new-product lead time, down from 26" },
      { value: "$775k", label: "annual operational savings" },
      { value: "2", label: "prior failed attempts, then delivered" },
    ],
  },
  {
    slug: "eftpos-settlement-digitisation",
    title: "Digitization Milestone for eftpos Payments Australia",
    sector: "Payments",
    service: "Solution Architecture",
    headline: "$1.25m saved annually",
    summary:
      "The eftpos Settlement Service centralised end-of-day settlement across member banks via the RBA — built on a workflow engine chosen through agnostic architecture, vendor interviews and proof of concept.",
    body: [
      {
        heading: "Problem",
        paragraphs: [
          "eftpos needed to cut onboarding time for new members and reduce processing complexity and cost for members — primarily banks and payment aggregators. The identified solution: centralise and automate end-of-day settlement through members' Reserve Bank of Australia Exchange Settlement Accounts.",
          "The constraint: the eftpos Hub is highly efficient but costly and slow to enhance. The new system had to be robust, extremely secure, 99.999% available — and cheap to develop and extend without specialised skills.",
        ],
      },
      {
        heading: "Solution",
        paragraphs: [
          "After detailed analysis, a technology-agnostic architecture, vendor interviews and a proof of concept, a workflow-engine approach won: SunGard's Infinity Process Platform, chosen for its mission-critical pedigree, ease of development and SWIFT integration. An embedded Java calculation engine with an in-memory database produces the end-of-day settlement figures and reports, with instructions initiated through the Reserve Bank's RITS.",
        ],
      },
    ],
    outcomes: [
      "Delivered on time and within budget",
      "Around $1.25m of annual operational costs eliminated for member banks",
      "Member onboarding reduced from over 14 weeks to under 7",
      "Enhancements possible without specialised resources",
    ],
    stats: [
      { value: "$1.25m", label: "annual member costs eliminated" },
      { value: "14→7 wks", label: "member onboarding time" },
      { value: "99.999%", label: "availability requirement met" },
    ],
  },
  {
    slug: "workflow-automation-vendor-selection",
    title: "Technology Evaluation & Vendor Selection",
    sector: "Mortgage Broking",
    service: "Technology Consulting",
    headline: "400 franchisees, one platform",
    summary:
      "A 400-franchisee mortgage broker was bleeding productivity and morale. The obvious fix was a tool — the real cause was undefined process. Research-led selection landed a sustainable, enterprise-ready platform at the right price.",
    body: [
      {
        heading: "Problem",
        paragraphs: [
          "A mortgage broking company with more than 400 franchisees employing 1,100 staff was suffering productivity loss, poor customer service, low franchisee morale and attrition.",
        ],
      },
      {
        heading: "Approach",
        paragraphs: [
          "Productivity tooling looked like the obvious answer. Root-cause examination showed the primary cause was a lack of process definition — compounded by multiple loan-processing systems from lead to settlement and no data to gauge productivity. Workflow automation combined with task management was identified as the solution category, and with a crowded vendor market the company needed facts:",
        ],
        bullets: [
          "What is the underlying technology, and what are the prevalent market models?",
          "What are industry best practices?",
          "How do price, functional and non-functional requirements compare?",
          "What are the success factors?",
        ],
      },
    ],
    outcomes: [
      "Market categories of workflow automation and task management solutions mapped, with vendor roadmaps compared",
      "Cloud vs on-premise options objectively compared",
      "Best-of-breed solution identified, negotiated and selected at a reasonable price",
      "Selection confirmed sustainable and extensible across the enterprise — project set up for success",
    ],
    stats: [
      { value: "400+", label: "franchisees served by the selection" },
      { value: "1,100", label: "staff affected" },
    ],
  },
  {
    slug: "npp-vendor-selection",
    title: "NPP Vendor Selection — Major Australian Bank",
    sector: "Payments",
    service: "Technology Consulting",
    headline: "Decision in 4 weeks",
    summary:
      "A major bank needed an NPP sponsor urgently — with full probity. Poseidon ran the end-to-end selection in four weeks: 2 sponsors, 8 days of presentations, 57 participants, one evidence-based decision.",
    body: [
      {
        heading: "Context",
        paragraphs: [
          "A major Australian bank wanted to participate in the New Payments Platform without being a direct subscriber. To meet NPP deadlines and its payments strategy it needed to select a sponsor urgently — while adhering to vendor-selection best practice, company policy and probity.",
        ],
      },
      {
        heading: "Approach",
        paragraphs: [
          "Poseidon mobilised its network to run a gap analysis, agreed scope, and built the RFP with the client team:",
        ],
        bullets: [
          "Functional and non-functional requirements",
          "Technical specifications",
          "Desired features to ensure fit with bank strategy and roadmap",
          "Compliance with bank policies",
          "A template for detailed commercial, technical and functional offers",
        ],
      },
      {
        heading: "Outcome",
        paragraphs: [
          "Poseidon facilitated the end-to-end sponsor review and selection at short notice over four weeks — 2 major sponsors, 8 days of presentations and interviews, 57 people across vendor and bank stakeholder teams. Structured preparation of requirements and selection criteria ensured probity and gave the steering committee the analysis it needed to make an informed, evidence-based decision in a very tight timeframe.",
        ],
      },
    ],
    outcomes: [
      "End-to-end sponsor selection completed in 4 weeks",
      "Probity maintained throughout, with criteria recorded during selection",
      "Steering committee equipped to decide on evidence, not instinct",
    ],
    stats: [
      { value: "4 wks", label: "end-to-end selection" },
      { value: "57", label: "people across stakeholder teams" },
      { value: "8 days", label: "of presentations and interviews" },
    ],
  },
  {
    slug: "npp-processing-engine-design",
    title: "NPP Processing Engine Redesign",
    sector: "Payments Software",
    service: "Solution Architecture",
    headline: "Liquidated damages avoided",
    summary:
      "An international payments vendor's NPP engine was late and defect-ridden, with major Australian banks already signed. A wing-to-wing health check traced it to design — and the redesign brought it home.",
    body: [
      {
        heading: "Problem",
        paragraphs: [
          "An international software vendor specialising in payments processing was struggling to deliver its NPP Payments Engine — already sold to major Australian banks. The program was behind schedule with ongoing quality issues rooted in design defects.",
        ],
      },
      {
        heading: "Approach",
        paragraphs: [
          "Poseidon ran a wing-to-wing health check, validated findings with management, and implemented rectification measures. With design issues confirmed as the root cause, Poseidon undertook the redesign of the NPP Payments Engine — alongside streamlined business analysis practices, improved project governance, and closer alignment with the vendor's own payments design framework.",
        ],
      },
    ],
    outcomes: [
      "Solution realigned to the vendor's proprietary framework, ensuring product sustainability",
      "Liquidated damages and adverse publicity avoided",
      "Program brought back on track",
    ],
    stats: [
      { value: "0", label: "liquidated damages paid" },
      { value: "100%", label: "alignment to vendor framework" },
    ],
  },
  {
    slug: "portfolio-optimisation-tool",
    title: "Portfolio Optimization Tool — Dutch Pension Fund",
    sector: "Asset Management",
    service: "Software Engineering",
    headline: "€375k saved per year",
    summary:
      "What arrived as a tooling request was really an architecture problem: spreadsheets everywhere, no data master, manual rework. A rebuilt data architecture plus optimisation heuristics changed the economics.",
    body: [
      {
        heading: "Context",
        paragraphs: [
          "A Dutch pension fund requested a bespoke portfolio optimisation solution. A consulting assessment uncovered deeper issues: multiple spreadsheets, no transactional data master and manual processes producing errors, rework and slow response to market developments.",
        ],
      },
      {
        heading: "Solution",
        paragraphs: [
          "A bottom-up redesign of the information and application architecture decommissioned the spreadsheets and consolidated data sources into a single repository with synchronised, automatically scheduled transformation and loading. On top of that foundation, the optimisation tool uses simulated annealing, tabu search and genetic algorithm heuristics to arrive at the optimal profitable portfolio within all business constraints.",
        ],
      },
    ],
    outcomes: [
      "Portfolio managers reach the most profitable portfolio while meeting every business constraint",
      "€375,000 in annual operational savings from eliminating manual processes, errors and rework",
      "Managers can continuously enhance the calculation algorithms themselves",
    ],
    stats: [
      { value: "€375k", label: "operational savings per year" },
      { value: "1", label: "consolidated data repository, replacing spreadsheets" },
    ],
  },
];

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Our engagement with Janak was productive, resulting in a high quality, timely and cost effective delivery of a new service. I would be happy to engage Janak again and recommend him for other projects.",
    name: "Paul Jennings",
    role: "Chief Technology Officer, eftpos Payments Australia",
  },
  {
    quote:
      "I worked with Janak on a complex, business critical, regulatory project for a large bank expanding its operations in Asia. His professional consulting background, in-depth knowledge of the bank's business architecture and ability to quickly understand and communicate a holistic business and technology solution design were strong contributors to the project's eventual success.",
    name: "John Bakker",
    role: "Global Portfolio Management Office Lead, HSBC Private Bank, Geneva",
  },
  {
    quote:
      "The end result was the Business Solution Design framework based on proven consulting, software development methodologies and business management disciplines of finance, marketing and operations. This framework is now part of the Westpac project methodology.",
    name: "Norbert Raymond",
    role: "Head of Business Analysis, Westpac Banking Corporation",
  },
  {
    quote:
      "As a non-tech founder, he provided me with much needed technology guidance, support and advice.",
    name: "Jay Boolkin",
    role: "Founder, Social Change Central & Promise or Pay; Myer Innovation Fellow",
  },
  {
    quote:
      "Over the years I have got to know Janak as an entrepreneur pur sang, with a healthy drive to think out of the box.",
    name: "Marc Heemskerk",
    role: "Head of Group Risk Management, NN Group",
  },
];

export const STATS = [
  { value: 20, suffix: "+", label: "Years experience" },
  { value: 500, suffix: "×", label: "Peak return on investment" },
  { value: 6, suffix: "", label: "Global specialist hubs" },
];

// Service-name ticker on the home page.
export const MARQUEE_ITEMS = [
  "Technology Consulting",
  "CTO as a Service",
  "Solution Architecture",
  "Software Engineering",
  "Enterprise Architecture",
  "Delivery Assurance",
];

// "A typical Poseidon project" — effort split across the engagement.
export const PROJECT_PHASES = [
  { label: "Brief Development, Research & Analysis", pct: 25 },
  { label: "Conceptual Approach, Scope and Deliverables", pct: 30 },
  { label: "Stakeholder Workshops, Definition, Iteration and Finalization", pct: 45 },
];

// Team makeup on a typical engagement.
export const TEAM_MAKEUP = [
  { label: "Principal Consultant and Project Team", pct: 50 },
  { label: "SMEs, Partners, Specialists", pct: 40 },
  { label: "Business, Finance, Marketing, Operations, Technology and Infrastructure stakeholders", pct: 10 },
];

export type Insight = {
  slug: string;
  label: string;
  date: string;
  readTime: string;
  title: string;
  teaser: string;
  body: { heading?: string; paragraphs?: string[]; bullets?: string[] }[];
};

export const INSIGHTS: Insight[] = [
  {
    slug: "why-projects-fail",
    label: "Enterprise Architecture",
    date: "Jun 2026",
    readTime: "6 min read",
    title: "Why Projects Fail to Deliver Business Value",
    teaser:
      "Most transformation programs are measured on delivery milestones, not business outcomes. Here is how misaligned architecture quietly kills value — and the disciplines that prevent it.",
    body: [
      {
        paragraphs: [
          "Failure by projects to deliver business value costs companies millions of dollars daily.",
          "Whether a project involves legacy systems or next-generation technologies — artificial intelligence, big data, digitisation, robotic process automation — there is no substitute for effective problem and outcome definition, and a structured approach to delivering solutions. In more than 20 years across industries, this has not changed.",
        ],
      },
      {
        heading: "Why multi-million-dollar enterprise projects fail to deliver business value",
        bullets: [
          "No consistent problem and outcome definition across stakeholders",
          "Project value proposition not updated as business drivers evolve",
          "Lack of a unified approach",
          "Projects driven by technology preferences or incumbent solutions",
          "Operating model not taken into account",
          "Insufficient time and effort evaluating vendors and technologies",
        ],
      },
      {
        heading: "What a structured approach ensures",
        bullets: [
          "Consistent understanding of the problem and desired outcomes across all stakeholders",
          "Business value preserved through the project's life — architecture updated as drivers change",
          "Traceability from design intent to delivered system",
          "Reduced dependence on any one vendor or execution team; easier change management",
          "Governance plus a basis for competitive proposals",
          "Solutions driven by needs, not technology preference or incumbent landscape",
          "Continued stakeholder buy-in",
        ],
      },
    ],
  },
  {
    slug: "enterprise-architecture-age-of-ai",
    label: "Technology Strategy",
    date: "May 2026",
    readTime: "5 min read",
    title: "Enterprise Architecture in the Age of AI",
    teaser:
      "AI pilots are easy. Industrialising AI across an enterprise is not. The organisations winning with AI are the ones that treated architecture as a business capability first.",
    body: [
      {
        paragraphs: [
          "Every enterprise now has an AI pilot. Very few have AI in production, at scale, with outcomes the CFO can point to. The difference is rarely the model — it is the architecture around it.",
          "A pilot runs in a sandbox with clean data, a tolerant audience and no integration burden. Production AI has to live in the real estate: legacy systems of record, half-documented interfaces, data that was never designed to be consumed, and an operating model that assumes humans make every decision.",
        ],
      },
      {
        heading: "Architecture is the difference between a demo and a capability",
        paragraphs: [
          "Organisations that industrialise AI successfully treat enterprise architecture as a business capability, not an IT diagram. Before any model is selected, they can answer: where does the data of record live, who owns it, how does a machine-made decision enter the workflow, and who is accountable when it is wrong?",
        ],
        bullets: [
          "Information architecture first — AI is only as good as the data lineage beneath it",
          "Integration architecture second — a model that cannot reach the systems of record is a toy",
          "Operating model third — decide where humans stay in the loop before the vendor decides for you",
          "Technology selection last — agnostic evaluation, not the incumbent's roadmap",
        ],
      },
      {
        heading: "The same discipline, a new technology",
        paragraphs: [
          "None of this is new. The disciplines that made core banking replacements, payments platforms and big-data programs succeed — problem and outcome definition, agnostic solution options, traceability from design to delivery — are exactly the disciplines that industrialise AI. The technology changes; the reasons projects fail do not.",
        ],
      },
    ],
  },
  {
    slug: "vendor-selection-is-a-discipline",
    label: "Advisory",
    date: "Apr 2026",
    readTime: "4 min read",
    title: "Vendor Selection Is a Discipline, Not a Decision",
    teaser:
      "The cost of the wrong platform compounds for a decade. A structured evaluation — requirements, weighted scoring, proof of concept — turns a gamble into an investment.",
    body: [
      {
        paragraphs: [
          "Most platform decisions are made the way they should never be: a persuasive demonstration, a reference call with a hand-picked customer, and a price that looks right this year. The platform then stays for ten. Whatever was missed in selection compounds annually — in licence terms, integration effort, upgrade cycles and the growing cost of leaving.",
        ],
      },
      {
        heading: "What a disciplined selection looks like",
        bullets: [
          "Functional and non-functional requirements defined before any vendor is contacted",
          "Criteria and weighted scoring agreed with stakeholders — and recorded during the process, not reconstructed after it",
          "A structured RFP with a template for commercial, technical and functional offers, so responses can actually be compared",
          "Demonstrations, interviews and site visits driven by your scenarios, not the vendor's script",
          "Proof of concept on your data and your constraints before commitment",
          "An evidence-based recommendation the steering committee can defend",
        ],
      },
      {
        heading: "Probity is a feature",
        paragraphs: [
          "On regulated programs, how you selected matters as much as what you selected. A documented, criteria-driven process protects the decision — and the people who made it — long after the contract is signed. We have run end-to-end selections for major banks in as little as four weeks without sacrificing either rigour or probity. Speed and discipline are not opposites; discipline is what makes speed safe.",
        ],
      },
    ],
  },
];

export const ENQUIRY_INTERESTS = [
  "Technology Consulting and Advisory",
  "Technology Evaluation and Vendor Selection",
  "Solution Architecture",
  "Project Recovery and Delivery Assurance",
];

export const SPECIALIST_AREAS = [
  "Cyber security",
  "Quantitative modelling",
  "Software engineering",
  "Analytics",
  "Process engineering",
  "Decision support systems",
  "Geo analytics",
  "Workflow automation",
  "Cloud architecture",
  "UX & customer journey design",
  "Mobility solutions",
  "Big data, AI, VR & RPA",
  "Project management & delivery",
  "IT contracts management",
  "Testing",
];
