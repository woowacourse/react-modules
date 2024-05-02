import { renderHook } from "@testing-library/react";
import useCardNumbersValidation from "./useCardNumbersValidation";
import ERROR_MESSAGE from "./constants/errorMessage";

describe("카드 숫자 입력에 대한 useCardNumbersValidation 커스텀 훅 테스트", () => {
  it("유효한 숫자 16자리가 인자로 들어갔을 때, isValid 속성이 true가 되어야 한다", () => {
    const { result } = renderHook(() => useCardNumbersValidation({ cardNumbers: ["1234", "1234", "5479", "1234"] }));

    expect(result.current.validationResult.isValid).toBe(true);
    expect(result.current.validationResult.errorMessage).toBe("");
  });

  it("숫자가 아닌 문자가 포함되었을 때, errorMessage로 경고해야 한다", () => {
    const { result } = renderHook(() => useCardNumbersValidation({ cardNumbers: ["1234", "12a4", "5479", "1234"] }));

    expect(result.current.validationResult.isValid).toBe(false);
    expect(result.current.validationResult.errorMessage).toBe(ERROR_MESSAGE.ONLY_NUMBER);
  });

  it("4자리 미만의 숫자가 포함되었을 때, errorMessage로 경고해야 한다", () => {
    const { result } = renderHook(() => useCardNumbersValidation({ cardNumbers: ["123", "1234", "5479", "1234"] }));

    expect(result.current.validationResult.isValid).toBe(false);
    expect(result.current.validationResult.errorMessage).toBe(ERROR_MESSAGE.INVALID_CARD_NUMBER_LENGTH);
  });

  it("빈 문자열이 포함되어 있을 때, errorMessage로 경고해야 한다", () => {
    const { result } = renderHook(() => useCardNumbersValidation({ cardNumbers: ["", "1234", "5479", "1234"] }));

    expect(result.current.validationResult.isValid).toBe(false);
    expect(result.current.validationResult.errorMessage).toBe(ERROR_MESSAGE.EMPTY_VALUE);
  });
});
