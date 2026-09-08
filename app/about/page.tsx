import Image from 'next/image';
import { Award, FileSignature, ShieldCheck } from 'lucide-react';
import { Container } from '@/components/Container';
import { SiteFooter } from '@/components/SiteFooter';
import { SiteHeader } from '@/components/SiteHeader';
import consultationImage from '@/public/about-consultation.png';
import aboutHero from '@/public/about-hero.png';
import licenseImage from '@/public/vet-license-1.jpg';
import { benefits, steps } from './constants';
import styles from './styles.module.scss';

export default function AboutPage() {
  return (
    <main id="top">
      <SiteHeader />
      <section className={styles.hero}>
        <Image
          className={styles['hero-image']}
          src={aboutHero}
          alt="Коровы на пастбище"
          fill
          priority
          sizes="100vw"
        />
        <div className={styles['hero-shade']} />
        <Container className={styles['hero-inner']}>
          <span>Работаем для здоровья животных</span>
          <h1>О компании</h1>
          <p>
            Надёжные поставки ветеринарных препаратов для устойчивого развития
            хозяйств.
          </p>
        </Container>
      </section>
      <section className={styles.story}>
        <Container className={styles['story-grid']}>
          <div className={styles['story-heading']}>
            <span>ВетЕвроФарм</span>
            <h2>Ваш надёжный партнёр с 2013 года</h2>
          </div>
          <div className={styles['story-copy']}>
            <p>
              <strong>ВетЕвроФарм</strong> — поставщик ветеринарных препаратов
              для здоровья животных. Мы зарекомендовали себя как ответственный
              партнёр для фермерских хозяйств и агрохолдингов.
            </p>
            <p>
              <strong>Наша задача</strong> — обеспечить хозяйства эффективными
              решениями для крупного рогатого скота, свиней и птицы, которые
              отвечают высоким требованиям безопасности.
            </p>
            <p>
              <strong>Наша миссия</strong> — делать качественные ветеринарные
              препараты доступными предприятиям любого масштаба.
            </p>
          </div>
        </Container>
      </section>
      <section className={styles.benefits}>
        <Container>
          <div className={styles['section-heading']}>
            <span>Почему мы</span>
            <h2>Всё необходимое для здоровья животных</h2>
          </div>
          <div className={styles['benefit-grid']}>
            {benefits.map(({ icon: Icon, title, text }) => (
              <article key={title}>
                <div className={styles.icon}>
                  <Icon />
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>
      <section className={styles.process}>
        <Container>
          <div className={styles['section-heading']}>
            <span>Простой процесс</span>
            <h2>Этапы сотрудничества</h2>
          </div>
          <div className={styles.steps}>
            {steps.map(({ icon: Icon, title, text }, index) => (
              <article key={title}>
                <span className={styles['step-number']}>{index + 1}</span>
                <Icon />
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>
      <section className={styles.consultation}>
        <Image
          className={styles['consult-image']}
          src={consultationImage}
          alt="Сельскохозяйственные животные"
          fill
          sizes="100vw"
        />
        <div className={styles['consult-shade']} />
        <Container className={styles['consult-inner']}>
          <span>Поможем с выбором</span>
          <h2>Нужна консультация специалиста?</h2>
          <p>Оставьте заявку — мы перезвоним и ответим на ваши вопросы.</p>
          <form
            action="mailto:info@veteuropharm.ru"
            method="post"
            encType="text/plain"
          >
            <input name="name" placeholder="Имя" autoComplete="name" />
            <input
              name="phone"
              type="tel"
              placeholder="Телефон"
              autoComplete="tel"
              required
            />
            <input name="animal" placeholder="Животное" />
            <textarea name="message" placeholder="Комментарий" rows={3} />
            <button type="submit">Отправить заявку</button>
          </form>
        </Container>
      </section>
      <section className={styles.licenses}>
        <Container>
          <div className={styles['section-heading']}>
            <span>Гарантия качества</span>
            <h2>Документы и лицензии</h2>
          </div>
          <a
            className={styles['license-preview']}
            href={licenseImage.src}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Открыть лицензию в полном размере"
          >
            <Image
              src={licenseImage}
              alt="Лицензия на осуществление фармацевтической деятельности"
              width={600}
              height={856}
              sizes="(max-width: 600px) 82vw, 360px"
            />
            <span>Открыть в полном размере</span>
          </a>
          <div className={styles['license-grid']}>
            <article>
              <ShieldCheck />
              <strong>Сертифицированная продукция</strong>
              <p>Документы предоставляются вместе с поставкой.</p>
            </article>
            <article>
              <Award />
              <strong>Проверенные производители</strong>
              <p>Работаем с надёжными предприятиями отрасли.</p>
            </article>
            <article>
              <FileSignature />
              <strong>Прозрачные условия</strong>
              <p>Закрепляем договорённости и сроки в договоре.</p>
            </article>
          </div>
        </Container>
      </section>
      <SiteFooter />
    </main>
  );
}
