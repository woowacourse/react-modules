import {isLengthBetween} from '../utils/validation';

const MIN_LENGTH = 14;
const MAX_LENGTH = 16;

const addBit = (count: number, cardNumber: string) => {
  if (cardNumber.length <= count) return 0;

  return Number(
    cardNumber
      .slice(0, count)
      .split('')
      .reduce((acc, curr) => acc + curr)
  );
};

const useCardBrand = () => {
  const findBrand = (cardNumber: string) => {
    if (!isLengthBetween(cardNumber, MIN_LENGTH, MAX_LENGTH)) return;

    if (cardNumber.length === 14) {
      if (cardNumber.startsWith('36')) return 'Diners';
    }

    if (cardNumber.length === 15) {
      if (cardNumber.startsWith('34') || cardNumber.startsWith('37'))
        return 'AMEX';
    }

    if (cardNumber.length === 16) {
      if (cardNumber.startsWith('4')) return 'Visa';

      const addTwoBit = addBit(2, cardNumber);
      const addThreeBit = addBit(3, cardNumber);
      const addFourBit = addBit(4, cardNumber);
      const addSixBit = addBit(6, cardNumber);

      if (addTwoBit >= 51 && addTwoBit <= 55) return 'MasterCard';

      if (addThreeBit >= 624 && addThreeBit <= 626) return 'Union';
      if (addFourBit >= 6282 && addFourBit <= 6288) return 'Union';
      if (addSixBit >= 622126 && addSixBit <= 622925) return 'Union';
    }
  };

  return {findBrand};
};
export default useCardBrand;
