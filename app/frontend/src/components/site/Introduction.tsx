import { site } from "@/data/site";
import SectionHeading from "./SectionHeading";
export default function Introduction() {
  return (
    <section className="grid gap-10 border-t border-white/10 px-6 py-16 md:grid-cols-3 md:px-14">
      <div data-reveal>
        <SectionHeading id="about" title="About Me" />
        <p className="mt-5 text-sm text-white/75">I’m <b>Ahmad Choirudin</b>, a digital professional from Indonesia. I’m curious about how technology, communities, and people connect — especially in the Web3 space.</p>
        <p className="mt-4 text-sm text-white/75">I enjoy exploring new tools, learning from real-world projects, and building things that create value, even in small ways.</p>
      </div>
      <img data-reveal src={site.aboutImage} alt="Portrait of Ahmad Choirudin" className="aspect-[4/5] w-full rounded object-cover grayscale" />
      <blockquote data-reveal className="self-start rounded border border-white/10 bg-card p-6 text-sm text-white/80">I work remotely, prefer flexible environments, and focus on meaningful projects in the Web3, tech, and digital community space.</blockquote>
    </section>
  );
}
