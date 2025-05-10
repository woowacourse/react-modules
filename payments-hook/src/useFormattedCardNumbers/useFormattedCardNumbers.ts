import { useCardNumbers } from '../lib';
import getCardNetwork from '../useCardNumbers/getCardNetwork';
import { CardNumbersKeys } from '../useCardNumbers/useCardNumbers';
import CARD_NUMBER_LENGTH_BY_POSITION_MAP from './cardNumberlengthMap';
import { splitCardNumberByPosition } from './splitCardNumberByPosition';

const positionKeys: CardNumbersKeys[] = [
  'FIRST',
  'SECOND',
  'THIRD',
  'FOURTH',
] as const;

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

    const format = CARD_NUMBER_LENGTH_BY_POSITION_MAP[cardNetWorks];
    const parts = splitCardNumberByPosition({
      input,
      format,
      positionKeys,
    });

    parts.forEach(({ key, part }) => {
      const syntheticEvent = {
        target: { value: part },
      } as React.ChangeEvent<HTMLInputElement>;
      handleCardNumbersChange({ target: key })(syntheticEvent);
    });
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
