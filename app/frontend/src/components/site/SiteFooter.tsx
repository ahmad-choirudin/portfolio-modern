import { site } from "@/data/site";
export default function SiteFooter() {
  return (
    <footer className="flex items-center justify-between border-t border-white/10 px-6 py-5 text-xs text-white/60 md:px-14">
      <span><span className="text-accent">✳</span> {site.name}</span>
      <span>Web3 / Frontend / Community / AI</span>
    </footer>
  );
}
