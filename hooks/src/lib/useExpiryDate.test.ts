import "@testing-library/jest-dom";
import { renderHook, act } from "@testing-library/react";
import useExpiryDate from "./useExpiryDate";

test("사용자가 정상적인 월을 입력하면 에러가 발생하지 않는다.", async () => {
  const { result } = renderHook(() => useExpiryDate());
  const { handleExpiryDateChange } = result.current;

  const event = {
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
});

test("사용자가 정상적인 연을 입력하면 에러가 발생하지 않는다.", async () => {
  const { result } = renderHook(() => useExpiryDate());
  const { handleExpiryDateChange } = result.current;

  const event = {
    target: {
      value: "99",
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

test("사용자가 월에 문자를 입력하면 입력이 안된다.", async () => {
  const { result } = renderHook(() => useExpiryDate());
  const { handleExpiryDateChange } = result.current;

  const event = {
    target: {
      value: "안녕",
    },
  };
  act(() => {
    handleExpiryDateChange(
      event as unknown as React.ChangeEvent<HTMLInputElement>,
      "month"
    );
  });

  expect(result.current.expiryDate.month).toBe("");
  expect(result.current.isValid).toBeTruthy();
});

test("사용자가 연에 문자를 입력하면 입력이 안된다.", async () => {
  const { result } = renderHook(() => useExpiryDate());
  const { handleExpiryDateChange } = result.current;

  const event = {
    target: {
      value: "안녕",
    },
  };
  act(() => {
    handleExpiryDateChange(
      event as unknown as React.ChangeEvent<HTMLInputElement>,
      "year"
    );
  });

  expect(result.current.expiryDate.year).toBe("");
  expect(result.current.isValid).toBeTruthy();
});

test("사용자가 과거의 월을 입력했을 때 에러가 발생한다.", async () => {
  const { result, rerender } = renderHook(() => useExpiryDate());

  const yearEvent = {
    target: {
      value: "25",
    },
  };

  const monthEvent = {
    target: {
      value: "1",
    },
  };

  act(() => {
    result.current.handleExpiryDateChange(
      monthEvent as unknown as React.ChangeEvent<HTMLInputElement>,
      "month"
    );
  });
  rerender();
  act(() => {
    result.current.handleExpiryDateChange(
      yearEvent as unknown as React.ChangeEvent<HTMLInputElement>,
      "year"
    );
  });

  expect(result.current.expiryDate.year).toBe("25");
  expect(result.current.expiryDate.month).toBe("1");
  expect(result.current.isValid).toBeFalsy();
});

test("사용자가 과거의 년도를 입력했을 때 에러가 발생한다.", async () => {
  const { result } = renderHook(() => useExpiryDate());
  const { handleExpiryDateChange } = result.current;

  const event = {
    target: {
      value: "24",
    },
  };

  act(() => {
    handleExpiryDateChange(
      event as unknown as React.ChangeEvent<HTMLInputElement>,
      "year"
    );
  });

  expect(result.current.expiryDate.year).toBe("24");
  expect(result.current.isValid).toBeFalsy();
});
