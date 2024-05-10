import type { CardType } from '../utils/card/card.type';

interface CardTypeProperty {
  VALID_LENGTH: number;
  PATTERN: number[];
}

const DEFAULT_PROPERTY: CardTypeProperty = {
  VALID_LENGTH: 16,
  PATTERN: [4, 4, 4, 4],
} as const;

export const CARD_TYPE: Record<CardType, CardTypeProperty> = {
  VISA: {
    ...DEFAULT_PROPERTY,
  } as const,
  MASTERCARD: {
    ...DEFAULT_PROPERTY,
  } as const,
  DINERS: {
    VALID_LENGTH: 14,
    PATTERN: [4, 6, 4],
  } as const,
  AMEX: {
    VALID_LENGTH: 15,
    PATTERN: [4, 6, 5],
  } as const,
  UNIONPAY: DEFAULT_PROPERTY,
  DEFAULT: DEFAULT_PROPERTY,
} as const;
