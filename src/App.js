import { useState } from 'react';

import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Characters from './pages/Characters/Characters';

import './App.module.scss';

import './assets/i18n/index';

import { Route, Routes } from 'react-router';

const App = () => {
  const [searchValue, setSearchValue] = useState('');
  const handleSearchValue = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <>
      <Header />
      <Routes>
        <Route
          path='/'
          element={<Home value={searchValue} onSearch={handleSearchValue} />}
        />
        <Route
          path='/characters'
          element={
            <Characters value={searchValue} onSearch={handleSearchValue} />
          }
        />
      </Routes>
    </>
  );
};

export default App;
