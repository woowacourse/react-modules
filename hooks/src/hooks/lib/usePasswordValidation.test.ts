import { renderHook } from "@testing-library/react";
import usePasswordValidation from "./usePasswordValidation";
import ERROR_MESSAGE from "./constants/errorMessage";

describe("카드 비밀번호 입력에 대한 usePasswordValidation 커스텀 훅 테스트", () => {
  it("모든 조건이 유효할 때, isValid는 true여야 한다", () => {
    const { result } = renderHook(() => usePasswordValidation({ password: "54" }));
    expect(result.current.validationResult.isValid).toBe(true);
    expect(result.current.validationResult.errorMessage).toBe("");
  });

  it("비밀번호가 비어 있을 경우, 오류 메시지를 반환해야 한다", () => {
    const { result } = renderHook(() => usePasswordValidation({ password: "" }));
    expect(result.current.validationResult.isValid).toBe(false);
    expect(result.current.validationResult.errorMessage).toBe(ERROR_MESSAGE.EMPTY_VALUE);
  });

  it("비밀번호에 숫자 이외의 문자가 포함된 경우, 오류 메시지를 반환해야 한다", () => {
    const { result } = renderHook(() => usePasswordValidation({ password: "12A" }));
    expect(result.current.validationResult.isValid).toBe(false);
    expect(result.current.validationResult.errorMessage).toBe(ERROR_MESSAGE.ONLY_NUMBER);
  });

  it("비밀번호의 길이가 부적절할 경우, 오류 메시지를 반환해야 한다", () => {
    const { result } = renderHook(() => usePasswordValidation({ password: "1234" }));
    expect(result.current.validationResult.isValid).toBe(false);
    expect(result.current.validationResult.errorMessage).toBe(ERROR_MESSAGE.INVALID_PASSWORD_LENGTH);
  });

  it("비밀번호의 길이가 부적절할 경우 (너무 짧은 경우), 오류 메시지를 반환해야 한다", () => {
    const { result } = renderHook(() => usePasswordValidation({ password: "1" }));
    expect(result.current.validationResult.isValid).toBe(false);
    expect(result.current.validationResult.errorMessage).toBe(ERROR_MESSAGE.INVALID_PASSWORD_LENGTH);
  });
});
