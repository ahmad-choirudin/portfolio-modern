import Section from "./Section";
import SectionHeading from "./SectionHeading";
import { projects } from "@/data/projects";

export default function SelectedWork() {
  const total = String(projects.length).padStart(2, "0");

  return (
    <Section id="work">
      <SectionHeading
        index="01"
        eyebrow="Work"
        title="Selected Work"
        note="Selected projects across Web3 research, frontend development, and digital products."
      />

      <div className="mt-16 flex flex-col gap-20 md:gap-28">
        {projects.map((project, i) => {
          const href = project.demo ?? project.github;
          const tools = project.tools.split(",").map((t) => t.trim());

          return (
            <article
              key={project.title}
              data-reveal
              className="grid items-center gap-8 md:grid-cols-12 md:gap-12"
            >
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${project.title}`}
                className={`group relative block overflow-hidden rounded-2xl border border-line bg-card transition-colors hover:border-accent/40 md:col-span-7 ${
                  i % 2 === 1 ? "md:order-2" : ""
                }`}
              >
                <img
                  src={project.image}
                  alt={`${project.title} project screenshot`}
                  width={1672}
                  height={941}
                  loading="lazy"
                  className="aspect-video h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                />
                <span className="absolute bottom-4 right-4 translate-y-1 rounded-full bg-bg/80 px-3 py-1.5 font-mono text-xs text-fg opacity-0 backdrop-blur transition duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100">
                  View project ↗
                </span>
              </a>

              <div className="md:col-span-5">
                <p className="flex items-center gap-3 font-mono text-eyebrow uppercase text-accent">
                  <span className="tabular-nums text-subtle">
                    {String(i + 1).padStart(2, "0")} / {total}
                  </span>
                  <span className="h-px w-8 bg-accent/60" aria-hidden="true" />
                  {project.period}
                </p>

                <h3 className="mt-5 font-display text-3xl font-semibold tracking-tight text-fg md:text-4xl">
                  {project.title}
                </h3>

                <p className="mt-5 text-base leading-7 text-muted">{project.text}</p>

                <ul className="mt-6 flex flex-wrap gap-2" aria-label="Tools used">
                  {tools.map((t) => (
                    <li
                      key={t}
                      className="rounded-full border border-line px-3 py-1 font-mono text-xs text-muted"
                    >
                      {t}
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex flex-wrap gap-3">
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full bg-accent px-5 py-3 text-sm font-medium text-bg transition hover:-translate-y-0.5 hover:shadow-[0_10px_26px_-10px_rgb(var(--accent-rgb)/0.7)]"
                    >
                      Live Demo ↗
                    </a>
                  )}

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full border border-white/25 px-5 py-3 text-sm text-fg transition hover:border-accent hover:text-accent"
                    >
                      Source Code ↗
                    </a>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
