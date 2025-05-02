/**
 * 주어진 카드 번호 문자열이 루안(Luhn) 알고리즘 체크섬을 통과하는지 검사합니다.
 *
 * @param {string} value – 숫자로만 이루어진 카드 번호 문자열
 * @returns {boolean} 유효한 카드 번호면 true, 아니면 false
 */
export function isValidLuhn(value: string): boolean {
  const digits = value
    .split("")
    .reverse()
    .map((d) => parseInt(d, 10));
  const sum = digits.reduce((acc, digit, idx) => {
    if (idx % 2 === 1) {
      const doubled = digit * 2;
      return acc + (doubled > 9 ? doubled - 9 : doubled);
    }
    return acc + digit;
  }, 0);
  return sum % 10 === 0;
}
