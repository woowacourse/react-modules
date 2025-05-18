import { CARD_RULES } from '../CardCompany/checkCompany';
import { CardCompany } from '../types/cardCompany';
import { extractDigits } from '../utils/extractDigits';

export function validateCardNumber(
  cardNumber: string,
  company: CardCompany
): {
  errorState: boolean;
  errorMessage: string;
} {
  const digitsOnly = extractDigits(cardNumber);

  if (digitsOnly.length === 0) {
    return { errorState: false, errorMessage: '' };
  }

  if (company === 'Unknown') {
    return { errorState: false, errorMessage: '' };
  }

  const rule = CARD_RULES[company];

  if (rule && digitsOnly.length !== rule.validLength) {
    return {
      errorState: true,
      errorMessage: `${company} 카드는 ${rule.validLength}자리 숫자를 입력하세요.`
    };
  }

  return { errorState: false, errorMessage: '' };
}
