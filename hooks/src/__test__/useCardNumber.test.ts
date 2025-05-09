import { renderHook } from "@testing-library/react";
import { act } from "react";
import {
  defaultValidationValue,
  ERROR_MESSAGE,
} from "../lib/constants/validation";
import useCardNumber from "../lib/hooks/useCardNumber";

describe("useCardNumber", () => {
  it("초깃값은 카드 번호가 빈 문자열이고, 유효성 검증 상태가 초기 상태(에러 없음)이어야 한다.", () => {
    // given
    // when
    const { result } = renderHook(() => useCardNumber());
    const { cardNumber, cardNumberValidation } = result.current;

    // then
    expect(cardNumber).toEqual("");
    expect(cardNumberValidation).toEqual(defaultValidationValue);
  });

  describe("카드 번호가 올바르지 않은 경우", () => {
    it("카드 번호가 숫자가 아닌 경우 에러가 발생한다.", () => {
      // given
      const nonNumeric = "abcd";

      // when
      const { result } = renderHook(() => useCardNumber());

      act(() => {
        result.current.handleCardNumberChange(nonNumeric);
      });

      // then
      expect(result.current.cardNumber).toEqual(nonNumeric);
      expect(result.current.cardNumberValidation).toEqual({
        isError: true,
        errorMessage: ERROR_MESSAGE.INVALID_NUMBER,
      });
    });

    it("카드 번호의 자릿수가 14이상 16이하가 아닌 경우 에러가 발생한다.", () => {
      // given
      const invalidLength = "1111222233334";
      const minLength = 14;
      const maxLength = 16;

      // when
      const { result } = renderHook(() => useCardNumber());

      act(() => {
        result.current.handleCardNumberChange(invalidLength);
      });

      // then
      expect(result.current.cardNumber).toEqual(invalidLength);
      expect(result.current.cardNumberValidation).toEqual({
        isError: true,
        errorMessage: `${minLength}-${maxLength}${ERROR_MESSAGE.INVALID_LENGTH_RANGE}`,
      });
    });
  });

  describe("카드 번호 브랜드 식별", () => {
    it("식별되지 않는 카드 번호는 카드 브랜드 대신 null을 반환한다", () => {
      // given
      const unknownCardNumber = "1234567890123456";

      // when
      const { result } = renderHook(() => useCardNumber());

      act(() => {
        result.current.handleCardNumberChange(unknownCardNumber);
      });

      // then
      expect(result.current.cardNumber).toEqual(unknownCardNumber);
      expect(result.current.cardNumberValidation).toEqual(
        defaultValidationValue
      );
      expect(result.current.cardBrand).toBeNull();
    });

    const cardBrandTestCases = [
      {
        group: "Visa",
        description: "4로 시작하는 16자리 숫자",
        cardNumber: "4111222233334444",
        expectedCardBrand: "visa",
      },

      {
        group: "MasterCard",
        description: "51로 시작하는 16자리 숫자",
        cardNumber: "5111222233334444",
        expectedCardBrand: "masterCard",
      },
      {
        group: "MasterCard",
        description: "55로 시작하는 16자리 숫자",
        cardNumber: "5511222233334444",
        expectedCardBrand: "masterCard",
      },

      {
        group: "Diners Club",
        description: "36으로 시작하는 14자리 숫자",
        cardNumber: "36222233334444",
        expectedCardBrand: "diners",
      },

      {
        group: "American Express",
        description: "34로 시작하는 15자리 숫자",
        cardNumber: "341222233334444",
        expectedCardBrand: "amex",
      },
      {
        group: "American Express",
        description: "37로 시작하는 15자리 숫자",
        cardNumber: "371222233334444",
        expectedCardBrand: "amex",
      },

      {
        group: "UnionPay",
        description: "622126으로 시작하는 16자리 숫자 (범위 하한값)",
        cardNumber: "6221261111222233",
        expectedCardBrand: "unionPay",
      },
      {
        group: "UnionPay",
        description: "622925로 시작하는 16자리 숫자 (범위 상한값)",
        cardNumber: "6229251111222233",
        expectedCardBrand: "unionPay",
      },
      {
        group: "UnionPay",
        description: "624로 시작하는 16자리 숫자 (범위 하한값)",
        cardNumber: "6241111222233334",
        expectedCardBrand: "unionPay",
      },
      {
        group: "UnionPay",
        description: "626으로 시작하는 16자리 숫자 (범위 상한값)",
        cardNumber: "6261111222233334",
        expectedCardBrand: "unionPay",
      },
      {
        group: "UnionPay",
        description: "6282로 시작하는 16자리 숫자 (범위 하한값)",
        cardNumber: "6282111122223333",
        expectedCardBrand: "unionPay",
      },
      {
        group: "UnionPay",
        description: "6288로 시작하는 16자리 숫자 (범위 상한값)",
        cardNumber: "6288111122223333",
        expectedCardBrand: "unionPay",
      },
    ];

    const brandGroups = [
      ...new Set(cardBrandTestCases.map((test) => test.group)),
    ];

    brandGroups.forEach((brandGroup) => {
      describe(`${brandGroup} 카드 브랜드 식별`, () => {
        const testCasesForGroup = cardBrandTestCases.filter(
          (test) => test.group === brandGroup
        );

        it.each(testCasesForGroup)(
          "$description은 $expectedCardBrand 브랜드로 식별된다",
          ({ cardNumber, expectedCardBrand }) => {
            // given
            // when
            const { result } = renderHook(() => useCardNumber());

            act(() => {
              result.current.handleCardNumberChange(cardNumber);
            });

            // then
            expect(result.current.cardNumber).toEqual(cardNumber);
            expect(result.current.cardNumberValidation).toEqual(
              defaultValidationValue
            );
            expect(result.current.cardBrand).toEqual(expectedCardBrand);
          }
        );
      });
    });

    describe("카드 브랜드에 따른 포맷팅", () => {
      const formatTestCases = [
        {
          description: "Visa 카드는 4자리씩 4개 그룹으로 포맷팅된다",
          cardBrand: "visa",
          cardNumber: "4444333322221111",
          expectedFormatCardNumber: ["4444", "3333", "2222", "1111"],
        },
        {
          description: "MasterCard는 4자리씩 4개 그룹으로 포맷팅된다",
          cardBrand: "masterCard",
          cardNumber: "5111222233334444",
          expectedFormatCardNumber: ["5111", "2222", "3333", "4444"],
        },
        {
          description:
            "Diners Club 카드는 4자리-6자리-4자리 형식으로 포맷팅된다",
          cardBrand: "diners",
          cardNumber: "36222233334444",
          expectedFormatCardNumber: ["3622", "223333", "4444"],
        },
        {
          description:
            "American Express 카드는 4자리-6자리-5자리 형식으로 포맷팅된다",
          cardBrand: "amex",
          cardNumber: "341222233334444",
          expectedFormatCardNumber: ["3412", "222333", "34444"],
        },
        {
          description: "UnionPay 카드는 4자리씩 4개 그룹으로 포맷팅된다",
          cardBrand: "unionPay",
          cardNumber: "6221261111222233",
          expectedFormatCardNumber: ["6221", "2611", "1122", "2233"],
        },
      ];

      it.each(formatTestCases)(
        "$description",
        ({ cardBrand, cardNumber, expectedFormatCardNumber }) => {
          // given
          // when
          const { result } = renderHook(() => useCardNumber());

          act(() => {
            result.current.handleCardNumberChange(cardNumber);
          });

          // then
          expect(result.current.cardNumber).toEqual(cardNumber);
          expect(result.current.cardNumberValidation).toEqual(
            defaultValidationValue
          );
          expect(result.current.cardBrand).toEqual(cardBrand);
          expect(result.current.formatCardNumber).toEqual(
            expectedFormatCardNumber
          );
        }
      );

      const invalidFormatTestCases = [
        {
          description: "식별되지 않는 카드인 경우",
          cardNumber: "1234567890123456",
        },
        {
          description: "카드 번호가 비어있는 경우",
          cardNumber: "",
        },
        {
          description: "카드 번호가 유효하지 않은 경우",
          cardNumber: "abcd",
        },
        {
          description: "카드 번호가 부분적으로 입력된 경우",
          cardNumber: "4444111122",
        },
      ];

      it.each(invalidFormatTestCases)(
        "$description 빈 배열을 반환한다",
        ({ cardNumber }) => {
          // given
          // when
          const { result } = renderHook(() => useCardNumber());

          act(() => {
            result.current.handleCardNumberChange(cardNumber);
          });

          // then
          expect(result.current.cardNumber).toEqual(cardNumber);
          expect(result.current.cardBrand).toBeNull();
          expect(result.current.formatCardNumber).toEqual([]);
        }
      );
    });
  });
});
