import { renderHook, act } from "@testing-library/react";
import useCardNumbers from "../hooks/useCardNumbers";

describe("useCardBrand 테스트", () => {
  describe("카드 브랜드 식별", () => {
    test.each([
      ["1234123412341234", "unknown"],
      ["4111222233334444", "visa"],
      ["5311222233334444", "master"],
      ["36123456789012", "diners"],
      ["341234567890123", "amex"],
      ["371234567890123", "amex"],
      ["6221261234567890", "unionPay"],
      ["6240123456789012", "unionPay"],
      ["6282123456789012", "unionPay"],
    ])(`입력한 카드 번호(%s)는 %s카드이다.`, (input, expectedResult) => {
      const { result } = renderHook(() => useCardNumbers());

      act(() => {
        result.current.handleCardNumbersChange(input);
      });

      expect(result.current.cardBrand).toEqual(expectedResult);
    });
  });
});
