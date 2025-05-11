import { CardNumbersKeys } from '../useCardNumbers/useCardNumbers';
import CARD_NUMBER_LENGTH_BY_POSITION_MAP from './cardNumberlengthMap';

type Props = {
  input: string;
  format: Record<string, number>;
  positionKeys: CardNumbersKeys[];
};

export const splitCardNumberByPosition = ({
  input,
  format,
  positionKeys,
}: Props) => {
  let currentIndex = 0;
  return positionKeys.map((key) => {
    const length = format[key];
    const part = input.slice(currentIndex, currentIndex + length);
    currentIndex += length;
    return { key, part };
  });
};
