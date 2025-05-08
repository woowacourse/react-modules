import {
  AMEX_CARD_NUMBER_LENGTH_BY_POSITION,
  DINERS_CARD_NUMBER_LENGTH_BY_POSITION,
  MASTER_CARD_NUMBER_LENGTH_BY_POSITION,
  UNIONPAY_CARD_NUMBER_LENGTH_BY_POSITION,
  VISA_CARD_NUMBER_LENGTH_BY_POSITION,
} from '../constants/cardNumberlengthByPosition';
import { useCardNumbers } from '../lib';
import getCardNetwork from '../useCardNumbers/getCardNetwork';
import { CardNetWorks } from '../useCardNumbers/useCardNumbers';

export default function useFormattedCardNumbers() {
  const { cardNumbers, handleCardNumbersChange, isError, errorMessage } =
    useCardNumbers();
  const cardNetWorks = getCardNetwork(Object.values(cardNumbers).join(''));

  const handleFormattedCardNumbersChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const input = event.target.value.trim().replaceAll(' ', '');
    console.log('input', input);
    if (!cardNetWorks) {
      handleCardNumbersChange({ target: 'FIRST' })(event);
      return;
    }

    const cardNumberLengthByPosition =
      getCardNumberLengthByPosition(cardNetWorks);

    const firstNumber = input.slice(0, cardNumberLengthByPosition.FIRST);
    const secondNumber = input.slice(
      cardNumberLengthByPosition.FIRST,
      cardNumberLengthByPosition.FIRST + cardNumberLengthByPosition.SECOND
    );
    const thirdNumber = input.slice(
      cardNumberLengthByPosition.FIRST + cardNumberLengthByPosition.SECOND,
      cardNumberLengthByPosition.FIRST +
        cardNumberLengthByPosition.SECOND +
        cardNumberLengthByPosition.THIRD
    );
    const fourthNumber = input.slice(
      cardNumberLengthByPosition.FIRST +
        cardNumberLengthByPosition.SECOND +
        cardNumberLengthByPosition.THIRD,
      cardNumberLengthByPosition.FIRST +
        cardNumberLengthByPosition.SECOND +
        cardNumberLengthByPosition.THIRD +
        cardNumberLengthByPosition.FOURTH
    );

    const firstEvent = {
      target: { value: firstNumber },
    } as React.ChangeEvent<HTMLInputElement>;
    const secondEvent = {
      target: { value: secondNumber },
    } as React.ChangeEvent<HTMLInputElement>;
    const thirdEvent = {
      target: { value: thirdNumber },
    } as React.ChangeEvent<HTMLInputElement>;
    const fourthEvent = {
      target: { value: fourthNumber },
    } as React.ChangeEvent<HTMLInputElement>;

    handleCardNumbersChange({ target: 'FIRST' })(firstEvent);
    handleCardNumbersChange({ target: 'SECOND' })(secondEvent);
    handleCardNumbersChange({ target: 'THIRD' })(thirdEvent);
    handleCardNumbersChange({ target: 'FOURTH' })(fourthEvent);
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
