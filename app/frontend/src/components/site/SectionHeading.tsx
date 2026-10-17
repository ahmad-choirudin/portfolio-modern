export default function SectionHeading({ id, title, note }: { id: string; title: string; note?: string }) {
  return (
    <div id={id} className="scroll-mt-20">
      <h2 className="text-4xl font-semibold tracking-tight">{title}</h2>
      {note && <p className="mt-3 max-w-xs text-sm text-white/60">{note}</p>}
    </div>
  );
}
