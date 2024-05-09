import {
  validateAMEX,
  validateDiners,
  validateMaster,
  validateUnion,
  validateVisa,
} from '../validator/validateCardBrand';

const useCardBrand = (cardNumbers: Record<string, string>) => {
  const fullCardNumber = Object.values(cardNumbers).reduce((acc, cur) => acc + cur);

  const isVisa = validateVisa(fullCardNumber);
  const isMaster = validateMaster(fullCardNumber);
  const isDiners = validateDiners(fullCardNumber);
  const isAMEX = validateAMEX(fullCardNumber);
  const isUnion = validateUnion(fullCardNumber);

  if (fullCardNumber.length === 14 && isDiners) {
    return {
      cardBrand: 'Diners',
      formattedCardNumbers: formatCardNumber(fullCardNumber, [4, 6, 4]),
    };
  }

  if (fullCardNumber.length === 15 && isAMEX) {
    return {
      cardBrand: 'AMEX',
      formattedCardNumbers: formatCardNumber(fullCardNumber, [4, 6, 5]),
    };
  }

  if (fullCardNumber.length === 16) {
    if (isVisa) {
      return {
        cardBrand: '비자카드',
        formattedCardNumbers: formatCardNumber(fullCardNumber, [4, 4, 4, 4]),
      };
    }

    if (isMaster) {
      return {
        cardBrand: '마스터카드',
        formattedCardNumbers: formatCardNumber(fullCardNumber, [4, 4, 4, 4]),
      };
    }

    if (isUnion) {
      return {
        cardBrand: '유니온페이',
        formattedCardNumbers: formatCardNumber(fullCardNumber, [4, 4, 4, 4]),
      };
    }
  }

  return { cardBrand: '', formattedCardNumbers: [] };
};

const formatCardNumber = (cardNumber: string, divisionUnits: number[]) => {
  const formattedCardNumbers = [cardNumber.slice(0, divisionUnits[0])];
  divisionUnits.reduce((acc, cur) => {
    formattedCardNumbers.push(cardNumber.slice(acc, acc + cur));
    return acc + cur;
  });

  return formattedCardNumbers;
};

export default useCardBrand;
