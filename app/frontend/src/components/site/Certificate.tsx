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
    <section id="credentials" className="py-20">
      {/* anchor cadangan supaya link #certificates juga jalan */}
      <span id="certificates" />

      <div className="mx-auto max-w-6xl px-5">
        <div className="mb-10">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-lime-400">
            Learning & Credentials
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Certificates
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-zinc-400 sm:text-base">
            Selected blockchain learning achievements focused on smart
            contracts, testing, and decentralized application development.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {certificates.map((certificate) => (
            <article
              key={certificate.title}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-zinc-950 transition-colors hover:border-lime-400/40"
            >
              <button
                type="button"
                onClick={() => setZoom(certificate.image)}
                className="block aspect-[4/3] w-full overflow-hidden bg-zinc-900"
                aria-label={`Enlarge ${certificate.title} certificate`}
              >
                <img
                  src={certificate.image}
                  alt={`${certificate.title} certificate`}
                  loading="lazy"
                  className="h-full w-full object-contain p-3 transition-transform duration-300 group-hover:scale-[1.02]"
                />
              </button>

              <div className="p-5">
                <p className="text-xs font-medium uppercase tracking-wider text-lime-400">
                  {certificate.issuer}
                </p>

                <h3 className="mt-3 text-lg font-semibold leading-7 text-white">
                  {certificate.title}
                </h3>

                <p className="mt-1 text-sm text-zinc-500">{certificate.sub}</p>

                <p className="mt-4 text-sm leading-6 text-zinc-400">
                  {certificate.learned}
                </p>

                <a
                  href={certificate.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-lime-400 transition-colors hover:text-lime-300"
                >
                  View Certificate
                  <span aria-hidden="true">↗</span>
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