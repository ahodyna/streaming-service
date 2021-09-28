import React from 'react';
import FilmItem from './FilmItem'

const FilmsList = ({ items }) => {

    return (
        <div>
         
            {items.map((item) =>
                <FilmItem item={item} key={item.id} />)}
        </div>
    )
}

export default FilmsList;
