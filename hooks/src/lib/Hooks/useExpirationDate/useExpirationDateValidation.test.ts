import { renderHook, act } from "@testing-library/react";
import useExpirationDate from ".";

describe("useExpirationDate", () => {
  it("useExpirationDate의 초기 상태가 반환된다.", () => {
    const initialState = "";
    const { result } = renderHook(() => useExpirationDate());

    expect(result.current.value).toEqual(initialState);
  });

  it("useExpirationDate의 상태를 변경할 수 있다.", () => {
    const initialState = "12";
    const userInput = "12";

    const { result } = renderHook(() => useExpirationDate());

    act(() => {
      result.current.onChange(userInput);
    });

    expect(result.current.value).toEqual(initialState);
  });

  it("useExpirationDate의 초기 에러 상태가 반환된다.", () => {
    const initialErrors = false;
    const { result } = renderHook(() => useExpirationDate());

    expect(result.current.error).toEqual(initialErrors);
  });

  it("월이 아닌 값이 들어오면 에러메시지를 반환한다.", () => {
    const month = "14";
    const { result } = renderHook(() => useExpirationDate());

    act(() => {
      result.current.onChange(month);
    });

    expect(result.current.errorMessage).toBe("유효하지 않은 월입니다.");
  });

  it("올해 년도 이전인 값이 들어오면 에러메시지를 반환한다.", () => {
    const year = "1214";
    const { result } = renderHook(() => useExpirationDate());

    act(() => {
      result.current.onChange(year);
    });

    expect(result.current.errorMessage).toBe("유효하지 않은 연도입니다.");
  });

  it("현재 에러 상태에 에러가 없다면 noError가 true를 반환한다.", () => {
    const month = "12";
    const { result } = renderHook(() => useExpirationDate());

    act(() => {
      result.current.onChange(month);
    });

    expect(result.current.isErrorComplete).toBeTruthy();
  });

  it("현재 입력이 모두 다 채워져 있다면 isLengthComplete가 true를 반환한다.", () => {
    const userInput = "1226";
    const { result } = renderHook(() => useExpirationDate());

    act(() => {
      result.current.onChange(userInput);
    });

    expect(result.current.isLengthComplete).toBeTruthy();
  });

  it("현재 입력이 모두 채워졌고, 에러 상태가 없다면 isValid가 true를 반환한다.", () => {
    const userInput = "1226";
    const { result } = renderHook(() => useExpirationDate());

    act(() => {
      result.current.onChange(userInput);
    });
    expect(result.current.isValid).toBeTruthy();
  });

  it("현재 입력 값이 자동으로 월, 년도 규칙에 맞게 구분되어 화면에 표시된다.", () => {
    const userInput = "1226";
    const displayValue = "12 26";
    const { result } = renderHook(() => useExpirationDate());

    act(() => {
      result.current.onChange(userInput);
    });
    expect(result.current.value).toEqual(displayValue);
  });
});
