import React, { useState } from 'react';
import styles from './SearchForm.module.css';
import { useSearchParams } from 'react-router-dom';
import { getChangedSearchParams } from '../../utils/utils';

export const SearchForm = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('query') ?? '';
  const [searchQuery, setSearchQuery] = useState(search);

  const handleChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    const params = getChangedSearchParams(searchParams, {
      query: searchQuery,
    });
    setSearchParams(params);
  };

  return (
    <section className={styles.section}>
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
    </section>
  );
};
