import {
  AMEX_CARD_NUMBER_LENGTH_BY_POSITION,
  DINERS_CARD_NUMBER_LENGTH_BY_POSITION,
  MASTER_CARD_NUMBER_LENGTH_BY_POSITION,
  UNIONPAY_CARD_NUMBER_LENGTH_BY_POSITION,
  VISA_CARD_NUMBER_LENGTH_BY_POSITION,
} from '../constants/cardNumberlengthByPosition';
import { useCardNumbers } from '../lib';
import getCardNetwork from '../useCardNumbers/getCardNetwork';
import {
  CardNetWorks,
  CardNumbersKeys,
} from '../useCardNumbers/useCardNumbers';

export default function useFormattedCardNumbers() {
  const { cardNumbers, handleCardNumbersChange, isError, errorMessage } =
    useCardNumbers();
  const cardNetWorks = getCardNetwork(Object.values(cardNumbers).join(''));

  const handleFormattedCardNumbersChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const input = event.target.value.trim().replaceAll(' ', '');
    if (!cardNetWorks) {
      handleCardNumbersChange({ target: 'FIRST' })(event);
      return;
    }

    const CARD_NUMBER_LENGTH_BY_POSITION =
      getCardNumberLengthByPosition(cardNetWorks);
    const positionKeys: CardNumbersKeys[] = [
      'FIRST',
      'SECOND',
      'THIRD',
      'FOURTH',
    ] as const;

    let currentIndex = 0;
    for (const key of positionKeys) {
      const length = CARD_NUMBER_LENGTH_BY_POSITION[key];
      const part = input.slice(currentIndex, currentIndex + length);
      currentIndex += length;

      const syntheticEvent = {
        target: { value: part },
      } as React.ChangeEvent<HTMLInputElement>;

      handleCardNumbersChange({ target: key })(syntheticEvent);
    }
  };

  return {
    formattedCardNumbers: Object.values(cardNumbers)
      .filter((string) => string !== '')
      .join(' '),
    handleFormattedCardNumbersChange,
    isError,
    errorMessage,
  };
}

function getCardNumberLengthByPosition(cardNetwork: CardNetWorks) {
  switch (cardNetwork) {
    case 'VISA':
      return VISA_CARD_NUMBER_LENGTH_BY_POSITION;
    case 'MASTER':
      return MASTER_CARD_NUMBER_LENGTH_BY_POSITION;
    case 'AMEX':
      return AMEX_CARD_NUMBER_LENGTH_BY_POSITION;
    case 'DINERS':
      return DINERS_CARD_NUMBER_LENGTH_BY_POSITION;
    case 'UNIONPAY':
      return UNIONPAY_CARD_NUMBER_LENGTH_BY_POSITION;
    default:
      return null;
  }
}
