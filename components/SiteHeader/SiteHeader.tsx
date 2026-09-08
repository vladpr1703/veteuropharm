"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { Brand } from "@/components/Brand";
import { Container } from "@/components/Container";
import styles from "./styles.module.scss";

export const SiteHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <div className={styles.topline}>
        <Container className={styles["topline-inner"]}>
          <span>Поставка ветеринарных препаратов для сельского хозяйства</span>
          <a href="tel:+79817215137">+7 (981) 721-51-37</a>
        </Container>
      </div>
      <header className={styles.header}>
        <Container className={styles.inner}>
          <Brand />
          <nav aria-label="Основная навигация">
            <Link href="/">Главная</Link>
            <Link href="/about">О компании</Link>
            <Link href="/partners">Партнёры</Link>
            <Link href="/contacts">Контакты</Link>
          </nav>
          <Link className={styles.cta} href="/contacts">
            Где купить <ArrowRight size={16} />
          </Link>
          <button
            className={styles.menu}
            type="button"
            aria-label={menuOpen ? "Закрыть меню" : "Открыть меню"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </Container>
        <nav
          className={`${styles["mobile-nav"]} ${menuOpen ? styles["mobile-nav-open"] : ""}`}
          id="mobile-navigation"
          aria-label="Мобильная навигация"
        >
          <Link href="/" onClick={closeMenu}>
            Главная
          </Link>
          <Link href="/about" onClick={closeMenu}>
            О компании
          </Link>
          <Link href="/partners" onClick={closeMenu}>
            Партнёры
          </Link>
          <Link href="/contacts" onClick={closeMenu}>
            Контакты
          </Link>
          <Link
            className={styles["mobile-cta"]}
            href="/contacts"
            onClick={closeMenu}
          >
            Где купить <ArrowRight size={16} />
          </Link>
        </nav>
      </header>
    </>
  );
};
