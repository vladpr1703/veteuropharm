import { ArrowRight, ChevronRight } from 'lucide-react';
import { Container } from '@/components/Container';
import type { Product } from './types';
import styles from './styles.module.scss';

const products: Product[] = [
  {
    name: 'Лоперавет',
    description: 'Остановит диарею у телят. Быстро и эффективно.',
    tag: 'Новинка',
    tone: 'aqua',
    code: 'LV',
  },
  {
    name: 'Эмбриостим',
    description: 'Повышение эффективности оплодотворения',
    tag: 'Новинка',
    tone: 'blue',
    code: 'EM',
  },
  {
    name: 'Кордиамин-Вет',
    description: 'Аналептическое средство экстренного действия',
    tag: 'Новинка',
    tone: 'orange',
    code: 'KV',
  },
  {
    name: 'Амино-Solvo',
    description: 'Гипертонический аминокислотно-солевой раствор',
    tag: 'Новинка',
    tone: 'lime',
    code: 'AS',
  },
  {
    name: 'Бутамакс — 200',
    description: 'Стимулятор обмена веществ',
    tag: 'Выбор специалистов',
    tone: 'violet',
    code: 'B2',
  },
  {
    name: 'Дротаверин-вет',
    description: 'Универсальный спазмолитик',
    tag: 'Новинка',
    tone: 'sky',
    code: 'DV',
  },
  {
    name: 'Веткетал',
    description: 'Нестероидный противовоспалительный препарат',
    tone: 'coral',
    code: 'VK',
  },
  {
    name: 'Мастинол-Форте',
    description: 'Лечение маститов различной этиологии',
    tag: 'Лидер продаж',
    tone: 'teal',
    code: 'MF',
  },
];

export function ProductsSection() {
  return (
    <section className={styles.section} id="products">
      <Container>
        <div className={styles.heading}>
          <div>
            <div className={styles.kicker}>Каталог</div>
            <h2>
              Препараты для врачей
              <br />
              молочных ферм
            </h2>
          </div>
          <p>
            Решения для ключевых задач ветеринарного специалиста — от
            профилактики до терапии.
          </p>
          <a href="#products">
            Весь каталог <ArrowRight size={17} />
          </a>
        </div>
        <div className={styles.grid}>
          {products.map((product, index) => (
            <article className={styles.card} key={product.name}>
              <div className={`${styles.visual} ${styles[product.tone]}`}>
                <span className={styles.code}>{product.code}</span>
                <span className={`${styles.molecule} ${styles.m1}`} />
                <span className={`${styles.molecule} ${styles.m2}`} />
                <span className={styles.pack}>
                  <b>VETERINARY</b>
                  <i>{product.name}</i>
                  <small>ветеринарный препарат</small>
                </span>
                <span className={styles.count}>
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>
              <div className={styles.info}>
                {product.tag && (
                  <span className={styles.tag}>{product.tag}</span>
                )}
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <a href="#contacts" aria-label={`Подробнее: ${product.name}`}>
                  Подробнее <ChevronRight size={17} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
