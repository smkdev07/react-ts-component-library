import React from 'react';

import classes from './SMKToolbar.module.scss';

interface SMKToolbarProps {
  title: string;
}

const SMKToolbar: React.FC<SMKToolbarProps> = ({ title, ...props }) => {
  return (
    <header className={classes.container}>
      <h2>{title}</h2>
      {props.children}
    </header>
  );
};

export default SMKToolbar;
