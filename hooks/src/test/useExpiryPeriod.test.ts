import { useExpiryPeriod } from "../lib";
import { renderHook, act } from "@testing-library/react";

describe("useExpiryPeriod Test", () => {
  it("과거 year를 입력한 경우", () => {
    const { result } = renderHook(() => useExpiryPeriod());

    act(() => {
      result.current.yearState[1]("20");
    });
    expect(result.current.yearState[0]).toBe("20");
    expect(result.current.isError).toBe(true);
  });

  it("현재 year, 과거 month를 입력한 경우", () => {
    const { result } = renderHook(() => useExpiryPeriod());
    const currentYear = Number(new Date().getFullYear().toString().slice(2));
    const currentMonth = Number(new Date().getMonth());

    act(() => {
      result.current.yearState[1](
        currentMonth === 0 ? String(currentYear - 1) : String(currentYear)
      );
      result.current.monthState[1](String(currentMonth));
    });
    expect(result.current.isError).toBe(true);
  });

  it("미래 year를 입력한 경우", () => {
    const { result } = renderHook(() => useExpiryPeriod());

    act(() => {
      result.current.yearState[1]("33");
    });
    expect(result.current.isError).toBe(false);
  });

  it("숫자 이외의 입력값을 넣은 경우", () => {
    const { result } = renderHook(() => useExpiryPeriod());

    act(() => {
      result.current.yearState[1]("2a");
    });
    expect(result.current.isError).toBe(true);
  });
});
