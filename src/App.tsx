import {
  ArrowDown,
  ArrowUpRight,
  Check,
  Code2,
  GitBranch,
  Layers,
  Mail,
  PenTool,
  Sparkles,
} from "lucide-react";
import "./App.css";

const figmaProjects = [
  {
    index: "01",
    title: "Netflix app concept",
    type: "Streaming · Mobile product design",
    description:
      "A focused exploration of entertainment discovery, content hierarchy and familiar interaction patterns for a high-choice streaming experience.",
    contribution: "User flow · Interface design · Interactive prototype",
    className: "netflix-card",
    monogram: "N",
    url: "https://www.figma.com/design/d8sd2BlN1rKytvAzsf65ah/NETFLIX-APP",
  },
  {
    index: "02",
    title: "Revenge game app",
    type: "Gaming · Mobile experience",
    description:
      "A high-energy game interface concept shaped around clear progression, decisive calls to action and an immersive visual rhythm.",
    contribution: "Flow mapping · UI system · Figma prototype",
    className: "revenge-card",
    monogram: "R",
    url: "https://www.figma.com/design/k1chuZXvdH3quYmwv4Frov/Revenge-App",
  },
  {
    index: "03",
    title: "Benji dog app",
    type: "Consumer · Character-led product",
    description:
      "A warm, approachable mobile concept built around Benji, using friendly visual cues and a simple, low-friction experience.",
    contribution: "Product concept · UX writing · Visual design",
    className: "benji-card",
    monogram: "B",
    url: "https://www.figma.com/proto/vHs2xBeLW0Zw3jTlTCHqG4/LANDIND-PAGE?node-id=8-20",
  },
  {
    index: "04",
    title: "Cleaning service app",
    type: "Services · Mobile product concept",
    description:
      "A service-focused mobile concept exploring clear browsing, scheduling and trustworthy calls to action across a practical customer journey.",
    contribution: "Journey design · Interface system · Figma file",
    className: "cleaning-card",
    monogram: "C",
    url: "https://www.figma.com/design/3skIgL9vyougGZx99vgZDe/Untitled",
  },
];

const approach = [
  {
    number: "01",
    title: "Frame the real problem",
    body: "Start with the user, the operating context and the decision that is currently difficult.",
  },
  {
    number: "02",
    title: "Map the experience",
    body: "Turn ambiguity into a clear journey, information hierarchy and testable product hypothesis.",
  },
  {
    number: "03",
    title: "Prototype the system",
    body: "Use Figma, data and AI tools to make the idea tangible early enough to challenge it.",
  },
  {
    number: "04",
    title: "Ship and learn",
    body: "Build the smallest coherent version, expose assumptions and improve from real evidence.",
  },
];

const capabilities = [
  "Product strategy",
  "User journeys",
  "Wireframing",
  "Figma prototyping",
  "Interface design",
  "Applied AI workflows",
  "Front-end prototyping",
  "Stakeholder delivery",
];

export default function Home() {
  return (
    <main id="top">
      <nav className="site-nav" aria-label="Primary navigation">
        <div className="shell nav-inner">
          <a className="brand" href="#top" aria-label="Adenike Adekola home">
            <span>AA</span>
            <i aria-hidden="true" />
          </a>

          <div className="nav-links">
            <a href="#work">Work</a>
            <a href="#figma">Figma</a>
            <a href="#approach">Approach</a>
            <a href="#about">About</a>
          </div>

          <a className="nav-cta" href="mailto:adenikeadekola2017@gmail.com">
            Let&apos;s talk <ArrowUpRight size={15} aria-hidden="true" />
          </a>
        </div>
      </nav>

      <header className="hero">
        <div className="shell hero-grid">
          <div className="hero-copy">
            <div className="kicker">
              <Sparkles size={14} aria-hidden="true" />
              AI product builder · Product designer
            </div>

            <h1>
              I design intelligent products that make complex work feel
              <em> clear.</em>
            </h1>

            <p className="hero-lede">
              I&apos;m Adenike Adekola, a London-based product thinker with an MSc
              in Project Management. I move from messy problems to useful,
              human-centred prototypes across applied AI, digital products and
              operations.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#work">
                Explore selected work <ArrowDown size={16} aria-hidden="true" />
              </a>
              <a
  className="button button-secondary"
  href="https://mail.google.com/mail/?view=cm&fs=1&to=adenikeadekola2017@gmail.com"
  target="_blank"
  rel="noreferrer"
>
  <Mail size={16} aria-hidden="true" /> Email me
</a>
            </div>

            <p className="availability">
              <span aria-hidden="true" /> Open to AI accelerator and product opportunities
            </p>
          </div>

          <div className="hero-art" aria-label="Adenike's product-building process">
            <div className="art-topline">
              <span>PRODUCT SIGNAL / 001</span>
              <span>London · UK</span>
            </div>
            <div className="art-statement">
              <span>AI</span>
              <i>×</i>
              <span>UX</span>
              <i>×</i>
              <span>OPS</span>
            </div>
            <div className="art-grid">
              <div>
                <small>01 / Frame</small>
                <strong>Find the bottleneck</strong>
              </div>
              <div>
                <small>02 / Design</small>
                <strong>Make it understandable</strong>
              </div>
              <div>
                <small>03 / Build</small>
                <strong>Turn intent into proof</strong>
              </div>
              <div className="art-accent">
                <small>04 / Learn</small>
                <strong>Use evidence, not theatre</strong>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="intro-strip" aria-label="Portfolio summary">
        <div className="shell intro-grid">
          <p>Selected work across</p>
          <strong>Applied AI</strong>
          <strong>Product thinking</strong>
          <strong>Figma design</strong>
          <strong>Operational systems</strong>
        </div>
      </section>

      <section className="section featured" id="work">
        <div className="shell">
          <div className="section-heading split-heading">
            <div>
              <p className="section-label">01 · Flagship AI case study</p>
              <h2>AsoFlow</h2>
            </div>
            <p>
              From multilingual supplier voice notes to structured,
              shipment-ready decisions.
            </p>
          </div>

          <article className="asoflow-card">
            <div className="case-copy">
              <div className="case-tags">
                <span>Applied AI</span>
                <span>Supply-chain operations</span>
                <span>Working prototype</span>
              </div>

              <h3>Designing around how textile suppliers already communicate.</h3>
              <p>
                AsoFlow is a fashion-tech prototype for African textile sourcing.
                It transforms Yoruba, English and Nigerian Pidgin supplier messages
                into reviewable order fields, delivery timelines and explainable
                risk signals—without asking artisans to learn a new system.
              </p>

              <dl className="case-facts">
                <div>
                  <dt>Problem</dt>
                  <dd>Critical order details were trapped in informal, multilingual conversations.</dd>
                </div>
                <div>
                  <dt>Product response</dt>
                  <dd>Transcription, translation, extraction and risk review in one guided workflow.</dd>
                </div>
                <div>
                  <dt>Responsible AI</dt>
                  <dd>Visible reasons for every risk flag and a human approval step before action.</dd>
                </div>
              </dl>

              <div className="case-actions">
                <a
                  className="button button-light"
                  href="https://adekolaadenike.github.io/aso-flow/"
                  target="_blank"
                  rel="noreferrer"
                >
                  View live prototype <ArrowUpRight size={16} aria-hidden="true" />
                </a>
                <a
                  className="text-link"
                  href="https://github.com/Adekolaadenike/aso-flow"
                  target="_blank"
                  rel="noreferrer"
                >
                  <GitBranch size={16} aria-hidden="true" /> View source
                </a>
              </div>
            </div>

            <div className="pipeline" aria-label="Example AsoFlow transformation">
              <div className="pipeline-head">
                <span>LIVE DEMO / SUPPLIER INPUT</span>
                <i><span /> Ready</i>
              </div>

              <div className="voice-note">
                <div className="play-dot">▶</div>
                <div className="wave" aria-hidden="true">
                  {[2, 5, 8, 4, 10, 6, 3, 9, 5, 7, 3, 6].map((height, index) => (
                    <span key={index} style={{ height: `${height * 3}px` }} />
                  ))}
                </div>
                <small>00:18</small>
              </div>

              <blockquote>
                “Ẹ̀gbọ́n, indigo Adire náà ti ready. 40 yards, grade A.
                Driver máa leave Abeokuta Friday morning.”
              </blockquote>

              <div className="pipeline-step">
                <span>01</span><strong>Transcribe</strong><small>Voice to text</small>
              </div>
              <div className="pipeline-step">
                <span>02</span><strong>Translate</strong><small>Context preserved</small>
              </div>
              <div className="pipeline-step">
                <span>03</span><strong>Structure</strong><small>Reviewable fields</small>
              </div>

              <div className="order-result">
                <div className="result-title">
                  <span>STRUCTURED ORDER</span>
                  <strong><Check size={13} aria-hidden="true" /> Ready for review</strong>
                </div>
                <div className="result-grid">
                  <p><small>Fabric</small><strong>Indigo Adire</strong></p>
                  <p><small>Quantity</small><strong>40 yards</strong></p>
                  <p><small>Grade</small><strong>Grade A</strong></p>
                  <p><small>Dispatch</small><strong>Friday AM</strong></p>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="section figma-section" id="figma">
        <div className="shell">
          <div className="section-heading split-heading">
            <div>
              <p className="section-label">02 · Selected Figma work</p>
              <h2>Interfaces with a point of view.</h2>
            </div>
            <p>
              Four mobile product concepts exploring discovery, immersion,
              friendly interaction and everyday service design.
            </p>
          </div>

          <div className="design-grid">
            {figmaProjects.map((project) => (
              <article className={`design-card ${project.className}`} key={project.title}>
                <a
                  className="design-cover"
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Open ${project.title} in Figma`}
                >
                  <div className="cover-meta">
                    <span>{project.index} / FIGMA</span>
                    <PenTool size={17} aria-hidden="true" />
                  </div>
                  <div className="cover-letter" aria-hidden="true">{project.monogram}</div>
                  <p>{project.type}</p>
                </a>
                <div className="design-copy">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="design-contribution">
                    <small>Contribution</small>
                    <span>{project.contribution}</span>
                  </div>
                  <a
                    className="design-link"
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Open in Figma <ArrowUpRight size={15} aria-hidden="true" />
                  </a>
                </div>
              </article>
            ))}
          </div>

          <div className="figma-note">
            <div>
              <PenTool size={20} aria-hidden="true" />
              <p><strong>Explore the working files.</strong> Each project links directly to its Figma design or interactive prototype.</p>
            </div>
            <a href="https://www.figma.com/design/d8sd2BlN1rKytvAzsf65ah/NETFLIX-APP" target="_blank" rel="noreferrer">
              Start with Netflix <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      <section className="section approach-section" id="approach">
        <div className="shell approach-layout">
          <div className="approach-intro">
            <p className="section-label">03 · How I work</p>
            <h2>Clarity before complexity.</h2>
            <p>
              The tool changes with the problem. The discipline does not:
              understand the context, make the logic visible and test the riskiest
              assumption early.
            </p>
          </div>
          <div className="approach-list">
            {approach.map((item) => (
              <article key={item.number}>
                <span>{item.number}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section about-section" id="about">
        <div className="shell about-grid">
          <div>
            <p className="section-label">04 · About & capabilities</p>
            <h2>Product thinking shaped by delivery.</h2>
          </div>
          <div className="about-copy">
            <p>
              My background in project management and building Rity Apparels
              gives me a practical view of product work: ideas only matter when
              they can survive real users, real constraints and real operations.
              I&apos;m especially interested in AI products that augment human
              judgement and make important decisions easier to understand.
            </p>
            <div className="capability-grid">
              {capabilities.map((capability) => (
                <span key={capability}><Check size={14} aria-hidden="true" /> {capability}</span>
              ))}
            </div>
            <div className="tool-row" aria-label="Tools and technologies">
              <span><PenTool size={15} aria-hidden="true" /> Figma / FigJam</span>
              <span><Layers size={15} aria-hidden="true" /> Product systems</span>
              <span><Code2 size={15} aria-hidden="true" /> React / TypeScript</span>
              <span><Sparkles size={15} aria-hidden="true" /> LLM workflows</span>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="shell contact-inner">
          <p className="section-label">Let&apos;s build what matters</p>
          <h2>Have an AI problem worth making tangible?</h2>
          <p>I&apos;m open to AI accelerator, product and innovation opportunities.</p>
          <a
  className="button button-primary"
  href="https://mail.google.com/mail/?view=cm&fs=1&to=adenikeadekola2017@gmail.com"
  target="_blank"
  rel="noreferrer"
>
  Start a conversation <Mail size={16} aria-hidden="true" />
</a>
        </div>
      </section>

      <footer>
        <div className="shell footer-inner">
          <div>
            <strong>Adenike Adekola</strong>
            <span>AI product builder · Product designer</span>
          </div>
          <div className="footer-links">
            <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=adenikeadekola2017@gmail.com"
  target="_blank"
  rel="noreferrer"
>
  Email
</a>
            <a href="https://github.com/Adekolaadenike" target="_blank" rel="noreferrer">GitHub</a>
            <a href="#top">Back to top ↑</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
