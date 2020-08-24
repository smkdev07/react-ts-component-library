interface Rules {
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  min?: number;
  max?: number;
}

export const checkInputValidity = (
  inputType: string,
  inputLabel: string,
  inputValue: string,
  rules: Rules
) => {
  if (!rules.required && inputValue.trim().length === 0) {
    return { isValid: true, errorMessage: '' };
  }
  if (rules.required && inputValue.trim().length === 0) {
    return { isValid: false, errorMessage: `${inputLabel} is required.` };
  }
  if (rules.minLength && inputValue.trim().length < rules.minLength) {
    return {
      isValid: false,
      errorMessage: `${inputLabel} must be greater than ${rules.minLength} characters.`,
    };
  }
  if (rules.maxLength && inputValue.trim().length > rules.maxLength) {
    return {
      isValid: false,
      errorMessage: `${inputLabel} must be less than ${rules.maxLength} characters.`,
    };
  }
  if (rules.min && +inputValue < rules.min) {
    return {
      isValid: false,
      errorMessage: `${inputLabel} must be greater than ${rules.min}.`,
    };
  }
  if (rules.max && +inputValue > rules.max) {
    return {
      isValid: false,
      errorMessage: `${inputLabel} must be less than ${rules.max}.`,
    };
  }
  if (
    inputType === 'email' &&
    !/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(
      inputValue
    )
  ) {
    return {
      isValid: false,
      errorMessage: `${inputLabel} must be a valid email address.`,
    };
  }
  if (
    inputType === 'tel' &&
    !/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(
      inputValue
    )
  ) {
    return {
      isValid: false,
      errorMessage: `${inputLabel} must be a valid telephone number.`,
    };
  }
  if (
    inputType === 'password' &&
    !/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(
      inputValue
    )
  ) {
    return {
      isValid: false,
      errorMessage: `${inputLabel} must contain: 8+ characters, 1+ uppercase/lowercase letters, 1+ numbers, 1+ symbols.`,
    };
  }
  if (
    inputType === 'url' &&
    !/(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/.test(
      inputValue
    )
  ) {
    return {
      isValid: false,
      errorMessage: `${inputLabel} must be a valid URL.`,
    };
  }

  return { isValid: true, errorMessage: '' };
};
