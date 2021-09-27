import React, {useState, useEffect} from 'react';
import UserMenu from '../components/UserMenu';
import Loader from '../components/UI/loader/Loader';
import FilmsList from '../components/FilmsList';

export const FilmsPage = () => {
    const [items, setItems] = useState([]);
    const [isFilmItemsLoading, setIsFilmItemsLoading] = useState(false);
  
    useEffect(() => {
      fetchData()
    }, [])
  
    async function fetchData() {
      setIsFilmItemsLoading(true)
      let response = await fetch('/films/films');
      if (response.ok) {
        let items = await response.json();
        setItems(items)
        setIsFilmItemsLoading(false)
      } else {
        alert("Error: " + response.status);
      }
    }
    return (
        <div>
            <h2>Films page</h2>
            <UserMenu/>
            {isFilmItemsLoading
                ? <Loader />
                : <FilmsList items={items} />
            }
        </div>
    )
};

export default FilmsPage;
