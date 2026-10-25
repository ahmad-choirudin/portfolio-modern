import SiteNav from "@/components/site/SiteNav";
import Hero from "@/components/site/Hero";
import Marquee from "@/components/site/Marquee";
import StatsCounter from "@/components/site/StatsCounter";
import SelectWork from "@/components/site/SelectWork";
import Introduction from "@/components/site/Introduction";
import Timeline from "@/components/site/Timeline";
import Expertise from "@/components/site/Expertise";
import Certificate from "@/components/site/Certificate";
import Contact from "@/components/site/Contact";
import CursorLayer from "@/components/site/CursorLayer";
import SiteFooter from "@/components/site/SiteFooter";

export default function Index() {
  return (
    <>
      <CursorLayer />
      <SiteNav />
      <main>
        <Hero />
        <Marquee />
        <StatsCounter />
        <SelectWork />
        <Introduction />
        <Timeline />
        <Expertise />
        <Certificate />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
