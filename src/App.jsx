import { useRef, useState } from 'react'
import { GITHUB, jobs, projects, programming, languages } from './data.jsx'

const ext = { target: '_blank', rel: 'noopener' }

function GitHubIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
    </svg>
  )
}

function Tags({ items }) {
  return (
    <div className="tags">
      {items.map((t) => <span className="tag" key={t}>{t}</span>)}
    </div>
  )
}

function Nav() {
  return (
    <nav className="nav">
      <div className="wrap">
        <a className="mark" href="#top">Omar Khodor<span>.</span></a>
        <ul>
          <li><a href="#work">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  )
}

function Hero() {
  return (
    <header className="hero">
      <div>
        <span className="eyebrow">AI Engineer · CS @ AUB, Beirut</span>
        <h1>Omar Khodor</h1>
        <p className="lede">I build AI tools that turn <mark>messy invoices, PDFs and spreadsheets</mark> into clean, checked data that teams can act on.</p>
        <p className="meta">Computer Science student at the American University of Beirut, graduating May 2027. Three AI engineering internships in 2026.</p>
        <div className="cta">
          <a className="btn primary" href="#contact">Get in touch</a>
          <a className="btn" href={GITHUB} {...ext}><GitHubIcon />GitHub</a>
        </div>
      </div>
    </header>
  )
}

function Experience() {
  return (
    <section className="block" id="work">
      <div className="sec-head">
        <h2>Experience</h2>
        <p>Internships where I shipped working tools to real teams, most recent first.</p>
      </div>
      <div className="ledger">
        {jobs.map((job) => (
          <article className="job" key={job.when + job.title}>
            <div className="when">{job.when}<span className="co">{job.company}</span></div>
            <div>
              <h3>{job.title}</h3>
              {job.lead && <p className="lead">{job.lead}</p>}
              <ul>{job.points.map((p, i) => <li key={i}>{p}</li>)}</ul>
              <Tags items={job.tags} />
              {job.links && (
                <div className="links">
                  {job.links.map((l) => <a key={l.href} href={l.href} {...ext}>{l.label}</a>)}
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function Projects() {
  return (
    <section className="block" id="projects">
      <div className="sec-head">
        <h2>Projects</h2>
        <p>AI agents, fair machine learning and full-stack work.</p>
      </div>
      <div className="projects">
        {projects.map((p) => (
          <article className="proj" key={p.title}>
            <span className="kind">{p.kind}</span>
            <h3>{p.title}</h3>
            {p.body.map((text, i) => <p key={i}>{text}</p>)}
            <Tags items={p.tags} />
            {p.href && <a className="gh" href={p.href} {...ext}>View on GitHub ↗</a>}
          </article>
        ))}
      </div>
    </section>
  )
}

function List({ rows }) {
  return (
    <ul>
      {rows.map(([name, note]) => <li key={name}><span>{name}</span><span>{note}</span></li>)}
    </ul>
  )
}

function About() {
  return (
    <section className="block" id="about">
      <div className="sec-head"><h2>About</h2></div>
      <div className="about">
        <div className="panel">
          <h3>Education</h3>
          <p className="big">American University of Beirut</p>
          <p className="sub">BS in Computer Science · Aug 2024 – May 2027 · GPA 3.26 / 4.0</p>
          <p className="sub">Coursework: Data Structures &amp; Algorithms, Design &amp; Analysis of Algorithms, Theory of Computation, Software Engineering, Operating Systems, Linear Algebra, Discrete Math, AI Ethics.</p>
          <div className="award">
            <div className="place">2nd Place</div>
            <p><strong>AUB Robotics Competition, March 2025.</strong> Designed and built an autonomous robotic boat with Arduino and C that circulates and oxygenates stagnant water.</p>
          </div>
        </div>
        <div className="panel">
          <h3>Programming</h3>
          <List rows={programming} />
        </div>
        <div className="panel">
          <h3>Languages</h3>
          <List rows={languages} />
        </div>
      </div>
    </section>
  )
}

function CopyLine({ label, value }) {
  const [status, setStatus] = useState('Copy')
  const valRef = useRef(null)

  const flash = (text) => {
    setStatus(text)
    setTimeout(() => setStatus('Copy'), 1600)
  }
  const selectFallback = () => {
    const range = document.createRange()
    range.selectNodeContents(valRef.current)
    const sel = window.getSelection()
    sel.removeAllRanges()
    sel.addRange(range)
    flash('Selected')
  }
  const copy = () => {
    try {
      navigator.clipboard.writeText(value).then(() => flash('Copied'), selectFallback)
    } catch {
      selectFallback()
    }
  }

  return (
    <div className="line-item">
      <div><span className="lab">{label}</span><span className="val" ref={valRef}>{value}</span></div>
      <button className="copy" type="button" onClick={copy}>{status}</button>
    </div>
  )
}

function Contact() {
  return (
    <section className="contact" id="contact">
      <div>
        <h2>Let's build something useful.</h2>
        <p className="note">Open to AI engineering roles and internships. Reach out by email or phone.</p>
      </div>
      <div className="reach">
        <CopyLine label="Email" value="omarkh5lembo@gmail.com" />
        <CopyLine label="Phone (Lebanon)" value="+961 3 611 330" />
        <div className="line-item">
          <div><span className="lab">GitHub</span><a className="val" href={GITHUB} {...ext}>github.com/notOK18 ↗</a></div>
        </div>
      </div>
    </section>
  )
}

export default function App() {
  return (
    <>
      <Nav />
      <div className="wrap" id="top">
        <Hero />
        <Experience />
        <Projects />
        <About />
        <Contact />
        <footer>
          <span>Omar Khodor · Beirut, Lebanon</span>
          <span>Updated October 2026</span>
        </footer>
      </div>
    </>
  )
}
