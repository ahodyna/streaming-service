import React, { useContext } from "react";
import { Link, useHistory } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const FilmItem = (props) => {
    const auth = useContext(AuthContext);
    const router = useHistory();



    return (
        <div >
            {auth.isAuthenticated ?
                <div onClick={() => router.push(`/films/${props.item.id}`)}>
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

                        <button>LIKE</button>
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
