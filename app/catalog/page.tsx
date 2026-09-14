import type { Metadata } from "next";
import { Suspense } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { CatalogClient } from "./CatalogClient";
import styles from "./styles.module.scss";

export const metadata: Metadata = {
  title: "Каталог препаратов — ВетЕвроФарм",
  description: "Ветеринарные препараты для сельскохозяйственных животных.",
};

export default function CatalogPage() {
  return (
    <main id="top">
      <SiteHeader />
      <header className={styles.hero}>
        <div>
          <span>Ветеринарные препараты</span>
          <h1>Каталог</h1>
          <p>
            Решения для здоровья и продуктивности сельскохозяйственных животных
          </p>
        </div>
      </header>
      <Suspense
        fallback={<div className={styles.loading}>Загружаем каталог…</div>}
      >
        <CatalogClient />
      </Suspense>
      <SiteFooter />
    </main>
  );
}
