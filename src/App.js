import { useState } from 'react';
import { Route, Routes } from 'react-router';

import { DataProvider } from './store/Context/ContextFav';

import Header from './components/Header/Header';

import Home from './pages/Home/Home';
import Characters from './pages/Characters/Characters';
import FavoriteChar from './pages/FavoriteChar/FavoriteChar';

import './assets/i18n/index';

import './App.module.scss';

const App = () => {
  const [searchValue, setSearchValue] = useState('');

  return (
    <DataProvider>
      <Header onSetValue={setSearchValue} />
      <Routes>
        <Route
          path='/'
          element={<Home value={searchValue} onSetValue={setSearchValue} />}
        />
        <Route
          path='/characters'
          element={
            <Characters value={searchValue} onSetValue={setSearchValue} />
          }
        />
        <Route
          path='favoritechar'
          element={
            <FavoriteChar value={searchValue} onSetValue={setSearchValue} />
          }
        />
      </Routes>
    </DataProvider>
  );
};

export default App;
