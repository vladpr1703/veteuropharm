import { ArrowRight, CheckCircle2, FlaskConical } from 'lucide-react';
import { Container } from '@/components/Container';
import styles from './styles.module.scss';

export function CompanySection() {
  return (
    <section className={styles.company} id="company">
      <Container className={styles.grid}>
        <div className={styles.visual}>
          <div className={styles.labCard}>
            <FlaskConical />
            <strong>С 2013 года</strong>
            <span>на рынке ветеринарных препаратов</span>
          </div>
          <div className={`${styles.orbit} ${styles.o1}`} />
          <div className={`${styles.orbit} ${styles.o2}`} />
          <span className={styles.vertical}>SUPPLY / CARE / RESULT</span>
        </div>
        <div className={styles.copy}>
          <div className={styles.kicker}>Коротко о компании</div>
          <h2>Надёжный поставщик ветеринарных препаратов</h2>
          <p className={styles.lead}>
            Работаем для здоровья животных и устойчивой продуктивности
            сельскохозяйственных предприятий.
          </p>
          <p>
            Мы поставляем продукцию ведущих белорусских производителей и
            помогаем подобрать препараты с учётом задач ветеринарных
            специалистов, фермерских хозяйств и агрохолдингов.
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
          <a className={styles.button} href="#research">
            Узнать больше <ArrowRight size={18} />
          </a>
        </div>
      </Container>
    </section>
  );
}
