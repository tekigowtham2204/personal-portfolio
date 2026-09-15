// Signal Ledger design: editorial product-operations portfolio, ink surfaces, chartreuse signal accents, asymmetric reading flow.
import { useEffect, useState } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  Braces,
  Check,
  ChevronDown,
  ExternalLink,
  Github,
  Linkedin,
  Menu,
  Minus,
  MoveRight,
  Send,
  X,
} from "lucide-react";

const asset = (path: string) => `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`;

const projects = [
  {
    id: "01",
    title: "Stuviora",
    type: "AI quality-gated freelancing platform",
    year: "2026",
    description:
      "A marketplace where quality is not an afterthought. I shaped the AI validation engine, escrow infrastructure, matching logic, and multi-tenant workflows into one coherent product system.",
    outcomes: ["Multimodal LLM evaluation", "Escrow + payout workflows", "Real-time marketplace messaging"],
    visual: asset("images/stuviora-visual.jpg"),
    tone: "coral",
    liveUrl: "",
  },
  {
    id: "02",
    title: "Spirit Platform",
    type: "Talent, organization, and event operating system",
    year: "2026",
    description:
      "A unified platform for talent acquisition, organizational administration, and event lifecycle management — designed around role clarity and reusable workflows.",
    outcomes: ["Role-based operations", "Authentication workflows", "Reusable platform patterns"],
    visual: asset("images/spirit-platform-visual.jpg"),
    tone: "blue",
    liveUrl: "https://spirit.org.in/",
  },
  {
    id: "03",
    title: "Syncgaze Platforms",
    type: "AI product infrastructure",
    year: "2025",
    description:
      "A modular foundation connecting product interfaces, data workflows, platform services, and external APIs — turning business requirements into a launch-ready operating layer.",
    outcomes: ["25+ KPI analytics system", "95% tracking accuracy lift", "3 major product launches"],
    visual: asset("images/signal-system-map.jpg"),
    tone: "green",
    liveUrl: "https://syncgaze.in/",
  },
  {
    id: "04",
    title: "KisanMitra",
    type: "Multilingual agritech PWA & marketplace",
    year: "2025",
    description:
      "India's unified digital companion empowering 14.6 crore farmers with real-time mandi price comparison, MSP intelligence, weather advisories, and direct buyer access without middlemen.",
    outcomes: ["eNAM & Agmarknet live price sync", "8-language multilingual PWA", "Direct farmer-to-buyer trade loop"],
    visual: asset("images/kisanmitra-visual.jpg"),
    tone: "emerald",
    liveUrl: "https://tekigowtham2204.github.io/KisanMitra/",
  },
  {
    id: "05",
    title: "SecureBank",
    type: "Fintech banking management system",
    year: "2025",
    description:
      "A complete netbanking platform and administrative console featuring double-entry ledger auditing, instant fund transfers, interest simulation, PIN security, and asset reserve oversight.",
    outcomes: ["Double-entry transaction ledger", "PIN-secured authentication gateway", "Multi-tier accounts with overdraft safety"],
    visual: asset("images/securebank-visual.jpg"),
    tone: "amber",
    liveUrl: "https://tekigowtham2204.github.io/SecureBank/",
  },
];

const caseStudies = {
  "01": {
    kicker: "Case study / AI quality gates",
    title: "Stuviora",
    summary: "A quality-gated freelancing marketplace designed around one hard question: how do you make trust measurable before money moves?",
    prompt: "Design a multi-tenant freelance marketplace where AI can validate multimodal work, release escrow payments safely, and keep every participant in sync.",
    architecture: ["Multimodal file intake and structured LLM evaluation", "Escrow ledger with webhook verification and idempotent payouts", "Role-based marketplace with intelligent matching and real-time messaging"],
    process: "I started by mapping the trust loop: submission, evaluation, revision, approval, payout. Prompts were then used to turn each state into a concrete workflow, define edge cases, and generate the first implementation pass against a Supabase-backed data model.",
    validation: "Validation focused on evaluation consistency, duplicate webhook safety, payout state transitions, and role-specific access across the marketplace.",
    outcome: "One connected product system spanning quality assurance, marketplace operations, payment workflows, and collaboration.",
    liveUrl: "",
  },
  "02": {
    kicker: "Case study / operating system",
    title: "Spirit Platform",
    summary: "A unified operating layer for talent acquisition, organizational administration, and event lifecycle management.",
    prompt: "Unify hiring, organization management, and events without creating three disconnected tools or confusing role boundaries.",
    architecture: ["Reusable role-based workflows for admins, teams, candidates, and event operators", "Authentication and permission model built around organizational context", "Modular interfaces and service patterns designed for repeatable expansion"],
    process: "The build began with a capability map rather than screens. I translated each organizational responsibility into a workflow, clarified who can see and change what, then used AI-assisted prompts to turn the system map into reusable platform pieces.",
    validation: "Validation centered on role clarity, permissions, handoffs between modules, and the ability to reuse patterns without introducing one-off behavior.",
    outcome: "A coherent platform foundation that brings people, operations, and events into one navigable product experience.",
    liveUrl: "https://spirit.org.in/",
  },
  "03": {
    kicker: "Case study / product infrastructure",
    title: "Syncgaze Platforms",
    summary: "A modular AI product foundation connecting interface, data, platform services, and external integrations.",
    prompt: "Create a reliable product layer that lets an AI team move from business requirements to shipped experiments without losing data clarity.",
    architecture: ["Modular flow across interfaces, services, database structures, and external APIs", "Unified analytics schema covering 25+ key product indicators", "Product specifications and implementation roadmaps for three major launches"],
    process: "I began by turning ambiguous product requirements into explicit objects, states, and success signals. Prompt-driven implementation then accelerated the scaffolding, while analytics and stakeholder reviews kept every iteration tied to a measurable product decision.",
    validation: "Validation combined stakeholder walkthroughs, event tracking checks, cohort analysis, and reconciliation against the unified data schema.",
    outcome: "Three major product launches, 20% month-over-month user growth, and a 95% improvement in tracking accuracy.",
    liveUrl: "https://syncgaze.in/",
  },
  "04": {
    kicker: "Case study / agritech & public good",
    title: "KisanMitra",
    summary: "A unified multilingual digital companion for Indian farmers providing live mandi pricing, MSP intelligence, and middleman-free trade.",
    prompt: "Design an accessible, high-performance PWA that unifies fragmented mandi price datasets across India, provides actionable MSP signals, and connects farmers directly to buyers in 8 languages.",
    architecture: [
      "Agmarknet & eNAM data aggregation pipeline with live ticker streaming",
      "Dynamic MSP disparity calculation and regional crop trend analytics",
      "Offline-first PWA with high-contrast mode and 8 Indian language localizations",
    ],
    process: "I researched how information asymmetry affects smallholder farmers during harvest cycles. We architected a light-footprint interface designed for low-bandwidth rural networks, mapped commodity APIs into unified schemas, and structured straightforward pricing and weather signals.",
    validation: "Validated across multiple regional mandi datasets, verifying API sync latency, localization fidelity, responsive accessibility on mobile viewports, and direct buyer communication flows.",
    outcome: "An open-source digital platform empowering farmers with fair pricing visibility, eliminating exploitative intermediaries, and providing essential agricultural market intelligence.",
    liveUrl: "https://tekigowtham2204.github.io/KisanMitra/",
  },
  "05": {
    kicker: "Case study / fintech ledger",
    title: "SecureBank",
    summary: "An integrated banking management system and netbanking portal built around atomic ledger operations and role-based asset auditing.",
    prompt: "Architect a resilient banking management portal that manages multi-tier customer accounts, executes instant inter-account transfers with double-entry integrity, and provides real-time audit tools for bank administrators.",
    architecture: [
      "Double-entry transaction ledger tracking debits, credits, and running balances",
      "PIN-based authentication gateway with role-based routing (Customer vs. Admin)",
      "Automated interest accrual engine (4% p.a.) and ₹10,000 overdraft safety limits",
    ],
    process: "I started by modeling the ledger state machine: fund reservations, debit/credit pairing, overdraft ceilings, and atomic balance commits. Prompt-assisted rapid prototyping was used to flesh out the interactive netbanking surfaces, transaction history search, and administrator global reserve analytics.",
    validation: "Conducted rigorous testing for balance reconciliations under concurrent simulated transfers, edge-case overdraft limits, session security timeouts, and PIN validation rules.",
    outcome: "A full-fidelity netbanking platform and administrative console delivering real-time balance intelligence, secure transfers, and automated interest analytics.",
    liveUrl: "https://tekigowtham2204.github.io/SecureBank/",
  },
} as const;

const capabilityGroups = [
  { label: "01 / Product", items: ["Product discovery", "Requirements analysis", "Workflow design", "Roadmapping"] },
  { label: "02 / Systems", items: ["Platform architecture", "Multi-tenant systems", "RBAC", "API integrations"] },
  { label: "03 / AI layer", items: ["Prompt engineering", "LLM evaluation", "AI agents", "RAG workflows"] },
  { label: "04 / Delivery", items: ["Analytics", "Validation", "Stakeholder leadership", "Go-to-market"] },
];

function Metric({ value, label, note }: { value: string; label: string; note: string }) {
  return (
    <div className="metric-card">
      <div className="metric-value">{value}</div>
      <div className="metric-label">{label}</div>
      <div className="metric-note">{note}</div>
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeProject, setActiveProject] = useState("01");
  const [openCaseStudy, setOpenCaseStudy] = useState<string | null>(null);
  const currentProject = projects.find((project) => project.id === activeProject) ?? projects[0];
  const activeCaseStudy = openCaseStudy ? caseStudies[openCaseStudy as keyof typeof caseStudies] : null;

  useEffect(() => {
    if (!openCaseStudy) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpenCaseStudy(null);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [openCaseStudy]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div className="site-shell">
      <div className="grain" aria-hidden="true" />
      <aside className="signal-rail" aria-label="Portfolio index">
        <a className="brand-mark" href="#top" aria-label="Gowtham Bhaskar home">
          <span className="monogram-frame"><img src={asset("images/gowtham-monogram.jpg")} alt="GB Monogram" /></span>
        </a>
        <div className="rail-line" />
        <div className="rail-status"><span /> Available for select builds</div>
        <div className="rail-index">GB / 001</div>
      </aside>

      <header className="topbar" id="top">
        <a className="wordmark" href="#top"><span>GOWTHAM</span><b>BHASKAR</b></a>
        <nav className="desktop-nav" aria-label="Main navigation">
          <button onClick={() => scrollTo("work")}>Selected work <span>01</span></button>
          <button onClick={() => scrollTo("about")}>About <span>02</span></button>
          <button onClick={() => scrollTo("contact")}>Contact <span>03</span></button>
        </nav>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Close menu" : "Open menu"}>
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
        {menuOpen && <nav className="mobile-nav"><button onClick={() => scrollTo("work")}>Selected work</button><button onClick={() => scrollTo("about")}>About</button><button onClick={() => scrollTo("contact")}>Contact</button></nav>}
      </header>

      <main>
        <section className="hero section-wrap" aria-labelledby="hero-title">
          <div className="hero-copy reveal">
            <div className="eyebrow"><span className="eyebrow-dot" /> Prompt-driven / AI-assisted / Product systems</div>
            <h1 id="hero-title">I turn<br /><em>prompts</em> into<br /><strong>platforms.</strong></h1>
            <p className="hero-intro">A product architect building complex AI products through clear thinking, sharp workflows, and AI-assisted execution.</p>
            <div className="hero-actions">
              <button className="signal-button" onClick={() => scrollTo("work")}>Explore the work <ArrowDownRight size={17} /></button>
              <a className="text-link" href="mailto:tekigowtham07@gmail.com">Start a conversation <MoveRight size={16} /></a>
            </div>
          </div>
          <div className="hero-visual reveal-delay">
            <img src={asset("images/signal-system-map.jpg")} alt="Abstract product system map" />
            <div className="hero-visual-overlay" />
            <div className="hero-callout callout-a"><span>01</span><b>idea → system</b><small>product architecture</small></div>
            <div className="hero-callout callout-b"><span>02</span><b>system → shipped</b><small>AI-assisted execution</small></div>
            <div className="hero-coordinate">17° 23' 04" N / 78° 28' 18" E</div>
          </div>
          <div className="scroll-cue"><ChevronDown size={16} /><span>Scroll to inspect</span></div>
        </section>

        <section className="proof-band section-wrap" aria-label="Selected outcomes">
          <div className="section-kicker"><span>Selected outcomes</span><Minus size={16} /></div>
          <div className="metric-grid">
            <Metric value="05" label="major builds" note="from discovery to shipped platforms" />
            <Metric value="20%" label="month-over-month growth" note="supported through product delivery" />
            <Metric value="25+" label="KPIs instrumented" note="across AI product surfaces" />
            <Metric value="95%" label="tracking accuracy lift" note="after unified schema migration" />
          </div>
        </section>

        <section className="work-section section-wrap" id="work" aria-labelledby="work-title">
          <div className="section-heading">
            <div className="section-kicker"><span>Selected work / 2025—26</span><Minus size={16} /></div>
            <h2 id="work-title">Systems with<br /><em>something to prove.</em></h2>
            <p>Not mockups for the sake of mockups. Each build starts with a messy problem and ends as a usable product system.</p>
          </div>
          <div className="project-stage">
            <div className="project-list" role="tablist" aria-label="Selected projects">
              {projects.map((project) => (
                <button key={project.id} className={`project-tab ${activeProject === project.id ? "is-active" : ""}`} onClick={() => setActiveProject(project.id)} role="tab" aria-selected={activeProject === project.id}>
                  <span className="project-num">{project.id}</span>
                  <span className="project-tab-copy"><b>{project.title}</b><small>{project.type}</small></span>
                  <ArrowUpRight size={17} />
                </button>
              ))}
            </div>
            <article className={`project-detail ${currentProject.tone}`}>
              <div className="project-image"><img src={currentProject.visual} alt={`${currentProject.title} abstract system visual`} /><div className="image-label">CASE / {currentProject.id}</div></div>
              <div className="project-content">
                <div className="project-meta"><span>{currentProject.type}</span><span>{currentProject.year}</span></div>
                <h3>{currentProject.title}</h3>
                <p>{currentProject.description}</p>
                <div className="outcome-list">{currentProject.outcomes.map((outcome) => <span key={outcome}><Check size={14} /> {outcome}</span>)}</div>
                <div className="project-footer">
                  <span>Prompt → architecture → product</span>
                  <div className="project-actions">
                    {currentProject.liveUrl && (
                      <a
                        href={currentProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-live-link"
                        title={`Open ${currentProject.title} live platform`}
                      >
                        Live demo <ExternalLink size={12} />
                      </a>
                    )}
                    <button className="case-study-trigger" onClick={() => setOpenCaseStudy(currentProject.id)} aria-label={`Open ${currentProject.title} case study`}>
                      Inspect system <ExternalLink size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section className="about-section section-wrap" id="about" aria-labelledby="about-title">
          <div className="system-route route-one" aria-hidden="true"><span /><i /><b /></div>
          <div className="section-kicker"><span>About the practice</span><Minus size={16} /></div>
          <div className="about-layout">
            <h2 id="about-title">The shortcut<br />is <em>clarity.</em></h2>
            <div className="about-copy"><p>I don’t start with code. I start with the product: the users, the roles, the edge cases, the rules, and the outcome that makes the build worth shipping.</p><p>Then I use prompting and AI-assisted tools to move from that architecture to a working platform — fast, deliberate, and always tied back to the original problem.</p><div className="signature-line"><Braces size={20} /><span>Prompt-driven product architecture</span></div></div>
          </div>
          <div className="capability-grid">{capabilityGroups.map((group) => <div className="capability-group" key={group.label}><div className="capability-label">{group.label}</div>{group.items.map((item) => <div className="capability-item" key={item}>{item}</div>)}</div>)}</div>
        </section>

        <section className="experience-section section-wrap" aria-labelledby="experience-title">
          <div className="system-route route-two" aria-hidden="true"><span /><i /><b /></div>
          <div className="section-heading compact"><div className="section-kicker"><span>Experience / in motion</span><Minus size={16} /></div><h2 id="experience-title">Building the<br /><em>operating layer.</em></h2></div>
          <div className="experience-list">
            <article className="experience-row"><div className="experience-date">08.25 — now</div><div className="experience-role"><h3>AI Product Developer <a href="https://syncgaze.in/" target="_blank" rel="noreferrer" className="experience-link">/ Syncgaze <ExternalLink size={12} /></a></h3><p>Led initiatives from discovery through launch. Built the measurement layer for AI products and helped move product decisions from instinct to evidence.</p></div><div className="experience-tag">product / analytics</div></article>
            <article className="experience-row"><div className="experience-date">01.24 — now</div><div className="experience-role"><h3>Co-Founder <a href="https://spirit.org.in/" target="_blank" rel="noreferrer" className="experience-link">/ Spirit Organization <ExternalLink size={12} /></a></h3><p>Built a student community through events, hackathons, stakeholder coordination, and a steady practice of turning ideas into momentum.</p></div><div className="experience-tag">community / growth</div></article>
          </div>
        </section>

        <section className="contact-section section-wrap" id="contact" aria-labelledby="contact-title">
          <div className="contact-card"><div className="contact-mark"><Send size={24} /></div><div className="contact-copy"><div className="section-kicker"><span>Open channel / 03</span><Minus size={16} /></div><h2 id="contact-title">Have a complex<br /><em>idea?</em> Let’s map it.</h2><p>For AI product work, platform architecture, or a build that needs more clarity before more code.</p><a className="signal-button" href="mailto:tekigowtham07@gmail.com">Email Gowtham <ArrowUpRight size={17} /></a></div><div className="contact-coordinate">STATUS: ACCEPTING<br />SELECT BUILDS<br /><span>HYDERABAD / INDIA</span></div></div>
        </section>
      </main>

      {activeCaseStudy && (
        <div className="case-study-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setOpenCaseStudy(null); }}>
          <article className="case-study-modal" role="dialog" aria-modal="true" aria-labelledby="case-study-title">
            <button className="case-study-close" onClick={() => setOpenCaseStudy(null)} aria-label="Close case study"><X size={18} /></button>
            <div className="case-study-head">
              <div className="section-kicker"><span>{activeCaseStudy.kicker}</span><span>Esc to close</span></div>
              <h2 id="case-study-title">{activeCaseStudy.title}</h2>
              <p>{activeCaseStudy.summary}</p>
            </div>
            <div className="case-study-body">
              <div className="case-study-column">
                <div className="case-study-label">01 / Starting prompt</div>
                <blockquote>“{activeCaseStudy.prompt}”</blockquote>
                <div className="case-study-label">02 / Prompt-driven process</div>
                <p>{activeCaseStudy.process}</p>
              </div>
              <div className="case-study-column">
                <div className="case-study-label">03 / System architecture</div>
                <div className="case-study-points">{activeCaseStudy.architecture.map((item) => <div key={item}><Check size={14} /><span>{item}</span></div>)}</div>
                <div className="case-study-label">04 / Validation loop</div>
                <p>{activeCaseStudy.validation}</p>
              </div>
            </div>
            <div className="case-study-outcome">
              <div className="case-study-label">Shipped outcome</div>
              <p>{activeCaseStudy.outcome}</p>
              <div className="case-study-actions">
                {activeCaseStudy.liveUrl && (
                  <a href={activeCaseStudy.liveUrl} target="_blank" rel="noopener noreferrer" className="live-cta">
                    Launch live platform <ExternalLink size={14} />
                  </a>
                )}
                <a href="mailto:tekigowtham07@gmail.com">Discuss a similar build <ArrowUpRight size={16} /></a>
              </div>
            </div>
          </article>
        </div>
      )}

      <footer className="footer section-wrap"><div>© 2026 Gowtham Bhaskar</div><div className="footer-links"><a href="https://linkedin.com/in/gowthambhaskar" target="_blank" rel="noreferrer"><Linkedin size={15} /> LinkedIn</a><a href="https://github.com/tekigowtham2204" target="_blank" rel="noreferrer"><Github size={15} /> GitHub</a><a href="mailto:tekigowtham07@gmail.com">Email <ArrowUpRight size={14} /></a></div><div className="footer-code">GB / 001 / END</div></footer>
    </div>
  );
}
