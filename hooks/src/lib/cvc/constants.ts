export const CVC_ERROR_TYPES = {
  notNumber: 'notNumber',
  invalidLength: 'invalidLength',
} as const;

export type CVCErrorType = keyof typeof CVC_ERROR_TYPES;

export type ValidateCVCResult = {
  isValid: boolean;
  errorType?: CVCErrorType;
};

export const ERROR_MESSAGE: Record<CVCErrorType, string> = {
  notNumber: '숫자만 입력해주세요.',
  invalidLength: 'CVC는 세 자리만 입력해야 합니다.',
};
