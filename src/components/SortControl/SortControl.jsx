import React, { useState } from 'react';
import styles from './SortControl.module.css';

export const SortControl = ({ currentSelection, onChange }) => {
  const [selectValue, setSelectValue] = useState(currentSelection ?? 'date');
  const handleChange = (event) => {
    const currentSelectValue = event.target.value;
    setSelectValue(currentSelectValue);
    onChange(currentSelectValue);
  };

  return (
    <div className={styles.section}>
      <label className={styles.label} htmlFor="sort">
        sort by
      </label>
      <select
        className={styles.select}
        id="sort"
        name="sort"
        value={selectValue}
        onChange={handleChange}
      >
        <option value="date">release date</option>
        <option value="title">title</option>
      </select>
    </div>
  );
};
