import Home from './pages/Home/Home';

import styles from './App.module.scss';

import './assets/i18n/index';

const App = () => {
  return (
    <div className={styles.container}>
      <Home />
    </div>
  );
};

export default App;
