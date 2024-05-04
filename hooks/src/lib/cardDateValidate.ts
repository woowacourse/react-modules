import ERROR_MESSAGES from './constants/error';
import {
  CARD_NUMBER,
  CVC_LIMIT,
  DOUBLE_BLANK,
  MONTH_RANGE,
  PASSWORD,
  UPPERCASE_AND_SPACE_ONLY,
  YEAR_RANGE,
} from './constants/cardDataValidation';

function throwIfNoneMaxLength(value: string, maxLength: number) {
  if (value.length !== maxLength) {
    throw new Error(`${maxLength}자로 입력해주세요.`);
  }
}
function throwIfTrimBlank(value: string) {
  if (value.trim() === '' && value !== '') {
    throw new Error(ERROR_MESSAGES.INVALID_TRIM_BLANK);
  }
}

function throwIfDoubleBlank(value: string) {
  if (DOUBLE_BLANK.test(value)) {
    throw new Error(ERROR_MESSAGES.INVALID_DOUBLE_BLANK);
  }
}

function throwIfNoneNumber(value: string) {
  if (!Number.isInteger(Number(value))) {
    throw new Error(ERROR_MESSAGES.INVALID_ONLY_NUMBER);
  }
}

function throwIfEmpty(value: string) {
  if (value.length === 0) {
    return true;
  }
}

function validateMonth(value: string) {
  if (throwIfEmpty(value) || value === '0') return;
  const month = Number(value);
  if (!(MONTH_RANGE.MIN <= month && month <= MONTH_RANGE.MAX)) {
    throw new Error(ERROR_MESSAGES.INVALID_MONTH);
  }
}

function validateYear(value: string) {
  if (throwIfEmpty(value)) return;
  const year = Number(value);
  if (!(YEAR_RANGE.MIN <= year && year <= YEAR_RANGE.MAX)) {
    throw new Error(ERROR_MESSAGES.INVALID_YEAR);
  }
}

function throwIfNoneUpperCase(value: string) {
  if (!UPPERCASE_AND_SPACE_ONLY.test(value) && value.length !== 0) {
    throw new Error(ERROR_MESSAGES.INVALID_ONLY_UPPERCASE);
  }
}

interface ValidationMap {
  [key: string]: (value: string) => void;
}

export const Validation: ValidationMap = {
  cardNumber: (value: string) => {
    throwIfTrimBlank(value);
    throwIfNoneNumber(value);
    throwIfNoneMaxLength(value, CARD_NUMBER.FIELD_LENGTH);
  },
  month: (value: string) => {
    throwIfTrimBlank(value);
    throwIfNoneNumber(value);
    validateMonth(value);
  },
  year: (value: string) => {
    throwIfTrimBlank(value);
    throwIfNoneNumber(value);
    validateYear(value);
  },
  userName: (value: string) => {
    throwIfTrimBlank(value);
    throwIfDoubleBlank(value);
    throwIfNoneUpperCase(value);
  },
  CVC: (value: string) => {
    throwIfTrimBlank(value);
    throwIfNoneNumber(value);
    throwIfNoneMaxLength(value, CVC_LIMIT.FIELD_LENGTH);
  },

  password: (value: string) => {
    throwIfTrimBlank(value);
    throwIfNoneNumber(value);
    throwIfNoneMaxLength(value, PASSWORD.FIELD_LENGTH);
  },
};
