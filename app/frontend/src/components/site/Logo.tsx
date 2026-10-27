export default function Logo({ className = "h-6 w-6" }: { className?: string }) {
  const mask = "url(/logo.png) center / contain no-repeat";
  return (
    <span
      aria-hidden="true"
      className={`inline-block shrink-0 bg-accent ${className}`}
      style={{ WebkitMask: mask, mask }}
    />
  );
}
