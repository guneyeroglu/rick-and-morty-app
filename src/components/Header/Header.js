import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

import Icon from '../Icons/Icon';

import logo from '../../assets/images/logo.png';
import styles from './Header.module.scss';

const Header = () => {
  const isActive = ({ isActive }) => {
    return isActive ? styles.active : '';
  };

  const [openSettings, setOpenSettings] = useState(false);

  const styleSettings = openSettings
    ? { display: 'block' }
    : { display: 'none' };

  const [language, setLanguage] = useState('UK');

  const languageHandler = (lang) => setLanguage(lang);

  const headerList = [
    { id: '1234-Header-Home', name: 'Home', to: '/' },
    { id: '1234-Header-Characters', name: 'Characters', to: '/characters' },
    { id: '1234-Header-Episodes', name: 'Episodes', to: '/episodes' },
    { id: '1234-Header-Locations', name: 'Locations', to: '/locations' },
    { id: '1234-Header-FavChar', name: 'Favorite Char', to: '/favoritechar' },
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
            <Icon icon={'SettingsLogo'} fill='black' />
          </button>
          <div className={styles.selections} style={styleSettings}>
            <div className={styles.selections__country}>
              <div
                className={styles.flag}
                onClick={() => languageHandler('UK')}
              >
                <img
                  src='https://img.icons8.com/plasticine/30/000000/rick-sanchez.png'
                  alt='UK'
                />
                <span className={language === 'UK' ? styles.active : ''}>
                  UK
                </span>
              </div>
              <div
                className={styles.flag}
                onClick={() => languageHandler('TR')}
              >
                <img
                  src='https://img.icons8.com/plasticine/30/000000/morty-smith.png'
                  alt='TR'
                />
                <span className={language === 'TR' ? styles.active : ''}>
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
