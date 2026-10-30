export const GITHUB = 'https://github.com/notOK18'

export const stats = [
  { num: <>1%<small> → </small>100%</>, label: 'Gross-total accuracy on 414 real invoices at EDM' },
  { num: '0.99', label: 'Balanced accuracy of the review-routing model' },
  { num: '5', label: 'Desktop automations shipped to replace manual spreadsheet work at Catafago' },
  { num: <>~1<small> hr/day</small></>, label: 'Manual analysis removed by the Touch network-data agent' },
]

export const jobs = [
  {
    when: 'Jun – Aug 2026',
    company: 'EDM',
    title: 'AI Developer Intern',
    lead: 'Built an invoice processing pipeline that reads scanned invoices, extracts the accounting fields, checks the math and decides which ones need a human to review.',
    points: [
      <>Raised gross-total accuracy from <strong>1% to 100%</strong> across <strong>414 invoices</strong> by locating the totals block and validating each invoice's calculations.</>,
      <>Trained logistic regression models on reviewer decisions, reaching <strong>0.99 balanced accuracy</strong> for automated review routing.</>,
      <>Built a SQLite-based pattern learner so the system adapts to new invoice layouts and languages.</>,
    ],
    tags: ['Python', 'EasyOCR', 'PyTorch', 'OpenCV', 'scikit-learn', 'SQLite'],
  },
  {
    when: 'Aug 2026',
    company: 'Catafago',
    title: 'AI Engineering Intern',
    lead: 'Replaced manual spreadsheet work at a pharmaceutical company with desktop tools staff can run themselves.',
    points: [
      <>Delivered <strong>five internal Python desktop automations</strong> covering molecule filtering, supplier reconciliation, forecast enrichment and PDF table extraction.</>,
      <>Automated the full pharmaceutical pricing workflow: per-product registry lookups became <strong>one drag-and-drop action</strong> that produces a finished Excel report.</>,
    ],
    tags: ['Python', 'pandas', 'Tkinter', 'Excel'],
    links: [
      { href: 'https://github.com/notOK18/Highprioritymole', label: 'Molecule tool on GitHub ↗' },
      { href: 'https://github.com/notOK18/Scraperdrug', label: 'Pricing tool on GitHub ↗' },
    ],
  },
  {
    when: 'Jul 2026',
    company: 'Touch Lebanon',
    title: 'AI Engineering Intern',
    lead: 'Built an AI-powered Excel analysis agent that consolidates network site data into an interactive dashboard with site maps, trend charts and bar graphs.',
    points: [
      <>Integrated OpenAI, Tkinter and Leaflet with secure API key management.</>,
      <>Removed roughly <strong>an hour of manual analysis every day</strong>.</>,
    ],
    tags: ['Python', 'OpenAI API', 'Leaflet', 'Tkinter'],
  },
  {
    when: 'Jun – Aug 2025',
    company: 'Touch Lebanon',
    title: 'Security Intern',
    points: [
      <>Ran phishing simulation campaigns to measure how susceptible staff were and improve security awareness.</>,
      <>Monitored and analyzed logs with the ELK Stack and Syslog for centralized collection and visualization.</>,
    ],
    tags: ['Elasticsearch', 'Logstash', 'Kibana', 'Syslog'],
  },
]

export const projects = [
  {
    kind: 'AI agent',
    title: 'Streaming Catalog Analytics Agent',
    body: [
      'Ask a question in plain English about an Apple TV+ catalog of 19K titles (genres, release years, IMDb ratings, regional availability) and the agent writes and runs the analysis itself.',
      'It also uses an LLM to produce PDF reports with executive summaries, key trends, data-quality issues and business recommendations.',
    ],
    tags: ['LLM', 'Python', 'PDF reports'],
  },
  {
    kind: 'Fair ML',
    title: 'Bias-Mitigation AutoML Framework',
    body: [
      'Extended Auto-sklearn with Fairlearn so model selection weighs fairness metrics such as demographic parity and equalized odds.',
      'A filter enforces user-defined fairness limits during selection while keeping predictive performance.',
    ],
    tags: ['Auto-sklearn', 'Fairlearn'],
    href: 'https://github.com/notOK18/auto-sklearn',
  },
  {
    kind: 'Full stack',
    title: 'ByteBuy Hardware Marketplace',
    body: [
      'A marketplace for computer hardware with RESTful APIs for chat and messaging.',
      'PostgreSQL stores persistent chat history, behind secure cookie-based authentication.',
    ],
    tags: ['Next.js', 'React', 'Node.js', 'PostgreSQL'],
    href: 'https://github.com/S-Banna/ByteBuy',
  },
]

export const programming = [
  ['Python', 'primary'],
  ['Java', ''],
  ['C / C++', ''],
  ['HTML / CSS', ''],
  ['Git & GitHub', ''],
]

export const languages = [
  ['Arabic', 'Fluent'],
  ['English', 'Fluent'],
  ['French', 'Beginner'],
]
