import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';


export const Navbar = () => {
    const history = useHistory();
    const auth = useContext(AuthContext);

    const logoutHandler = event => {
        event.preventDefault()
        auth.logout();
        history.push('/')
    }
    return (
        <nav>
            <ul>

                {auth.isAuthenticated ?
                    <li><Link to='/' onClick={logoutHandler}>Log out</Link></li>
                    : <li><Link to='/' >Log in</Link></li>}
            </ul>
        </nav>
    )

}