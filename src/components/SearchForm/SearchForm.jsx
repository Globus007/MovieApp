'use client';

import React, { useCallback, useState } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import styles from './SearchForm.module.css';

export const SearchForm = ({ search = '' }) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(search);

  const createQueryString = useCallback(
    (name, value) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);

      return params.toString();
    },
    [searchParams],
  );

  const handleChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    router.push(pathname + '?' + createQueryString('query', searchQuery));
  };

  return (
    <section className={styles.section}>
      <h1>Find your movie</h1>

      <div className={styles.searchForm}>
        <input
          placeholder={'What do you want to watch?'}
          className={styles.input}
          value={searchQuery}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
        <button className={styles.button} onClick={handleSubmit}>
          search
        </button>
      </div>
    </section>
  );
};
