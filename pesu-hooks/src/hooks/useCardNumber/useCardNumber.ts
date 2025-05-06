import { ERROR_MESSAGE } from '@/constants';
import { useForm } from '@/hooks/useForm';
import { CardNumberInput } from '@/types/input';
import { isValidCardNumber, getCardBrand } from './hooks';

export default function useCardNumber() {
  const {
    value: cardNumber,
    errors: cardNumberErrors,
    register: cardNumberRegister,
  } = useForm<CardNumberInput>({
    defaultValues: {
      cardNumber: '',
    },
    validation: {
      cardNumber: {
        required: true,
        length: 4,
        errorMessage: ERROR_MESSAGE.cardNumber,
      },
    },
  });

  // 기존 isValid 대신 아래처럼 사용
  const isCardNumberIsValid = isValidCardNumber(cardNumber.cardNumber);
  const cardBrand = getCardBrand(cardNumber.cardNumber);

  return {
    cardNumberErrors,
    isCardNumberIsValid,
    cardNumber,
    cardNumberRegister,
  };
}
