import React from 'react';

import classes from './SMKToolbar.module.css';

interface SMKToolbarProps {
  id?: string;
  title: string;
}

const SMKToolbar: React.FC<SMKToolbarProps> = ({ title, ...props }) => {
  return (
    <div className={classes.SMKToolbarContainer}>
      <h2>{title}</h2>
      {props.children}
    </div>
  );
};

export default SMKToolbar;
