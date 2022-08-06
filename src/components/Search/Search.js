import React from 'react';
import Icon from '../Icons/Icon';

import { useTranslation } from 'react-i18next';

import styles from './Search.module.scss';

const Search = (props) => {
  const { t } = useTranslation();

  return (
    <div className={styles.search}>
      <input
        type={'text'}
        value={props.a}
        onChange={props.b}
        placeholder={t('searchPlaceholder')}
      />
      <div className={styles.search__icon}>
        <Icon icon={'MagnifyingGlassIcon'} fill='black' />
      </div>
    </div>
  );
};

export default Search;
