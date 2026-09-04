import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  FlaskConical,
  Leaf,
  Menu,
  Microscope,
  Phone,
  ShieldCheck,
} from 'lucide-react';
import Image from 'next/image';

const products = [
  { name: 'Лоперавет', desc: 'Остановит диарею у телят. Быстро и эффективно.', tag: 'Новинка', tone: 'aqua', code: 'LV' },
  { name: 'Эмбриостим', desc: 'Повышение эффективности оплодотворения', tag: 'Новинка', tone: 'blue', code: 'EM' },
  { name: 'Кордиамин-Вет', desc: 'Аналептическое средство экстренного действия', tag: 'Новинка', tone: 'orange', code: 'KV' },
  { name: 'Амино-Solvo', desc: 'Гипертонический аминокислотно-солевой раствор', tag: 'Новинка', tone: 'lime', code: 'AS' },
  { name: 'Бутамакс — 200', desc: 'Стимулятор обмена веществ', tag: 'Выбор специалистов', tone: 'violet', code: 'B2' },
  { name: 'Дротаверин-вет', desc: 'Универсальный спазмолитик', tag: 'Новинка', tone: 'sky', code: 'DV' },
  { name: 'Веткетал', desc: 'Нестероидный противовоспалительный препарат', tag: '', tone: 'coral', code: 'VK' },
  { name: 'Мастинол-Форте', desc: 'Лечение маститов различной этиологии', tag: 'Лидер продаж', tone: 'teal', code: 'MF' },
];

const articles = [
  { date: '15.11.2021', title: 'Кетоз у коров', type: 'Практика' },
  { date: '14.10.2021', title: 'Гнойный мастит у коров', type: 'Практика' },
  { date: '23.03.2016', title: 'Диагностика эндометрита', type: 'Исследование' },
];

function Brand() {
  return (
    <a className="brand" href="#top" aria-label="Репровет — на главную">
      <span className="brand-mark"><span>R</span></span>
      <span className="brand-copy"><strong>РЕПРОВЕТ</strong><small>ветеринарные решения</small></span>
    </a>
  );
}

export default function Home() {
  return (
    <main id="top">
      <div className="topline">
        <div className="container topline-inner">
          <span>Разработка и производство ветеринарных препаратов</span>
          <div><a href="tel:+74959891471">+7 (495) 989-14-71</a></div>
        </div>
      </div>

      <header className="header">
        <div className="container header-inner">
          <Brand />
          <nav aria-label="Основная навигация">
            <a href="#products">Препараты</a>
            <a href="#company">О компании</a>
            <a href="#research">Исследования</a>
            <a href="#news">Материалы</a>
            <a href="#contacts">Контакты</a>
          </nav>
          <a className="header-cta" href="#contacts">Где купить <ArrowRight size={16} /></a>
          <button className="menu" aria-label="Открыть меню"><Menu /></button>
        </div>
      </header>

      <section className="hero">
        <Image src="/hero-vet.png" alt="Ветеринар осматривает корову на современной молочной ферме" fill priority sizes="100vw" />
        <div className="hero-wash" />
        <div className="container hero-inner">
          <div className="hero-copy">
            <div className="eyebrow"><span /> Наука на службе фермы</div>
            <h1>Здоровье стада.<br/><em>В основе — результат.</em></h1>
            <p>Разрабатываем ветеринарные препараты для понятных схем лечения и устойчивой продуктивности молочных ферм.</p>
            <div className="hero-actions">
              <a className="btn primary" href="#products">Смотреть препараты <ArrowRight size={18} /></a>
              <a className="btn secondary" href="#company">О компании</a>
            </div>
            <div className="hero-proof"><ShieldCheck size={22}/><span><strong>Стандарт GMP</strong>Контроль на каждом этапе производства</span></div>
          </div>
        </div>
        <div className="hero-index">01 <span/> 04</div>
      </section>

      <section className="trust-strip">
        <div className="container trust-grid">
          <div><Leaf/><span><strong>Экологичность</strong>Ответственный подход</span></div>
          <div><CheckCircle2/><span><strong>Без ограничений</strong>По использованию молока</span></div>
          <div><Microscope/><span><strong>Контроль качества</strong>Собственная экспертиза</span></div>
          <div><ShieldCheck/><span><strong>Безопасность</strong>Проверенные решения</span></div>
        </div>
      </section>

      <section className="section products" id="products">
        <div className="container">
          <div className="section-head">
            <div><div className="kicker">Каталог</div><h2>Разработано для врачей<br/>молочных ферм</h2></div>
            <p>Решения для ключевых задач ветеринарного специалиста — от профилактики до терапии.</p>
            <a href="#products">Весь каталог <ArrowRight size={17}/></a>
          </div>
          <div className="product-grid">
            {products.map((product, i) => (
              <article className="product-card" key={product.name}>
                <div className={`product-visual ${product.tone}`}>
                  <span className="product-code">{product.code}</span>
                  <span className="molecule m1"/><span className="molecule m2"/>
                  <span className="pack"><b>REPROVET</b><i>{product.name}</i><small>ветеринарный препарат</small></span>
                  <span className="count">{String(i + 1).padStart(2, '0')}</span>
                </div>
                <div className="product-info">
                  {product.tag && <span className="tag">{product.tag}</span>}
                  <h3>{product.name}</h3><p>{product.desc}</p>
                  <a href="#contacts" aria-label={`Подробнее: ${product.name}`}>Подробнее <ChevronRight size={17}/></a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="company" id="company">
        <div className="container company-grid">
          <div className="company-visual">
            <div className="lab-card"><FlaskConical/><strong>5+ лет</strong><span>исследований до запуска линейки</span></div>
            <div className="orbit o1"/><div className="orbit o2"/>
            <span className="vertical-word">RESEARCH / CARE / RESULT</span>
          </div>
          <div className="company-copy">
            <div className="kicker light">Коротко о компании</div>
            <h2>Создано ветеринарными специалистами</h2>
            <p className="lead">Мы знаем, с какими проблемами врачи сталкиваются на ферме каждый день.</p>
            <p>Компания РЕПРОВЕТ основана практикующими специалистами. Наша цель — существенно облегчить труд ветеринарного врача за счёт простых и удобных схем лечения, сокращая применение антибиотиков без потери качества терапии.</p>
            <ul>
              <li><CheckCircle2/>Составы, направленные на механизм заболевания</li>
              <li><CheckCircle2/>Рекомендации, основанные на практике и исследованиях</li>
              <li><CheckCircle2/>Открытый диалог с ветеринарными специалистами</li>
            </ul>
            <a className="btn white" href="#research">Узнать больше <ArrowRight size={18}/></a>
          </div>
        </div>
      </section>

      <section className="section knowledge" id="research">
        <div className="container">
          <div className="section-head compact"><div><div className="kicker">База знаний</div><h2>Практика, которой<br/>можно доверять</h2></div><p>Делимся результатами исследований и рабочими протоколами для специалистов молочных ферм.</p></div>
          <div className="article-grid" id="news">
            {articles.map((article, i) => <article className="article" key={article.title}>
              <span className="article-num">0{i+1}</span><div><span className="article-meta">{article.type} · {article.date}</span><h3>{article.title}</h3><a href="#contacts">Читать материал <ArrowRight size={16}/></a></div>
            </article>)}
          </div>
          <div className="newsline"><span>Новости компании</span><strong>РЕПРОВЕТ — стандарт GMP</strong><time>25.07.2023</time><a href="#contacts">Подробнее <ArrowRight size={16}/></a></div>
        </div>
      </section>

      <section className="contact" id="contacts">
        <div className="container contact-inner">
          <div><div className="kicker light">На связи</div><h2>Обсудим задачу<br/>вашей фермы?</h2></div>
          <p>Наши специалисты помогут подобрать решение и ответят на вопросы по применению препаратов.</p>
          <a className="contact-phone" href="tel:+74959891471"><span><Phone/></span><small>Позвонить специалисту</small><strong>+7 (495) 989-14-71</strong></a>
        </div>
      </section>

      <footer>
        <div className="container footer-top"><Brand/><div><strong>Продукция</strong><a href="#products">Каталог препаратов</a><a href="#research">Материалы</a><a href="#contacts">Где купить</a></div><div><strong>Компания</strong><a href="#company">О компании</a><a href="#news">Новости</a><a href="#contacts">Контакты</a></div><div><strong>Контакты</strong><a href="tel:+74959891471">+7 (495) 989-14-71</a><span>Московская область</span></div></div>
        <div className="container footer-bottom"><span>© 2026 РЕПРОВЕТ</span><span>Информация предназначена для ветеринарных специалистов</span><a href="#top">Наверх ↑</a></div>
      </footer>
    </main>
  );
}
