import { ErrorMessageType } from '../types';

export const NUMBER_REGEX = /^[0-9]*$/;
export const ERROR_MESSAGE: Record<string, ErrorMessageType> = {
  NUMBER_ONLY: '숫자만 입력 가능합니다.',
  MONTH_VALID: '유효하지 않은 월입니다.',
  YEAR_VALID: '유효하지 않은 연도입니다.',
};
export const MIN_MONTH = 1;
export const MAX_MONTH = 12;
export const CURRENT_YEAR = new Date().getFullYear() % 100;
