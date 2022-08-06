import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

import Icon from '../Icons/Icon';

import logo from '../../assets/images/logo.png';
import styles from './Header.module.scss';

import i18next from 'i18next';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const isActive = ({ isActive }) => {
    return isActive ? styles.active : '';
  };

  const [openSettings, setOpenSettings] = useState(false);

  const styleSettings = openSettings
    ? { display: 'block' }
    : { display: 'none' };

  const [language, setLanguage] = useState(
    localStorage.getItem('language') || 'en-GB'
  );

  const languageHandler = (lang) => {
    localStorage.setItem('language', lang);
    i18next.changeLanguage(lang);
    setLanguage(lang);
  };

  const { t } = useTranslation();
  const headerList = [
    {
      id: '1234-Header-Home',
      name: t('homeNav'),
      to: '/',
    },
    {
      id: '1234-Header-Characters',
      name: t('charactersNav'),
      to: '/characters',
    },
    {
      id: '1234-Header-Episodes',
      name: t('episodesNav'),
      to: '/episodes',
    },
    {
      id: '1234-Header-Locations',
      name: t('locationsNav'),
      to: '/locations',
    },
    {
      id: '1234-Header-FavChar',
      name: t('favoriteCharNav'),
      to: '/favoritechar',
    },
  ];

  return (
    <header className={styles.container}>
      <div className={styles.container__logo}>
        <Link to={'/'}>
          <img src={logo} alt='main-logo' />
        </Link>
      </div>
      <nav className={styles.container__nav}>
        <ul>
          {headerList.map((link) => (
            <li key={link.id}>
              <NavLink to={link.to} className={isActive}>
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <div className={styles.container__settings}>
        <div className={styles.collapse}>
          <button onClick={() => setOpenSettings(!openSettings)}>
            <Icon icon={'SettingsIcon'} fill='black' />
          </button>
          <div className={styles.selections} style={styleSettings}>
            <div className={styles.selections__country}>
              <div
                className={styles.flag}
                onClick={() => languageHandler('en-GB')}
              >
                <img
                  src='https://img.icons8.com/plasticine/30/000000/rick-sanchez.png'
                  alt='UK'
                />
                <span className={language === 'en-GB' ? styles.active : ''}>
                  EN
                </span>
              </div>
              <div
                className={styles.flag}
                onClick={() => languageHandler('tr-TR')}
              >
                <img
                  src='https://img.icons8.com/plasticine/30/000000/morty-smith.png'
                  alt='TR'
                />
                <span className={language === 'tr-TR' ? styles.active : ''}>
                  TR
                </span>
              </div>
            </div>
            <div className={styles.selections__play}>
              <a
                href='https://www.netflix.com/title/80014749'
                target={'_blank'}
                rel='noreferrer'
              >
                <img
                  src='https://img.icons8.com/3d-fluency/40/000000/3d-fluency-netflix-logo.png'
                  alt='Netflix'
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
