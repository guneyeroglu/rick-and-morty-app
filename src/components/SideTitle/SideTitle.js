import React from 'react';
import SideTitleLineDot from './SideTitleLineDot';

import styles from './SideTitle.module.scss';

const SideTitle = () => {
  return (
    <div className={styles.wrapper}>
      <SideTitleLineDot />
      <span className={styles.wrapper__title}>R & M</span>
      <SideTitleLineDot direction={'reverse'} />
    </div>
  );
};

export default SideTitle;
