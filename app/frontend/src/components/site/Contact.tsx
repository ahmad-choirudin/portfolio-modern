import Section from "./Section";
import { site } from "@/data/site";

export default function Contact() {
  return (
    <Section id="contact">
      <div data-reveal>
        <p className="flex items-center gap-3 font-mono text-eyebrow font-medium uppercase text-accent">
          <span className="tabular-nums text-subtle">06</span>
          <span className="h-px w-8 bg-accent/60" aria-hidden="true" />
          Get in touch
        </p>

        <h2 className="mt-6 max-w-4xl font-display text-display-lg font-semibold text-fg">
          Interested in working together?{" "}
          <span className="text-accent">Let’s talk.</span>
        </h2>

        <a
          href={`mailto:${site.email}`}
          className="group mt-12 inline-flex max-w-full items-center gap-4 border-b border-line pb-4 font-display text-2xl font-semibold text-fg transition-colors hover:border-accent hover:text-accent sm:text-4xl"
        >
          <span className="[overflow-wrap:anywhere]">{site.email}</span>
          <span
            aria-hidden="true"
            className="shrink-0 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
          >
            ↗
          </span>
        </a>
      </div>

      <ul className="mt-16 grid grid-cols-2 gap-x-6 gap-y-8 md:grid-cols-4">
        {site.socials.map((s) => (
          <li key={s.label} data-reveal>
            <a
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group block border-t border-line pt-5 transition-colors hover:border-accent"
            >
              <p className="flex items-center justify-between font-mono text-eyebrow uppercase text-muted transition-colors group-hover:text-accent">
                {s.label}
                <span aria-hidden="true">↗</span>
              </p>
              <p className="mt-2 text-base text-fg">{s.handle}</p>
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}
