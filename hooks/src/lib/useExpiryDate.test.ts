import "@testing-library/jest-dom";
import { renderHook, act } from "@testing-library/react";
import useExpiryDate from "./useExpiryDate";

describe("초기 상태", () => {
  const { result } = renderHook(() => useExpiryDate());
  test("expiryDate의 2칸이 초기화 되어 있어야 한다.", () => {
    expect(result.current.expiryDate).toEqual({ month: "", year: "" });
  });

  test("각 errorMessage가 초기화 되어 있어야 한다.", () => {
    expect(result.current.errorMessage).toEqual({ month: "", year: "" });
  });

  test("isValid의 초기 값은 true여야 한다.", () => {
    expect(result.current.isValid).toBe(true);
  });
});

describe("입력 처리", () => {
  test("사용자가  month 칸에 숫자를 입력하면 반영된다.", () => {
    const { result } = renderHook(() => useExpiryDate());
    const { handleExpiryDateChange } = result.current;

    const event = {
      target: {
        value: "55",
      },
    };

    act(() =>
      handleExpiryDateChange(
        event as unknown as React.ChangeEvent<HTMLInputElement>,
        "month"
      )
    );
    expect(result.current.expiryDate.month).toBe("55");
  });

  test("사용자가  year 칸에 숫자를 입력하면 반영된다.", () => {
    const { result } = renderHook(() => useExpiryDate());
    const { handleExpiryDateChange } = result.current;

    const event = {
      target: {
        value: "1",
      },
    };

    act(() =>
      handleExpiryDateChange(
        event as unknown as React.ChangeEvent<HTMLInputElement>,
        "year"
      )
    );
    expect(result.current.expiryDate.year).toBe("1");
  });

  test("사용자가  month 칸에 문자열을 입력하면 반영되지 않는다..", () => {
    const { result } = renderHook(() => useExpiryDate());
    const { handleExpiryDateChange } = result.current;

    const event = {
      target: {
        value: "메룽",
      },
    };

    act(() =>
      handleExpiryDateChange(
        event as unknown as React.ChangeEvent<HTMLInputElement>,
        "month"
      )
    );
    expect(result.current.expiryDate.month).toBe("");
  });

  test("사용자가  year 칸에 문자열을 입력하면 반영되지 않는다..", () => {
    const { result } = renderHook(() => useExpiryDate());
    const { handleExpiryDateChange } = result.current;

    const event = {
      target: {
        value: "메룽",
      },
    };

    act(() =>
      handleExpiryDateChange(
        event as unknown as React.ChangeEvent<HTMLInputElement>,
        "year"
      )
    );
    expect(result.current.expiryDate.year).toBe("");
  });
});

describe("유효성 검증", () => {
  const current = new Date();
  const currentYear = current.getFullYear() % 100;
  const currentMonth = current.getMonth() + 1;

  test("month 칸에 1~12 사이의 숫자를 입력하면 에러가 발생하지 않는다.", () => {
    const { result } = renderHook(() => useExpiryDate());
    const { handleExpiryDateChange } = result.current;

    const event = {
      target: {
        value: "1",
      },
    };

    const event1 = {
      target: {
        value: "12",
      },
    };

    act(() =>
      handleExpiryDateChange(
        event as unknown as React.ChangeEvent<HTMLInputElement>,
        "month"
      )
    );
    expect(result.current.isValid).toBeTruthy();

    act(() =>
      handleExpiryDateChange(
        event1 as unknown as React.ChangeEvent<HTMLInputElement>,
        "month"
      )
    );
    expect(result.current.isValid).toBeTruthy();
  });

  test("year 칸에 유효한 년도 입력 시 에러가 발생하지 않는다.", () => {
    const { result } = renderHook(() => useExpiryDate());
    const { handleExpiryDateChange } = result.current;

    const event = {
      target: {
        value: currentYear + 1,
      },
    };

    act(() =>
      handleExpiryDateChange(
        event as unknown as React.ChangeEvent<HTMLInputElement>,
        "year"
      )
    );
    expect(result.current.isValid).toBeTruthy();
  });

  test("사용자가 과거의 월을 입력했을 때 에러가 발생하고 에러 메시지가 표시된다.", () => {
    const { result, rerender } = renderHook(() => useExpiryDate());

    const yearEvent = {
      target: {
        value: currentYear,
      },
    };

    const monthEvent = {
      target: {
        value: currentMonth === 1 ? 12 : currentMonth - 1,
      },
    };

    act(() => {
      result.current.handleExpiryDateChange(
        yearEvent as unknown as React.ChangeEvent<HTMLInputElement>,
        "year"
      );
    });
    rerender();
    act(() => {
      result.current.handleExpiryDateChange(
        monthEvent as unknown as React.ChangeEvent<HTMLInputElement>,
        "month"
      );
    });

    expect(result.current.isValid).toBeFalsy();
    expect(result.current.errorMessage).toEqual({
      month: "유효 기간이 만료된 카드 입니다.",
      year: "유효 기간이 만료된 카드 입니다.",
    });
  });

  test("month 칸에 1~12 이외의 숫자를 입력했을 때 에러가 발생하고 에러 메시지가 표시된다.", () => {
    const { result } = renderHook(() => useExpiryDate());
    const { handleExpiryDateChange } = result.current;

    const event = {
      target: {
        value: 13,
      },
    };

    act(() => {
      handleExpiryDateChange(
        event as unknown as React.ChangeEvent<HTMLInputElement>,
        "month"
      );
    });

    expect(result.current.isValid).toBeFalsy();
    expect(result.current.errorMessage).toEqual({
      month: "1~12 사이의 숫자를 입력해 주세요.",
      year: "",
    });
  });

  test("사용자가 과거의 년도를 입력했을 때 에러가 발생하고 에러 메시지가 표시된다.", () => {
    const { result } = renderHook(() => useExpiryDate());
    const { handleExpiryDateChange } = result.current;

    const event = {
      target: {
        value: currentYear - 1,
      },
    };

    act(() => {
      handleExpiryDateChange(
        event as unknown as React.ChangeEvent<HTMLInputElement>,
        "year"
      );
    });

    expect(result.current.isValid).toBeFalsy();
    expect(result.current.errorMessage).toEqual({
      month: "",
      year: "유효 기간이 만료된 카드 입니다.",
    });
  });
});
