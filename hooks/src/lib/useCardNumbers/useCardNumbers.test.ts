import { ERROR_MESSAGE, ERROR_TYPE } from "../types/ValidationResult";
import { act, renderHook } from "@testing-library/react";

import { CardGlobalBrand } from "./utils/identifyCardGLobalBrand";
import useCardNumber from "./useCardNumbers";

describe("useCardNumber 커스텀 훅 테스트", () => {
  test("제공된 initialValue로 초기화된다.", () => {
    const initialValue = "4111";
    const { result } = renderHook(() => useCardNumber(initialValue));

    expect(result.current.cardNumber).toBe(initialValue);
  });

  test("initialValue가 주어지지 않으면 빈문자열로 초기화된다.", () => {
    const { result } = renderHook(() => useCardNumber());

    expect(result.current.cardNumber).toBe("");
  });

  test("유효한 값으로 handleUpdateCardNumber를 호출하면, 유효성 검사를 통과하고 값 업데이트에 성공한다.", () => {
    const { result } = renderHook(() => useCardNumber());
    const newValue = "4111111111111111";

    act(() => {
      result.current.handleUpdateCardNumber(newValue);
    });

    expect(result.current.cardNumber).toBe(newValue);
    expect(
      result.current.validationResult && result.current.validationResult.isValid
    ).toBe(true);
    expect(result.current.cardGlobalBrand).toBe(CardGlobalBrand.VISA);
    expect(result.current.maxLength).toBe(16);
    expect(result.current.formattedCardNumber).toEqual([
      "4111",
      "1111",
      "1111",
      "1111",
    ]);
  });

  test("유효하지 않은 값으로 handleUpdateCardNumber를 호출하면, 유효성 검사에 실패하고 값 업데이트에 실패한다.", () => {
    const { result } = renderHook(() => useCardNumber());
    const updatingValue = "abc";

    act(() => {
      result.current.handleUpdateCardNumber(updatingValue);
    });

    expect(result.current.cardNumber).toBe("");
    expect(
      result.current.validationResult && result.current.validationResult.isValid
    ).toBe(false);
    expect(
      result.current.validationResult &&
        !result.current.validationResult.isValid &&
        result.current.validationResult.errorType
    ).toBe(ERROR_TYPE.numericOnly);
    expect(
      result.current.validationResult &&
        !result.current.validationResult.isValid &&
        result.current.validationResult.errorMessage
    ).toBe(ERROR_MESSAGE[ERROR_TYPE.numericOnly]);
  });
});
