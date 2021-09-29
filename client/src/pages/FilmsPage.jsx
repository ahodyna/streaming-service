import React, { useState, useEffect, useMemo } from 'react';
import UserMenu from '../components/UserMenu';
import Loader from '../components/UI/loader/Loader';
import FilmsList from '../components/FilmsList';
import Select from '../components/UI/select/Select';

export const FilmsPage = () => {
  const [items, setItems] = useState([]);
  const [isFilmItemsLoading, setIsFilmItemsLoading] = useState(false);
  const [selectedSort, setSelectedSort] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const sortedFilms = useMemo(() => {
    if (selectedSort) {
      return [...items].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]))
    }
    return items
  }, [selectedSort, items]);

  const sortFilms = (sort) => {
    setSelectedSort(sort);
  };

  const sortedAndSearchedFilms = useMemo(() => {
    return sortedFilms.filter(item => item.name.toLowerCase().includes(searchQuery))
  }, [searchQuery, sortedFilms]);

  useEffect(() => {
    fetchData()
  }, []);

  async function fetchData() {
    setIsFilmItemsLoading(true)
    let response = await fetch('/films');
    if (response.ok) {
      let items = await response.json();
      setItems(items)
      setIsFilmItemsLoading(false)
    } else {
      alert("Error: " + response.status);
    }
  };

  return (
    <div>
      <h2>Films page</h2>
      <UserMenu />

      <div>
        <input
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          placeholder="Type title" />
      </div>
      {isFilmItemsLoading
        ? <Loader />
        : <Select
          value={selectedSort}
          onChange={sortFilms}
          defaultValue="Sort by"
          options={[
            { value: 'name', name: 'name' },
          ]}
        />}
      {isFilmItemsLoading
        ? <Loader />
        : <FilmsList items={sortedAndSearchedFilms} />
      }
    </div>
  )
};

export default FilmsPage;
