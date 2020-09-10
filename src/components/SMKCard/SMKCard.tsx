import React from 'react';

import classes from './SMKCard.module.scss';

interface SMKCardProps {
  title: string;
  subTitle: string;
}

const SMKCard: React.FC<SMKCardProps> = ({ title, subTitle, ...props }) => {
  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <h3>{title}</h3>
        <h5>{subTitle}</h5>
      </div>
      <div className={classes.body}>{props.children}</div>
    </div>
  );
};

export default SMKCard;
