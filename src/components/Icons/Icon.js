import React from 'react';

import MainIcon from './MainIcon';
import ArrowIcon from './ArrowIcon';
import SettingsIcon from './SettingsIcon';
import MagnifyingGlassIcon from './MagnifyingGlassIcon';
import SortIcon from './SortIcon';
import CircleCloseIcon from './CircleCloseIcon';
import UpArrowIcon from './UpArrowIcon';
import DownArrowIcon from './DownArrowIcon';
import LinkedInIcon from './LinkedInIcon';
import GitHubIcon from './GitHubIcon';
import HamburgerIcon from './HamburgerIcon';

const logos = {
  MainIcon: <MainIcon />,
  ArrowIcon: <ArrowIcon />,
  SettingsIcon: <SettingsIcon />,
  MagnifyingGlassIcon: <MagnifyingGlassIcon />,
  SortIcon: <SortIcon />,
  CircleCloseIcon: <CircleCloseIcon />,
  UpArrowIcon: <UpArrowIcon />,
  DownArrowIcon: <DownArrowIcon />,
  LinkedInIcon: <LinkedInIcon />,
  GitHubIcon: <GitHubIcon />,
  HamburgerIcon: <HamburgerIcon />,
};

const Icon = (props) => {
  const name = props.icon;
  const fill = props.fill;
  const wh = props.wh ?? 24;
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
