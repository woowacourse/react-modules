import validation from '../validation';
import { NO_SPACE_REGEX } from './constants/regex';

const validateCardNumber = (cardNumber: string, cardCompanyLength: number) => {
  const errorObject = {
    errorState: false,
    errorMessage: ''
  };

  const digits = cardNumber.replace(NO_SPACE_REGEX, '');

  if (!validation.isNumber(digits) && digits !== '') {
    return { errorState: true, errorMessage: '숫자만 입력하세요.' };
  }

  if (cardCompanyLength > 0 && cardCompanyLength !== digits.length) {
    return { errorState: true, errorMessage: `${cardCompanyLength}자리를 입력하세요.` };
  }

  return errorObject;
};

export default validateCardNumber;
