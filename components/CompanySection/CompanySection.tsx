import { ArrowRight, CheckCircle2, FlaskConical } from 'lucide-react';
import Link from 'next/link';
import { Container } from '@/components/Container';
import styles from './styles.module.scss';

export const CompanySection = () => (
  <section className={styles.company} id="company">
    <Container className={styles.grid}>
      <div className={styles.visual}>
        <div className={styles['year-card']}>
          <div className={styles['year-label']}>
            <FlaskConical />
            <span>Опыт и надёжность</span>
          </div>
          <strong>
            <small>с</small> 2013
          </strong>
          <p>
            Поставляем ветеринарные препараты для сельскохозяйственных
            предприятий
          </p>
        </div>
        <div className={styles['visual-facts']}>
          <div>
            <CheckCircle2 />
            <span>Прямые поставки</span>
          </div>
          <div>
            <CheckCircle2 />
            <span>Подбор под задачу</span>
          </div>
        </div>
      </div>
      <div className={styles.copy}>
        <div className={styles.kicker}>Коротко о компании</div>
        <h2>Надёжный поставщик ветеринарных препаратов</h2>
        <p className={styles.lead}>
          Работаем для здоровья животных и устойчивой продуктивности
          сельскохозяйственных предприятий.
        </p>
        <p>
          Мы поставляем продукцию ведущих белорусских производителей и помогаем
          подобрать препараты с учётом задач ветеринарных специалистов,
          фермерских хозяйств и агрохолдингов.
        </p>
        <ul>
          <li>
            <CheckCircle2 />
            Широкий ассортимент ветеринарных препаратов
          </li>
          <li>
            <CheckCircle2 />
            Продукция проверенных белорусских производителей
          </li>
          <li>
            <CheckCircle2 />
            Помощь в подборе препаратов под задачи хозяйства
          </li>
        </ul>
        <Link className={styles.button} href="/about">
          Узнать больше <ArrowRight size={18} />
        </Link>
      </div>
    </Container>
  </section>
);
