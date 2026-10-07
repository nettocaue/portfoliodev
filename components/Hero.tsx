export default function Hero() {
  return (
    <section
      id="topo"
      className="max-w-[1240px] mx-auto px-4 pt-[72px] pb-24 flex flex-col gap-9"
    >
      <span className="font-mono text-sm inline-flex gap-[10px] items-center">
        <span className="w-[10px] h-[10px] bg-ink rounded-full shrink-0" aria-hidden="true" />
        CAUÊ NETTO — SUPORTE &amp; DEV — CURITIBA
      </span>

      <h1 className="m-0 font-extrabold text-[clamp(44px,8vw,120px)] leading-[0.98] tracking-[-0.045em]">
        Suporte que entende{' '}
        <span
          className="inline-block bg-ink text-cream px-[0.16em] rounded-[0.14em]"
          style={{ transform: 'rotate(-1.5deg)' }}
        >
          código
        </span>
        .<br />
        Código que entende{' '}
        <span
          className="inline-block bg-lime text-ink px-[0.16em] rounded-[0.14em]"
          style={{ transform: 'rotate(1.2deg)' }}
        >
          gente
        </span>
        .
      </h1>

      <div className="flex flex-wrap gap-8 items-end justify-between">
        <p className="m-0 max-w-[540px] text-xl leading-relaxed">
          Três anos atendendo clientes de uma plataforma de ingressos e construindo meus próprios
          apps no tempo livre. Eu sei onde o usuário trava — e sei abrir o editor pra resolver.
        </p>
        <div className="flex gap-3 flex-wrap">
          <a
            href="#projetos"
            className="no-underline bg-ink text-cream font-semibold text-base px-[26px] py-4 rounded-full"
          >
            Ver projetos →
          </a>
          <a
            href="#contato"
            className="no-underline border-2 border-ink text-ink font-semibold text-base px-6 py-[14px] rounded-full"
          >
            Contato
          </a>
        </div>
      </div>
    </section>
  );
}
