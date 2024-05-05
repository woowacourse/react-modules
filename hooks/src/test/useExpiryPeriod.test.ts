import React from "react";
import { useExpiryPeriod } from "../lib";
import { renderHook } from "@testing-library/react";

describe("useExpiryPeriod Test", () => {
  it("과거 year를 입력한 경우", () => {
    const { result } = renderHook(() => useExpiryPeriod());

    React.act(() => {
      const [_, setYear] = result.current.yearState;
      setYear("20");
    });
    const [year] = result.current.yearState;
    expect(year).toBe("20");
    expect(result.current.isError).toBe(true);
  });

  it("현재 year, 과거 month를 입력한 경우", () => {
    const { result } = renderHook(() => useExpiryPeriod());
    const currentYear = Number(new Date().getFullYear().toString().slice(2));
    const currentMonth = Number(new Date().getMonth());

    React.act(() => {
      const [_year, setYear] = result.current.yearState;
      setYear(currentMonth === 0 ? String(currentYear - 1) : String(currentYear));
      const [_month, setMonth] = result.current.monthState;
      setMonth(String(currentMonth));
    });
    expect(result.current.isError).toBe(true);
  });

  it("미래 year를 입력한 경우", () => {
    const { result } = renderHook(() => useExpiryPeriod());

    React.act(() => {
      const [_, setYear] = result.current.yearState;
      setYear("33");
    });
    expect(result.current.isError).toBe(false);
  });

  it("숫자 이외의 입력값을 넣은 경우", () => {
    const { result } = renderHook(() => useExpiryPeriod());

    React.act(() => {
      const [_, setYear] = result.current.yearState;
      setYear("2a");
    });
    expect(result.current.isError).toBe(true);
  });
});
