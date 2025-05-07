import validation from '../validation';
import { CardNumberStateKey, CardNumberStateType } from './useCardNumber';

const validateCardNumber = (cardNumber: CardNumberStateType) => {
  const errorState = {
    first: false,
    second: false,
    third: false,
    fourth: false
  };

  let errorMessage = '';

  for (const [k, value] of Object.entries(cardNumber)) {
    const key = k as CardNumberStateKey;
    if (!validation.isNumber(value) && value !== '') {
      errorState[key] = true;
      errorMessage = '숫자만 입력하세요.';
      break;
    }

    if (!validation.isValidLength(value, 4) && value !== '') {
      errorState[key] = true;
      errorMessage = '4자리 숫자를 입력하세요.';
      break;
    }
  }

  return { errorState, errorMessage };
};

export default validateCardNumber;
