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
        <nav className='navbar'>
            <ul>

                {auth.isAuthenticated ?
                    <li className='navbar-li'><Link className='navbar-link' to='/login' onClick={logoutHandler}>Log out</Link></li>
                    : <li className='navbar-li'><Link className='navbar-link' to='/login' >Log in</Link></li>}
            </ul>
        </nav>
    )

}