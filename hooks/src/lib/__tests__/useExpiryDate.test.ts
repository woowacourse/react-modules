import { renderHook, act } from "@testing-library/react";
import useExpiryDate from "../hooks/useExpiryDate";
import { ERROR_MESSAGES } from "../constants/errorMessage";

describe("useExpiryDate 테스트", () => {
  test("초기 period 상태는 month와 year이 빈 문자열이어야 한다.", () => {
    const { result } = renderHook(() => useExpiryDate());

    expect(result.current.period.month).toBe("");
    expect(result.current.period.year).toBe("");
    expect(result.current.isPeriodError.month).toBeFalsy();
    expect(result.current.isPeriodError.year).toBeFalsy();
    expect(result.current.isPeriodError.expired).toBeFalsy();
  });

  test.each<
    [string, "month" | "year"]
  >([
    ["01", "month"],
    ["25", "year"],
  ])("%s는 유효한 %s이어야 한다.", (input: string, type: "month" | "year") => {
    const { result } = renderHook(() => useExpiryDate());

    act(() => {
      result.current.handlePeriodChange(type, input);
    });
    
    expect(result.current.isPeriodError[type]).toBeFalsy();
  });
});

describe("useExpiryDate 예외 테스트", () => {
  test("유효하지 않은 월을 입력했을 경우 에러 상태가 true여야 한다.", () => {
    const { result } = renderHook(() => useExpiryDate());
    act(() => {
      result.current.handlePeriodChange("month", "13");
    });
    expect(result.current.isPeriodError.month).toBeTruthy();
  });

  test.each([["100"], ["-1"]])(
    "%s가 유효하지 않은 년도일 경우 에러 상태가 true여야 한다.",
    (input) => {
      const { result } = renderHook(() => useExpiryDate());
      act(() => {
        result.current.handlePeriodChange("year", input);
      });
      expect(result.current.isPeriodError.year).toBeTruthy();
    }
  );

  test("만료된 날짜를 입력했을 경우 에러 상태가 true여야 한다.", () => {
    const { result } = renderHook(() => useExpiryDate());

    act(() => {
      result.current.handlePeriodChange("month", "12");
    });

    act(() => {
      result.current.handlePeriodChange("year", "22");
    });

    expect(result.current.isPeriodError.expired).toBeTruthy();
  });

  test("유효하지 않은 값을 입력한 경우 에러 메시지가 적절히 반환되어야 한다.", () => {
    const { result } = renderHook(() => useExpiryDate());

    act(() => {
      result.current.handlePeriodChange("month", "13");
    });

    expect(result.current.getPeriodErrorMessage()).toBe(ERROR_MESSAGES.month);
  });
});
