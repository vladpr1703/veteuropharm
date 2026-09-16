'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Search, SlidersHorizontal, X } from 'lucide-react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useMemo, useState } from 'react';
import { categories, products, type Category } from '@/lib/products';
import styles from './styles.module.scss';

const categoryList: Category[] = Object.values(categories);

export function CatalogClient() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [filtersOpen, setFiltersOpen] = useState(false);
  const query = searchParams.get('q') ?? '';
  const selected = searchParams
    .getAll('category')
    .filter((category): category is Category =>
      categoryList.includes(category as Category),
    );

  const updateUrl = (mutate: (params: URLSearchParams) => void) => {
    const params = new URLSearchParams(searchParams.toString());
    mutate(params);
    const nextQuery = params.toString();
    router.replace(nextQuery ? `${pathname}?${nextQuery}` : pathname, {
      scroll: false,
    });
  };

  const setQuery = (value: string) =>
    updateUrl((params) => {
      if (value) params.set('q', value);
      else params.delete('q');
    });

  const filtered = useMemo(
    () =>
      products.filter((product) => {
        const matchesCategory =
          !selected.length || selected.includes(product.category);
        const needle = query.trim().toLocaleLowerCase('ru');
        return (
          matchesCategory &&
          (!needle ||
            `${product.name} ${product.summary}`
              .toLocaleLowerCase('ru')
              .includes(needle))
        );
      }),
    [query, selected],
  );

  const toggle = (category: Category) =>
    updateUrl((params) => {
      const current = params
        .getAll('category')
        .filter((item): item is Category =>
          categoryList.includes(item as Category),
        );
      params.delete('category');
      const next = current.includes(category)
        ? current.filter((item) => item !== category)
        : [...current, category];
      next.forEach((item) => params.append('category', item));
    });

  const clearAll = () =>
    updateUrl((params) => {
      params.delete('q');
      params.delete('category');
    });

  return (
    <section className={styles.catalog}>
      <div className={styles.toolbar}>
        <button
          className={styles['filter-button']}
          onClick={() => setFiltersOpen(true)}
        >
          <SlidersHorizontal size={19} /> Фильтры
        </button>
        <label className={styles.search}>
          <Search size={20} />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Поиск по каталогу"
            aria-label="Поиск по каталогу"
          />
          {query && (
            <button onClick={() => setQuery('')} aria-label="Очистить поиск">
              <X size={18} />
            </button>
          )}
        </label>
      </div>
      <div className={styles.layout}>
        <aside
          className={`${styles.filters} ${filtersOpen ? styles['filters-open'] : ''}`}
        >
          <div className={styles['filters-head']}>
            <strong>Категории</strong>
            <button
              onClick={() => setFiltersOpen(false)}
              aria-label="Закрыть фильтры"
            >
              <X />
            </button>
          </div>
          {categoryList.map((category) => (
            <label key={category}>
              <input
                type="checkbox"
                checked={selected.includes(category)}
                onChange={() => toggle(category)}
              />
              <span>{category}</span>
            </label>
          ))}
          {selected.length > 0 && (
            <button
              className={styles.clear}
              onClick={() => updateUrl((params) => params.delete('category'))}
            >
              Сбросить фильтры
            </button>
          )}
        </aside>
        {filtersOpen && (
          <button
            className={styles.backdrop}
            aria-label="Закрыть фильтры"
            onClick={() => setFiltersOpen(false)}
          />
        )}
        <div className={styles.results}>
          <div className={styles['result-meta']}>
            <span>Найдено: {filtered.length}</span>
            {selected.length > 0 && (
              <span>Выбрано категорий: {selected.length}</span>
            )}
          </div>
          {filtered.length ? (
            <div className={styles.grid}>
              {filtered.map((product) => (
                <article className={styles.card} key={product.slug}>
                  <Link
                    className={styles.image}
                    href={`/catalog/${product.slug}`}
                  >
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={440}
                      height={440}
                    />
                  </Link>
                  <div className={styles['card-body']}>
                    <span className={styles.category}>{product.category}</span>
                    <h2>
                      <Link href={`/catalog/${product.slug}`}>
                        {product.name}
                      </Link>
                    </h2>
                    <p>{product.summary}</p>
                    <Link
                      className={styles.more}
                      href={`/catalog/${product.slug}`}
                    >
                      Подробнее <span>→</span>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className={styles.empty}>
              <h2>Ничего не найдено</h2>
              <p>Попробуйте изменить запрос или сбросить фильтры.</p>
              <button onClick={clearAll}>Показать все препараты</button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
