import React from 'react';

import classnames from 'classnames';
import classes from './SMKLoader.module.scss';

interface SMKLoaderProps {
  isLoading: boolean;
  darkMode?: boolean;
}

const SMKLoader: React.FC<SMKLoaderProps> = (props) => {
  return (
    <div
      className={classes.overlay}
      style={props.isLoading ? { display: 'block' } : { display: 'none' }}
    >
      <div className={classes.container}>
        <div className={classes.loader}>
          <div
            className={classnames(classes.circular, {
              [`${classes.darkmode}`]: props.darkMode,
            })}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default SMKLoader;
