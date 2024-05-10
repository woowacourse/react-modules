import { renderHook } from "@testing-library/react";
import useCardBrand from "./useCardBrand";

describe("카드 브랜드 판별 테스트 ", () => {
  describe("AMEX 카드", () => {
    test.each(["341111111111111", "371111111111111"])(
      '카드 번호가 34 또는 37로 시작하면 "AMEX"와 maxLength 15를 반환한다. (입력: %s)',
      (inputNumber) => {
        const { result } = renderHook(() => useCardBrand(inputNumber));
        const expectedResult = { cardBrand: "AMEX", maxLength: 15 };

        expect(result.current).toEqual(expectedResult);
      }
    );
  });

  describe("Diners 카드", () => {
    it('카드 번호가 36으로 시작하면 "Diners"와 maxLength 14를 반환한다. (입력: 36111111111111)', () => {
      const { result } = renderHook(() => useCardBrand("36111111111111"));
      const expectedResult = { cardBrand: "Diners", maxLength: 14 };

      expect(result.current).toEqual(expectedResult);
    });
  });

  describe("Visa 카드", () => {
    it('카드 번호가 4로 시작하면 "Visa"와 maxLength 16를 반환한다. (입력: 46111111111111)', () => {
      const { result } = renderHook(() => useCardBrand("46111111111111"));
      const expectedResult = { cardBrand: "Visa", maxLength: 16 };

      expect(result.current).toEqual(expectedResult);
    });
  });

  describe("MasterCard 카드", () => {
    test.each(["511111111111111", "551111111111111"])(
      '카드 번호가 51~55로 시작하면 "MasterCard"와 maxLength 16를 반환한다. (입력: %s)',
      (inputNumber) => {
        const { result } = renderHook(() => useCardBrand(inputNumber));
        const expectedResult = { cardBrand: "MasterCard", maxLength: 16 };

        expect(result.current).toEqual(expectedResult);
      }
    );
  });

  describe("UnionPay 카드", () => {
    test.each([
      "6221260000000000",
      "6229250000000000",
      "6240000000000000",
      "6260000000000000",
      "6282000000000000",
      "6288000000000000",
    ])(
      '카드 번호가 622126~622925, 624~626 또는 6282~6288로 시작하면 "UnionPay"와 maxLength 16를 반환한다. (입력: %s)',
      (inputNumber) => {
        const { result } = renderHook(() => useCardBrand(inputNumber));
        const expectedResult = { cardBrand: "UnionPay", maxLength: 16 };

        expect(result.current).toEqual(expectedResult);
      }
    );
  });

  describe("카드 브랜드가 존재하지 않는 카드", () => {
    it("카드 브랜드 조건에 부합하지 않을 경우 null과 maxLength 16을 반환한다. (입력: 11111111111111)", () => {
      const { result } = renderHook(() => useCardBrand("11111111111111"));
      const expectedResult = { cardBrand: null, maxLength: 16 };

      expect(result.current).toEqual(expectedResult);
    });
  });
});
