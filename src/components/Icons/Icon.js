import React from 'react';
import MainLogo from './MainLogo';

const logos = {
  MainLogo: <MainLogo />,
};

const Icon = (props) => {
  const name = props.icon;
  const fill = props.fill;
  return (
    <svg width='40' height='40' viewBox='0 0 50 50' fill={fill ? fill : 'none'}>
      {logos[name]}
    </svg>
  );
};

export default Icon;
