import type { Metadata } from 'next';
import Image from 'next/image';
import {
  ArrowUpRight,
  BadgeCheck,
  FlaskConical,
  ShieldCheck,
} from 'lucide-react';
import { ContactSection } from '@/components/ContactSection';
import { Container } from '@/components/Container';
import { SiteFooter } from '@/components/SiteFooter';
import { SiteHeader } from '@/components/SiteHeader';
import styles from './styles.module.scss';

export const metadata: Metadata = {
  title: 'Партнёры — ВетЕвроФарм',
  description:
    'Производители ветеринарных препаратов — партнёры компании ВетЕвроФарм.',
};

const partners = [
  {
    name: 'Гомельский завод ветеринарных препаратов',
    short: 'ГЗВП',
    logo: '/partner-gzvp.png',
    tone: 'blue',
    description:
      'Предприятие работает на ветеринарном рынке с 1975 года. Главное направление деятельности — производство химико-фармацевтических лекарственных средств для животных.',
    heading: 'Особенности',
    features: [
      'Флагман белорусской государственной ветеринарной фармацевтики',
      'Многоступенчатый контроль качества',
      'Аккредитованная лаборатория для проверки сырья и готовой продукции',
      'Производство соответствует требованиям GMP ЕАЭС',
    ],
    href: 'https://www.gzvp.by/',
  },
  {
    name: 'Витебский завод ветеринарных препаратов',
    short: 'ВЗВП',
    logo: '/partner-vzvp-v2.svg',
    tone: 'green',
    description:
      'Производственное унитарное предприятие основано в 1979 году. Завод специализируется на выпуске ветеринарных препаратов для сельскохозяйственных и домашних животных, пушных зверей, птиц и пчёл.',
    heading: 'Основные направления',
    features: [
      'Производство порошковых форм и мазей',
      'Контроль качества на всех этапах производства',
      'Оптовая и розничная реализация ветеринарных препаратов',
    ],
    href: 'https://vzvp.by/',
  },
  {
    name: 'Могилевский завод ветеринарных препаратов',
    short: 'МЗВП',
    logo: '/partner-mzvp-v2.png',
    tone: 'cyan',
    description:
      'Белорусское производственное предприятие, специализирующееся на разработке и выпуске ветеринарных препаратов для крупного и мелкого рогатого скота, свиней, птиц, лошадей и домашних животных.',
    heading: 'Основные направления деятельности',
    features: [
      'Порошкообразные препараты',
      'Жидкие препараты для внутреннего применения',
      'Жидкие и порошковые инъекционные препараты',
    ],
    href: 'https://www.vetzavod.by/',
  },
  {
    name: 'ТМ',
    short: 'T&M',
    logo: '/partner-tm.png',
    tone: 'navy',
    description:
      'Белорусская компания, основанная в 1992 году, специализируется на производстве и оптовой реализации ветеринарных препаратов для сельскохозяйственных животных, рыбы и птицы.',
    heading: 'Ключевые характеристики',
    features: [
      'Высокотехнологичное производство ветеринарных препаратов',
      'Две аккредитованные лаборатории',
      'Постоянное развитие качества продукции и уровня услуг',
    ],
    href: 'https://tmltd.by/',
  },
  {
    name: 'БелВитунифарм',
    short: 'БВФ',
    logo: '/partner-belvitunipharm-original.png',
    tone: 'violet',
    description:
      'ОАО «БелВитунифарм» — производитель ветеринарных биологических препаратов в Республике Беларусь. Предприятие основано в 1930 году.',
    heading: 'Особенности производства',
    features: [
      'Многолетний опыт производства биологических препаратов',
      'Контроль качества на всех этапах производства',
      'Современная производственная и исследовательская база',
    ],
    href: 'https://belvitunifarm.by/',
  },
];

export default function PartnersPage() {
  return (
    <main id="top">
      <SiteHeader />
      <section className={styles.hero}>
        <Image
          className={styles['hero-image']}
          src="/partners-hero.png"
          alt="Деловое рукопожатие"
          fill
          priority
          sizes="100vw"
        />
        <div className={styles['hero-shade']} />
        <Container className={styles['hero-inner']}>
          <span>Надёжность в каждом сотрудничестве</span>
          <h1>Наши партнёры</h1>
          <p>
            Работаем с проверенными производителями ветеринарных препаратов.
          </p>
        </Container>
      </section>

      <section className={styles.partners}>
        <Container>
          <div className={styles.intro}>
            <span>Производители</span>
            <h2>Партнёрство, которому доверяют</h2>
            <p>
              Нас объединяют единые требования к качеству, безопасности и
              эффективности ветеринарных препаратов.
            </p>
          </div>

          <div className={styles.list}>
            {partners.map((partner) => (
              <article className={styles.partner} key={partner.name}>
                <div
                  className={`${styles['logo-card']} ${styles[partner.tone]}`}
                >
                  {partner.logo ? (
                    <Image
                      className={styles['partner-logo']}
                      src={partner.logo}
                      alt={`Логотип — ${partner.name}`}
                      width={210}
                      height={210}
                    />
                  ) : (
                    <>
                      <span className={styles['logo-mark']}>
                        {partner.short}
                      </span>
                      <small>ветеринарные препараты</small>
                    </>
                  )}
                </div>
                <div className={styles.content}>
                  <h3>{partner.name}</h3>
                  <p>{partner.description}</p>
                  <strong>{partner.heading}</strong>
                  <ul>
                    {partner.features.map((feature) => (
                      <li key={feature}>
                        <BadgeCheck aria-hidden="true" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={partner.href} target="_blank" rel="noreferrer">
                    Перейти на сайт <ArrowUpRight aria-hidden="true" />
                  </a>
                </div>
              </article>
            ))}
          </div>

          <div className={styles.values}>
            <div>
              <ShieldCheck />
              <strong>Контроль качества</strong>
              <span>На каждом этапе производства</span>
            </div>
            <div>
              <FlaskConical />
              <strong>Экспертность</strong>
              <span>Десятилетия отраслевого опыта</span>
            </div>
            <div>
              <BadgeCheck />
              <strong>Надёжность</strong>
              <span>Проверенные производители</span>
            </div>
          </div>
        </Container>
      </section>
      <ContactSection />
      <SiteFooter />
    </main>
  );
}
