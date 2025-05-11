import validation from '../validation';
import { NO_SPACE_REGEX } from './constants/regex';

const validateCardNumber = (cardNumber: string) => {
  const errorObject = {
    errorState: false,
    errorMessage: ''
  };

  const formattedCardNumber = cardNumber.replace(NO_SPACE_REGEX, '');

  if (!validation.isNumber(formattedCardNumber) && formattedCardNumber !== '') {
    return { errorState: true, errorMessage: '숫자만 입력하세요.' };
  }

  return errorObject;
};

export default validateCardNumber;
