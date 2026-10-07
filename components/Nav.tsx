import Link from 'next/link';
import Logo from './Logo';
import { site } from '@/data/site';

export default function Nav() {
  return (
    <header className="max-w-[1240px] mx-auto px-4 py-6 flex items-center justify-between gap-4 flex-wrap">
      <Link href="#topo" aria-label="Início" className="no-underline">
        <Logo />
      </Link>
      <nav aria-label="Principal" className="flex items-center gap-1 flex-wrap">
        <Link
          href="#projetos"
          className="hidden sm:inline text-ink no-underline text-[15px] font-semibold px-3 py-[10px] hover:underline hover:underline-offset-4"
        >
          Projetos
        </Link>
        <Link
          href="#sobre"
          className="hidden sm:inline text-ink no-underline text-[15px] font-semibold px-3 py-[10px] hover:underline hover:underline-offset-4"
        >
          Sobre
        </Link>
        <Link
          href="#contato"
          className="hidden sm:inline text-ink no-underline text-[15px] font-semibold px-3 py-[10px] hover:underline hover:underline-offset-4"
        >
          Contato
        </Link>
        <a
          href={site.curriculo}
          download="curriculo-caue-netto.pdf"
          className="ml-2 bg-ink text-lime font-semibold text-[15px] px-5 py-3 rounded-full no-underline"
        >
          Baixar currículo
        </a>
      </nav>
    </header>
  );
}
