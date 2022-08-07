import React from 'react';

import Icon from '../../components/Icons/Icon';

import { useTranslation } from 'react-i18next';

import styles from './SortOrder.module.scss';

const SortOrder = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.sort}>
      <span>{t('sortText')}</span>
      <Icon icon={'SortIcon'} fill='#3b3e43' />
    </div>
  );
};

export default SortOrder;
