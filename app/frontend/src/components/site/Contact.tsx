import { useState } from "react";
import Section from "./Section";
import { site } from "@/data/site";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const address = () => `${site.emailUser}@${site.emailDomain}`;

  const sendEmail = () => {
    window.location.href = `mailto:${address()}`;
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(address());
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      
      sendEmail();
    }
  };

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

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={sendEmail}
            className="group inline-flex items-center gap-2 rounded-full bg-accent px-7 py-4 text-sm font-medium text-bg transition hover:-translate-y-0.5 hover:shadow-[0_10px_26px_-10px_rgb(var(--accent-rgb)/0.7)]"
          >
            Send Email
            <span
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            >
              ↗
            </span>
          </button>

          <button
            type="button"
            onClick={copyEmail}
            className="rounded-full border border-white/25 px-7 py-4 text-sm text-fg transition hover:-translate-y-0.5 hover:border-accent hover:text-accent"
          >
            {copied ? "Copied ✓" : "Copy email"}
          </button>
          <span className="sr-only" aria-live="polite">
            {copied ? "Email address copied to clipboard" : ""}
          </span>
        </div>
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
