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
  isValidExpiryYear,
  isNotExpiredDate,
} from "../utils/date-utils";
import { isValidLuhn } from "../utils/isValidLuhn";
import { isValidLength } from "../utils/isValidLength";
import { cardBrandChecker } from "../utils/card-brand-checker";
import { CardBrand } from "../constants/CardBrand";
import { CARD_NUMBER_LENGTH } from "./constants/card-number-length";

function makeMessageForInvalidLength(cardBrand: CardBrand): string {
  if (cardBrand === "DEFAULT") {
    return "카드 번호는 16 자리여야 합니다.";
  }
  return `${cardBrand} 카드 번호는 ${CARD_NUMBER_LENGTH[cardBrand].join(
    ", "
  )} 자리여야 합니다.`;
}

export const validationRules = {
  cvc: {
    INVALID_NUMBER: {
      check: (value: string) => isNumeric(value),
      message: CVC_ERROR_MESSAGES.INVALID_NUMBER,
    },
    INVALID_LENGTH: {
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
      check: (value: string) => /^\d+$/.test(value),
      message: CARD_NUMBER_ERROR_MESSAGES.INVALID_FORMAT,
    },
    INVALID_LENGTH: {
      check: (value: string) => isValidLength(value),
      message: (value: string) =>
        makeMessageForInvalidLength(cardBrandChecker(value)),
    },
  },
  strictCardNumber: {
    INVALID_NUMBER: {
      check: (value: string) => isNumeric(value),
      message: CARD_NUMBER_ERROR_MESSAGES.INVALID_NUMBER,
    },
    INVALID_FORMAT: {
      check: (value: string) => /^\d+$/.test(value),
      message: CARD_NUMBER_ERROR_MESSAGES.INVALID_FORMAT,
    },
    INVALID_CHECKSUM: {
      check: (value: string) => isValidLuhn(value),
      message: CARD_NUMBER_ERROR_MESSAGES.INVALID_CHECKSUM,
    },
    INVALID_LENGTH: {
      check: (value: string) => isValidLength(value),
      message: (value: string) =>
        makeMessageForInvalidLength(cardBrandChecker(value)),
    },
  },
  password: {
    INVALID_CHARACTER: {
      check: (value: string) => isNumeric(value),
      message: PASSWORD_ERROR_MESSAGES.INVALID_CHARACTER,
    },
    INVALID_FORMAT: {
      check: (value: string) => /^\d+$/.test(value),
      message: PASSWORD_ERROR_MESSAGES.INVALID_FORMAT,
    },
    INVALID_LENGTH: {
      check: (value: string) => value.length === PASSWORD_LENGTH,
      message: PASSWORD_ERROR_MESSAGES.INVALID_LENGTH,
    },
  },

  expiryDate: {
    INVALID_FORMAT: {
      check: (value: string) => isValidExpiryDateFormat(value),
      message: EXPIRY_DATE_ERROR_MESSAGES.INVALID_FORMAT,
    },
    INVALID_MONTH: {
      check: (value: string) => isValidExpiryMonth(value),
      message: EXPIRY_DATE_ERROR_MESSAGES.INVALID_MONTH,
    },
    INVALID_YEAR: {
      check: (value: string) => isValidExpiryYear(value),
      message: EXPIRY_DATE_ERROR_MESSAGES.INVALID_YEAR,
    },
    EXPIRED_DATE: {
      check: (value: string) => isNotExpiredDate(value),
      message: EXPIRY_DATE_ERROR_MESSAGES.EXPIRED_DATE,
    },
  },
} as const;
