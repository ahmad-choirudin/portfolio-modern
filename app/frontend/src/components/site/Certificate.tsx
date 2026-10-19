import SectionHeading from "./SectionHeading";
import { certificates } from "@/data/certificate";

export default function Certificate() {
  return (
    <section className="grid gap-8 border-t border-white/10 px-6 py-14 md:grid-cols-[260px_1fr] md:px-14">
      <SectionHeading
        id="credentials"
        title="Credentials"
        note="Selected learning credentials in blockchain technology and Web3 ecosystems."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {certificates.map((c) => (
          <div
            key={c.issuer}
            data-reveal
            className="rounded border border-white/10 bg-card p-5 text-sm transition hover:border-accent/40"
          >
            <p className="font-medium">{c.issuer}</p>

            <p className="mt-3 text-white/60">
              {c.title}
              <br />
              {c.sub}
            </p>

            {c.href ? (
              <a
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-block text-xs text-accent hover:underline"
              >
                View Certificate ↗
              </a>
            ) : (
              <p className="mt-5 text-xs text-white/40">
                Certificate link coming soon
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
