/**
 * 문자열이 숫자인지 확인하는 함수
 */
export function isNumeric(value: string): boolean {
  if (value === "") return false;

  const parsedNumber = Number(value);
  return !Number.isNaN(parsedNumber);
}
