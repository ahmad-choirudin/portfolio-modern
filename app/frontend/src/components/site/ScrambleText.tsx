import { useEffect, useRef, useState } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789#$%&*+<>";

export default function ScrambleText({ text, className }: { text: string; className?: string }) {
  const [out, setOut] = useState(text);
  const raf = useRef(0);

  const run = () => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    cancelAnimationFrame(raf.current);
    const start = performance.now();
    const step = (now: number) => {
      const t = Math.min(1, (now - start) / 900);
      const reveal = Math.floor(t * text.length);
      setOut(
        text.split("").map((ch, i) =>
          ch === " " || i < reveal ? ch : CHARS[Math.floor(Math.random() * CHARS.length)]
        ).join("")
      );
      if (t < 1) raf.current = requestAnimationFrame(step);
      else setOut(text);
    };
    raf.current = requestAnimationFrame(step);
  };

  useEffect(() => {
    run();
    return () => cancelAnimationFrame(raf.current);
  }, [text]);

  return (
    <span className={className} onPointerEnter={run}>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">{out}</span>
    </span>
  );
}
