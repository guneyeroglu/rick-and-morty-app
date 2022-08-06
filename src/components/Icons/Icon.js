import React from 'react';

import MainIcon from './MainIcon';
import ArrowIcon from './ArrowIcon';
import SettingsIcon from './SettingsIcon';
import MagnifyingGlassIcon from './MagnifyingGlassIcon';
import SortIcon from './SortIcon';

const logos = {
  MainIcon: <MainIcon />,
  ArrowIcon: <ArrowIcon />,
  SettingsIcon: <SettingsIcon />,
  MagnifyingGlassIcon: <MagnifyingGlassIcon />,
  SortIcon: <SortIcon />,
};

const Icon = (props) => {
  const name = props.icon;
  const fill = props.fill;
  const wh = props.wh ? props.wh : 24;
  return (
    <svg
      width={wh}
      height={wh}
      viewBox={`0 0 ${wh} ${wh}`}
      fill={fill ? fill : 'none'}
    >
      {logos[name]}
    </svg>
  );
};

export default Icon;
