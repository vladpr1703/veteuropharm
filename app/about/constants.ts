import {
  Award,
  BadgeDollarSign,
  ClipboardList,
  CreditCard,
  FileSignature,
  Handshake,
  Leaf,
  PackageSearch,
  PieChart,
  Truck,
} from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'О компании — ВетЕвроФарм',
  description:
    'ВетЕвроФарм — поставщик ветеринарных препаратов для фермерских хозяйств и агропредприятий.',
};

export const benefits = [
  {
    icon: BadgeDollarSign,
    title: 'Выгодные цены',
    text: 'Прямые поставки от производителей',
  },
  {
    icon: Award,
    title: 'Высокое качество',
    text: 'Проверенная и сертифицированная продукция',
  },
  {
    icon: PackageSearch,
    title: 'Широкий ассортимент',
    text: 'Решения для разных видов животных',
  },
  {
    icon: PieChart,
    title: 'Для всего сельского хозяйства',
    text: 'От небольших ферм до агрохолдингов',
  },
  {
    icon: Leaf,
    title: 'Безопасный состав',
    text: 'Строгое соответствие требованиям',
  },
  {
    icon: Handshake,
    title: 'Индивидуальный подход',
    text: 'Помощь специалиста при подборе',
  },
];

export const steps = [
  {
    icon: ClipboardList,
    title: 'Заявка',
    text: 'Оставьте заявку на сайте или свяжитесь с нами.',
  },
  {
    icon: FileSignature,
    title: 'Договор',
    text: 'Согласуем детали поставки и подготовим документы.',
  },
  {
    icon: CreditCard,
    title: 'Оплата',
    text: 'Оплатите поставку на согласованных условиях.',
  },
  {
    icon: Truck,
    title: 'Доставка',
    text: 'Получите препараты в назначенную дату.',
  },
];
