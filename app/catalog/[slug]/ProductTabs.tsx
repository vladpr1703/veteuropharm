"use client";

import { useState } from "react";
import type { Product } from "@/lib/products";
import styles from "./styles.module.scss";
import { tabs } from "./constants";

export function ProductTabs({ product }: { product: Product }) {
  const [active, setActive] = useState<(typeof tabs)[number][0]>("description");
  return (
    <section className={styles.info}>
      <div
        className={styles.tabs}
        role="tablist"
        aria-label="Информация о препарате"
      >
        {tabs.map(([key, label]) => (
          <button
            key={key}
            role="tab"
            aria-selected={active === key}
            className={active === key ? styles.active : ""}
            onClick={() => setActive(key)}
          >
            {label}
          </button>
        ))}
      </div>
      <div className={styles.panel} role="tabpanel">
        <h2>{tabs.find(([key]) => key === active)?.[1]}</h2>
        {active === "description" ? (
          <>
            <p>{product.form}</p>
            <ul>
              {product.description.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </>
        ) : (
          product[active]
            .split("\n\n")
            .map((paragraph) => <p key={paragraph}>{paragraph}</p>)
        )}
      </div>
    </section>
  );
}
