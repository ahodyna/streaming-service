import React from 'react';
import FilmItem from './FilmItem'

const FilmsList = ({ items, AddFavorites,handleFovoritesClick }) => {
    return (
        <div>
         
            {items.map((item) =>
                <FilmItem item={item} key={item.id} AddFavorites={AddFavorites} handleFovoritesClick={handleFovoritesClick}/>)}
        </div>
    )
}

export default FilmsList;
