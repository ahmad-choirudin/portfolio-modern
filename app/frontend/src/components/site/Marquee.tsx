const tools = [
  "React", "Vite", "Tailwind CSS", "TypeScript", "JavaScript", "Python",
  "Solidity", "Foundry", "Rust", "Cairo", "Avalanche", "BNB Chain", "Starknet", "Solana",
];

export default function Marquee() {
  const row = (hidden: boolean) => (
    <ul className="flex shrink-0 items-center gap-8 pr-8" aria-hidden={hidden}>
      {tools.map((t) => (
        <li key={t} className="flex items-center gap-8 whitespace-nowrap text-sm text-zinc-400">
          <span>{t}</span>
          <span className="text-lime-400/60" aria-hidden="true">✳</span>
        </li>
      ))}
    </ul>
  );
  return (
    <div
      className="marquee overflow-hidden border-y border-white/10 py-5 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
      aria-label="Tools and ecosystems I work with"
    >
      <div className="marquee-track flex w-max">
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}
