import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import  {Navbar}  from './components/Navbar';
import { AuthContext } from './context/AuthContext';
import { useAuth } from './hooks/auth.hook';
import { useRoutes } from './routes';
import './styles/App.css'



function App() {
  const { token, login, logout, userId } = useAuth();
  const isAuthenticated = !!token;
  const routes = useRoutes(isAuthenticated);


  return (
    <div className='App'>
    <AuthContext.Provider value={{
      token, login, logout, userId, isAuthenticated
    }}>

      <BrowserRouter>
        <Navbar />
        {routes}

      </BrowserRouter>
    </AuthContext.Provider>
    </div>
  )
}

export default App;
