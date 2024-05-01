import type { CardHolderErrorType } from '../types/cardHolder';
import type { CardNumberErrorType } from '../types/cardNumbers';
import { ErrorStatus } from '../types/errorStatus';

export const CardNumbersErrorMessages: Record<CardNumberErrorType, string> = {
  [ErrorStatus.IS_NOT_NUMBER]: '숫자만 입력해주세요.',
  [ErrorStatus.INVALID_LENGTH]: '카드 번호를 4자리씩 입력해주세요.',
};

export const CardHolderErrorMessages: Record<CardHolderErrorType, string> = {
  [ErrorStatus.ONLY_UPPERCASE]: '영대문자로만 입력해주세요.',
  [ErrorStatus.IS_DOUBLE_BLANK]: '빈칸이 두개 이상 포함되어 있습니다.',
};
