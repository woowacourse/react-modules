import { renderHook, act } from "@testing-library/react";
import useExpiryDate from "../hooks/useExpiryDate";
import { ERROR_MESSAGES } from "../constants/messages";

describe("useExpiryDate 테스트", () => {
  test("초기 period 상태는 month와 year이 빈 문자열이어야 한다.", () => {
    const { result } = renderHook(() => useExpiryDate());

    expect(result.current.period.month).toBe("");
    expect(result.current.period.year).toBe("");
    expect(result.current.isPeriodError.month).toBeFalsy();
    expect(result.current.isPeriodError.year).toBeFalsy();
    expect(result.current.isPeriodError.expired).toBeFalsy();
  });

  test.each<["month" | "year", string, string]>([
    ["month", "13", ERROR_MESSAGES.month],
    ["month", "0", ERROR_MESSAGES.month],
    ["year", "2024", ERROR_MESSAGES.year],
  ])(
    `입력한 %s (%s)가 유효한 입력이 아닐 경우, 에러 메시지("%s")가 표시된다.`,
    (type: "month" | "year", input: string, message: string) => {
      const { result } = renderHook(() => useExpiryDate());

      act(() => {
        result.current.handlePeriodChange(type, input);
      });

      expect(result.current.getPeriodErrorMessage()).toBe(message);
    }
  );

  test.each([
    ["12", "23"],
    ["04", "24"],
  ])(
    `만료된 기간(%s월 %s년)을 입력한 경우, 에러 메시지("${ERROR_MESSAGES.expired}")가 표시된다.`,
    (month, year) => {
      const { result } = renderHook(() => useExpiryDate());

      act(() => {
        result.current.handlePeriodChange("month", month);
      });

      act(() => {
        result.current.handlePeriodChange("year", year);
      });

      expect(result.current.getPeriodErrorMessage()).toBe(
        ERROR_MESSAGES.expired
      );
    }
  );
});
