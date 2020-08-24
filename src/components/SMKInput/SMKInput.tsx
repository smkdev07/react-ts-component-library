import React, { useState, ChangeEvent, FocusEvent } from 'react';

import { checkInputValidity } from '../../utility/validation';

import classes from './SMKInput.module.css';

interface SMKInputProps {
  type: 'email' | 'number' | 'password' | 'tel' | 'text' | 'url';
  id: string;
  label: string;
  initialValue: string | number;
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
}

const SMKInput: React.FC<SMKInputProps> = ({
  type,
  id,
  label,
  initialValue,
  ...props
}) => {
  const [inputValue, setInputValue] = useState(initialValue);
  const [inputTouched, setInputTouched] = useState(false);
  const [inputIsValid, setInputIsValid] = useState(false);
  const [inputErrorMessage, setInputErrorMessage] = useState('');

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    event.persist();
    !inputTouched && setInputTouched((prevState) => true);
    setInputValue((prevState) => event.target.value);
  };

  const onBlurHandler = (event: FocusEvent<HTMLInputElement>) => {
    event.persist();
    !inputTouched && setInputTouched((prevState) => true);
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
    setInputIsValid((prevState) => isValid);
    setInputErrorMessage((prevState) => errorMessage);
  };

  const inputClasses = [classes.SMKInput];
  if (inputTouched && inputIsValid) {
    inputClasses.push(classes.SMKInputValid);
  } else if (inputTouched && !inputIsValid) {
    inputClasses.push(classes.SMKInputError);
  }

  return (
    <div className={classes.SMKIputContainer}>
      <label htmlFor={id} className={classes.SMKInputLabel}>
        {label}
        {props.required ? (
          <span className={classes.SMKInputRequired}>*</span>
        ) : null}
      </label>
      <input
        type={type}
        id={id}
        value={inputValue}
        {...props}
        onChange={(event) => onChangeHandler(event)}
        onBlur={(event) => onBlurHandler(event)}
        className={inputClasses.join(' ')}
      />
      {inputTouched && !inputIsValid ? (
        <p className={classes.SMKInputErrorText}>{inputErrorMessage}</p>
      ) : null}
    </div>
  );
};

export default SMKInput;
