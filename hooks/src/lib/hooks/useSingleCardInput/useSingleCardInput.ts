import { useState } from 'react';
import { validateCardInput } from '../../validation/cardNumberLengthInfo';

import { CardInputItem } from '../../types/cardInputItem.types';

export const useSingleCardInput = (validLength: number) => {
  const [singleCardInput, setSingleCardInput] = useState<CardInputItem>({
    value: '',
    isValid: true,
  });

  const [errorMessage, setErrorMessage] = useState('');

  const handleSingleCardInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;

    const { isValid, errorMessage } = validateCardInput(newValue, validLength);

    setSingleCardInput({
      value: newValue,
      isValid,
    });

    if (!isValid) {
      setErrorMessage(errorMessage);
    }
  };

  return {
    singleCardInput,
    errorMessage,
    handleSingleCardInputChange,
  };
};
