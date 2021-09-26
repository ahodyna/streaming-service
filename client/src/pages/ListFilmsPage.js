import React, {useState, useEffect} from 'react';
import FilmsList from '../components/FilmsList';
import Loader from '../components/UI/loader/Loader';

export const ListFilmsPage = () => {
    const [items, setItems] = useState([]);
    const [isFilmItemsLoading, setIsFilmItemsLoading] = useState(false);
  
    useEffect(() => {
      fetchData()
    }, [])
  
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
    }
    return (
        <div>
            <h2> List of FilmsPage</h2>
            {isFilmItemsLoading
                ? <Loader />
                : <FilmsList items={items} />
            }
            
        </div>
    )
};

export default ListFilmsPage;
