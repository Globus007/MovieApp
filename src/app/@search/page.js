import React from 'react';
import { SearchForm } from '../../components/SearchForm/SearchForm';

export default async function Home({ searchParams: { query } }) {
  return <SearchForm search={query} />;
}
