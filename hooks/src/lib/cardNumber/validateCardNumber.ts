import validation from '../validation';
import { CardNumberStateKey, CardNumberStateType } from './useCardNumber';

const validateCardNumber = (cardNumber: CardNumberStateType) => {
  const errorState = {
    first: false,
    second: false,
    third: false,
    fourth: false
  };

  const getValidationMessage = (cardNumber: CardNumberStateType) => {
    for (const [k, value] of Object.entries(cardNumber)) {
      const key = k as CardNumberStateKey;
      if (!validation.isNumber(value) && value !== '') {
        errorState[key] = true;
        return '숫자만 입력하세요.';
      }

      if (!validation.isValidLength(value, 4) && value !== '') {
        errorState[key] = true;
        return '4자리 숫자를 입력하세요.';
      }
    }

    return '';
  };

  const errorMessage = getValidationMessage(cardNumber);

  return { errorState, errorMessage };
};

export default validateCardNumber;
