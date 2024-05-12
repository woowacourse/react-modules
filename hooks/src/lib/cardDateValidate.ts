import ERROR_MESSAGES from './constants/error';
import {
  CARD_BRAND_NUMBER_LENGTH,
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

function throwIfNoneValidationMonth(value: string) {
  if (throwIfEmpty(value) || value === '0') return;
  const month = Number(value);
  if (!(MONTH_RANGE.MIN <= month && month <= MONTH_RANGE.MAX)) {
    throw new Error(ERROR_MESSAGES.INVALID_MONTH);
  }
}

function throwIfNoneValidationYear(value: string) {
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

export const validateCardNumbers = (
  value: string,
  cardType: keyof typeof CARD_BRAND_NUMBER_LENGTH
) => {
  throwIfTrimBlank(value);
  throwIfNoneNumber(value);
  throwIfNoneMaxLength(value, CARD_BRAND_NUMBER_LENGTH[cardType]);
};

export const validateExpiryDate = (value: string, target: 'month' | 'year') => {
  if (target === 'month') {
    throwIfTrimBlank(value);
    throwIfNoneNumber(value);
    throwIfNoneValidationMonth(value);
  } else {
    throwIfTrimBlank(value);
    throwIfNoneNumber(value);
    throwIfNoneValidationYear(value);
  }
};

export const validateUserName = (value: string) => {
  throwIfTrimBlank(value);
  throwIfDoubleBlank(value);
  throwIfNoneUpperCase(value);
};

export const validateCVC = (value: string) => {
  throwIfTrimBlank(value);
  throwIfNoneNumber(value);
  throwIfNoneMaxLength(value, CVC_LIMIT.FIELD_LENGTH);
};

export const validatePassword = (value: string) => {
  throwIfTrimBlank(value);
  throwIfNoneNumber(value);
  throwIfNoneMaxLength(value, PASSWORD.FIELD_LENGTH);
};
