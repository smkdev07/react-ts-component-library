import React from 'react';

import classnames from 'classnames';
import classes from './SMKBadge.module.scss';

type BadgeTypes = 'none' | 'error' | 'info' | 'warning' | 'success';

interface SMKBadgeProps {
  type: BadgeTypes;
  shape: 'sharp' | 'rounded';
  label: string;
  clickable?: boolean;
  darkMode?: boolean;
}

const SMKBadge: React.FC<SMKBadgeProps> = ({
  type,
  shape,
  label,
  ...props
}) => {
  return (
    <div
      className={classnames(
        classes.container,
        classes[type],
        { [`${classes.rounded}`]: shape === 'rounded' },
        { [`${classes.clickable}`]: props.clickable },
        { [`${classes.darkmode}`]: props.darkMode }
      )}
    >
      <span>{label}</span>
    </div>
  );
};

export default SMKBadge;
