import FadeIn from './FadeIn';

export default function Stats() {
  return (
    <section
      aria-label="Números"
      className="max-w-[1240px] mx-auto px-4 pt-28 pb-16 grid gap-5"
      style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}
    >
      <FadeIn>
        <div className="bg-white border-2 border-ink rounded-3xl p-8 flex flex-col gap-2">
          <span className="font-extrabold text-[72px] leading-none tracking-[-0.05em]">3.400+</span>
          <span className="text-[17px]">conversas de suporte atendidas</span>
        </div>
      </FadeIn>
      <FadeIn>
        <div className="bg-lime border-2 border-ink rounded-3xl p-8 flex flex-col gap-2">
          <span className="font-extrabold text-[72px] leading-none tracking-[-0.05em]">93%</span>
          <span className="text-[17px]">de taxa de resolução</span>
        </div>
      </FadeIn>
      <FadeIn>
        <div className="bg-ink text-cream border-2 border-ink rounded-3xl p-8 flex flex-col gap-2">
          <span className="font-extrabold text-[72px] leading-none tracking-[-0.05em]">4</span>
          <span className="text-[17px]">projetos no ar, de app com assinatura a site de comunidade</span>
        </div>
      </FadeIn>
    </section>
  );
}
