/**
 * 문자열에서 숫자만 추출합니다.
 * 예: '3412-1234' → '34121234'
 */
export const extractDigits = (value: string): string => value.replace(/\D/g, '');
