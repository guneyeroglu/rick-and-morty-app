import { useState } from 'react';
import { Route, Routes } from 'react-router';

import { DataProvider } from './store/Context/ContextFav';

import Header from './components/Header/Header';

import Home from './pages/Home/Home';
import Characters from './pages/Characters/Characters';
import FavoriteChar from './pages/FavoriteChar/FavoriteChar';
import Locations from './pages/Locations/Locations';
import Episodes from './pages/Episodes/Episodes';
import NotFound from './pages/NotFound/NotFound';

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
        <Route path='/locations' element={<Locations />} />
        <Route path='/episodes' element={<Episodes />} />
        <Route
          path='/favoritechar'
          element={
            <FavoriteChar value={searchValue} onSetValue={setSearchValue} />
          }
        />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </DataProvider>
  );
};

export default App;
