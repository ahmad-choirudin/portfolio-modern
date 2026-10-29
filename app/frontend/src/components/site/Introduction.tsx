import { site } from "@/data/site";
import Section from "./Section";
import SectionHeading from "./SectionHeading";

export default function Introduction() {
  return (
    <Section id="about">
      <div className="grid gap-10 md:grid-cols-3">
      <div data-reveal>
        <SectionHeading index="02" eyebrow="About" title="About Me" />

        <p className="mt-5 text-sm text-white/75">
          I’m Ahmad Choirudin, a digital professional from Indonesia with
          experience across Web3 research, community operations, and AI data
          projects.
        </p>

        <p className="mt-4 text-sm text-white/75">
          My work includes blockchain ecosystem research, online community
          moderation, AI evaluation, and data annotation. I’m also building
          practical frontend projects to strengthen my skills in creating
          modern web experiences.
        </p>

        <p className="mt-4 text-sm text-white/75">
          I value clear communication, attention to detail, and continuous
          learning. I’m interested in contributing to remote teams working on
          digital products, emerging technologies, and online communities.
        </p>
      </div>

      <img
        data-reveal
        src={site.aboutImage}
        alt="Ahmad Choirudin"
        className="aspect-[4/5] w-full rounded object-cover grayscale"
        loading="lazy"
      />

      <blockquote
        data-reveal
        className="self-start rounded border border-line bg-card p-6 text-sm text-white/80"
      >
        <p className="text-xs uppercase tracking-widest text-white/50">
          Areas of Focus
        </p>

        <p className="mt-4 leading-7">
          Web3 Research
          <br />
          AI Data Quality
          <br />
          Community Operations
          <br />
          Frontend Development
        </p>
      </blockquote>
      </div>
    </Section>
  );
}
