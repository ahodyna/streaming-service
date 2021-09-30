import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import AuthPage from './pages/Auth.Page';
import HomePage from './pages/HomePage';
import FilmsPage from './pages/FilmsPage';
import MainPage from './pages/MainPage';


export const useRoutes = isAuthenticated => {
    if (isAuthenticated) {
        return (
            <Switch>
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