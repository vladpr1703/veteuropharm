import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Download, FileText } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { getProduct, products } from "@/lib/products";
import { ProductTabs } from "./ProductTabs";
import styles from "./styles.module.scss";

export function generateStaticParams() {
  return products.map(({ slug }) => ({ slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const product = getProduct((await params).slug);
  return product
    ? { title: `${product.name} — ВетЕвроФарм`, description: product.summary }
    : {};
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const product = getProduct((await params).slug);
  if (!product) notFound();
  return (
    <main id="top">
      <SiteHeader />
      <div className={styles.page}>
        <nav className={styles.crumbs} aria-label="Хлебные крошки">
          <Link href="/catalog">
            <ArrowLeft size={16} /> Каталог
          </Link>
          <span>/</span>
          <span>{product.name}</span>
        </nav>
        <section className={styles.product}>
          <div className={styles.visual}>
            <span>{product.category}</span>
            <Image
              src={product.image}
              alt={product.name}
              width={600}
              height={600}
              priority
            />
          </div>
          <div className={styles.summary}>
            <span className={styles.eyebrow}>{product.category}</span>
            <h1>{product.name}</h1>
            <p>{product.summary}</p>
            <div className={styles.docs}>
              <a
                href="/documents/instruction.txt"
                download={`${product.slug}-instruction.txt`}
              >
                <FileText />
                <span>
                  <strong>Инструкция</strong>
                  <small>Скачать документ</small>
                </span>
                <Download size={18} />
              </a>
              <a
                href="/documents/certificate.txt"
                download={`${product.slug}-certificate.txt`}
              >
                <FileText />
                <span>
                  <strong>Свидетельство</strong>
                  <small>Скачать документ</small>
                </span>
                <Download size={18} />
              </a>
            </div>
            <Link className={styles.contact} href="/contacts">
              Узнать, где купить <span>→</span>
            </Link>
          </div>
        </section>
        <ProductTabs product={product} />
        <section className={styles.back}>
          <p>Нужен другой препарат?</p>
          <Link href="/catalog">
            Вернуться в каталог <span>→</span>
          </Link>
        </section>
      </div>
      <SiteFooter />
    </main>
  );
}
