import validation from '../validation';
import { CARD_FORMATS } from './constants';
import { NO_SPACE_REGEX } from './constants/regex';
import { getCardBrandByBin } from './utils';

const validateCardNumber = (cardNumber: string) => {
  const errorObject = {
    errorState: false,
    errorMessage: ''
  };

  const formattedCardNumber = cardNumber.replace(NO_SPACE_REGEX, '');

  if (!validation.isNumber(formattedCardNumber) && formattedCardNumber !== '') {
    return { errorState: true, errorMessage: '숫자만 입력하세요.' };
  }

  const digits = cardNumber.replace(NO_SPACE_REGEX, '');
  const { length } = getCardBrandByBin(CARD_FORMATS, digits);
  if (length > 0 && length !== digits.length) {
    return { errorState: true, errorMessage: `${length}자리를 입력하세요.` };
  }

  return errorObject;
};

export default validateCardNumber;
