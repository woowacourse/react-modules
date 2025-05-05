import { ERROR_MESSAGE } from '../constants';
import { useForm } from '../hooks/useForm';
import { CardExpirationDateInput } from '../types/input';

export default function useExpiryDate() {
  const {
    value: expiryDate,
    errors: expiryDateErrors,
    register: expiryDateRegister,
    isValid: isExpiryDateIsValid,
  } = useForm<CardExpirationDateInput>({
    defaultValues: {
      month: '',
      year: '',
    },
    validation: {
      month: {
        required: true,
        length: 2,
        errorMessage: ERROR_MESSAGE.cardExpirationDate.month,
        validateRegex: /^(0?[1-9]|1[0-2])$/,
      },
      year: {
        required: true,
        length: 2,
        errorMessage: ERROR_MESSAGE.cardExpirationDate.year,
      },
    },
    inputRegex: {
      month: /^\d{0,2}$/,
      year: /^\d{0,2}$/,
    },
  });

  return {
    expiryDateErrors,
    isExpiryDateIsValid,
    expiryDate,
    expiryDateRegister,
  };
}
