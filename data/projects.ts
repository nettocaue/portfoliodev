export type Category = 'Dev' | 'Suporte & TI';
export type CardStyle = 'black' | 'white' | 'lime';

export interface Project {
  title: string;
  category: Category;
  status: string;
  link: string;
  cardStyle: CardStyle;
  description: string;
  stack: string;
  image?: string;
  repo?: string;
}

export const projects: Project[] = [
  {
    title: 'Overload — app de treinos',
    category: 'Dev',
    status: 'No ar',
    link: 'https://overloading.vercel.app/',
    cardStyle: 'black',
    description:
      'Registro de treinos e progressão de carga, pensado para o celular. Área de personal para gerenciar alunos, treinos e dietas, com assinatura via Mercado Pago.',
    stack: 'React · Supabase · Mercado Pago · Vercel',
    image: '/projetos/overload.png',
  },
  {
    title: 'Central de Ajuda Pixta.me',
    category: 'Suporte & TI',
    status: 'No ar',
    link: 'https://ajuda.pixta.me',
    cardStyle: 'white',
    description:
      'Transformei os assuntos que mais geravam tickets em artigos de autoatendimento, organizados pela jornada de quem compra e de quem produz eventos.',
    stack: 'Chatwoot · Base de conhecimento',
    image: '/projetos/central-de-ajuda.png',
  },
  {
    title: 'Interleigos — ferramentas de sim racing',
    category: 'Dev',
    status: 'No ar',
    link: 'https://interleigos.vercel.app/',
    cardStyle: 'lime',
    description:
      'Plataforma gratuita da comunidade de automobilismo virtual: calculadora de combustível, biblioteca de setups de ACC e gerador de estratégia de pit stop.',
    stack: 'Next.js · Tailwind · Supabase · Vercel',
    image: '/projetos/interleigos.png',
  },
  {
    title: 'Aposentadoria do FalleN',
    category: 'Dev',
    status: 'No ar',
    link: 'https://www.aposentadoriadofallen.com.br/',
    cardStyle: 'white',
    description:
      'Site-tributo de fã para o FalleN, ícone do CS brasileiro: contagem regressiva para a aposentadoria e retrospectiva da carreira.',
    stack: 'React · TypeScript · Vite · Tailwind',
    image: '/projetos/fallen.png',
    repo: 'https://github.com/nettobruno/professor-countdown-legacy',
  },
];
