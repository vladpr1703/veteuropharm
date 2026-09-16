import {
  Activity,
  BugOff,
  Dna,
  PillBottle,
  ShieldPlus,
  SprayCan,
  Syringe,
  Tablets,
} from 'lucide-react';
import { categories as productCategories } from '@/lib/products';

export const categories = [
  {
    icon: PillBottle,
    title: 'Антибактериальные препараты',
    category: productCategories.antibacterial,
  },
  {
    icon: Activity,
    title: 'Противовоспалительные препараты',
    category: productCategories.antiInflammatory,
  },
  {
    icon: Dna,
    title: 'Витамины и иммуностимуляторы',
    category: productCategories.vitaminsAndImmunostimulants,
  },
  {
    icon: SprayCan,
    title: 'Спреи и аэрозоли',
    category: productCategories.sprayAndAerosols,
  },
  {
    icon: Tablets,
    title: 'Противодиарейные препараты',
    category: productCategories.antidiarrheal,
  },
  {
    icon: BugOff,
    title: 'Противопаразитарные препараты',
    category: productCategories.antiparasitic,
  },
  {
    icon: Syringe,
    title: 'Гормональные препараты',
    category: productCategories.hormonal,
  },
  {
    icon: ShieldPlus,
    title: 'Противомаститные средства',
    category: productCategories.antimastitisAndGynecological,
  },
];
