import { CVC_LENGTH, PASSWORD_LENGTH } from "../constants";
import {
  CVC_ERROR_MESSAGES,
  CARD_NUMBER_ERROR_MESSAGES,
  PASSWORD_ERROR_MESSAGES,
  EXPIRY_DATE_ERROR_MESSAGES,
} from "./constants/error-messages";
import { isNumeric } from "../utils/isNumeric";
import {
  isValidExpiryDateFormat,
  isValidExpiryMonth,
  isNotExpiredDate,
} from "../utils/date-utils";
import { isValidLuhn } from "../utils/isValidLuhn";
import { isValidLength } from "../utils/isValidLength";
import { checkCardBrand } from "../utils/card-brand-checker";
import type { CardBrand } from "../constants/CardBrand";
import {
  CARD_NUMBER_LENGTH,
  CLIENT_CARD_NUMBER_LENGTH,
} from "./constants/card-number-length";

function makeMessageForInvalidLength(
  cardBrand: CardBrand,
  cardNumberLength: Record<CardBrand, number[]>
): string {
  if (cardBrand === "DEFAULT") {
    return "카드 번호는 16 자리여야 합니다.";
  }
  return `${cardBrand} 카드 번호는 ${cardNumberLength[cardBrand].join(
    ", "
  )} 자리여야 합니다.`;
}

export const validationRules = {
  cvc: {
    INVALID_NUMBER: {
      check: (value: string) => isNumeric(value),
      message: CVC_ERROR_MESSAGES.INVALID_NUMBER,
    },
    INVALID_FORMAT: {
      applyWhen: isNumeric,
      check: (value: string) => /^\d+$/.test(value),
      message: CARD_NUMBER_ERROR_MESSAGES.INVALID_FORMAT,
    },
    INVALID_LENGTH: {
      applyWhen: (value: string) => /^\d+$/.test(value),
      check: (value: string) => value.length === CVC_LENGTH,
      message: CVC_ERROR_MESSAGES.INVALID_LENGTH,
    },
  },

  cardNumber: {
    INVALID_NUMBER: {
      check: (value: string) => isNumeric(value),
      message: CARD_NUMBER_ERROR_MESSAGES.INVALID_NUMBER,
    },

    INVALID_FORMAT: {
      applyWhen: isNumeric,
      check: (value: string) => /^\d+$/.test(value),
      message: CARD_NUMBER_ERROR_MESSAGES.INVALID_FORMAT,
    },
    INVALID_LENGTH: {
      applyWhen: (value: string) => /^\d+$/.test(value),
      check: (value: string) => isValidLength(value, CLIENT_CARD_NUMBER_LENGTH),
      message: (value: string) =>
        makeMessageForInvalidLength(
          checkCardBrand(value),
          CLIENT_CARD_NUMBER_LENGTH
        ),
    },
  },
  strictCardNumber: {
    INVALID_NUMBER: {
      check: (value: string) => isNumeric(value),
      message: CARD_NUMBER_ERROR_MESSAGES.INVALID_NUMBER,
    },
    INVALID_FORMAT: {
      applyWhen: isNumeric,
      check: (value: string) => /^\d+$/.test(value),
      message: CARD_NUMBER_ERROR_MESSAGES.INVALID_FORMAT,
    },

    INVALID_LENGTH: {
      applyWhen: (value: string) => /^\d+$/.test(value),
      check: (value: string) => isValidLength(value, CARD_NUMBER_LENGTH),
      message: (value: string) =>
        makeMessageForInvalidLength(checkCardBrand(value), CARD_NUMBER_LENGTH),
    },
    INVALID_CHECKSUM: {
      applyWhen: (value: string) => isValidLength(value, CARD_NUMBER_LENGTH),
      check: (value: string) => isValidLuhn(value),
      message: CARD_NUMBER_ERROR_MESSAGES.INVALID_CHECKSUM,
    },
  },
  password: {
    INVALID_CHARACTER: {
      check: (value: string) => isNumeric(value),
      message: PASSWORD_ERROR_MESSAGES.INVALID_CHARACTER,
    },
    INVALID_FORMAT: {
      applyWhen: isNumeric,
      check: (value: string) => /^\d+$/.test(value),
      message: PASSWORD_ERROR_MESSAGES.INVALID_FORMAT,
    },
    INVALID_LENGTH: {
      applyWhen: (value: string) => /^\d+$/.test(value),
      check: (value: string) => value.length === PASSWORD_LENGTH,
      message: PASSWORD_ERROR_MESSAGES.INVALID_LENGTH,
    },
  },

  expiryDate: {
    INVALID_FORMAT: {
      check: isValidExpiryDateFormat,
      message: EXPIRY_DATE_ERROR_MESSAGES.INVALID_FORMAT,
    },
    INVALID_MONTH: {
      applyWhen: isValidExpiryDateFormat,
      check: isValidExpiryMonth,
      message: EXPIRY_DATE_ERROR_MESSAGES.INVALID_MONTH,
    },
    EXPIRED_DATE: {
      applyWhen: isValidExpiryDateFormat,
      check: isNotExpiredDate,
      message: EXPIRY_DATE_ERROR_MESSAGES.EXPIRED_DATE,
    },
  },
} as const;
