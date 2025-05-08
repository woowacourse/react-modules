import { renderHook, act } from "@testing-library/react";
import useCardNumber from "./index";

describe("useCardNumber", () => {
  it("입력값이 정확히 업데이트 되어야 한다.", () => {
    const userInput = "1234";
    const { result } = renderHook(() => useCardNumber());

    act(() => {
      result.current.handleCardNumberChange(userInput);
    });
    expect(result.current.cardNumber).toBe(userInput);
  });

  it("카드 번호에 문자열을 입력하면 오류가 발생해야한다.", () => {
    const invalidInput = "ㅁㅁㅁㅁ";
    const { result } = renderHook(() => useCardNumber());

    act(() => {
      result.current.handleCardNumberChange(invalidInput);
    });

    expect(result.current.isValid).toBe(false);
    expect(result.current.errorMessage).toBe("숫자만 입력해주세요.");
  });

  it("카드 타입이 정확히 식별되어야 한다.", () => {
    const { result } = renderHook(() => useCardNumber());

    act(() => {
      result.current.handleCardNumberChange("36123456789012");
    });
    expect(result.current.cardType).toBe("diners");

    act(() => {
      result.current.handleCardNumberChange("341234567890123");
    });
    expect(result.current.cardType).toBe("amex");

    act(() => {
      result.current.handleCardNumberChange("6221261234567890");
    });
    expect(result.current.cardType).toBe("unionpay");
  });

  it("카드 번호가 올바르게 포맷팅되어야 한다.", () => {
    const { result } = renderHook(() => useCardNumber());

    act(() => {
      result.current.handleCardNumberChange("36123456789012");
    });
    expect(result.current.getFormattedCardNumber()).toBe("3612 345678 9012");

    act(() => {
      result.current.handleCardNumberChange("341234567890123");
    });
    expect(result.current.getFormattedCardNumber()).toBe("3412 345678 90123");

    act(() => {
      result.current.handleCardNumberChange("6221261234567890");
    });
    expect(result.current.getFormattedCardNumber()).toBe("6221 2612 3456 7890");
  });
});
