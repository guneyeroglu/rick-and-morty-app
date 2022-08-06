import Header from './components/Header/Header';
import Home from './pages/Home/Home';

import './App.module.scss';

import './assets/i18n/index';

import { Route, Routes } from 'react-router';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </>
  );
};

export default App;
