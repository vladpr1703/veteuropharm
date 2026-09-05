import Link from 'next/link';
import styles from './styles.module.scss';

type BrandProps = {
  variant?: 'default' | 'light';
};

export function Brand({ variant = 'default' }: BrandProps) {
  return (
    <Link
      className={`${styles.brand} ${variant === 'light' ? styles.light : ''}`}
      href="/"
      aria-label="ВетЕвроФарм — на главную"
    >
      <span className={styles.mark}>
        <svg viewBox="0 0 52 52" aria-hidden="true">
          <path d="M8 9c3.8-2.3 8.7-1 11 2.8l13.7 23.1a8 8 0 0 1-13.8 8.1L5.2 20A8 8 0 0 1 8 9Z" />
          <path d="M38.7 7.1c4.5-1.6 8.5 2.8 6.5 7.1l-6.4 13.6a5.4 5.4 0 0 1-9.9-4.2l5-13.7a5 5 0 0 1 4.8-2.8Z" />
          <circle cx="42.5" cy="35.5" r="5.5" />
        </svg>
      </span>
      <span className={styles.copy}>
        <strong>
          <span className={styles.accent}>Вет</span>
          <span>Евро</span>
          <span className={styles.accent}>Фарм</span>
        </strong>
        <small>поставщик ветеринарных препаратов</small>
      </span>
    </Link>
  );
}
