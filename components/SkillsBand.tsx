const skills = ['Atendimento', 'JavaScript', 'React', 'Supabase', 'Service Desk', 'Linux', 'API REST'];

export default function SkillsBand() {
  const items = skills.flatMap((s) => [s, '✱']);
  const doubled = [...items, ...items];

  return (
    <div
      aria-hidden="true"
      className="bg-lime border-y-2 border-ink py-[18px] overflow-hidden"
      style={{ transform: 'rotate(-1deg)', margin: '0 -40px' }}
    >
      <div
        className="flex gap-8 animate-marquee"
        style={{ width: 'max-content' }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            className="font-extrabold text-[22px] tracking-[-0.02em] shrink-0 text-ink"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
