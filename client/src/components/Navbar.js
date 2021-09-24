import React, {useContext} from 'react';
import {NavLink, useHistory} from 'react-router-dom';
import {AuthContext} from '../context/AuthContext';

export const Navbar = () =>{
    const history = useHistory();
    const auth = useContext(AuthContext);

    const logoutHandler = event => {
        event.preventDefault()
        auth.logout();
        history.push('/')
    }
    return(
        <nav>
            <ul>
                <li><a href='/' onClick={logoutHandler}>Log out</a></li>
                </ul>
        </nav>
    )

}