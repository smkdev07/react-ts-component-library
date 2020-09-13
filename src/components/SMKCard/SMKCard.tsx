import React from 'react';

import classnames from 'classnames';
import classes from './SMKCard.module.scss';

interface SMKCardProps {
  title: string;
  subTitle: string;
  darkMode?: boolean;
}

const SMKCard: React.FC<SMKCardProps> = ({ title, subTitle, ...props }) => {
  return (
    <div
      className={classnames(classes.container, {
        [`${classes.darkmode}`]: props.darkMode,
      })}
    >
      <div
        className={classnames(classes.header, {
          [`${classes.darkmode}`]: props.darkMode,
        })}
      >
        <h3>{title}</h3>
        <h5>{subTitle}</h5>
      </div>
      <div
        className={classnames(classes.body, {
          [`${classes.darkmode}`]: props.darkMode,
        })}
      >
        {props.children}
      </div>
    </div>
  );
};

export default SMKCard;
