import React from "react";
import { Link } from 'react-router-dom';

const FilmItem = (props) => {
    return (
        <div >
            <Link to='/' >
            <div>
                <img src={props.item.image.medium} alt="movie-poster"/>
                <strong>{props.item.name}</strong>
                <div>
                    {props.item.language}
                </div>
            </div>
            </Link>
        </div>
    )
}

export default FilmItem;
