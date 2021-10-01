import React, { useState, useEffect, useMemo } from 'react';
import UserMenu from '../components/UserMenu';
import Loader from '../components/UI/loader/Loader';
import FilmsList from '../components/FilmsList';
import Select from '../components/UI/select/Select';
import AddFavorites from '../components/AddFavorites';
import Footer from '../components/Footer';


export const FilmsPage = () => {
  const [items, setItems] = useState([]);
  const [isFilmItemsLoading, setIsFilmItemsLoading] = useState(false);
  const [selectedSort, setSelectedSort] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [favorites, setFavorites] = useState([]);

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
    let cleanupFunction = false;
    const fetchData = async () => {
      try {
        setIsFilmItemsLoading(true)
        let response = await fetch('/films');
        if (response.ok) {
          let items = await response.json();
          if(!cleanupFunction)  setItems(items);
         
          setIsFilmItemsLoading(false)
        }
      } catch (e) {
        alert("Error");
      }
    }
    fetchData()
    return () => cleanupFunction = true;
  }, []);


  const saveToLocalStorage = (items) => {
    localStorage.setItem('favorities', JSON.stringify(items));
  }

  const addFavoritesFilm = (film) => {
    const movieFavourite = JSON.parse(localStorage.getItem('favorities'));
    const newFavoritedList = {...movieFavourite, film};
    setFavorites(newFavoritedList);
    saveToLocalStorage(newFavoritedList);
  };

  return (
    <div>
      <UserMenu />
      <h2 className='home-page-title'>Films page</h2>

      <div className='input-wrapper'>
        <div>
          <input className='input'
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder="Type title" />
        </div>
        <div className='custom-select'>
          <Select
            value={selectedSort}
            onChange={sortFilms}
            defaultValue="Sort by"
            options={[
              { value: 'name', name: 'name' },
            ]}
          />
        </div>

      </div>

      {isFilmItemsLoading
        ? <Loader />
        : <FilmsList items={sortedAndSearchedFilms} handleFovoritesClick={addFavoritesFilm} AddFavorites={AddFavorites} />
      }

      <Footer />

    </div>
  )
};

export default FilmsPage;
