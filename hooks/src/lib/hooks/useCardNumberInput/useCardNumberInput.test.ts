import { renderHook, act } from "@testing-library/react";
import useCardNumberInput from "./useCardNumberInput";
import ERROR_MESSAGE from "../constants/errorMessage";

describe("useCardNumberInput", () => {
  it("초기 상태는 빈 문자열이며 유효하지 않음", () => {
    const { result } = renderHook(() => useCardNumberInput());

    expect(result.current.isValid).toEqual(false);
    expect(result.current.errorMessage).toBe("");
  });

  describe("유효한 카드 번호", () => {
    it("VISA", async () => {
      const { result } = renderHook(() => useCardNumberInput());

      act(() => {
        result.current.handleChange({
          target: { value: "4123123412341234" },
        } as React.ChangeEvent<HTMLInputElement>);
      });

      expect(result.current.formattedCardNumber).toEqual("4123 1234 1234 1234");
      expect(result.current.errorMessage).toBe("");
      expect(result.current.cardBrand).toBe("VISA");
    });

    test.each([
      ["5123123412341234", "5123 1234 1234 1234"],
      ["5523123412341234", "5523 1234 1234 1234"],
    ])("MASTER (%s)", (input, expectedFormat) => {
      const { result } = renderHook(() => useCardNumberInput());

      act(() => {
        result.current.handleChange({
          target: { value: input },
        } as React.ChangeEvent<HTMLInputElement>);
      });

      expect(result.current.formattedCardNumber).toEqual(expectedFormat);
      expect(result.current.errorMessage).toBe("");
      expect(result.current.cardBrand).toBe("MASTERCARD");
    });

    it("DINERS", async () => {
      const { result } = renderHook(() => useCardNumberInput());

      act(() => {
        result.current.handleChange({
          target: { value: "36123456789012" },
        } as React.ChangeEvent<HTMLInputElement>);
      });

      expect(result.current.formattedCardNumber).toEqual("3612 345678 9012");
      expect(result.current.errorMessage).toBe("");
      expect(result.current.cardBrand).toBe("DINERS");
    });

    test.each([
      ["341234567890123", "3412 345678 90123"],
      ["371234567890123", "3712 345678 90123"],
    ])("AMEX (%s)", (input, expectedFormat) => {
      const { result } = renderHook(() => useCardNumberInput());

      act(() => {
        result.current.handleChange({
          target: { value: input },
        } as React.ChangeEvent<HTMLInputElement>);
      });

      expect(result.current.formattedCardNumber).toEqual(expectedFormat);
      expect(result.current.errorMessage).toBe("");
      expect(result.current.cardBrand).toBe("AMEX");
    });

    test.each([
      ["6221261234567890", "6221 2612 3456 7890"],
      ["6229251234567890", "6229 2512 3456 7890"],
      ["6240123456789012", "6240 1234 5678 9012"],
      ["6260123456789012", "6260 1234 5678 9012"],
      ["6282123456789012", "6282 1234 5678 9012"],
      ["6288123456789012", "6288 1234 5678 9012"],
    ])("UNIONPAY (%s)", (input, expectedFormat) => {
      const { result } = renderHook(() => useCardNumberInput());

      act(() => {
        result.current.handleChange({
          target: { value: input },
        } as React.ChangeEvent<HTMLInputElement>);
      });

      expect(result.current.formattedCardNumber).toEqual(expectedFormat);
      expect(result.current.errorMessage).toBe("");
      expect(result.current.cardBrand).toBe("UNIONPAY");
    });
  });

  it("카드사 조건은 충족했지만, 요구 길이 만큼 숫자를 입력하지 않은 경우", () => {
    const { result } = renderHook(() => useCardNumberInput());

    act(() => {
      result.current.handleChange({
        target: { value: "498790" },
      } as React.ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.isValid).toBe(false);
    expect(result.current.cardBrand).toBe("VISA");
    expect(result.current.errorMessage).toBe(ERROR_MESSAGE.CARD_NUMBER.INVALID);
  });

  it("입력값이 너무 길 경우 최대 길이까지만 유지됨", () => {
    const { result } = renderHook(() => useCardNumberInput());

    act(() => {
      result.current.handleChange({
        target: {
          value: "41231234123412341234567890",
        },
      } as React.ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.cardNumber.length).toBeLessThanOrEqual(19);
  });

  it("지원되지 않는 카드사인 경우", () => {
    const { result } = renderHook(() => useCardNumberInput());

    act(() => {
      result.current.handleChange({
        target: {
          value: "9912345678901234",
        },
      } as React.ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.cardBrand).toBeNull();
    expect(result.current.isValid).toBe(false);
    expect(result.current.errorMessage).toBe(ERROR_MESSAGE.CARD_NUMBER.INVALID);
  });
});
