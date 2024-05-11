import { renderHook, act } from "@testing-library/react";
import useCardNumbers from "../hooks/useCardNumbers";

import { ERROR_MESSAGES } from "../constants/messages";
import { CARD_BRANDS_INFO } from "../constants/cardBrands";

describe("useCardNumbers 테스트", () => {
  describe("카드 브랜드별 유효성 검사", () => {
    test.each([
      ["12341234123412341", "unknown"],
      ["371234567890123", "amex"],
      ["!!!!", "unknown"],
      ["371234567890123d", "amex"],
      ["62401234567890122", "unionPay"],
    ])(
      `입력한 카드 번호(%s)가 '%s 브랜드의 카드 길이와 일치하지 않거나 숫자가 아닌 경우' 에러 메시지가 표시된다.`,
      (input, cardBrand) => {
        const maxLength = CARD_BRANDS_INFO[cardBrand].maxLength;
        const { result } = renderHook(() => useCardNumbers());

        act(() => {
          result.current.handleCardNumbersChange(input);
        });

        expect(result.current.getCardNumbersErrorMessage()).toBe(
          `${maxLength}${ERROR_MESSAGES.maxLengthNumber}`
        );
      }
    );
  });

  describe("카드 브랜드별 카드 번호 포맷팅", () => {
    test.each([
      ["1234123412341234", ["1234", "1234", "1234", "1234"]],
      ["36123456789012", ["3612", "345678", "9012"]],
      ["341234567890123", ["3412", "345678", "90123"]],
      ["371234567890123", ["3712", "345678", "90123"]],
      ["6221261234567890", ["6221", "2612", "3456", "7890"]],
      ["6240123456789012", ["6240", "1234", "5678", "9012"]],
      ["6282123456789012", ["6282", "1234", "5678", "9012"]],
    ])(`입력한 카드 번호(%s)는 %s로 포맷팅 된다.`, (input, expectedResult) => {
      const { result } = renderHook(() => useCardNumbers());

      act(() => {
        result.current.handleCardNumbersChange(input);
      });

      expect(result.current.cardNumbers).toEqual(expectedResult);
    });
  });
});
