import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const FilmItem = (props) => {
    const auth = useContext(AuthContext);

    return (
        <div >
            {auth.isAuthenticated ?
                <div>
                    <div>
                        <img src={props.item.image.medium} alt="movie-poster" />
                        <div>
                            <strong>{props.item.name}</strong>
                        </div>

                        <div>
                            Language:  {props.item.language}
                        </div>

                        <div>
                            Rating :{props.item.rating.average}

                        </div>
                        <div onClick={() =>props.handleFovoritesClick(props.item)}>
                            <props.AddFavorites />
                        </div>

                    </div>
                </div>
                : <Link to='/login' >
                    <div>
                        <img src={props.item.image.medium} alt="movie-poster" />
                        <strong>{props.item.name}</strong>
                        <div>
                            {props.item.language}
                        </div>
                    </div>
                </Link>}
        </div>
    )
}

export default FilmItem;
