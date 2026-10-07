import FadeIn from './FadeIn';

const timeline = [
  { role: 'Suporte ao Cliente · Pixta.me', period: '2023 — hoje' },
  { role: 'Técnico em Informática · Etec', period: '2024 — 2025' },
  { role: 'Programa Desenvolve · Grupo Boticário', period: 'Formação' },
  { role: 'Vendas, laboratório e expedição', period: '2020 — 2023' },
];

export default function About() {
  return (
    <section id="sobre" className="bg-ink text-cream py-28 px-4">
      <div className="max-w-[1240px] mx-auto flex flex-wrap gap-14">
        <FadeIn className="flex-[1_1_420px]">
          <h2 className="m-0 font-extrabold text-[clamp(36px,4.6vw,60px)] tracking-[-0.04em] leading-[1.02]">
            Fico entre{' '}
            <span className="text-lime">quem usa</span>{' '}
            e quem constrói.
          </h2>
        </FadeIn>

        <FadeIn className="flex-[1_1_420px] flex flex-col gap-7">
          <p className="m-0 text-lg leading-[1.65] text-[#C9C9C3]">
            Técnico em informática, no suporte da Pixta.me desde 2023. Atendo usuários, analiso
            tickets, mantenho a central de ajuda e levo o que se repete para o time de
            desenvolvimento. Fora do expediente, construo meus próprios apps — com IA no fluxo e
            sabendo explicar cada decisão.
          </p>
          <div className="flex flex-col border-t border-sep">
            {timeline.map((item) => (
              <div
                key={item.role}
                className="flex justify-between gap-4 flex-wrap py-4 border-b border-sep"
              >
                <strong className="font-semibold">{item.role}</strong>
                <span className="font-mono text-[13px] text-ink-ghost">{item.period}</span>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
