import React from 'react';

import SideTitle from '../../components/SideTitle/SideTitle';

import styles from './Home.module.scss';

const Home = () => {
  return (
    <div className={styles.container}>
      <SideTitle />
    </div>
  );
};

export default Home;
