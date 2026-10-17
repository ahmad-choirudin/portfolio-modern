import SiteNav from "@/components/site/SiteNav";
import Hero from "@/components/site/Hero";
import SelectWork from "@/components/site/SelectWork";
import Introduction from "@/components/site/Introduction";
import Expertise from "@/components/site/Expertise";
import Certificate from "@/components/site/Certificate";
import Contact from "@/components/site/Contact";
import CursorLayer from "@/components/site/CursorLayer";
import SiteFooter from "@/components/site/SiteFooter";
export default function Index() {
  return (<><CursorLayer /><SiteNav /><main><Hero /><SelectWork /><Introduction /><Expertise /><Certificate /><Contact /></main><SiteFooter /></>);
}
