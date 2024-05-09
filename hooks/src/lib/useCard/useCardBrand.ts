import {
  validateAMEX,
  validateDiners,
  validateMaster,
  validateUnion,
  validateVisa,
} from '../validator/validateCardBrand';

interface CardChecker {
  validate: (cardNumber: string) => boolean;
  format: number[];
  cardBrand: string;
}

const cardBrandChecker: Record<string, CardChecker[]> = {
  14: [
    {
      validate: validateDiners,
      format: [4, 6, 4],
      cardBrand: 'Diners',
    },
  ],
  15: [
    {
      validate: validateAMEX,
      format: [4, 6, 5],
      cardBrand: 'AMEX',
    },
  ],
  16: [
    {
      validate: validateVisa,
      format: [4, 4, 4, 4],
      cardBrand: '비자카드',
    },
    {
      validate: validateMaster,
      format: [4, 4, 4, 4],
      cardBrand: '마스터카드',
    },
    {
      validate: validateUnion,
      format: [4, 4, 4, 4],
      cardBrand: '유니온페이',
    },
  ],
};

const formatCardNumber = (cardNumber: string, divisionUnits: number[]) => {
  let start = 0;
  const formattedCardNumbers = divisionUnits.map(unit => {
    const digits = cardNumber.slice(start, start + unit);
    start += unit;
    return digits;
  });

  return formattedCardNumbers;
};

const useCardBrand = (cardNumbers: Record<string, string>) => {
  const fullCardNumber = Object.values(cardNumbers).reduce((acc, cur) => acc + cur);
  const cardBrandInfo = cardBrandChecker[fullCardNumber.length];

  if (cardBrandInfo) {
    const validType = cardBrandInfo.find(brand => brand.validate(fullCardNumber));

    if (validType) {
      return {
        cardBrand: validType.cardBrand,
        formattedCardNumbers: formatCardNumber(fullCardNumber, validType.format),
      };
    }
  }

  return { cardBrand: '', formattedCardNumbers: [] };
};

export default useCardBrand;
