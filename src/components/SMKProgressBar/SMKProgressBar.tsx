import React from 'react';

import classes from './SMKProgressBar.module.css';

interface SMKProgressBarProps {
  currentValue: number;
  maxValue: number;
}

const SMKProgressBar: React.FC<SMKProgressBarProps> = ({
  currentValue,
  maxValue,
}) => {
  return (
    <div className={classes.SMKProgressBarContainer}>
      <small>{currentValue}%</small>
      <progress value={currentValue} max={maxValue}></progress>
    </div>
  );
};

export default SMKProgressBar;