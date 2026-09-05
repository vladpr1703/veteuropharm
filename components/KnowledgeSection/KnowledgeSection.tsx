import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/Container';
import type { Article } from './types';
import styles from './styles.module.scss';

const articles: Article[] = [
  { date: '15.11.2021', title: 'Кетоз у коров', type: 'Практика' },
  { date: '14.10.2021', title: 'Гнойный мастит у коров', type: 'Практика' },
  {
    date: '23.03.2016',
    title: 'Диагностика эндометрита',
    type: 'Исследование',
  },
];

export function KnowledgeSection() {
  return (
    <section className={styles.section} id="research">
      <Container>
        <div className={styles.heading}>
          <div>
            <div className={styles.kicker}>База знаний</div>
            <h2>
              Практика, которой
              <br />
              можно доверять
            </h2>
          </div>
          <p>
            Собираем полезные материалы и практические рекомендации для
            специалистов молочных ферм.
          </p>
        </div>
        <div className={styles.articles} id="news">
          {articles.map((article, index) => (
            <article className={styles.article} key={article.title}>
              <span className={styles.number}>0{index + 1}</span>
              <div>
                <span className={styles.meta}>
                  {article.type} · {article.date}
                </span>
                <h3>{article.title}</h3>
                <a href="#contacts">
                  Читать материал <ArrowRight size={16} />
                </a>
              </div>
            </article>
          ))}
        </div>
        <div className={styles.news}>
          <span>Новости компании</span>
          <strong>Продукция проверенных производителей</strong>
          <time>25.07.2023</time>
          <a href="#contacts">
            Подробнее <ArrowRight size={16} />
          </a>
        </div>
      </Container>
    </section>
  );
}
