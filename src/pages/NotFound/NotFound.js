import React from 'react';
import { useNavigate } from 'react-router';

import { useTranslation } from 'react-i18next';

import notFound from '../../assets/images/r-m-portal.png';

import styles from './NotFound.module.scss';

const NotFound = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/');
  };

  return (
    <div className={styles.container}>
      <div className={styles.container__nav} onClick={handleNavigate}>
        <span>{t('homeNav')}</span>
      </div>
      <div className={styles.container__image}>
        <img src={notFound} alt='no-match' />
      </div>
      <div className={styles.container__content}>
        <span>404 - Wubba Lubba Dub Dub - {t('notFound')}</span>
      </div>
    </div>
  );
};

export default NotFound;
