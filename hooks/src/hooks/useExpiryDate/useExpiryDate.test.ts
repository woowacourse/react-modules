import { renderHook, act } from "@testing-library/react";
import useExpiryDate from "./useExpiryDate";

test("초기 상태는 에러가 뜨지 않는다.", () => {
  const { result } = renderHook(() => useExpiryDate());

  expect(result.current.date).toEqual({ month: "", year: "" });
  result.current.error.forEach((e) => {
    expect(e.isValid).toBe(false);
    expect(e.errorMessage).toBe("");
  });
});

test("월 입력에 1에서 12 사이의 숫자를 입력하면 정상 작동한다. ", () => {
  const { result } = renderHook(() => useExpiryDate());

  act(() => {
    result.current.handleExpiryDateChange("11", "month");
  });

  expect(result.current.error[0].errorMessage).toBe("");
  expect(result.current.error[0].isValid).toBe(false);
  expect(result.current.date.month).toBe("11");
});

test("월 입력에 숫자가 아닌 값을 validate 하면 에러 메시지가 뜬다.", () => {
  const { result } = renderHook(() => useExpiryDate());

  act(() => {
    result.current.handleExpiryDateChange("ab", "month");
  });

  expect(result.current.error[0].errorMessage).toBe(
    "월은 숫자로 입력해 주세요."
  );
  expect(result.current.error[0].isValid).toBe(true);
  expect(result.current.date.month).toBe("ab");
});

test("월 입력에 2자리 이하의 숫자를 validate 하면 에러 메시지가 뜬다.", () => {
  const { result } = renderHook(() => useExpiryDate());

  act(() => {
    result.current.handleExpiryDateChange("1", "month");
  });

  expect(result.current.error[0].errorMessage).toBe(
    "월은 2자리로 입력해 주세요."
  );
  expect(result.current.error[0].isValid).toBe(true);
  expect(result.current.date.month).toBe("1");
});

test("유효하지 않은 월을 validate 하면 에러 메시지가 뜬다.", () => {
  const { result } = renderHook(() => useExpiryDate());

  act(() => {
    result.current.handleExpiryDateChange("13", "month");
  });

  expect(result.current.error[0].errorMessage).toBe("유효하지 않은 월입니다.");
  expect(result.current.error[0].isValid).toBe(true);
  expect(result.current.date.month).toBe("13");
});

test("3자리 이상의 숫자를 입력하면 무시된다.", () => {
  const { result } = renderHook(() => useExpiryDate());

  act(() => {
    result.current.handleExpiryDateChange("123", "month");
  });

  expect(result.current.date.month).toBe("");
  expect(result.current.error[0].errorMessage).toBe("");
  expect(result.current.error[0].isValid).toBe(false);
});
test("빈 문자열 입력 시 에러가 사라진다.", () => {
  const { result } = renderHook(() => useExpiryDate());

  act(() => {
    result.current.handleExpiryDateChange("ab", "month");
  });

  expect(result.current.date.month).toBe("ab");
  expect(result.current.error[0].errorMessage).toBe(
    "월은 숫자로 입력해 주세요."
  );
  expect(result.current.error[0].isValid).toBe(true);
});

test("연도 입력에 25 이상의 숫자를 입력하면 정상 작동한다.", () => {
  const { result } = renderHook(() => useExpiryDate());

  act(() => {
    result.current.handleExpiryDateChange("25", "year");
  });

  expect(result.current.error[1].errorMessage).toBe("");
  expect(result.current.error[1].isValid).toBe(false);
  expect(result.current.date.year).toBe("25");
});

test("연도 입력에 숫자가 아닌 값을 validate 하면 에러 메시지가 세팅된다", () => {
  const { result } = renderHook(() => useExpiryDate());

  act(() => {
    result.current.handleExpiryDateChange("ab", "year");
  });

  expect(result.current.error[1].errorMessage).toBe(
    "연도는 숫자로 입력해 주세요."
  );
  expect(result.current.error[1].isValid).toBe(true);
  expect(result.current.date.year).toBe("ab");
});

test("연도 입력에 2자리 이하의 숫자를 validate 하면 에러 메시지가 세팅된다", () => {
  const { result } = renderHook(() => useExpiryDate());

  act(() => {
    result.current.handleExpiryDateChange("1", "year");
  });

  expect(result.current.error[1].errorMessage).toBe(
    "연도는 2자리로 입력해 주세요."
  );
  expect(result.current.error[1].isValid).toBe(true);
  expect(result.current.date.year).toBe("1");
});

test("유효하지 않은 연도를 validate 하면 에러 메시지가 세팅된다", () => {
  const { result } = renderHook(() => useExpiryDate());

  act(() => {
    result.current.handleExpiryDateChange("24", "year");
  });

  expect(result.current.error[1].errorMessage).toBe(
    "유효하지 않은 연도입니다."
  );
  expect(result.current.error[1].isValid).toBe(true);
  expect(result.current.date.year).toBe("24");
});

test("3자리 이상의 숫자를 입력하면 무시된다.", () => {
  const { result } = renderHook(() => useExpiryDate());

  act(() => {
    result.current.handleExpiryDateChange("123", "year");
  });

  expect(result.current.date.year).toBe("");
  expect(result.current.error[1].errorMessage).toBe("");
  expect(result.current.error[1].isValid).toBe(false);
});
test("빈 문자열 입력 시 에러가 사라진다.", () => {
  const { result } = renderHook(() => useExpiryDate());

  act(() => {
    result.current.handleExpiryDateChange("ab", "year");
  });

  expect(result.current.date.year).toBe("ab");
  expect(result.current.error[1].errorMessage).toBe(
    "연도는 숫자로 입력해 주세요."
  );
  expect(result.current.error[1].isValid).toBe(true);
});
