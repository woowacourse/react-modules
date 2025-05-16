import validateCardNumber from './validateCardNumber';
import { useCallback, useMemo, useState } from 'react';
import { formatByPattern, getCardBrandByBin, getPatternByBin } from './utils';
import { CARD_FORMATS } from './constants';
import { NO_SPACE_REGEX } from './constants/regex';

function useCardNumber() {
  const [cardNumber, setCardNumber] = useState<string>('');

  const cardCompany = useMemo(() => {
    const digits = cardNumber.replace(NO_SPACE_REGEX, '');
    const { name, length } = getCardBrandByBin(CARD_FORMATS, digits);
    if (length === digits.length) {
      return name;
    }

    return '';
  }, [cardNumber]);

  const handleCardNumberChange = useCallback((value: string) => {
    const digits = value.replace(NO_SPACE_REGEX, '');
    const pattern = getPatternByBin(CARD_FORMATS, digits);
    const formatted = formatByPattern(digits, pattern);

    setCardNumber(formatted);
  }, []);

  return {
    cardNumber,
    cardCompany,
    errorState: validateCardNumber(cardNumber),
    handleCardNumberChange
  };
}

export default useCardNumber;
