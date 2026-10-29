import Section from "./Section";
import SectionHeading from "./SectionHeading";
import { site } from "@/data/site";

export default function Contact() {
  return (
    <Section id="contact">
      <div className="grid gap-10 md:grid-cols-[minmax(0,320px)_1fr_auto]">
      <SectionHeading
        index="06"
        eyebrow="Get in touch"
        title="Contact"
        note="Interested in working together? Feel free to get in touch."
      />

      <ul className="flex flex-wrap gap-8 text-xs">
        {site.socials.map((s) => (
          <li key={s.label} data-reveal>
            <a
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-accent"
            >
              <p className="font-medium">{s.label}</p>
              <p className="text-white/50">{s.handle}</p>
            </a>
          </li>
        ))}
      </ul>

      <div className="text-xs">
        <a
          href={`mailto:${site.email}`}
          className="inline-block rounded-full bg-accent px-5 py-3 font-medium text-bg transition hover:-translate-y-0.5"
        >
          Send Email
        </a>
        <p className="mt-3 text-white/60">{site.email}</p>
      </div>
      </div>
    </Section>
  );
}
