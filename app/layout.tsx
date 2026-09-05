import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'ВетЕвроФарм — ветеринарные препараты для молочных ферм',
  description:
    'Поставка ветеринарных препаратов для здоровья и продуктивности молочного стада.',
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
