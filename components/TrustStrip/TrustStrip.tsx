import { CheckCircle2, Leaf, Microscope, ShieldCheck } from 'lucide-react';
import { Container } from '@/components/Container';
import styles from './styles.module.scss';

const advantages = [
  { icon: Leaf, title: 'Экологичность', text: 'Ответственный подход' },
  {
    icon: CheckCircle2,
    title: 'Без ограничений',
    text: 'По использованию молока',
  },
  {
    icon: Microscope,
    title: 'Контроль качества',
    text: 'Проверенные производители',
  },
  { icon: ShieldCheck, title: 'Безопасность', text: 'Проверенные решения' },
];

export function TrustStrip() {
  return (
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
}
