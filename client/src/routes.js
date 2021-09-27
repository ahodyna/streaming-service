import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import AuthPage from './pages/Auth.Page';
import HomePage from './pages/HomePage';
import FilmsPage from './pages/FilmsPage';
import FilmIdPage from './pages/FilmIdPage';
import MainPage from './pages/MainPage';
import SearchFriendPage from './pages/SearchFriendPage';
import  FriendsPage from './pages/FriendsPage';

export const useRoutes = isAuthenticated => {
    if (isAuthenticated) {
        return (
            <Switch>
                <Route path='/search' exact>
                    <SearchFriendPage />
                </Route>

                <Route path='/friends' exact>
                    <FriendsPage/>
                </Route>  

                <Route path='/films/:id' exact>
                    <FilmIdPage />
                </Route>
                <Route path='/films' exact>
                    <FilmsPage />
                </Route>

                <Route path='/favorite' exact>
                    <HomePage/>
                </Route>
                <Redirect to='/favorite'/> 
            </Switch>
        )
    }
    return (
        <Switch>
                <Route path='/' exact>
                    <MainPage/>
                </Route>
                <Route path='/login' exact>
                    <AuthPage />
                </Route>

                 <Redirect to='/' />  
        </Switch>
    )
}