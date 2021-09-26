import React from 'react';
import { Link } from 'react-router-dom';


const UserMenu = () => {
    return (
        <div>
            <li><Link to='/favorite'>Home</Link></li>
            <li><Link to='/friends'>Friends</Link></li>
            <li><Link to='/search'>Find Friends</Link></li>
            <li><Link to='/films'>Films</Link></li>
        </div>
    )
}

export default UserMenu;
