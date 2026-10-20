import { useEffect, useRef, useState } from "react";
import { certificates } from "../../data/certificate";

export function Certificate() {
  const [zoom, setZoom] = useState<string | null>(null);
  const [expanded, setExpanded] = useState(false);
  const scroller = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setZoom(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const slide = (dir: 1 | -1) => {
    const el = scroller.current;
    const card = el?.querySelector("article");
    if (!el || !card) return;
    el.scrollBy({ left: dir * (card.clientWidth + 20), behavior: "smooth" });
  };

  return (
    <section id="credentials" className="py-16">
      <span id="certificates" />

      <div className="mx-auto max-w-6xl px-5">
        <div className="mb-8 flex items-end justify-between gap-6">
          <div>
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

          {certificates.length > 3 && (
            <div className="hidden shrink-0 gap-2 md:flex">
              <button
                type="button"
                onClick={() => slide(-1)}
                aria-label="Previous certificates"
                className="h-10 w-10 rounded-full border border-white/15 text-white transition hover:border-lime-400 hover:text-lime-400"
              >
                ←
              </button>
              <button
                type="button"
                onClick={() => slide(1)}
                aria-label="Next certificates"
                className="h-10 w-10 rounded-full border border-white/15 text-white transition hover:border-lime-400 hover:text-lime-400"
              >
                →
              </button>
            </div>
          )}
        </div>

        <div
          ref={scroller}
          className={`${
            expanded
              ? "-mx-5 flex snap-x snap-mandatory scroll-pl-5 gap-3 overflow-x-auto px-5 pb-3"
              : "grid grid-cols-1 gap-3"
          } [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:mx-0 md:flex md:snap-x md:snap-mandatory md:gap-5 md:overflow-x-auto md:scroll-pl-0 md:px-0 md:pb-3`}
        >
          {certificates.map((c, i) => (
            <article
              key={c.title}
              className={`group flex overflow-hidden rounded-xl border border-white/10 bg-zinc-950 transition-colors hover:border-lime-400/40 md:w-[calc((100%-2.5rem)/3)] md:shrink-0 md:snap-start md:flex-col md:items-stretch md:gap-0 md:p-0 ${
                expanded
                  ? "w-[85%] shrink-0 snap-start flex-col sm:w-[60%]"
                  : "items-center gap-4 p-3"
              } ${!expanded && i >= 3 ? "hidden md:flex" : ""}`}
            >
              <button
                type="button"
                onClick={() => setZoom(c.image)}
                className={`overflow-hidden bg-zinc-900 ${
                  expanded
                    ? "aspect-[4/3] w-full"
                    : "h-20 w-28 shrink-0 rounded-lg"
                } md:aspect-[4/3] md:h-auto md:w-full md:rounded-none`}
                aria-label={`Enlarge ${c.title} certificate`}
              >
                <img
                  src={c.image}
                  alt={`${c.title} certificate`}
                  loading="lazy"
                  className="h-full w-full object-contain"
                />
              </button>

              <div
                className={`flex min-w-0 flex-1 flex-col ${
                  expanded ? "p-4" : "md:p-4"
                }`}
              >
                <p className="text-[10px] font-medium uppercase tracking-wider text-lime-400">
                  {c.issuer}
                </p>
                <h3
                  className={`mt-1 font-semibold leading-5 text-white md:text-base ${
                    expanded ? "text-base" : "text-sm"
                  }`}
                >
                  {c.title}
                </h3>
                <p
                  className={`mt-1 text-xs leading-5 text-zinc-400 md:block ${
                    expanded ? "block" : "hidden"
                  }`}
                >
                  {c.learned}
                </p>
                <a
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center gap-1 pt-3 text-xs font-medium text-lime-400 hover:text-lime-300"
                >
                  View Certificate <span aria-hidden="true">↗</span>
                </a>
              </div>
            </article>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setExpanded(!expanded)}
          className="mt-4 w-full text-center text-sm font-medium text-lime-400 hover:text-lime-300 md:hidden"
        >
          {expanded ? "Show less" : "See more certificates"}
        </button>
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