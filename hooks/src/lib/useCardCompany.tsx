import { useState } from 'react';
import { ErrorStatus } from '../types/errorStatus';
import { cardCompanyErrorMessage } from '../constants/error';

const checkIncludeArray = (optionArr: string[], value: string) => {
  if (!optionArr.includes(value) || !value) {
    throw new Error(ErrorStatus.INVALID_OPTION);
  }
};

const useCardCompany = ({
  initialValue,
  optionArray,
}: {
  initialValue: string;
  optionArray: string[];
}) => {
  const [value, setValue] = useState(initialValue);
  const [errorMessages, setErrorMessages] = useState('');

  const onSelect = (value: string) => {
    try {
      checkIncludeArray(optionArray, value);
      setValue(value);
    } catch (e) {
      if (e instanceof Error) {
        setErrorMessages(cardCompanyErrorMessage);
      }
    }
  };

  return { value, onSelect, errorMessages };
};

export default useCardCompany;
