import React from 'react';
import { Link } from 'react-router-dom';



const UserMenu = () => {
    return (
        <div className='topnav'>
            <li className='user-menu-item'><Link to='/favorite' className='link-user-menu-item'>Home</Link></li>
            <li className='user-menu-item'><Link to='/films' className='link-user-menu-item'>Films</Link></li>
        </div>
    )
}

export default UserMenu;
