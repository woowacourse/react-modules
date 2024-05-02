import type { CardHolderErrorType } from '../types/cardHolder';
import type { CardNumberErrorType } from '../types/cardNumbers';
import { cvcErrorType } from '../types/cvc';
import { ErrorStatus } from '../types/errorStatus';
import { ExpiryDateErrorType } from '../types/expiryDate';
import { PasswordErrorType } from '../types/password';
import { CardCompanyErrorType } from '../types/cardCompany';

export const CardNumbersErrorMessages: Record<CardNumberErrorType, string> = {
  [ErrorStatus.IS_NOT_NUMBER]: '카드번호는 숫자만 입력해주세요.',
  [ErrorStatus.INVALID_LENGTH]: '카드 번호를 4자리씩 입력해주세요.',
};

export const CardHolderErrorMessages: Record<CardHolderErrorType, string> = {
  [ErrorStatus.ONLY_UPPERCASE]: '영대문자로만 입력해주세요.',
  [ErrorStatus.IS_DOUBLE_BLANK]: '빈칸이 두개 이상 포함되어 있습니다.',
};

export const CVCErrorMessages: Record<cvcErrorType, string> = {
  [ErrorStatus.IS_NOT_NUMBER]: 'CVC는 숫자만 입력해주세요.',
  [ErrorStatus.INVALID_LENGTH]: 'CVC는 3글자 이상으로 입력해 주세요.',
};

export const PasswordErrorMessages: Record<PasswordErrorType, string> = {
  [ErrorStatus.IS_NOT_NUMBER]: '비밀번호는 숫자만 입력해주세요.',
  [ErrorStatus.INVALID_LENGTH]: '비밀번호는 2글자만 입력해 주세요.',
};

export const ExpiryDateErrorMessages: Record<ExpiryDateErrorType, string> = {
  [ErrorStatus.IS_NOT_NUMBER]: '만료 일자는 숫자만 입력해주세요.',
  [ErrorStatus.INVALID_DATE]:
    '이미 만료된 카드입니다. 만료일자를 확인해 주세요.',
  [ErrorStatus.INVALID_MONTH]: '유효하지 않은 월 입력입니다.',
  [ErrorStatus.INVALID_YEAR]: '유효하지 않은 년 입력입니다.',
  [ErrorStatus.INVALID_LENGTH]: '일자는 2자리 숫자로 입력해 주세요.',
};

export const CardCompanyErrorMessage: Record<CardCompanyErrorType, string> = {
  [ErrorStatus.INVALID_OPTION]: '유효하지 않은 옵션입니다.',
};
