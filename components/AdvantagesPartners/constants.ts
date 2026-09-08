import { CalendarClock, Handshake, ShieldCheck, ThumbsUp } from 'lucide-react';
import belVitunipharmLogo from '@/public/partner-belvitunipharm-original.png';
import gomelLogo from '@/public/partner-gzvp.png';
import mogilevLogo from '@/public/partner-mzvp-v2.png';
import tmLogo from '@/public/partner-tm.png';
import vitebskLogo from '@/public/partner-vzvp-v2.svg';

export const advantages = [
  { icon: ShieldCheck, title: 'Надёжность, проверенная годами' },
  { icon: CalendarClock, title: 'Соблюдение сроков поставки' },
  { icon: Handshake, title: 'Ориентация на долгосрочное партнёрство' },
  { icon: ThumbsUp, title: 'Качество от ведущих производителей Беларуси' },
];

export const partners = [
  { src: tmLogo, alt: 'ТМ' },
  {
    src: mogilevLogo,
    alt: 'Могилевский завод ветеринарных препаратов',
  },
  {
    src: vitebskLogo,
    alt: 'Витебский завод ветеринарных препаратов',
  },
  { src: gomelLogo, alt: 'Гомельский завод ветеринарных препаратов' },
  {
    src: belVitunipharmLogo,
    alt: 'БелВитунифарм',
    wide: true,
  },
];
