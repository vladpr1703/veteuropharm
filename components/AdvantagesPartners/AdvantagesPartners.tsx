import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@/components/Container';
import animalsImage from '@/public/home-advantages-animals.png';
import styles from './styles.module.scss';
import { advantages, partners } from './constants';

export const AdvantagesPartners = () => (
  <section className={styles.section}>
    <Container>
      <div className={styles.top}>
        <div className={styles.advantages}>
          <span className={styles.kicker}>Почему выбирают нас</span>
          <h2>Наши преимущества</h2>
          <div className={styles['advantage-grid']}>
            {advantages.map(({ icon: Icon, title }) => (
              <article key={title}>
                <span className={styles.icon}>
                  <Icon />
                </span>
                <h3>{title}</h3>
              </article>
            ))}
          </div>
        </div>
        <div className={styles.visual}>
          <div className={styles.animals}>
            <Image
              src={animalsImage}
              alt="Сельскохозяйственные животные"
              fill
              sizes="(max-width: 800px) 100vw, 48vw"
            />
          </div>
          <div className={styles.experience}>
            <strong>
              10<sup>+</sup>
            </strong>
            <span>лет опыта работы</span>
          </div>
        </div>
      </div>
      <div className={styles.partners}>
        <div className={styles['partner-heading']}>
          <div>
            <span className={styles.kicker}>Сотрудничаем напрямую</span>
            <h2>Наши партнёры</h2>
          </div>
          <Link href="/partners">Все партнёры →</Link>
        </div>
        <div className={styles['partner-grid']}>
          {partners.map(({ src, alt, wide }) => (
            <Link
              href="/partners"
              className={`${styles.partner} ${wide ? styles.wide : ''}`}
              key={alt}
              aria-label={alt}
            >
              <Image src={src} alt={alt} width={220} height={110} />
            </Link>
          ))}
        </div>
      </div>
    </Container>
  </section>
);
