import { useState } from 'react';
import { CARD_COMPANY_ERROR_MESSAGE } from '../constants/error';
import { ErrorStatus } from '../types/errorStatus';

const checkIncludeArray = (optionArr: string[], value: string) => {
  if (!optionArr.includes(value) || !value) {
    throw new Error(ErrorStatus.INVALID_OPTION);
  }
};

const useCardCompany = (initialValue: string, optionArray: string[]) => {
  const [value, setValue] = useState(initialValue);
  const [errorMessage, setErrorMessage] = useState('');

  const onSelect = (value: string) => {
    try {
      checkIncludeArray(optionArray, value);
      setValue(value);
    } catch (e) {
      if (e instanceof Error) {
        setErrorMessage(CARD_COMPANY_ERROR_MESSAGE[ErrorStatus.INVALID_OPTION]);
      }
    }
  };

  return { value, onSelect, errorMessage };
};

export default useCardCompany;
