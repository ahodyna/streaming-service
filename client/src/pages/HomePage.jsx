import React, { useEffect, useState } from 'react';
import UserMenu from '../components/UserMenu';
import FilmItem from '../components/FilmItem';
import RemoveFavorites from '../components/RemoveFavorites';

export const HomePage = () => {

    const [favorites, setFavorities] = useState([]);

    useEffect(() => {
        const movieFavourite = JSON.parse(localStorage.getItem('favorities'))
        setFavorities(movieFavourite)
    }, [])

    const removeFavoriteFilm = (film) => {
  
        const newFavoriteList = favorites.filter(
            (favorite) => favorite.id !== film.id
        );
        localStorage.setItem('favorities', JSON.stringify(newFavoriteList));
        setFavorities(newFavoriteList)
    };

    return (

        <div>
            <h2> Favorite Films  and Home page</h2>
            <UserMenu />
            {favorites!==null?
            favorites.map((item) =>
                <FilmItem item={item} key={item.id} AddFavorites={RemoveFavorites} handleFovoritesClick={removeFavoriteFilm} />)
            :<h2>Let`s find tour favorite films together</h2>
            }

        </div>
    )
};

export default HomePage;
