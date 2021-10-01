import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const FilmItem = (props) => {
    const auth = useContext(AuthContext);

    return (
        <div >
            {auth.isAuthenticated ?
                <div className='film-card'>

                    <img src={props.item.image.medium} alt="movie-poster" />
                    <div>
                        <p className='film-title'>{props.item.name}</p>
                    </div>

                    <div>
                        <b>Language:</b>  {props.item.language}
                    </div>

                    <div>
                        <b>Rating:</b>{props.item.rating.average}

                    </div>

                </div>
                : <Link className='item-link' to='/login' >
                    <div>
                        <img src={props.item.image.medium} alt="movie-poster" />
                        <p className='film-title'>{props.item.name}</p>
                    </div>
                </Link>}
        </div>
    )
}

export default FilmItem;
