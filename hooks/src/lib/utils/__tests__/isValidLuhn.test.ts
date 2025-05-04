import { isValidLuhn } from "../isValidLuhn";

describe("isValidLuhn 함수 테스트", () => {
  test('체크섬이 올바른 카드 번호("4111111111111111", "79927398713")를 입력하면 true를 반환한다', () => {
    const validNumbers = ["4111111111111111", "79927398713"];
    validNumbers.forEach((num) => {
      expect(isValidLuhn(num)).toBe(true);
    });
  });

  test('체크섬이 올바르지 않은 카드 번호("4111111111111121", "79927398710")를 입력하면 false를 반환한다', () => {
    const invalidNumbers = ["4111111111111121", "79927398710"];
    invalidNumbers.forEach((num) => {
      expect(isValidLuhn(num)).toBe(false);
    });
  });
});
