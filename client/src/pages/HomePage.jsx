import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import UserMenu from '../components/UserMenu';
import Footer from '../components/Footer';

export const HomePage = () => {
    return (

        <div>
            <UserMenu />
            <h3 className='home-page-title'>If you want to find  your favorite films</h3>
            <Link to='/films' class='link-normalize'><div className='click-link'>Click here!</div></Link>

            <Footer />

        </div>
    )
};

export default HomePage;
