import Image from 'next/image';
import { Phone } from 'lucide-react';
import { Container } from '@/components/Container';
import { SiteFooter } from '@/components/SiteFooter';
import { SiteHeader } from '@/components/SiteHeader';
import heroVet from '@/public/hero-vet.png';
import styles from './styles.module.scss';
import { contacts } from './constants';

export default function ContactsPage() {
  return (
    <main id="top">
      <SiteHeader />
      <section className={styles.hero}>
        <Image
          className={styles['hero-image']}
          src={heroVet}
          alt="Ветеринарный специалист на ферме"
          fill
          priority
          sizes="100vw"
        />
        <div className={styles.overlay} />
        <Container className={styles['hero-inner']}>
          <span className={styles.kicker}>Всегда на связи</span>
          <h1>Контакты</h1>
          <p>
            Свяжитесь с нами удобным способом — ответим на вопросы и поможем
            подобрать препараты.
          </p>
        </Container>
      </section>

      <section
        className={styles['contact-band']}
        aria-label="Контактные данные"
      >
        <Container className={styles['contact-grid']}>
          <div className={`${styles['contact-item']} ${styles.primary}`}>
            <span className={styles['contact-icon']}>
              <Phone />
            </span>
            <span className={styles['contact-copy']}>
              <small>Отдел продаж</small>
              <span className={styles['phone-list']}>
                <a href="tel:+79817215137">+7 (981) 721-51-37</a>
                <a href="tel:+79081437603">+7 (908) 143-76-03</a>
                <a href="tel:+79261197895">+7 (926) 119-78-95</a>
              </span>
            </span>
          </div>
          {contacts.map(
            ({ title, label, href, icon: Icon, external, kind }) => (
              <a
                className={`${styles['contact-item']} ${styles[kind]}`}
                href={href}
                key={label}
                target={external ? '_blank' : undefined}
                rel={external ? 'noreferrer' : undefined}
              >
                <span className={styles['contact-icon']}>
                  <Icon />
                </span>
                <span className={styles['contact-copy']}>
                  <small>{title}</small>
                  <strong>{label}</strong>
                </span>
              </a>
            ),
          )}
        </Container>
      </section>

      <section className={styles.consultation}>
        <Container>
          <div className={styles.heading}>
            <span className={styles.kicker}>Задайте вопрос</span>
            <h2>Консультация специалиста</h2>
            <p>
              Оставьте заявку — наш специалист перезвонит и ответит на все
              интересующие вопросы.
            </p>
          </div>
          <form
            className={styles.form}
            action="mailto:info@veteuropharm.ru"
            method="post"
            encType="text/plain"
          >
            <div className={styles.fields}>
              <label>
                <span>Имя</span>
                <input name="name" placeholder="Ваше имя" autoComplete="name" />
              </label>
              <label>
                <span>Телефон</span>
                <input
                  name="phone"
                  type="tel"
                  placeholder="+7 (___) ___-__-__"
                  autoComplete="tel"
                  required
                />
              </label>
              <label>
                <span>Животное</span>
                <input name="animal" placeholder="Например, КРС" />
              </label>
              <label className={styles.message}>
                <span>Комментарий</span>
                <textarea
                  name="message"
                  placeholder="Расскажите, чем мы можем помочь"
                  rows={4}
                />
              </label>
            </div>
            <button type="submit">Отправить заявку</button>
            <small>
              Отправляя форму, вы соглашаетесь на обработку персональных данных.
            </small>
          </form>
        </Container>
      </section>
      <SiteFooter />
    </main>
  );
}
