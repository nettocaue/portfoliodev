'use client';
import { useState } from 'react';
import { projects, type Category } from '@/data/projects';
import ProjectCard from './ProjectCard';
import FadeIn from './FadeIn';

type Filter = 'Todos' | Category;

const filters: { label: string; value: Filter }[] = [
  { label: 'Todos', value: 'Todos' },
  { label: 'Dev', value: 'Dev' },
  { label: 'Suporte & TI', value: 'Suporte & TI' },
];

export default function Projects() {
  const [active, setActive] = useState<Filter>('Todos');

  const visible =
    active === 'Todos' ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projetos" className="max-w-[1240px] mx-auto px-4 pt-16 pb-28 flex flex-col gap-10">
      <div className="flex justify-between items-end flex-wrap gap-5">
        <h2 className="m-0 font-extrabold text-[clamp(40px,6vw,80px)] tracking-[-0.045em] leading-none">
          Meus{' '}
          <span className="inline-block bg-ink text-lime px-[0.14em] rounded-[0.12em]">
            projetos
          </span>
        </h2>

        <div role="group" aria-label="Filtrar projetos" className="flex gap-2 flex-wrap">
          {filters.map((f) => {
            const on = active === f.value;
            return (
              <button
                key={f.value}
                type="button"
                aria-pressed={on}
                onClick={() => setActive(f.value)}
                className={`font-mono font-semibold text-sm min-h-[44px] px-[18px] py-[10px] rounded-full border-2 border-ink cursor-pointer transition-colors
                  ${on ? 'bg-ink text-cream' : 'bg-transparent text-ink hover:bg-ink/10'}`}
              >
                {f.label}
              </button>
            );
          })}
        </div>
      </div>

      <div
        className="grid gap-5"
        style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 520px), 1fr))' }}
      >
        {visible.map((project) => (
          <FadeIn key={project.title}>
            <ProjectCard project={project} />
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
