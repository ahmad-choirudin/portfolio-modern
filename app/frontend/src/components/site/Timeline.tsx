import { useEffect, useRef } from "react";

const items = [
  { year: "2020", title: "Community Operations", text: "Managing communities, moderating discussions, and supporting engagement across Telegram, Discord, and X." },
  { year: "2024", title: "Web3 Research", text: "Researching blockchain ecosystems, protocols, tokenomics, and airdrop opportunities." },
  { year: "2024", title: "Frontend Development", text: "Building responsive, Web3-inspired interfaces with React, Vite, and Tailwind CSS." },
  { year: "2024", title: "AI Data Operations", text: "Contributing to AI evaluation, data annotation, and quality improvement projects." },
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
    <section id="experience" className="mx-auto max-w-6xl px-5 py-16">
      <p className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-lime-400">Journey</p>
      <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">Experience</h2>

      <ol ref={list} className="relative mt-10 max-w-2xl">
        <span className="absolute bottom-1 left-[7px] top-1 w-px bg-white/10" aria-hidden="true" />
        <span className="tl-line absolute bottom-1 left-[7px] top-1 w-px bg-lime-400" aria-hidden="true" />
        {items.map((it) => (
          <li key={it.title} className="tl-item relative pb-10 pl-10 last:pb-0">
            <span className="tl-dot absolute left-0 top-1.5 h-[15px] w-[15px] rounded-full border-2 border-lime-400 bg-black" aria-hidden="true" />
            <p className="text-xs font-medium text-lime-400">{it.year} – Present</p>
            <h3 className="mt-1 text-lg font-semibold text-white">{it.title}</h3>
            <p className="mt-1 text-sm leading-6 text-zinc-400">{it.text}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
