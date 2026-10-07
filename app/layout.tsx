import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Bricolage_Grotesque, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-bricolage',
  weight: ['400', '600', '800'],
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  weight: ['400', '600'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Cauê Netto — Suporte & Desenvolvimento Web',
  description:
    'Portfólio de Cauê Netto: três anos de suporte técnico na Pixta.me e projetos próprios em React, Next.js e Supabase. Curitiba, PR.',
  openGraph: {
    title: 'Cauê Netto — Suporte & Desenvolvimento Web',
    description:
      'Portfólio de Cauê Netto: três anos de suporte técnico na Pixta.me e projetos próprios em React, Next.js e Supabase.',
    locale: 'pt_BR',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" className={`${bricolage.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-cream text-ink antialiased">{children}</body>
    </html>
  );
}
