import Image from 'next/image';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { Container } from '@/components/Container';
import styles from './styles.module.scss';

export function Hero() {
  return (
    <section className={styles.hero}>
      <Image
        className={styles.image}
        src="/hero-vet.png"
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
            <a className={styles.primary} href="#products">
              Смотреть препараты <ArrowRight size={18} />
            </a>
            <a className={styles.secondary} href="#company">
              О компании
            </a>
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
      <div className={styles.index}>
        01 <span /> 04
      </div>
    </section>
  );
}
