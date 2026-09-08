import { Container } from "@/components/Container";
import styles from "./styles.module.scss";
import { advantages } from "./constants";

export const TrustStrip = () => (
  <section className={styles.strip} aria-label="Преимущества">
    <Container className={styles.grid}>
      {advantages.map(({ icon: Icon, title, text }) => (
        <div className={styles.item} key={title}>
          <Icon />
          <span>
            <strong>{title}</strong>
            {text}
          </span>
        </div>
      ))}
    </Container>
  </section>
);
