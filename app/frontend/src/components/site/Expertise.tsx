import Section from "./Section";
import SectionHeading from "./SectionHeading";
import { Hexagon, Network, Users, Code2, Bot, FileText } from "lucide-react";
import { expertise } from "@/data/expertise";
const icons = { Hexagon, Network, Users, Code2, Bot, FileText };
export default function Expertise() {
  return (
    <Section id="expertise">
      <div className="grid gap-10 md:grid-cols-[minmax(0,320px)_1fr]">
      <SectionHeading index="04" eyebrow="Capabilities" title="Expertise" note="Areas I focus on, with different levels of experience and practice." />
      <ul className="grid gap-6 sm:grid-cols-3 lg:grid-cols-6">
        {expertise.map((e) => {
          const Icon = icons[e.icon as keyof typeof icons];
          return (
          <li key={e.name} data-reveal className="text-xs"><Icon className="h-5 w-5 text-accent" aria-hidden="true" /><p className="mt-3 font-medium">{e.name}</p><p className="mt-1 text-white/50">{e.level}</p></li>
        ); })}
      </ul>
      </div>
    </Section>
  );
}
