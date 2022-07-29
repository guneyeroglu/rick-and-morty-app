import styles from './App.module.scss';
import Home from './pages/Home/Home';

const App = () => {
  return (
    <div className={styles.container}>
      <Home />
    </div>
  );
};

export default App;
