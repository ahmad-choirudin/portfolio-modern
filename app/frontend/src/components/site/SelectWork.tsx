import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { projects } from "@/data/projects";
export default function SelectWork() {
  return (
    <section className="border-t border-white/10 px-6 py-16 md:px-14">
      <SectionHeading id="work" title="Selected Work" note="A selection of projects and contributions across Web3, frontend, community, and AI." />
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {projects.map((p, i) => (
          <Reveal key={p.title} index={i} className="h-full"><article className="card flex h-full flex-col rounded-md border border-white/10 bg-card p-3 hover:border-accent/50">
            <img src={p.image} alt="" className="aspect-video w-full rounded object-cover" />
            <p className="mt-4 text-xs text-accent">0{i + 1}</p>
            <h3 className="font-medium">{p.title}</h3>
            <p className="text-xs text-white/50">{p.period}</p>
            <p className="mt-3 flex-1 text-sm text-white/70">{p.text}</p>
            <p className="mt-4 text-xs text-white/50">Tools: {p.tools}</p>
          </article></Reveal>
        ))}
      </div>
    </section>
  );
}
