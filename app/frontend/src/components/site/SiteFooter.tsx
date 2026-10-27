import { site } from "@/data/site";
import Logo from "./Logo";

export default function SiteFooter() {
  return (
    <footer className="flex items-center justify-between border-t border-white/10 px-6 py-5 text-xs text-white/60 md:px-14">
      <span className="flex items-center gap-2">
        <Logo className="h-4 w-4" />
        {site.name}
      </span>
      <span>Web3 / Frontend / Community / AI</span>
    </footer>
  );
}
