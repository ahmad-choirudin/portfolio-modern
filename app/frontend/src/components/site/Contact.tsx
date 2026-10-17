import SectionHeading from "./SectionHeading";
import { site } from "@/data/site";
export default function Contact() {
  return (
    <section className="grid gap-8 border-t border-white/10 px-6 py-14 md:grid-cols-[260px_1fr_auto] md:px-14">
      <SectionHeading id="contact" title="Contact" note="Let’s work together or just have a chat." />
      <ul className="flex flex-wrap gap-8 text-xs">
        {site.socials.map((s) => <li key={s.label} data-reveal><a href={s.href} className="hover:text-accent"><p className="font-medium">{s.label}</p><p className="text-white/50">{s.handle}</p></a></li>)}
      </ul>
      <div className="text-xs"><a href={`mailto:${site.email}`} className="inline-block rounded-full bg-accent px-5 py-3 font-medium text-bg">Send Email</a><p className="mt-3 text-white/60">{site.email}</p></div>
    </section>
  );
}
