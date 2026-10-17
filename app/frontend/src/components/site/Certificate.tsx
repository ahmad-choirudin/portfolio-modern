import SectionHeading from "./SectionHeading";
import { certificates } from "@/data/certificate";
export default function Certificate() {
  return (
    <section className="grid gap-8 border-t border-white/10 px-6 py-14 md:grid-cols-[260px_1fr] md:px-14">
      <SectionHeading id="credentials" title="Credentials" note="Blockchain learning achievements and relevant certifications." />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {certificates.map((c) => (
          <a key={c.title} data-reveal href={c.href} className="rounded border border-white/10 bg-card p-5 text-sm hover:border-accent/60">
            <p className="font-medium">{c.issuer}</p><p className="mt-3 text-white/60">{c.title}<br />{c.sub}</p>
            <p className="mt-5 text-xs text-accent">View Certificate</p>
          </a>
        ))}
        <div data-reveal className="rounded border border-dashed border-white/10 p-5 text-sm text-white/50">More certificates coming soon.</div>
      </div>
    </section>
  );
}
