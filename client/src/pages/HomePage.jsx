import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import UserMenu from '../components/UserMenu';
import FilmItem from '../components/FilmItem';
import RemoveFavorites from '../components/RemoveFavorites';
import Footer from '../components/Footer';

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
            <UserMenu />
            <h2 className='home-page-title'> Your Favorite Films</h2>
            <h3>If you have empty list - you can add your favorite films</h3>
            <Link to='/films' class='link-normalize'><div className='click-link'>Click here!</div></Link>
            <div className='films-group'>
                {favorites !== null ?
                    favorites.map((item) =>
                        <FilmItem item={item} key={item.id} AddFavorites={RemoveFavorites} handleFovoritesClick={removeFavoriteFilm} />)
                    : <h2>Let`s find tour favorite films together</h2>
                }
            </div>
            
            <Footer />

        </div>
    )
};

export default HomePage;
