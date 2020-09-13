import React from 'react';

import classes from './SMKProgressBar.module.scss';

interface SMKProgressBarProps {
  currentValue: number;
  maxValue: number;
  darkMode?: boolean;
}

const SMKProgressBar: React.FC<SMKProgressBarProps> = ({
  currentValue,
  maxValue,
  ...props
}) => {
  return (
    <div className={classes.container}>
      <small>{currentValue}%</small>
      <progress value={currentValue} max={maxValue}></progress>
    </div>
  );
};

export default SMKProgressBar;
