import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import FilmItem from './components/FilmItem';
import FilmsList from './components/FilmsList';
import { Navbar } from './components/Navbar';
import Loader from './components/UI/loader/Loader';
import { AuthContext } from './context/AuthContext';
import { useAuth } from './hooks/auth.hook';
import { useRoutes } from './routes';



function App() {
  const { token, login, logout, userId } = useAuth();
  const isAuthenticated = !!token;
  const routes = useRoutes(isAuthenticated);

  const [items, setItems] = useState([]);
  const [isFilmItemsLoading, setIsFilmItemsLoading] = useState(false);

  useEffect(() => {
    fetchData()
  }, [])

  async function fetchData() {
    setIsFilmItemsLoading(true)
    let response = await fetch("/main");
    if (response.ok) {
      let items = await response.json();
      setItems(items)
      setIsFilmItemsLoading(false)
    } else {
      alert("Ошибка HTTP: " + response.status);
    }
  }




  return (
    <AuthContext.Provider value={{
      token, login, logout, userId, isAuthenticated
    }}>

      <BrowserRouter>
        {isAuthenticated && <Navbar />}
        {routes}
        {isFilmItemsLoading
          ? <Loader />
          : <FilmsList items={items} />
        }

      </BrowserRouter>
    </AuthContext.Provider>
  )
}

export default App;
