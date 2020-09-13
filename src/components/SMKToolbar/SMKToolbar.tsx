import React from 'react';

import classnames from 'classnames';
import classes from './SMKToolbar.module.scss';

interface SMKToolbarProps {
  title: string;
  darkMode?: boolean;
}

const SMKToolbar: React.FC<SMKToolbarProps> = ({ title, ...props }) => {
  return (
    <header
      className={classnames(classes.container, {
        [classes.darkmode]: props.darkMode,
      })}
    >
      <h2>{title}</h2>
      {props.children}
    </header>
  );
};

export default SMKToolbar;
