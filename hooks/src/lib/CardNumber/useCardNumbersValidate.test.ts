import { renderHook, act } from "@testing-library/react";
import useCardNumbersValidate from "./useCardNumbersValidate";

describe("useCardNumbersValidate", () => {
  it("숫자로 이루어진 4자리 값이 들어오면 isValid가 true이고 에러 메시지가 null이다.", () => {
    const { result } = renderHook(() => useCardNumbersValidate());

    act(() => {
      result.current.validateCardNumbers("1234", "first");
    });

    expect(result.current.isValid.first).toBe(true);
    expect(result.current.errorMessage).toBeNull();
  });

  it("숫자로 이루어지지 않은 값이 들어오면 isValid가 false이고 에러 메시지가 나온다.", () => {
    const { result } = renderHook(() => useCardNumbersValidate());

    act(() => {
      result.current.validateCardNumbers("-1", "first");
    });

    expect(result.current.isValid.first).toBe(false);
    expect(result.current.errorMessage).toBe("숫자만 입력해주세요.");
  });

  it("4자리 이상의 값이 들어오면 isValid가 false이고 에러 메시지가 나온다.", () => {
    const { result } = renderHook(() => useCardNumbersValidate());

    act(() => {
      result.current.validateCardNumbers("12345", "third");
    });

    expect(result.current.isValid.third).toBe(false);
    expect(result.current.errorMessage).toBe("4자리만 입력해주세요.");
  });
});
