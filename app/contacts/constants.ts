import type { Metadata } from "next";
import { Mail, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Контакты — ВетЕвроФарм",
  description: "Телефоны, WhatsApp и электронная почта компании ВетЕвроФарм.",
};

export const contacts = [
  {
    title: "Написать в мессенджер",
    label: "WhatsApp",
    href: "https://wa.me/79261197895",
    icon: MessageCircle,
    external: true,
    kind: "whatsapp",
  },
  {
    title: "Электронная почта",
    label: "info@veteuropharm.ru",
    href: "mailto:info@veteuropharm.ru",
    icon: Mail,
    kind: "email",
  },
];
