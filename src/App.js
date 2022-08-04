import styles from './App.module.scss';
import Home from './pages/Home/Home';

import './assets/i18n/i18n';

const App = () => {
  return (
    <div className={styles.container}>
      <Home />
    </div>
  );
};

export default App;
