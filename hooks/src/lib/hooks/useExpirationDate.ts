import {useState} from 'react';
import {ValidationType} from '../../types/validation';
import {ERROR_MESSAGE, defaultValidationValue} from '../constants/validation';
import {isEmpty, isLengthEqual, isPositiveInteger} from '../utils/validation';

interface ExpirationDateValidationType {
  month: ValidationType;
  year: ValidationType;
}

const defaultExpirationDate = {
  month: '',
  year: '',
};

const defaultExpirationDateValidationValue = {
  month: defaultValidationValue,
  year: defaultValidationValue,
};

const MAX_LENGTH = 2;
const currentYear = new Date().getFullYear() % 100;

const useExpirationDateValidation = () => {
  const [expirationDate, setExpirationDate] = useState(defaultExpirationDate);
  const [expirationDateValidationResult, setExpirationDateValidationResult] =
    useState<ExpirationDateValidationType>(
      defaultExpirationDateValidationValue
    );

  const onChange = (label: string, value: string) => {
    validation(label, value);
    setExpirationDate((prev) => ({...prev, [label]: value}));
  };

  const validation = (label: string, value: string) => {
    if (!value || isEmpty(value)) {
      setExpirationDateValidationResult((prev) => ({
        ...prev,
        [label]: defaultValidationValue,
      }));

      return;
    }

    if (!isPositiveInteger(value)) {
      setExpirationDateValidationResult((prev) => ({
        ...prev,
        [label]: {
          isError: true,
          errorMessage: ERROR_MESSAGE.INVALID_NUMBER,
        },
      }));
      return;
    }

    if (!isLengthEqual(value, MAX_LENGTH)) {
      setExpirationDateValidationResult((prev) => ({
        ...prev,
        [label]: {
          isError: true,
          errorMessage: `${MAX_LENGTH}${ERROR_MESSAGE.INVALID_LENGTH}`,
        },
      }));
      return;
    }

    if (label === 'month') {
      const monthNumber = parseInt(value, 10);
      if (monthNumber < 1 || monthNumber > 12) {
        setExpirationDateValidationResult((prev) => ({
          ...prev,
          [label]: {
            isError: true,
            errorMessage: ERROR_MESSAGE.INVALID_MONTH,
          },
        }));
      }
    }

    if (label === 'year') {
      const yearNumber = parseInt(value, 10);
      if (yearNumber < currentYear) {
        setExpirationDateValidationResult((prev) => ({
          ...prev,
          [label]: {
            isError: true,
            errorMessage: `${ERROR_MESSAGE.INVALID_YEAR}(${currentYear}년 이상)`,
          },
        }));
      }
    }
  };

  return {onChange, expirationDate, expirationDateValidationResult};
};

export default useExpirationDateValidation;
