import React, { useState, useEffect } from 'react';
import FilmsList from '../components/FilmsList';
import Loader from '../components/UI/loader/Loader';
import Pagination from '../components/Pagination';


export const MainPage = () => {
  const [items, setItems] = useState([]);
  const [isFilmItemsLoading, setIsFilmItemsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [filmsPerPage] = useState(10);

  const lastFilmIndex = currentPage * filmsPerPage;
  const firstFilmIndex = lastFilmIndex - filmsPerPage;

  const paginate = pageNumber => setCurrentPage(pageNumber);

  useEffect(() => {
    fetchData()
  }, []);

  async function fetchData() {
    setIsFilmItemsLoading(true)
    let response = await fetch("/main");
    if (response.ok) {
      let items = await response.json();
      setItems(items)
      setIsFilmItemsLoading(false)
    } else {
      alert("Error: " + response.status);
    }
  };
  
  const currentFilm = items.slice(firstFilmIndex, lastFilmIndex);

  return (
    <div>
      <h2> List of FilmsPage</h2>
      {isFilmItemsLoading
        ? <Loader />
        : <Pagination
          filmsPerPage={filmsPerPage}
          items={items.length}
          paginate={paginate}
        />
      }
      {isFilmItemsLoading
        ? <Loader />
        : <FilmsList items={currentFilm} />
      }

    </div>
  )
};

export default MainPage;
