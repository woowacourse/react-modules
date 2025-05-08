import { useForm } from '../../hooks/useForm';
import { CardNumberInput } from '../../types/input';
import { formatCardNumber, getCardBrand, getCardNumberMaxLength } from './utils';

export default function useCardNumber() {
  const {
    value: cardNumber,
    errors: cardNumberErrors,
    register: cardNumberRegister,
    isValid: isCardNumberValid,
  } = useForm<CardNumberInput>({
    defaultValues: {
      cardNumber: '',
    },
    validation: (value) => {
      const brand = getCardBrand(value.cardNumber);
      const maxLength = getCardNumberMaxLength(brand);

      return {
        cardNumber: {
          required: true,
          length: maxLength,
          errorMessage: brand === 'unknown' ? '' : `${brand}사의 카드 번호는 ${maxLength}자리여야 합니다.`,
        },
      };
    },
    inputRegex: {
      cardNumber: /^\d{0,16}$/,
    },
  });

  const formattedCardNumber = formatCardNumber(cardNumber.cardNumber, getCardBrand(cardNumber.cardNumber));

  return {
    cardNumberErrors,
    cardNumber,
    formattedCardNumber,
    cardNumberRegister,
    isCardNumberValid,
  };
}
