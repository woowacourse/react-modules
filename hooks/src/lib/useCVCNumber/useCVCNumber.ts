import { useState } from 'react';
import { CVC_NUMBER_ERROR_TYPE } from './useCVCNumber.constant';
import useCVCNumberValidation from './useCVCNumberValidation';

const useCVCNumber = () => {
  const [cvcNumber, setCVCNumber] = useState('');

  const { cvcError, validateCVCNumber } = useCVCNumberValidation();

  const handleChangeCVCNumber = (value: string) => {
    const errorType = validateCVCNumber(value.slice(0, 3));

    if (errorType === CVC_NUMBER_ERROR_TYPE.nonNumeric || value.length > 3) return;

    setCVCNumber(value);
  };

  return { cvcNumber, cvcError, handleChangeCVCNumber };
};

export default useCVCNumber;
