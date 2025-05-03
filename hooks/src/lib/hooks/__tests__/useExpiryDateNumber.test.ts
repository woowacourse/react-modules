import { renderHook, act } from "@testing-library/react";
import useExpiryDateNumber from "../useExpiryDateNumber";

describe("useExpiryDateNumber", () => {
  it("초기 상태값이 올바르게 설정되어야 한다", () => {
    const { result } = renderHook(() => useExpiryDateNumber());

    expect(result.current.expiryDateNumber).toBe("");
    expect(result.current.errorMessage).toBeUndefined();
    expect(result.current.isError).toBe(false);
  });

  it("유효한 만료일을 입력하면 에러가 발생하지 않아야 한다", () => {
    const { result } = renderHook(() => useExpiryDateNumber());

    act(() => {
      result.current.onExpiryDateNumberChange({
        target: { value: "1225" },
      } as React.ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.expiryDateNumber).toBe("1225");
    expect(result.current.isError).toBe(false);
    expect(result.current.errorMessage).toBeUndefined();
  });

  it("유효하지 않은 만료일을 입력하면 에러가 발생해야 한다", () => {
    const { result } = renderHook(() => useExpiryDateNumber());

    act(() => {
      result.current.onExpiryDateNumberChange({
        target: { value: "1325" },
      } as React.ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.expiryDateNumber).toBe("1325");
    expect(result.current.isError).toBe(true);
    expect(result.current.errorMessage).toBeDefined();
  });

  it("입력값의 앞뒤 공백이 제거되어야 한다", () => {
    const { result } = renderHook(() => useExpiryDateNumber());

    act(() => {
      result.current.onExpiryDateNumberChange({
        target: { value: "  1225  " },
      } as React.ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.expiryDateNumber).toBe("1225");
  });
});
