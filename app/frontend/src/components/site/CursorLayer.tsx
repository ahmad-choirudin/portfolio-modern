import { useEffect, useRef } from "react";
/** Progress bar, cahaya kursor, parallax hero, dan reveal bertahap untuk elemen [data-reveal]. */
export default function CursorLayer() {
  const bar = useRef<HTMLDivElement>(null);
  const glow = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const items = document.querySelectorAll<HTMLElement>("[data-reveal]");
    items.forEach((el) => {
      el.style.setProperty("--i", String(Array.from(el.parentElement?.children ?? []).indexOf(el)));
      el.classList.add("reveal");
    });
    const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("is-in"); io.unobserve(e.target); } }), { threshold: 0.15 });
    items.forEach((el) => io.observe(el));
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return () => io.disconnect();

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = scrollY, h = document.documentElement.scrollHeight - innerHeight;
        if (bar.current) bar.current.style.transform = `scaleX(${h > 0 ? y / h : 0})`;
        if (y < 900) document.documentElement.style.setProperty("--py", `${y * 0.12}px`);
        ticking = false;
      });
    };
    addEventListener("scroll", onScroll, { passive: true });

    let raf = 0;
    const onMove = (e: PointerEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        if (!glow.current) return;
        glow.current.style.transform = `translate(${e.clientX - 200}px, ${e.clientY - 200}px)`;
        glow.current.style.opacity = "1";
      });
    };
    const fine = matchMedia("(pointer: fine)").matches;
    if (fine) addEventListener("pointermove", onMove);

    const cards = Array.from(document.querySelectorAll<HTMLElement>(".card"));
    const move = (e: PointerEvent) => {
      const c = e.currentTarget as HTMLElement, r = c.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height;
      c.style.setProperty("--mx", `${x * 100}%`); c.style.setProperty("--my", `${y * 100}%`);
      c.style.setProperty("--rx", `${(0.5 - y) * 6}deg`); c.style.setProperty("--ry", `${(x - 0.5) * 8}deg`);
    };
    const leave = (e: PointerEvent) => { const c = e.currentTarget as HTMLElement; c.style.setProperty("--rx", "0deg"); c.style.setProperty("--ry", "0deg"); };
    if (fine) cards.forEach((c) => { c.addEventListener("pointermove", move); c.addEventListener("pointerleave", leave); });

    return () => {
      io.disconnect(); removeEventListener("scroll", onScroll); removeEventListener("pointermove", onMove);
      cards.forEach((c) => { c.removeEventListener("pointermove", move); c.removeEventListener("pointerleave", leave); });
    };
  }, []);
  return (<><div ref={bar} className="cursor-bar" /><div ref={glow} className="cursor-glow" /></>);
}
