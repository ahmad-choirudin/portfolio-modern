
import { site } from "@/data/site";

const lines = [
  "Building at the",
  "intersection of",
  "Web3, technology &",
  "digital communities.",
];

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] overflow-hidden px-6 pt-16 md:px-14">
      <img
        src={site.heroImage}
        alt=""
        className="hero-photo absolute inset-y-0 right-0 h-full w-full object-cover object-right opacity-70 md:w-3/5"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-bg via-bg/80 to-transparent" />

      <svg
        className="sig"
        viewBox="0 0 340 150"
        aria-hidden="true"
      >
        <path
          pathLength={1}
          d="M10 125 C60 15 95 145 145 65 S225 5 262 72 S305 105 332 38"
        />
      </svg>

      <div className="hero-in relative max-w-xl">
        <p className="text-xs text-white/60">{site.role}</p>

        <h1
          className="split mt-6 text-5xl font-semibold leading-[1.05] tracking-tight md:text-6xl"
          aria-label={lines.join(" ")}
        >
          {lines.map((line, i) => (
            <span
              key={line}
              className={`ln ${i > 1 ? "acc" : ""}`}
              style={{ "--l": i } as React.CSSProperties}
              aria-hidden="true"
            >
              <span>{line}</span>
            </span>
          ))}
        </h1>

        <p className="mt-6 max-w-md text-white/75">
          I work across Web3 research, community operations, AI data quality,
          and frontend development. I contribute to digital ecosystems through
          research, evaluation, community support, and hands-on projects.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#work"
            className="rounded-full bg-accent px-5 py-3 text-sm font-medium text-bg transition hover:-translate-y-0.5 hover:shadow-[0_10px_26px_-10px_rgba(141,242,91,.7)]"
          >
            Explore My Work
          </a>

          <a
            href="#contact"
            className="rounded-full border border-white/30 px-5 py-3 text-sm transition hover:-translate-y-0.5"
          >
            Let’s Connect
          </a>
        </div>

        <p className="mt-6 flex items-center gap-2 text-xs text-white/70">
          <span className="h-2 w-2 rounded-full bg-accent" />
          Open to remote opportunities
        </p>
      </div>
    </section>
  );
}
