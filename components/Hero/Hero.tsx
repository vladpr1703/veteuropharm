import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { Container } from "@/components/Container";
import heroVet from "@/public/hero-vet.png";
import styles from "./styles.module.scss";

export const Hero = () => (
  <section className={styles.hero}>
    <Image
      className={styles.image}
      src={heroVet}
      alt="Ветеринар осматривает корову на современной молочной ферме"
      fill
      priority
      sizes="100vw"
    />
    <div className={styles.wash} />
    <Container className={styles.inner}>
      <div className={styles.copy}>
        <div className={styles.eyebrow}>
          <span />
          Ветеринарные препараты для ферм
        </div>
        <h1>
          Здоровье стада.
          <br />
          <em>В основе — результат.</em>
        </h1>
        <p>
          Поставляем ветеринарные препараты и помогаем подобрать решения для
          здоровья и продуктивности молочного стада.
        </p>
        <div className={styles.actions}>
          <a className={styles.primary}>
            Смотреть препараты <ArrowRight size={18} />
          </a>
          <Link className={styles.secondary} href="/about">
            О компании
          </Link>
        </div>
        <div className={styles.proof}>
          <ShieldCheck size={22} />
          <span>
            <strong>Проверенные производители</strong>Контроль качества
            поставляемой продукции
          </span>
        </div>
      </div>
    </Container>
  </section>
);
