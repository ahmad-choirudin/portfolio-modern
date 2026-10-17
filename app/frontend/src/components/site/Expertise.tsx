import SectionHeading from "./SectionHeading";
import { Hexagon, Network, Users, Code2, Bot, FileText } from "lucide-react";
import { expertise } from "@/data/expertise";
const icons = { Hexagon, Network, Users, Code2, Bot, FileText };
export default function Expertise() {
  return (
    <section className="grid gap-8 border-t border-white/10 px-6 py-14 md:grid-cols-[260px_1fr] md:px-14">
      <SectionHeading id="expertise" title="Expertise" note="Areas I focus on, with different levels of experience and practice." />
      <ul className="grid gap-6 sm:grid-cols-3 lg:grid-cols-6">
        {expertise.map((e) => {
          const Icon = icons[e.icon as keyof typeof icons];
          return (
          <li key={e.name} data-reveal className="text-xs"><Icon className="h-5 w-5 text-accent" aria-hidden="true" /><p className="mt-3 font-medium">{e.name}</p><p className="mt-1 text-white/50">{e.level}</p></li>
        ); })}
      </ul>
    </section>
  );
}
