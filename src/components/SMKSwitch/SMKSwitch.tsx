import React from 'react';

import classes from './SMKSwitch.module.scss';

interface SMKSwitchProps {
  id?: string;
  checked?: boolean;
  onChangeHandler?: () => void;
}

const SMKSwitch: React.FC<SMKSwitchProps> = (props) => {
  return (
    <label htmlFor={props.id} className={classes.switch}>
      <input
        type="checkbox"
        id={props.id}
        checked={props.checked}
        onChange={props.onChangeHandler}
      />
      <span className={classes.slider}></span>
    </label>
  );
};

export default SMKSwitch;
