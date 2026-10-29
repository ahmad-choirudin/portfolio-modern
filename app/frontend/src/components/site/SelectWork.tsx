import Section from "./Section";
import SectionHeading from "./SectionHeading";
import { projects } from "@/data/projects";

export default function SelectedWork() {
  return (
    <Section id="work">
      <SectionHeading
        index="01"
        eyebrow="Work"
        title="Selected Work"
        note="Selected projects across Web3 research, frontend development, and digital products."
      />

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.title}
            data-reveal
            className="overflow-hidden rounded border border-line bg-card transition hover:border-accent/40"
          >
            <div className="aspect-video overflow-hidden bg-black/30">
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover transition duration-500 hover:scale-[1.03]"
                loading="lazy"
              />
            </div>

            <div className="p-5">
              <p className="text-xs uppercase tracking-wider text-accent">
                {project.period}
              </p>

              <h3 className="mt-2 text-lg font-medium">
                {project.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-white/70">
                {project.text}
              </p>

              <p className="mt-4 text-xs leading-5 text-white/50">
                {project.tools}
              </p>

              <div className="mt-5 flex flex-wrap gap-3">
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-accent px-4 py-2 text-xs font-medium text-bg transition hover:opacity-80"
                  >
                    Live Demo ↗
                  </a>
                )}

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-white/20 px-4 py-2 text-xs transition hover:border-accent hover:text-accent"
                  >
                    Source Code ↗
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
