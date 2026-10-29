import { useEffect, useMemo, useRef, useState } from "react";
import { certificates } from "../../data/certificate";
import Section from "./Section";
import SectionHeading from "./SectionHeading";

export function Certificate() {
  const [zoom, setZoom] = useState<string | null>(null);
  const [expanded, setExpanded] = useState(false);
  const [tab, setTab] = useState("All");
  const scroller = useRef<HTMLDivElement>(null);

  const issuers = useMemo(
    () => ["All", ...Array.from(new Set(certificates.map((c) => c.issuer)))],
    []
  );
  const list = tab === "All" ? certificates : certificates.filter((c) => c.issuer === tab);
  const count = (name: string) =>
    name === "All" ? certificates.length : certificates.filter((c) => c.issuer === name).length;

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setZoom(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const pick = (name: string) => {
    setTab(name);
    setExpanded(false);
    scroller.current?.scrollTo({ left: 0 });
  };

  const slide = (dir: 1 | -1) => {
    const el = scroller.current;
    const card = el?.querySelector("article");
    if (!el || !card) return;
    el.scrollBy({ left: dir * (card.clientWidth + 20), behavior: "smooth" });
  };

  return (
    <Section id="credentials">
      <span id="certificates" />

      <div>
        <div className="mb-8 flex items-end justify-between gap-6">
          <SectionHeading
            index="05"
            eyebrow="Learning & Credentials"
            title="Certificates"
            note="Selected blockchain learning achievements focused on smart contracts, testing, and decentralized application development."
          />

          {list.length > 3 && (
            <div className="hidden shrink-0 gap-2 md:flex">
              <button
                type="button"
                onClick={() => slide(-1)}
                aria-label="Previous certificates"
                className="h-10 w-10 rounded-full border border-white/15 text-white transition hover:border-accent hover:text-accent"
              >
                ←
              </button>
              <button
                type="button"
                onClick={() => slide(1)}
                aria-label="Next certificates"
                className="h-10 w-10 rounded-full border border-white/15 text-white transition hover:border-accent hover:text-accent"
              >
                →
              </button>
            </div>
          )}
        </div>

        <div className="-mx-6 mb-5 flex gap-2 overflow-x-auto px-6 pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:mx-0 md:px-0">
          {issuers.map((name) => (
            <button
              key={name}
              type="button"
              onClick={() => pick(name)}
              aria-pressed={tab === name}
              className={`shrink-0 rounded-full border px-4 py-2 text-xs transition ${
                tab === name
                  ? "border-accent text-accent"
                  : "border-white/15 text-muted hover:text-fg"
              }`}
            >
              {name} <span className="text-subtle">{count(name)}</span>
            </button>
          ))}
        </div>

        <div
          ref={scroller}
          className={`${
            expanded
              ? "-mx-6 flex snap-x snap-mandatory scroll-pl-6 gap-3 overflow-x-auto px-6 pb-3"
              : "grid grid-cols-1 gap-3"
          } [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:mx-0 md:flex md:snap-x md:snap-mandatory md:gap-5 md:overflow-x-auto md:scroll-pl-0 md:px-0 md:pb-3`}
        >
          {list.map((c, i) => (
            <article
              key={c.image}
              className={`group flex overflow-hidden rounded-xl border border-line bg-card transition-colors hover:border-accent/40 md:w-[calc((100%-2.5rem)/3)] md:shrink-0 md:snap-start md:flex-col md:items-stretch md:gap-0 md:p-0 ${
                expanded
                  ? "w-[85%] shrink-0 snap-start flex-col sm:w-[60%]"
                  : "items-center gap-4 p-3"
              } ${!expanded && i >= 3 ? "hidden md:flex" : ""}`}
            >
              <button
                type="button"
                onClick={() => setZoom(c.image)}
                className={`overflow-hidden bg-black/30 ${
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
                <p className="text-[10px] font-medium uppercase tracking-wider text-accent">
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
                  className={`mt-1 text-xs leading-5 text-muted md:block ${
                    expanded ? "block" : "hidden"
                  }`}
                >
                  {c.learned}
                </p>
                <a
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center gap-1 pt-3 text-xs font-medium text-accent hover:text-fg"
                >
                  View Certificate <span aria-hidden="true">↗</span>
                </a>
              </div>
            </article>
          ))}
        </div>

        {list.length > 3 && (
          <button
            type="button"
            onClick={() => setExpanded(!expanded)}
            className="mt-4 w-full text-center text-sm font-medium text-accent hover:text-fg md:hidden"
          >
            {expanded ? "Show less" : "See more certificates"}
          </button>
        )}
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
    </Section>
  );
}

export default Certificate;
