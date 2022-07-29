import React from 'react';
import MainLogo from './MainLogo';
import ArrowLogo from './ArrowLogo';
import SettingsLogo from './SettingsLogo';

const logos = {
  MainLogo: <MainLogo />,
  ArrowLogo: <ArrowLogo />,
  SettingsLogo: <SettingsLogo />,
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
