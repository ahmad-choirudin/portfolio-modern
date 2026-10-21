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
  {/* Foto */}
  <div className="absolute inset-y-0 right-0 w-full md:w-1/2 md:pt-16">
    <img
      src={site.heroImage}
      alt="Ahmad Choirudin"
      className="hero-photo h-full w-full object-cover object-[center_20%] opacity-70 md:opacity-100"
    />
    {/* HP: gelap merata supaya teks terbaca */}
    <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/70 to-bg/30 md:hidden" />
    {/* Desktop: pudar tipis ke kiri */}
    <div className="absolute inset-0 hidden bg-gradient-to-r from-bg via-bg/10 to-transparent md:block md:w-1/3" />
  </div>

      <svg className="sig" md:translate-y-10" viewBox="0 0 340 150" aria-hidden="true">
        <path
          pathLength={1}
          d="M10 125 C60 15 95 145 145 65 S225 5 262 72 S305 105 332 38"
        />
      </svg>

      {/* Teks: naik sedikit menimpa bagian bawah foto di HP */}
      <div className="hero-in relative max-w-xl pb-16 md:pt-10">
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
