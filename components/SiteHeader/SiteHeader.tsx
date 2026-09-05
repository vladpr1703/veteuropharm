import Link from 'next/link';
import { ArrowRight, Menu } from 'lucide-react';
import { Brand } from '@/components/Brand';
import { Container } from '@/components/Container';
import styles from './styles.module.scss';

export function SiteHeader() {
  return (
    <>
      <div className={styles.topline}>
        <Container className={styles.toplineInner}>
          <span>Поставка ветеринарных препаратов для сельского хозяйства</span>
          <a href="tel:+79817215137">+7 (981) 721-51-37</a>
        </Container>
      </div>
      <header className={styles.header}>
        <Container className={styles.inner}>
          <Brand />
          <nav aria-label="Основная навигация">
            <Link href="/#products">Препараты</Link>
            <Link href="/#company">О компании</Link>
            <Link href="/#research">Полезные материалы</Link>
            <Link href="/#news">Материалы</Link>
            <Link href="/contacts">Контакты</Link>
          </nav>
          <Link className={styles.cta} href="/contacts">
            Где купить <ArrowRight size={16} />
          </Link>
          <button className={styles.menu} aria-label="Открыть меню">
            <Menu />
          </button>
        </Container>
      </header>
    </>
  );
}
