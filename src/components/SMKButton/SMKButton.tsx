import React from 'react';

import classnames from 'classnames';
import classes from './SMKButton.module.scss';

interface SMKButtonProps {
  id?: string;
  label: string;
  name?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  fullWidth?: boolean;
  color: 'primary' | 'secondary';
  darkMode?: boolean;
  onClickHandler: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
}

const SMKButton: React.FC<SMKButtonProps> = ({
  label,
  fullWidth,
  color,
  darkMode,
  onClickHandler,
  ...props
}) => {
  return (
    <button
      {...props}
      style={{ width: fullWidth ? '100%' : '' }}
      onClick={onClickHandler}
      className={classnames(
        classes.button,
        { [`${classes.primary}`]: color === 'primary' },
        { [`${classes.secondary}`]: color === 'secondary' },
        { [`${classes.darkmode}`]: darkMode }
      )}
    >
      {label}
    </button>
  );
};

export default SMKButton;
