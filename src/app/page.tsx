import Inquiry from "./Inquiry";

// Concept portfolio for a fictional motion designer, built by Yashh Techstudio as a demo.
const NAME = ["ARIA", "COLE"];
const STUDIO = "https://www.yashtechstudio.com";

const REELS = [
  { title: "Pulse — brand system", client: "Fintech launch", year: "2026", tags: ["Logo animation", "After Effects"], art: "orbit" },
  { title: "Soft Shapes", client: "Skincare campaign", year: "2026", tags: ["2D", "Social cutdowns"], art: "morph" },
  { title: "Bounce Back", client: "Fitness app explainer", year: "2025", tags: ["Character", "Explainer"], art: "bounce" },
  { title: "Frequency", client: "Podcast network", year: "2025", tags: ["Audio-reactive", "Loops"], art: "wave" },
  { title: "Cubed", client: "Dev tools product film", year: "2025", tags: ["3D", "Cinema 4D"], art: "cube" },
  { title: "Hello, World", client: "Agency title sequence", year: "2024", tags: ["Kinetic type", "Titles"], art: "type" },
] as const;

const SERVICES = [
  { n: "01", t: "Brand animation", d: "Logo stings, motion systems and guidelines so every frame feels like you." },
  { n: "02", t: "Product explainers", d: "30–90 second films that show what your product does without a single slide." },
  { n: "03", t: "Social motion kits", d: "Reels, stories and ad cutdowns in every aspect ratio, ready to post." },
  { n: "04", t: "Title sequences", d: "Openers for shows, podcasts and events that set the tone in five seconds." },
];

const PROCESS = [
  { t: "Brief & moodboard", w: "Days 1–3" },
  { t: "Styleframes", w: "Week 1" },
  { t: "Animatic", w: "Week 2" },
  { t: "Animation & sound", w: "Weeks 3–4" },
  { t: "Delivery in every format", w: "Week 5" },
];

const WORDS = [
  { q: "Aria turned a dry product demo into the most-watched video on our channel.", who: "Head of Marketing, SaaS startup" },
  { q: "Fast, calm, and the styleframes were spot on from round one.", who: "Creative Director, design studio" },
  { q: "Our launch reel finally looks like the brand we pitched to investors.", who: "Founder, consumer app" },
];

export default function Home() {
  return (
    <main className="overflow-x-clip">
      {/* Nav */}
      <header className="fixed inset-x-0 top-4 z-30 flex justify-center px-4">
        <nav className="flex w-full max-w-3xl items-center justify-between rounded-full border border-line bg-ink/70 py-2 pr-2 pl-5 backdrop-blur-md">
          <a href="#top" className="font-display text-xl tracking-wide">
            AC<span className="text-coral">✦</span>
          </a>
          <div className="hidden gap-6 text-sm text-dim sm:flex">
            <a href="#work" className="hover:text-cream">Work</a>
            <a href="#services" className="hover:text-cream">Services</a>
            <a href="#process" className="hover:text-cream">Process</a>
          </div>
          <a href="#contact" className="flex items-center gap-2 rounded-full bg-cream px-4 py-2 text-sm font-bold text-ink">
            <span className="size-2 animate-pulse rounded-full bg-coral" aria-hidden />
            Available Nov
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section id="top" className="relative flex min-h-svh flex-col justify-end px-4 pt-28 pb-10 sm:px-8">
        <div aria-hidden className="blob absolute top-[10%] left-[15%] size-[55vw] max-w-[700px] rounded-full bg-coral/25 blur-[100px]" />
        <div aria-hidden className="blob absolute right-[5%] bottom-[15%] size-[35vw] max-w-[480px] rounded-full bg-sun/15 blur-[90px] [animation-delay:-5s]" />

        <p className="relative font-mono text-xs tracking-[0.3em] text-dim uppercase">Motion designer · Lisbon · Remote</p>
        <h1 aria-label="Aria Cole" className="breathe relative mt-4 flex flex-wrap gap-x-[0.18em] font-display text-[40vw] leading-[0.82] uppercase sm:text-[23vw]">
          {NAME.map((word, w) => (
            <span key={word} className="block overflow-hidden">
              {word.split("").map((ch, i) => (
                <span key={i} className={`rise ${w ? "text-coral" : ""}`} style={{ "--i": i + w * 4 } as React.CSSProperties} aria-hidden>
                  {ch}
                </span>
              ))}
            </span>
          ))}
        </h1>
        <div className="relative mt-6 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <p className="max-w-md text-lg text-dim">
            I make brands move: logo stings, product films and scroll-stopping social, frame by frame.
          </p>
          <a href="#work" className="text-sm font-semibold tracking-widest uppercase">
            Scroll to play ↓
          </a>
        </div>
      </section>

      {/* Marquee */}
      <div className="border-y border-line py-4" aria-hidden>
        <div className="marquee flex w-max gap-10 font-display text-3xl uppercase text-dim">
          {Array.from({ length: 2 }).flatMap((_, k) =>
            ["After Effects", "✦", "Cinema 4D", "✦", "Rive", "✦", "Lottie", "✦", "Blender", "✦", "Figma", "✦"].map((s, i) => (
              <span key={`${k}-${i}`} className={s === "✦" ? "text-coral" : ""}>{s}</span>
            )),
          )}
        </div>
      </div>

      {/* Work */}
      <section id="work" className="mx-auto max-w-7xl px-4 py-24 sm:px-8">
        <div className="flex items-end justify-between gap-6">
          <h2 className="font-display text-[clamp(3rem,8vw,6.5rem)] leading-none uppercase">Selected motion</h2>
          <p className="hidden font-mono text-sm text-dim sm:block">01 — {String(REELS.length).padStart(2, "0")}</p>
        </div>
        <p className="mt-4 text-dim">Hover a piece to speed it up.</p>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {REELS.map((r, i) => (
            <li key={r.title} tabIndex={0} className="tile group rounded-3xl border border-line bg-ink-2 p-3 transition-colors hover:border-coral">
              <div className="relative grid aspect-[4/3] place-items-center overflow-hidden rounded-2xl bg-ink">
                <Art kind={r.art} />
                <span className="absolute top-3 left-3 font-mono text-xs text-dim">{String(i + 1).padStart(2, "0")}</span>
              </div>
              <div className="flex items-start justify-between gap-3 px-2 pt-4 pb-2">
                <div>
                  <h3 className="text-lg font-bold">{r.title}</h3>
                  <p className="text-sm text-dim">{r.client}</p>
                </div>
                <span className="font-mono text-xs text-dim">{r.year}</span>
              </div>
              <div className="flex flex-wrap gap-2 px-2 pb-2">
                {r.tags.map((t) => (
                  <span key={t} className="rounded-full border border-line px-3 py-1 text-xs text-dim">{t}</span>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* About */}
      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-24 sm:px-8 lg:grid-cols-[1.2fr_1fr]">
        <h2 className="font-display text-[clamp(2.8rem,6vw,5.5rem)] leading-[0.95] uppercase">
          Motion that makes people <span className="text-coral">stop scrolling.</span>
        </h2>
        <div className="space-y-5 text-lg text-dim">
          <p>Seven years of animating for startups, studios and creators. I care about timing more than effects: the half-second that makes a logo feel confident or a button feel alive.</p>
          <p>You get one person from moodboard to final export, with styleframes you approve before a single keyframe.</p>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="mx-auto max-w-7xl px-4 py-24 sm:px-8">
        <h2 className="font-display text-[clamp(3rem,8vw,6.5rem)] leading-none uppercase">What I make</h2>
        <div className="mt-12 grid border-t border-line sm:grid-cols-2">
          {SERVICES.map((s) => (
            <div key={s.n} className="group border-b border-line py-8 sm:odd:pr-10 sm:even:border-l sm:even:pl-10">
              <p className="font-mono text-sm text-coral">{s.n}</p>
              <h3 className="mt-3 font-display text-4xl uppercase transition-transform group-hover:translate-x-2">{s.t}</h3>
              <p className="mt-3 max-w-sm text-dim">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section id="process" className="mx-auto max-w-7xl px-4 py-24 sm:px-8">
        <h2 className="font-display text-[clamp(3rem,8vw,6.5rem)] leading-none uppercase">Brief to final cut</h2>
        <ol className="mt-12 grid gap-4 sm:grid-cols-5">
          {PROCESS.map((p, i) => (
            <li key={p.t} className="rounded-3xl border border-line p-5">
              <p className="font-display text-5xl text-coral">{i + 1}</p>
              <p className="mt-6 font-bold">{p.t}</p>
              <p className="mt-1 font-mono text-xs text-dim">{p.w}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Words */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-8">
        <h2 className="font-display text-[clamp(3rem,8vw,6.5rem)] leading-none uppercase">Kind words</h2>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {WORDS.map((w) => (
            <figure key={w.who} className="rounded-3xl bg-cream p-7 text-ink">
              <blockquote className="text-xl leading-snug font-semibold">“{w.q}”</blockquote>
              <figcaption className="mt-6 text-sm opacity-70">{w.who}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto grid max-w-7xl gap-10 px-4 py-24 sm:px-8 lg:grid-cols-[1fr_1.3fr]">
        <div>
          <h2 className="font-display text-[clamp(3.5rem,9vw,8rem)] leading-[0.85] uppercase">
            Let’s make it <span className="text-coral">move.</span>
          </h2>
          <p className="mt-6 max-w-sm text-lg text-dim">Two project slots open for November. Tell me what you’re launching.</p>
        </div>
        <Inquiry />
      </section>

      <footer className="border-t border-line px-4 py-8 text-sm text-dim sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-3 sm:flex-row">
          <p>© 2026 Aria Cole</p>
          <p>
            Concept portfolio — Aria is fictional. Designed &amp; built by{" "}
            <a href={STUDIO} className="font-semibold text-cream underline underline-offset-4">Yashh Techstudio</a>. Want one like this?
          </p>
        </div>
      </footer>
    </main>
  );
}

// Each reel is a looping CSS/SVG piece, so the page shows motion without shipping video files.
function Art({ kind }: { kind: (typeof REELS)[number]["art"] }) {
  switch (kind) {
    case "orbit":
      return (
        <div className="relative size-40">
          <div className="absolute inset-[38%] rounded-full bg-coral" />
          {[0, 1, 2].map((i) => (
            <div key={i} className="loop orbit absolute" style={{ "--d": `${3 + i * 1.5}s`, inset: `${i * 14}%` } as React.CSSProperties}>
              <span className="absolute top-0 left-1/2 size-4 -translate-x-1/2 rounded-full bg-sun" />
            </div>
          ))}
          <div className="absolute inset-0 rounded-full border border-dashed border-line" />
        </div>
      );
    case "morph":
      return <div className="loop morph size-40 bg-gradient-to-br from-coral via-sun to-sky" style={{ "--d": "5s" } as React.CSSProperties} />;
    case "bounce":
      return (
        <div className="flex h-44 flex-col items-center justify-end">
          <div className="loop bounce size-14 rounded-full bg-sun" style={{ "--d": "1.4s" } as React.CSSProperties} />
          <div className="mt-1 h-1 w-24 rounded-full bg-line" />
        </div>
      );
    case "wave":
      return (
        <div className="flex h-32 items-end gap-1.5">
          {Array.from({ length: 16 }).map((_, i) => (
            <span key={i} className="loop wave h-full w-2.5 rounded-full bg-sky" style={{ "--d": "0.9s", animationDelay: `${-i * 0.11}s` } as React.CSSProperties} />
          ))}
        </div>
      );
    case "cube":
      return (
        <div className="size-24 [perspective:500px]">
          <div className="loop spin3d relative size-full" style={{ "--d": "8s" } as React.CSSProperties}>
            {["rotateY(0deg)", "rotateY(90deg)", "rotateY(180deg)", "rotateY(-90deg)", "rotateX(90deg)", "rotateX(-90deg)"].map((t, i) => (
              <span
                key={t}
                className="absolute inset-0 border-2 border-coral"
                style={{ transform: `${t} translateZ(3rem)`, background: i % 2 ? "oklch(68% 0.21 35 / 0.18)" : "oklch(86% 0.16 90 / 0.12)" }}
              />
            ))}
          </div>
        </div>
      );
    case "type":
      return (
        <div className="relative text-center">
          <p className="loop reveal font-display text-6xl uppercase text-cream" style={{ "--d": "3.5s" } as React.CSSProperties}>
            Hello<span className="text-coral">,</span>
          </p>
          <svg viewBox="0 0 200 20" className="mx-auto mt-2 w-48" aria-hidden>
            <path className="loop dash" d="M5 10 Q 50 0 100 10 T 195 10" fill="none" stroke="var(--color-coral)" strokeWidth="3" strokeLinecap="round" style={{ "--d": "3.5s" } as React.CSSProperties} />
          </svg>
        </div>
      );
  }
}
