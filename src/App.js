import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Characters from './pages/Characters/Characters';

import './App.module.scss';

import './assets/i18n/index';

import { Route, Routes } from 'react-router';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/characters' element={<Characters />} />
      </Routes>
    </>
  );
};

export default App;
