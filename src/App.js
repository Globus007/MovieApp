import { Counter } from './components/Counter/Counter';
import { SearchForm } from './components/SearchForm/SearchForm';
import './index.css';
import { GenreSelect } from './components/GenreSelect/GenreSelect';
import { useState } from 'react';

function App() {
  const genders = ['all', 'documentary', 'comedy', 'horror', 'crime'];
  const [selected, setSelected] = useState('all');

  const onSearch = (queue) => {
    console.log(queue);
  };

  const onSelect = (gender) => {
    setSelected(gender);
  };

  return (
    <>
      <Counter count={0} />
      <SearchForm initialQuery={'initQueue'} onSearch={onSearch} />
      <GenreSelect genders={genders} selected={selected} onSelect={onSelect} />
    </>
  );
}

export default App;
