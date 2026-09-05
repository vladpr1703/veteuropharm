import Link from 'next/link';
import { Brand } from '@/components/Brand';
import { Container } from '@/components/Container';
import styles from './styles.module.scss';

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <Container className={styles.top}>
        <Brand variant="light" />
        <div>
          <strong>Продукция</strong>
          <Link href="/#products">Каталог препаратов</Link>
          <Link href="/#research">Материалы</Link>
          <Link href="/contacts">Где купить</Link>
        </div>
        <div>
          <strong>Компания</strong>
          <Link href="/#company">О компании</Link>
          <Link href="/#news">Новости</Link>
          <Link href="/contacts">Контакты</Link>
        </div>
        <div>
          <strong>Контакты</strong>
          <a href="tel:+79817215137">+7 (981) 721-51-37</a>
          <a href="mailto:info@veteuropharm.ru">info@veteuropharm.ru</a>
          <span>Московская область</span>
        </div>
      </Container>
      <Container className={styles.bottom}>
        <span>© 2026 ВетЕвроФарм</span>
        <span>Информация предназначена для ветеринарных специалистов</span>
        <a href="#top">Наверх ↑</a>
      </Container>
    </footer>
  );
}
