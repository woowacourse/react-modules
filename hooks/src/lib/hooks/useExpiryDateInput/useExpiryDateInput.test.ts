import { renderHook, act } from "@testing-library/react";
import useExpiryDateInput from "./useExpiryDateInput";
import ERROR_MESSAGE from "../constants/errorMessage";
import { CARD_INPUT } from "../constants/cardValidationInfo";

describe("useExpiryDateInput", () => {
  it("초기 상태는 빈 문자열이며 유효하고 에러 메시지는 빈 배열", () => {
    const { result } = renderHook(() => useExpiryDateInput());

    expect(result.current.expiryDateState).toEqual([
      { value: "", isValid: true },
      { value: "", isValid: true },
    ]);
    expect(result.current.errorMessages).toEqual(["", ""]);
  });

  it("모든 인풋이 숫자 2자리일 때 유효성 통과", () => {
    const { result } = renderHook(() => useExpiryDateInput());

    act(() => {
      result.current.handleInputChange(
        { target: { value: "12" } } as React.ChangeEvent<HTMLInputElement>,
        0
      );
    });
    act(() => {
      result.current.handleInputChange(
        { target: { value: "27" } } as React.ChangeEvent<HTMLInputElement>,
        1
      );
    });

    expect(result.current.expiryDateState).toEqual([
      { value: "12", isValid: true },
      { value: "27", isValid: true },
    ]);
    expect(result.current.errorMessages).toEqual(["", ""]);
  });

  it("숫자가 아닌 값이 포함되면 유효하지 않음", () => {
    const { result } = renderHook(() => useExpiryDateInput());

    act(() => {
      result.current.handleInputChange(
        { target: { value: "ab" } } as React.ChangeEvent<HTMLInputElement>,
        0
      );
    });

    expect(result.current.expiryDateState[0].isValid).toBe(false);
    expect(result.current.errorMessages[0]).toBe(ERROR_MESSAGE.REQUIRE.NUMBER);
  });

  it("길이가 부족한 값이 포함되면 유효하지 않음", () => {
    const { result } = renderHook(() => useExpiryDateInput());

    act(() => {
      result.current.handleInputChange(
        { target: { value: "1" } } as React.ChangeEvent<HTMLInputElement>,
        0
      );
    });

    expect(result.current.expiryDateState[0].isValid).toBe(false);
    expect(result.current.errorMessages[0]).toBe(
      `숫자 ${CARD_INPUT.MAX_LENGTH.EXPIRE_DATE}${ERROR_MESSAGE.REQUIRE.SPECIFIC_LENGTH}`
    );
  });

  it("유효하지 않은 월(예: 13)은 INVALID_MONTH 에러 발생", () => {
    const { result } = renderHook(() => useExpiryDateInput());

    act(() => {
      result.current.handleInputChange(
        { target: { value: "13" } } as React.ChangeEvent<HTMLInputElement>,
        0
      );
    });

    expect(result.current.expiryDateState[0].isValid).toBe(false);
    expect(result.current.errorMessages[0]).toBe(
      ERROR_MESSAGE.EXPIRY.INVALID_MONTH
    );
  });

  it("유효하지 않은 연도(예: 123)는 INVALID_YEAR 에러 발생", () => {
    const { result } = renderHook(() => useExpiryDateInput());

    act(() => {
      result.current.handleInputChange(
        { target: { value: "123" } } as React.ChangeEvent<HTMLInputElement>,
        1
      );
    });

    expect(result.current.expiryDateState[1].isValid).toBe(false);
    expect(result.current.errorMessages[1]).toBe(
      `숫자 ${CARD_INPUT.MAX_LENGTH.EXPIRE_DATE}${ERROR_MESSAGE.REQUIRE.SPECIFIC_LENGTH}`
    );

    act(() => {
      result.current.handleInputChange(
        { target: { value: "ab" } } as React.ChangeEvent<HTMLInputElement>,
        1
      );
    });

    expect(result.current.expiryDateState[1].isValid).toBe(false);
    expect(result.current.errorMessages[1]).toBe(ERROR_MESSAGE.REQUIRE.NUMBER);
  });
});
