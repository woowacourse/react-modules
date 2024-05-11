import { renderHook } from "@testing-library/react";
import useCardNumbers from "./useCardNumbers";
import { act } from "react";
import { MAX_LENGTH_ERROR_MESSAGE } from "../../constants/errorMessage";

describe("useCardNumbers 테스트", () => {
  describe("초기 cardNumbers 상태 확인", () => {
    test("초기 cardNumbers 상태는 빈 문자열이어야 한다.", () => {
      const { result } = renderHook(() => useCardNumbers());

      expect(result.current.cardNumbers).toStrictEqual("");
      expect(result.current.cardNumberError).toStrictEqual(false);
    });
  });

  describe("cardBrand 확인", () => {
    test.each([
      {
        input: "1234123412341234",
        expected: "domestic",
      },
      {
        input: "4123123412341234",
        expected: "visa",
      },
      {
        input: "5112123412341234",
        expected: "masterCard",
      },
      {
        input: "5512123412341234",
        expected: "masterCard",
      },
      {
        input: "36121234123412",
        expected: "diners",
      },
      {
        input: "341212341234123",
        expected: "amex",
      },
      {
        input: "371212341234123",
        expected: "amex",
      },
      {
        input: "6242123412341234",
        expected: "unionPay",
      },
      {
        input: "6262123412341234",
        expected: "unionPay",
      },
      {
        input: "6282123412341234",
        expected: "unionPay",
      },
      {
        input: "6288123412341234",
        expected: "unionPay",
      },
      {
        input: "6221261212341234",
        expected: "unionPay",
      },
      {
        input: "6229251212341234",
        expected: "unionPay",
      },
    ])(
      "입력 값이 $input 일 때 cardBrand가 $expected 여야 한다.",
      ({ input, expected }) => {
        const { result } = renderHook(() => useCardNumbers());
        act(() => {
          // input.forEach((value) => {
          result.current.handleCardNumbersChange(input);
          // });
        });
        expect(result.current.cardBrand).toBe(expected);
      }
    );
  });

  describe("cardNumbers 포맷팅 확인", () => {
    test.each([
      {
        input: "1234123412341234",
        brand: "domestic",
        expected: "1234 1234 1234 1234",
      },
      {
        input: "4123123412341234",
        brand: "visa",
        expected: "4123 1234 1234 1234",
      },
      {
        input: "5112123412341234",
        brand: "masterCard",
        expected: "5112 1234 1234 1234",
      },
      {
        input: "5512123412341234",
        brand: "masterCard",
        expected: "5512 1234 1234 1234",
      },
      {
        input: "36121234123412",
        brand: "diners",
        expected: "3612 123412 3412",
      },
      {
        input: "341212341234123",
        brand: "amex",
        expected: "3412 123412 34123",
      },
      {
        input: "371212341234123",
        brand: "amex",
        expected: "3712 123412 34123",
      },
      {
        input: "6242123412341234",
        brand: "unionPay",
        expected: "6242 1234 1234 1234",
      },
      {
        input: "6262123412341234",
        brand: "unionPay",
        expected: "6262 1234 1234 1234",
      },
      {
        input: "6282123412341234",
        brand: "unionPay",
        expected: "6282 1234 1234 1234",
      },
      {
        input: "6288123412341234",
        brand: "unionPay",
        expected: "6288 1234 1234 1234",
      },
      {
        input: "6221261212341234",
        brand: "unionPay",
        expected: "6221 2612 1234 1234",
      },
      {
        input: "6229251212341234",
        brand: "unionPay",
        expected: "6229 2512 1234 1234",
      },
    ])(
      "입력 값이 $input 이고 브랜드가 $brand 일 때 formattedCardNumbers가 $expected 여야 한다.",
      ({ input, expected }) => {
        const { result } = renderHook(() => useCardNumbers());
        act(() => {
          result.current.handleCardNumbersChange(input);
        });
        expect(result.current.formattedCardNumbers).toBe(expected);
      }
    );
  });
});
describe("useCardNumbers 예외 테스트", () => {
  describe("입력값에 따른 에러 발생 여부 확인", () => {
    test.each([
      {
        input: "1",
        expected: true,
      },
      {
        input: "12",
        expected: true,
      },
      {
        input: "에러발생!",
        expected: true,
      },
    ])(
      "입력 값이 $input 일 때 cardNumberError가 $expected 여야 한다.",
      ({ input, expected }) => {
        const { result } = renderHook(() => useCardNumbers());
        act(() => {
          result.current.handleCardNumbersChange(input);
        });
        expect(result.current.cardNumberError).toBe(expected);
      }
    );
  });

  describe("cardNumbers 포맷팅 확인", () => {
    test.each([
      {
        input: "1234",
        brand: "domestic",
        expected: MAX_LENGTH_ERROR_MESSAGE(16),
      },
      {
        input: "3666",
        brand: "diners",
        expected: MAX_LENGTH_ERROR_MESSAGE(14),
      },
      {
        input: "3456",
        brand: "amex",
        expected: MAX_LENGTH_ERROR_MESSAGE(15),
      },
    ])(
      "입력 값이 $input 이고 브랜드가 $brand 일 때 에러메세지가 $expected 여야 한다.",
      ({ input, expected }) => {
        const { result } = renderHook(() => useCardNumbers());
        act(() => {
          result.current.handleCardNumbersChange(input);
        });
        expect(result.current.getCardNumbersErrorMessage()).toBe(expected);
      }
    );
  });
});
