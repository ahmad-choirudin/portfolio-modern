import { useRef, type ReactNode } from "react";

export default function Magnetic({ children, strength = 0.3 }: { children: ReactNode; strength?: number }) {
  const outer = useRef<HTMLSpanElement>(null);
  const inner = useRef<HTMLSpanElement>(null);
  const enabled =
    typeof matchMedia !== "undefined" &&
    matchMedia("(pointer: fine)").matches &&
    !matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (!enabled) return <>{children}</>;

  const move = (e: React.PointerEvent) => {
    const r = outer.current!.getBoundingClientRect();
    const x = (e.clientX - (r.left + r.width / 2)) * strength;
    const y = (e.clientY - (r.top + r.height / 2)) * strength;
    inner.current!.style.transform = `translate(${x}px, ${y}px)`;
  };
  const leave = () => { if (inner.current) inner.current.style.transform = ""; };

  return (
    <span ref={outer} className="-m-4 inline-block p-4" onPointerMove={move} onPointerLeave={leave}>
      <span ref={inner} className="magnetic-inner inline-block">{children}</span>
    </span>
  );
}
