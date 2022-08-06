import React from 'react';

import SideTitle from '../../components/SideTitle/SideTitle';
import Search from '../../components/Search/Search';

import { useTranslation } from 'react-i18next';

import portalGun from '../../assets/images/portal-gun.png';
import photo from '../../assets/images/r-m-photo.png';

import styles from './Home.module.scss';

const Home = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.container}>
      <SideTitle />
      <div className={styles.container__search}>
        <div className={styles.main}>
          <div className={styles.main__title}>
            <span>Rick & Morty</span>
          </div>
          <div className={styles.main__explanation}>
            <span>{t('homeExplanation')}</span>
          </div>
          <Search placeholder={t('searchPlaceholder')} />
        </div>
        <div className={styles.body}>
          <div className={styles.shadow}>
            <img src={portalGun} alt='portal-gun' />
          </div>
        </div>
      </div>
      <div className={styles.container__picture}>
        <div className={styles.shadow}>
          <img src={photo} alt='rick-and-morty' />
        </div>
      </div>
    </div>
  );
};

export default Home;
