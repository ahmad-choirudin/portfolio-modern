import { useEffect, useRef, useState } from "react";
import { certificates } from "../../data/certificate";
import { projects } from "../../data/projects";
import Section from "./Section";

const START_YEAR = 2020;

function Count({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setValue(to);
      return;
    }
    let raf = 0;
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      const start = performance.now();
      const step = (now: number) => {
        const t = Math.min(1, (now - start) / 1400);
        setValue(Math.round(to * (1 - Math.pow(1 - t, 3))));
        if (t < 1) raf = requestAnimationFrame(step);
      };
      raf = requestAnimationFrame(step);
    }, { threshold: 0.4 });
    io.observe(el);
    return () => { io.disconnect(); cancelAnimationFrame(raf); };
  }, [to]);

  return <span ref={ref} className="tabular-nums">{value}{suffix}</span>;
}

export default function StatsCounter() {
  const stats = [
    { to: certificates.length, suffix: "", label: "Certificates earned" },
    { to: projects.length, suffix: "", label: "Projects built" },
    { to: new Date().getFullYear() - START_YEAR, suffix: "+", label: "Years in communities" },
    { to: 4, suffix: "", label: "Areas of focus" },
  ];
  return (
    <Section tight>
      <dl className="grid grid-cols-2 gap-6 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="flex flex-col border-l border-line pl-4">
            <dt className="order-2 mt-1 text-xs text-muted">{s.label}</dt>
            <dd className="text-4xl font-semibold tracking-tight text-accent">
              <Count to={s.to} suffix={s.suffix} />
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
