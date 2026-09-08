import { Phone } from 'lucide-react';
import { Container } from '@/components/Container';
import styles from './styles.module.scss';

export const ContactSection = () => (
  <section className={styles.contact} id="contacts">
    <Container className={styles.inner}>
      <div>
        <div className={styles.kicker}>На связи</div>
        <h2>
          Обсудим задачу
          <br />
          вашей фермы?
        </h2>
      </div>
      <p>
        Наши специалисты помогут подобрать решение и ответят на вопросы по
        применению препаратов.
      </p>
      <a className={styles.phone} href="tel:+79817215137">
        <span>
          <Phone />
        </span>
        <small>Позвонить специалисту</small>
        <strong>+7 (981) 721-51-37</strong>
      </a>
    </Container>
  </section>
);
