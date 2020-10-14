import React, { useState, ChangeEvent, FocusEvent } from 'react';

import { checkInputValidity } from '../../utility/validation';

import classnames from 'classnames';
import classes from './SMKInput.module.scss';

interface SMKInputProps {
  type: 'email' | 'number' | 'password' | 'tel' | 'text' | 'url';
  id: string;
  label: string;
  value: string | number;
  name?: string;
  autoComplete?: 'on' | 'off';
  disabled?: boolean;
  required?: boolean;
  placeholder?: string;
  minLength?: number;
  maxLength?: number;
  min?: number;
  max?: number;
  step?: number;
  darkMode?: boolean;
  onInputChange: (inputValue: string) => void;
}

const SMKInput: React.FC<SMKInputProps> = ({
  type,
  id,
  label,
  darkMode,
  onInputChange,
  ...props
}) => {
  const [inputTouched, setInputTouched] = useState(false);
  const [inputIsValid, setInputIsValid] = useState(false);
  const [inputErrorMessage, setInputErrorMessage] = useState('');

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    !inputTouched && setInputTouched(true);
    onInputChange(event.target.value);
  };

  const onBlurHandler = (event: FocusEvent<HTMLInputElement>) => {
    !inputTouched && setInputTouched(true);
    const { isValid, errorMessage } = checkInputValidity(
      type,
      label,
      event.target.value,
      {
        required: props.required,
        minLength: props.minLength,
        maxLength: props.maxLength,
        min: props.min,
        max: props.max,
      }
    );
    setInputIsValid(isValid);
    setInputErrorMessage(errorMessage);
  };

  return (
    <div className={classes.container}>
      <label
        htmlFor={id}
        className={classnames({ [`${classes.darkmode}`]: darkMode })}
      >
        {label}
        {props.required && (
          <span className={classnames({ [`${classes.darkmode}`]: darkMode })}>
            *
          </span>
        )}
      </label>
      <input
        type={type}
        id={id}
        {...props}
        onChange={onChangeHandler}
        onBlur={onBlurHandler}
        className={classnames(
          { [`${classes.error}`]: inputTouched && !inputIsValid },
          { [`${classes.valid}`]: inputTouched && inputIsValid },
          { [`${classes.darkmode}`]: darkMode }
        )}
      />
      {inputTouched && !inputIsValid && (
        <p className={classnames({ [`${classes.darkmode}`]: darkMode })}>
          {inputErrorMessage}
        </p>
      )}
    </div>
  );
};

export default SMKInput;
