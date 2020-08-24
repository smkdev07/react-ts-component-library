import React from 'react';

import classes from './SMKButton.module.css';

interface SMKButtonProps {
  id: string;
  label: string;
  name?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  fullWidth?: boolean;
  onClickHandler: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const SMKButton: React.FC<SMKButtonProps> = ({
  label,
  fullWidth,
  onClickHandler,
  ...props
}) => {
  return (
    <button
      {...props}
      className={classes.SMKButton}
      style={{ width: fullWidth ? '100%' : '' }}
      onClick={onClickHandler}
    >
      {label}
    </button>
  );
};

export default SMKButton;
