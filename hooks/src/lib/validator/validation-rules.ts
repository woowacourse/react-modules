import { CVC_LENGTH, CARD_NUMBER_LENGTH, PASSWORD_LENGTH } from "../constants";

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
    INVALID_LENGTH: {
      check: (value: string) => value.length === CARD_NUMBER_LENGTH,
      message: CARD_NUMBER_ERROR_MESSAGES.INVALID_LENGTH,
    },
    INVALID_FORMAT: {
      check: (value: string) => /^\d+$/.test(value),
      message: CARD_NUMBER_ERROR_MESSAGES.INVALID_FORMAT,
    },
  },
  strictCardNumber: {
    INVALID_NUMBER: {
      check: (value: string) => isNumeric(value),
      message: CARD_NUMBER_ERROR_MESSAGES.INVALID_NUMBER,
    },
    INVALID_LENGTH: {
      check: (value: string) => value.length === CARD_NUMBER_LENGTH,
      message: CARD_NUMBER_ERROR_MESSAGES.INVALID_LENGTH,
    },
    INVALID_FORMAT: {
      check: (value: string) => /^\d+$/.test(value),
      message: CARD_NUMBER_ERROR_MESSAGES.INVALID_FORMAT,
    },
    INVALID_CHECKSUM: {
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
