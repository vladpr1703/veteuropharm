import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Container } from '@/components/Container';
import styles from './styles.module.scss';
import { categories } from './constants';

export const CategoriesSection = () => (
  <section className={styles.section} id="categories">
    <Container>
      <div className={styles.heading}>
        <div>
          <div className={styles.kicker}>Каталог</div>
          <h2>Категории препаратов</h2>
        </div>
        <p>
          Решения для профилактики и терапии заболеваний сельскохозяйственных
          животных. Поможем подобрать препарат под задачу вашего хозяйства.
        </p>
      </div>

      <div className={styles.grid}>
        {categories.map(({ icon: Icon, title, category }) => (
          <Link
            className={styles.card}
            href={{ pathname: '/catalog', query: { category } }}
            key={title}
          >
            <span className={styles.icon}>
              <Icon strokeWidth={1.6} aria-hidden="true" />
            </span>
            <span className={styles.content}>
              <h3>{title}</h3>
              <span className={styles.action}>
                Смотреть препараты
                <ArrowRight
                  className={styles.arrow}
                  size={17}
                  aria-hidden="true"
                />
              </span>
            </span>
          </Link>
        ))}
      </div>
    </Container>
  </section>
);
