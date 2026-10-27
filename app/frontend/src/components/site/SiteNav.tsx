import { site } from "@/data/site";
import ScrambleText from "./ScrambleText";
import Magnetic from "./Magnetic";
import Logo from "./Logo";

export default function SiteNav() {
  return (
    <header className="sticky top-0 z-40 flex items-center justify-between bg-bg/80 px-6 py-4 backdrop-blur md:px-14">
      <a href="#" className="flex items-center gap-2 font-medium">
        <Logo className="h-7 w-7" />
        <ScrambleText text={site.name} />
      </a>
      <nav className="hidden gap-8 text-sm md:flex">
        {site.nav.map((n) => (
          <a key={n} href={`#${n.toLowerCase()}`} className="text-white/80 hover:text-accent focus-visible:outline-accent">
            {n}
          </a>
        ))}
      </nav>
      <Magnetic>
        <a href="#contact" className="rounded-full border border-accent px-4 py-2 text-xs text-accent hover:bg-accent hover:text-bg">
          Let’s Connect
        </a>
      </Magnetic>
    </header>
  );
}
