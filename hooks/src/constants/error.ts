import type { CardHolderError } from '../types/cardHolder';
import type { CardNumbersError } from '../types/cardNumbers';
import type { CVCError } from '../types/cvc';
import type { ExpiryDateError } from '../types/expiryDate';
import type { PasswordError } from '../types/password';
import type { CardCompanyError } from '../types/cardCompany';
import { ErrorStatus } from '../types/errorStatus';

export const CARD_NUMBERS_ERROR_MESSAGES: Record<CardNumbersError, string> = {
  [ErrorStatus.IS_NOT_NUMBER]: '카드번호는 숫자만 입력해주세요.',
  [ErrorStatus.INVALID_LENGTH]: '잘못된 카드 번호입니다. 다시 입력해주세요.',
};

export const CARD_HOLDER_ERROR_MESSAGES: Record<CardHolderError, string> = {
  [ErrorStatus.ONLY_UPPERCASE]: '영대문자로만 입력해주세요.',
  [ErrorStatus.IS_DOUBLE_BLANK]: '빈칸이 두개 이상 포함되어 있습니다.',
};

export const CVC_ERROR_MESSAGES: Record<CVCError, string> = {
  [ErrorStatus.IS_NOT_NUMBER]: 'CVC는 숫자만 입력해주세요.',
  [ErrorStatus.INVALID_LENGTH]: 'CVC는 3글자 이상으로 입력해 주세요.',
};

export const PASSWORD_ERROR_MESSAGES: Record<PasswordError, string> = {
  [ErrorStatus.IS_NOT_NUMBER]: '비밀번호는 숫자만 입력해주세요.',
  [ErrorStatus.INVALID_LENGTH]: '비밀번호는 2글자만 입력해 주세요.',
};

export const EXPIRY_DATE_ERROR_MESSAGES: Record<ExpiryDateError, string> = {
  [ErrorStatus.IS_NOT_NUMBER]: '만료 일자는 숫자만 입력해주세요.',
  [ErrorStatus.INVALID_DATE]:
    '이미 만료된 카드입니다. 만료일자를 확인해 주세요.',
  [ErrorStatus.INVALID_MONTH]: '유효하지 않은 월 입력입니다.',
  [ErrorStatus.INVALID_YEAR]: '유효하지 않은 년 입력입니다.',
  [ErrorStatus.INVALID_LENGTH]: '일자는 2자리 숫자로 입력해 주세요.',
};

export const CARD_COMPANY_ERROR_MESSAGE: Record<CardCompanyError, string> = {
  [ErrorStatus.INVALID_OPTION]: '유효하지 않은 옵션입니다.',
};
