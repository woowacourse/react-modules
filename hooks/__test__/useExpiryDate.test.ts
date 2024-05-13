import { act, renderHook } from "@testing-library/react";
import { ERROR_MESSAGE } from "../src/lib/constants/errorMessage";
import { useExpiryDate } from "../src/lib/hooks/useExpiryDate";

describe("useExpiryDate", () => {
  test("사용자가 유효한 만료일을 입력하면 유효성 검사를 통과한다", () => {
    const { result } = renderHook(() => useExpiryDate());

    act(() => {
      result.current.handleExpiryDateChange("month", "12");
      result.current.handleExpiryDateChange("year", "25");
    });

    expect(result.current.validateExpiryDate(result.current.expiryDate).isValid).toBe(true);
  });

  test("사용자가 유효하지 않은 월을 입력하면 유효성 검사에 실패한다", () => {
    const { result } = renderHook(() => useExpiryDate());

    act(() => {
      result.current.handleExpiryDateChange("month", "13");
    });

    expect(result.current.validateExpiryDate(result.current.expiryDate).isValid).toBe(false);
    expect(result.current.validateExpiryDate(result.current.expiryDate).errorMessage).toBe(
      ERROR_MESSAGE.CARD_EXPIRY_DATE.MONTH_OUT_OF_RANGE
    );
  });

  test("사용자가 유효하지 않은 년도를 입력하면 유효성 검사에 실패한다", () => {
    const { result } = renderHook(() => useExpiryDate());

    act(() => {
      result.current.handleExpiryDateChange("year", "2023");
    });

    expect(result.current.validateExpiryDate(result.current.expiryDate).isValid).toBe(false);
    expect(result.current.validateExpiryDate(result.current.expiryDate).errorMessage).toBe(
      ERROR_MESSAGE.CARD_EXPIRY_DATE.INVALID_YEAR_FORMAT
    );
  });

  test("사용자가 과거 날짜를 입력하면 유효성 검사에 실패한다", () => {
    const { result } = renderHook(() => useExpiryDate());

    act(() => {
      result.current.handleExpiryDateChange("month", "01");
      result.current.handleExpiryDateChange("year", "20");
    });

    expect(result.current.validateExpiryDate(result.current.expiryDate).isValid).toBe(false);
    expect(result.current.validateExpiryDate(result.current.expiryDate).errorMessage).toBe(
      ERROR_MESSAGE.CARD_EXPIRY_DATE.EXPIRED_CARD
    );
  });

  test("사용자가 아무런 입력을 하지 않으면 유효성 검사에 실패한다", () => {
    const { result } = renderHook(() => useExpiryDate());

    act(() => {
      result.current.handleExpiryDateChange("month", "");
      result.current.handleExpiryDateChange("year", "");
    });

    expect(result.current.validateExpiryDate(result.current.expiryDate).isValid).toBe(false);
    expect(result.current.validateExpiryDate(result.current.expiryDate).errorMessage).toBe(
      ERROR_MESSAGE.NO_INPUT
    );
  });
});
