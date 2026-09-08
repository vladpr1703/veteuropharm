import { ArrowRight } from "lucide-react";
import { Container } from "@/components/Container";
import styles from "./styles.module.scss";
import { categories } from "./constants";

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
        {categories.map(({ icon: Icon, title }, index) => (
          <article className={styles.card} key={title}>
            <span className={styles.number}>
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className={styles.icon}>
              <Icon strokeWidth={1.6} aria-hidden="true" />
            </span>
            <h3>{title}</h3>
            <span className={styles.action}>
              Подобрать <ArrowRight size={17} />
            </span>
          </article>
        ))}
      </div>
    </Container>
  </section>
);
