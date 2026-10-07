# Prompt — Portfólio Cauê Netto (Versão B, guardada)

> Versão alternativa, clara e bold. Para usar, crie o projeto com o mesmo passo a passo da Versão A e cole tudo abaixo da linha no chat do Claude, no VS Code.

---

Você vai construir meu portfólio pessoal neste projeto Next.js (App Router + TypeScript + Tailwind CSS), que acabei de criar com `create-next-app`. O objetivo é ter um link profissional para mandar em entrevistas de emprego, tanto para vagas de **suporte/TI** quanto de **desenvolvimento**.

## Referência visual (siga com fidelidade)

O arquivo `docs/referencia/versao-b.html` é o layout aprovado. Abra e leia ele inteiro antes de começar. Ele é a fonte da verdade para cores, tipografia, espaçamentos, ordem das seções e **todos os textos** (copie exatamente).

O HTML usa estilos inline só porque é um protótipo. No projeto, converta tudo para **componentes React + classes Tailwind**.

## Identidade visual

- **Fundo:** off-white `#F3F2EC` · cartões brancos `#FFFFFF`
- **Tinta:** preto `#0E0E0E` · texto secundário `#3E3E3A`, `#6B6B66`
- **Destaque:** verde-limão `#D4F53C`, sempre com texto preto por cima (nunca texto limão sobre fundo claro)
- **Assinatura visual:** palavras destacadas dentro de caixas (preta ou limão) levemente rotacionadas; bordas pretas de 2px; cantos bem arredondados (24–36px); faixa limão inclinada com as habilidades
- **Fontes (via `next/font/google`):** Bricolage Grotesque (400/600/800) para tudo e JetBrains Mono para etiquetas e detalhes
- **Logo:** `c/n` em Bricolage 800, com a barra "/" numa plaquinha limão inclinada (`skewX(-12deg)`). Crie como componente `<Logo />` e gere também o favicon (`app/icon.svg`): barra limão sobre fundo preto.

## Estrutura

```
src/
  app/ layout.tsx, page.tsx, icon.svg, opengraph-image
  components/ Logo, Nav, Hero, SkillsBand, Stats, Projects ("use client", filtro), ProjectCard, About, Contact
  data/ projects.ts, site.ts
public/ projetos/, curriculo-caue-netto.pdf
```

## Projetos (`src/data/projects.ts`)

| Título | Categoria | Status | Link | Estilo do card |
|---|---|---|---|---|
| Overload — app de treinos | Dev | No ar | https://overloading.vercel.app/ | preto |
| Central de Ajuda Pixta.me | Suporte & TI | No ar | https://ajuda.pixta.me | branco |
| Interleigos — ferramentas de sim racing | Dev | No ar | https://interleigos.vercel.app/ | limão |
| Aposentadoria do FalleN | Dev | No ar | https://www.aposentadoriadofallen.com.br/ — repositório: https://github.com/nettobruno/professor-countdown-legacy | branco |

Descrições e stack estão no HTML de referência. Cada projeto tem campos opcionais `image` e `repo`; com `repo`, mostre um link extra "Código ↗". A stack do FalleN é **React · TypeScript · Vite · Tailwind**. Sem imagem, mostre o placeholder tracejado. Com imagem, use `next/image`. O filtro **Todos / Dev / Suporte & TI** precisa funcionar, com `aria-pressed`.

## Contato (`src/data/site.ts`)

- E-mail: `caue.netto123@gmail.com`
- LinkedIn: `https://www.linkedin.com/in/cau%C3%AA-netto-a40590265/`
- WhatsApp: `https://wa.me/5541996114665`
- GitHub: `https://github.com/nettocaue`
- Currículo: `/curriculo-caue-netto.pdf` (botão "Baixar currículo", com `download`)

## Animações (sutis)

- A faixa limão de habilidades rola horizontalmente em loop (marquee), devagar.
- Cards sobem 4px no hover; seções aparecem com fade ao entrar na tela.
- As caixas de destaque do título entram com uma pequena rotação ao carregar.
- Respeite `prefers-reduced-motion`.

## Requisitos de qualidade

- Responsivo de 360px a 1440px+, sem rolagem horizontal (cuidado com a faixa inclinada).
- Acessibilidade: semântica, foco visível, contraste AA, `alt` nas imagens.
- SEO: título "Cauê Netto — Suporte & Desenvolvimento Web", descrição, Open Graph, `lang="pt-BR"`.
- Sem bibliotecas de UI. `npm run build` sem erros.

## Como trabalhar comigo

1. Antes de escrever código, leia a referência e me mostre um plano curto.
2. Construa em etapas e me avise ao final de cada uma, para eu conferir no `npm run dev`.
3. **Não faça commit nem push sem eu pedir.**
4. No final, liste o que ficou pendente.
