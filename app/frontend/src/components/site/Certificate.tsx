import { useEffect, useState } from "react";
import { certificates } from "../../data/certificate";

export function Certificate() {
  const [zoom, setZoom] = useState<string | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setZoom(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section id="credentials" className="py-16">
      <span id="certificates" />

      <div className="mx-auto max-w-6xl px-5">
        <div className="mb-8">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-lime-400">
            Learning & Credentials
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Certificates
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-400">
            Selected blockchain learning achievements focused on smart
            contracts, testing, and decentralized application development.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-3 md:grid-cols-3 md:gap-5">
          {certificates.map((c) => (
            <article
              key={c.title}
              className="group flex items-center gap-4 overflow-hidden rounded-xl border border-white/10 bg-zinc-950 p-3 transition-colors hover:border-lime-400/40 md:flex-col md:items-stretch md:p-0"
            >
              <button
                type="button"
                onClick={() => setZoom(c.image)}
                className="h-20 w-28 shrink-0 overflow-hidden rounded-lg bg-zinc-900 md:aspect-[4/3] md:h-auto md:w-full md:rounded-none"
                aria-label={`Enlarge ${c.title} certificate`}
              >
                <img
                  src={c.image}
                  alt={`${c.title} certificate`}
                  loading="lazy"
                  className="h-full w-full object-contain"
                />
              </button>

              <div className="min-w-0 md:p-4">
                <p className="text-[10px] font-medium uppercase tracking-wider text-lime-400">
                  {c.issuer}
                </p>
                <h3 className="mt-1 text-sm font-semibold leading-5 text-white md:text-base">
                  {c.title}
                </h3>
                <p className="mt-1 hidden text-xs leading-5 text-zinc-400 md:block">
                  {c.learned}
                </p>
                <a
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-lime-400 hover:text-lime-300"
                >
                  View Certificate <span aria-hidden="true">↗</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>

      {zoom && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-3"
          onClick={() => setZoom(null)}
        >
          <img
            src={zoom}
            alt="Certificate"
            className="max-h-full max-w-full rounded-lg bg-white"
          />
        </div>
      )}
    </section>
  );
}

export default Certificate;