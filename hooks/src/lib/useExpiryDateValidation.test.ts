import { renderHook } from "@testing-library/react";
import ERROR_MESSAGE from "./constants/errorMessage";
import useExpiryDateValidation from "./useExpiryDateValidation";

describe("카드 만료 날짜 입력에 대한 useExpiryDateValidation 커스텀 훅 테스트", () => {
  it("모든 입력이 유효할 경우, isValid는 true여야 한다", () => {
    const { result } = renderHook(() => useExpiryDateValidation({ month: "12", year: "23" }));
    expect(result.current.validationResult.isValid).toBe(true);
    expect(result.current.validationResult.errorMessage).toBe("");
  });

  it("월이 숫자가 아닐 경우, 오류 메시지를 반환해야 한다", () => {
    const { result } = renderHook(() => useExpiryDateValidation({ month: "ab", year: "23" }));
    expect(result.current.validationResult.isValid).toBe(false);
    expect(result.current.validationResult.errorMessage).toBe(ERROR_MESSAGE.ONLY_NUMBER);
  });

  it("월이 범위를 벗어날 경우, 오류 메시지를 반환해야 한다", () => {
    const { result } = renderHook(() => useExpiryDateValidation({ month: "13", year: "23" }));
    expect(result.current.validationResult.isValid).toBe(false);
    expect(result.current.validationResult.errorMessage).toBe(ERROR_MESSAGE.OUT_OF_RANGE_MONTH);
  });

  it("년도가 숫자가 아닐 경우, 오류 메시지를 반환해야 한다", () => {
    const { result } = renderHook(() => useExpiryDateValidation({ month: "12", year: "xy" }));
    expect(result.current.validationResult.isValid).toBe(false);
    expect(result.current.validationResult.errorMessage).toBe(ERROR_MESSAGE.ONLY_NUMBER);
  });

  it("년도의 길이가 부적절할 경우, 오류 메시지를 반환해야 한다", () => {
    const { result } = renderHook(() => useExpiryDateValidation({ month: "12", year: "2" }));
    expect(result.current.validationResult.isValid).toBe(false);
    expect(result.current.validationResult.errorMessage).toBe(ERROR_MESSAGE.INVALID_YEAR_LENGTH);
  });
});
