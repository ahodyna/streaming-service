import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import AuthPage from './pages/Auth.Page';
import FavoriteFilmsPage from './pages/FavoriteFilmsPage';
import FilmPage from './pages/FilmPage';
import ListFilmsPage from './pages/ListFilmsPage';
import UserPage from './pages/UserPage';
import UsersListPage from './pages/UsersListPage';

export const useRoutes = isAuthenticated => {
    if (isAuthenticated) {
        return (
            <Switch>
                <Route path='/user/:id' exact>
                    <UserPage />
                </Route>

                <Route path='/users' exact>
                    <UsersListPage/>
                </Route>  

                <Route path='/films/:id' exact>
                    <FilmPage />
                </Route>

                <Route path='/favorite' exact>
                    <FavoriteFilmsPage/>
                </Route>
                <Redirect to='/favorite'/> 
            </Switch>
        )
    }
    return (
        <Switch>
                <Route path='/films' exact>
                    <ListFilmsPage/>
                </Route>
                <Route path='/' exact>
                    <AuthPage />
                </Route>

                 <Redirect to='/films' />  
        </Switch>
    )
}