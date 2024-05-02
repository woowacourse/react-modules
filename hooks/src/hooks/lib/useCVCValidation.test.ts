import { renderHook } from "@testing-library/react";
import useCVCValidation from "./useCVCValidation";
import ERROR_MESSAGE from "./constants/errorMessage";

describe("카드 CVC 입력에 대한 useCVCValidation 커스텀 훅 테스트", () => {
  it("모든 조건이 유효할 때, isValid는 true여야 한다", () => {
    const { result } = renderHook(() => useCVCValidation({ cvc: "123" }));
    expect(result.current.validationResult.isValid).toBe(true);
    expect(result.current.validationResult.errorMessage).toBe("");
  });

  it("CVC가 비어 있을 경우, 오류 메시지를 반환해야 한다", () => {
    const { result } = renderHook(() => useCVCValidation({ cvc: "" }));
    expect(result.current.validationResult.isValid).toBe(false);
    expect(result.current.validationResult.errorMessage).toBe(ERROR_MESSAGE.EMPTY_VALUE);
  });

  it("CVC에 숫자 이외의 문자가 포함된 경우, 오류 메시지를 반환해야 한다", () => {
    const { result } = renderHook(() => useCVCValidation({ cvc: "12A" }));
    expect(result.current.validationResult.isValid).toBe(false);
    expect(result.current.validationResult.errorMessage).toBe(ERROR_MESSAGE.ONLY_NUMBER);
  });

  it("CVC의 길이가 부적절할 경우, 오류 메시지를 반환해야 한다", () => {
    const { result } = renderHook(() => useCVCValidation({ cvc: "1234" }));
    expect(result.current.validationResult.isValid).toBe(false);
    expect(result.current.validationResult.errorMessage).toBe(ERROR_MESSAGE.INVALID_CVC_LENGTH);
  });

  it("CVC의 길이가 부적절할 경우 (너무 짧은 경우), 오류 메시지를 반환해야 한다", () => {
    const { result } = renderHook(() => useCVCValidation({ cvc: "12" }));
    expect(result.current.validationResult.isValid).toBe(false);
    expect(result.current.validationResult.errorMessage).toBe(ERROR_MESSAGE.INVALID_CVC_LENGTH);
  });
});
