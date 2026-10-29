import { useEffect, useRef } from "react";
import Section from "./Section";
import SectionHeading from "./SectionHeading";

const items = [
  {
    period: "Jun 2024 – Present",
    title: "AI Data Operations",
    org: "Evaluation, annotation & training",
    text: "Evaluating, annotating, and training AI and LLM outputs across language, coding, and content-quality projects.",
    tags: ["Outlier", "RWS", "TELUS Digital", "Mindrift", "Alignerr", "Meridial", "CrowdGen", "Curvia AI"],
  },
  {
    period: "May 2023 – Present",
    title: "Frontend Developer",
    org: "Freelance",
    text: "Building and maintaining personal and freelance web projects with a focus on responsive frontend development and Web3-related interfaces.",
  },
  {
    period: "Apr 2020 – Present",
    title: "Web3 / Crypto Researcher",
    org: "Freelance · Self-Employed",
    text: "Independent research across Web3, blockchain, cryptocurrency, DeFi, token ecosystems, and emerging blockchain projects.",
  },
  {
    period: "Mar 2020 – Present",
    title: "Web3 Content Writer & Community Moderator",
    org: "Freelance · Self-Employed",
    text: "Creating Web3-focused content and supporting online communities across crypto, blockchain, DeFi, and airdrops.",
  },
  {
    period: "2011 – 2020",
    title: "Earlier career: Sales & Retail",
    org: "Alfamart · Lintas Semesta · Arta Boga Cemerlang · RSR Brew",
    text: "Field sales, merchandising, and retail operations across Jakarta and East Java.",
  },
];

export default function Timeline() {
  const list = useRef<HTMLOListElement>(null);

  useEffect(() => {
    const el = list.current;
    if (!el) return;
    const rows = Array.from(el.querySelectorAll<HTMLElement>(".tl-item"));
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) {
      rows.forEach((r) => r.classList.add("is-in"));
      return;
    }
    const io = new IntersectionObserver((es) => es.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add("is-in"); io.unobserve(e.target); }
    }), { threshold: 0.3 });
    rows.forEach((r) => io.observe(r));

    let ticking = false;
    const update = () => {
      ticking = false;
      const r = el.getBoundingClientRect();
      const p = Math.min(1, Math.max(0, (innerHeight * 0.7 - r.top) / r.height));
      el.style.setProperty("--p", String(p));
    };
    const onScroll = () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } };
    update();
    addEventListener("scroll", onScroll, { passive: true });
    addEventListener("resize", onScroll);
    return () => {
      io.disconnect();
      removeEventListener("scroll", onScroll);
      removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <Section id="experience">
      <SectionHeading index="03" eyebrow="Journey" title="Experience" />

      <ol ref={list} className="relative mt-12 max-w-2xl">
        <span className="absolute bottom-1 left-[7px] top-1 w-px bg-white/10" aria-hidden="true" />
        <span className="tl-line absolute bottom-1 left-[7px] top-1 w-px bg-accent" aria-hidden="true" />
        {items.map((it) => (
          <li key={it.title} className="tl-item relative pb-10 pl-10 last:pb-0">
            <span className="tl-dot absolute left-0 top-1.5 h-[15px] w-[15px] rounded-full border-2 border-accent bg-bg" aria-hidden="true" />
            <p className="text-xs font-medium text-accent">{it.period}</p>
            <h3 className="mt-1 text-lg font-semibold text-white">{it.title}</h3>
            <p className="text-sm text-subtle">{it.org}</p>
            <p className="mt-2 text-sm leading-6 text-muted">{it.text}</p>
            {it.tags && (
              <ul className="mt-3 flex flex-wrap gap-2">
                {it.tags.map((t) => (
                  <li key={t} className="rounded-full border border-line px-3 py-1 text-xs text-fg/90">{t}</li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ol>
    </Section>
  );
}
