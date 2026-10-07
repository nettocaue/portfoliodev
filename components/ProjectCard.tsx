import Image from 'next/image';
import type { Project } from '@/data/projects';

const styles = {
  black: {
    card: 'bg-ink text-cream',
    badge: 'bg-lime text-ink',
    status: 'border-card-dark text-ink-ghost',
    desc: 'text-[#C9C9C3]',
    stack: 'text-ink-ghost',
    link: 'text-lime',
    placeholder: 'border-card-dark text-ink-ghost',
  },
  white: {
    card: 'bg-white border-2 border-ink text-ink',
    badge: 'bg-ink text-cream',
    status: 'border-ink text-ink',
    desc: 'text-ink-muted',
    stack: 'text-ink-faint',
    link: 'text-ink',
    placeholder: 'border-[#B5B5AE] text-ink-faint',
  },
  lime: {
    card: 'bg-lime border-2 border-ink text-ink',
    badge: 'bg-ink text-lime',
    status: 'border-ink text-ink',
    desc: 'text-ink',
    stack: 'text-ink',
    link: 'text-ink font-semibold',
    placeholder: 'border-ink text-ink',
  },
} as const;

export default function ProjectCard({ project }: { project: Project }) {
  const s = styles[project.cardStyle];

  return (
    <article
      className={`${s.card} rounded-[28px] p-7 flex flex-col gap-[18px] transition-transform duration-200 hover:-translate-y-1`}
    >
      {project.image ? (
        <div className="relative h-60 rounded-[18px] overflow-hidden">
          <Image
            src={project.image}
            alt={`Screenshot do projeto ${project.title}`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 520px"
          />
        </div>
      ) : (
        <div
          className={`h-60 rounded-[18px] border border-dashed ${s.placeholder} flex items-center justify-center font-mono text-[13px]`}
        >
          [sem imagem]
        </div>
      )}

      <div className="flex gap-2 flex-wrap">
        <span className={`${s.badge} font-semibold text-[13px] px-3 py-[6px] rounded-full`}>
          {project.category}
        </span>
        <span className={`border ${s.status} text-[13px] px-3 py-[5px] rounded-full`}>
          {project.status}
        </span>
      </div>

      <h3 className="m-0 font-extrabold text-[34px] tracking-[-0.03em] leading-[1.05]">
        {project.title}
      </h3>

      <p className={`m-0 text-base leading-relaxed ${s.desc}`}>{project.description}</p>

      <div className="flex justify-between items-center gap-3 flex-wrap mt-auto">
        <span className={`font-mono text-[13px] ${s.stack}`}>{project.stack}</span>
        <div className="flex gap-4">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`font-semibold ${s.link}`}
          >
            Abrir ↗
          </a>
          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className={`font-semibold ${s.link}`}
            >
              Código ↗
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
