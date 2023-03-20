import React, { useState } from 'react';
import styles from './SearchForm.module.css';

export const SearchForm = ({ initialQuery, onSearch }) => {
  const [query, setQuery] = useState(initialQuery);

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <div className={styles.div}>
      <input
        placeholder={'What do you want to watch?'}
        className={styles.input}
        value={query}
        onChange={handleChange}
      />
      <button className={styles.button} onClick={onSearch.bind(null, query)}>
        search
      </button>
    </div>
  );
};
