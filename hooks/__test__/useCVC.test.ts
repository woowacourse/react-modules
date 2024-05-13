import { act, renderHook } from "@testing-library/react";
import { ERROR_MESSAGE } from "../src/lib/constants/errorMessage";
import { useCVC } from "../src/lib/hooks/useCVC";

describe("useCVC", () => {
  test("사용자가 유효한 CVC를 입력하면 유효성 검사를 통과한다", () => {
    const { result } = renderHook(() => useCVC());

    act(() => {
      result.current.handleCVCChange("123");
    });

    expect(result.current.validateCVC(result.current.CVC).isValid).toBe(true);
  });

  test("사용자가 숫자가 아닌 문자를 입력하면 유효성 검사에 실패한다", () => {
    const { result } = renderHook(() => useCVC());

    act(() => {
      result.current.handleCVCChange("12a");
    });

    expect(result.current.validateCVC(result.current.CVC).isValid).toBe(false);
    expect(result.current.validateCVC(result.current.CVC).errorMessage).toBe(
      ERROR_MESSAGE.CARD_CVC.INVALID_CHARACTERS
    );
  });

  test("사용자가 3자리가 아닌 CVC를 입력하면 유효성 검사에 실패한다", () => {
    const { result } = renderHook(() => useCVC());

    act(() => {
      result.current.handleCVCChange("1234");
    });

    expect(result.current.validateCVC(result.current.CVC).isValid).toBe(false);
    expect(result.current.validateCVC(result.current.CVC).errorMessage).toBe(
      ERROR_MESSAGE.CARD_CVC.MAX_LENGTH_EXCEEDED
    );
  });

  test("사용자가 아무런 입력을 하지 않으면 유효성 검사에 실패한다", () => {
    const { result } = renderHook(() => useCVC());

    act(() => {
      result.current.handleCVCChange("");
    });

    expect(result.current.validateCVC(result.current.CVC).isValid).toBe(false);
    expect(result.current.validateCVC(result.current.CVC).errorMessage).toBe(
      ERROR_MESSAGE.NO_INPUT
    );
  });
});
