import React, { useState, useEffect } from 'react';
import FilmsList from '../components/FilmsList';
import Loader from '../components/UI/loader/Loader';
import Pagination from '../components/Pagination';
import Footer from '../components/Footer';


export const MainPage = () => {
  const [items, setItems] = useState([]);
  const [isFilmItemsLoading, setIsFilmItemsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [filmsPerPage] = useState(9);

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
      <h2 className='main-title'> Happy to see you again!</h2>
      <h3>Choose your favorite season</h3>

      {isFilmItemsLoading
        ? <Loader />
        : <FilmsList items={currentFilm} />
      }

      <Pagination
        filmsPerPage={filmsPerPage}
        items={items.length}
        paginate={paginate}
      />

      <Footer />

    </div>
  )
};

export default MainPage;
