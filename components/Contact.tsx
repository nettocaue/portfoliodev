import FadeIn from './FadeIn';
import { site } from '@/data/site';

export default function Contact() {
  return (
    <section id="contato" className="max-w-[1240px] mx-auto px-4 pt-28 pb-10">
      <FadeIn>
        <div
          className="bg-lime border-2 border-ink rounded-[36px] flex flex-col gap-7"
          style={{ padding: 'clamp(32px, 6vw, 80px)' }}
        >
          <h2 className="m-0 font-extrabold text-[clamp(44px,7.4vw,110px)] tracking-[-0.05em] leading-[0.95]">
            Bora{' '}
            <span className="inline-block bg-ink text-lime px-[0.14em] rounded-[0.12em]">
              conversar?
            </span>
          </h2>
          <a
            href={`mailto:${site.email}`}
            className="font-semibold text-ink underline underline-offset-[6px]"
            style={{ fontSize: 'clamp(20px, 2.6vw, 32px)' }}
          >
            {site.email}
          </a>
          <div className="flex gap-[10px] flex-wrap">
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="no-underline bg-ink text-cream font-semibold text-[15px] px-[22px] py-[13px] rounded-full"
            >
              LinkedIn
            </a>
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              className="no-underline border-2 border-ink text-ink font-semibold text-[15px] px-5 py-[11px] rounded-full"
            >
              GitHub
            </a>
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="no-underline border-2 border-ink text-ink font-semibold text-[15px] px-5 py-[11px] rounded-full"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </FadeIn>

      <footer className="flex justify-between flex-wrap gap-3 pt-8 font-mono text-[13px] text-ink-faint">
        <span>© 2026 Cauê Netto</span>
        <span>Curitiba, PR</span>
      </footer>
    </section>
  );
}
