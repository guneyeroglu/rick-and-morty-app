import React from 'react';
import Icon from '../Icons/Icon';

import styles from './Search.module.scss';

const Search = (props) => {
  return (
    <div className={styles.search}>
      <input
        type={'text'}
        value={props.a}
        onChange={props.b}
        placeholder={props.placeholder}
      />
      <div className={styles.search__icon}>
        <Icon icon={'MagnifyingGlassIcon'} fill='black' />
      </div>
    </div>
  );
};

export default Search;
