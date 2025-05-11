import { ErrorType } from "../../types/ErrorType";

export const CARD_TYPE = {
  visa: {
    START_NUMBER: 4,
    LENGTH: 16,
  },
  master: {
    START_NUMBER: 51,
    END_NUMBER: 55,
    LENGTH: 16,
  },
  diners: {
    START_NUMBER: 36,
    LENGTH: 14,
  },
  amex: {
    IIN_PREFIXES: [34, 37],
    LENGTH: 15,
  },
  unionPay: {
    IIN_RANGES: [
      [622126, 622925],
      [624, 626],
      [6282, 6288],
    ] as const,
    LENGTH: 16,
  },
  default: {},
};

export type CardType = keyof typeof CARD_TYPE;
export interface ValidationResult {
  numbers: string[];
  error: ErrorType[];
  cardType: CardType;
  handleCardNumberChange: (value: string) => void;
}
