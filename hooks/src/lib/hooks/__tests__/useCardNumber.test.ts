import { act, renderHook } from "@testing-library/react";
import useCardNumber from "../useCardNumber";

describe("useCardNumber 초기값 상태 확인", () => {
  it("cardNumber의 초기 상태를 올바르게 반환한다", () => {
    const { result } = renderHook(() => useCardNumber());
    act(() => {
      result.current.setCardNumber(["1234", "1234", "1234", "1234"]);
    });
    expect(result.current.cardNumber).toEqual(["1234", "1234", "1234", "1234"]);
  });

  it("cardNumber에 입력값이 존재하지 않을 때 초기 값을 확인한다.", () => {
    const { result } = renderHook(() => useCardNumber());
    act(() => {
      result.current.setCardNumber(["", "", "", ""]);
    });
    expect(result.current.cardNumber).toEqual(["", "", "", ""]);
    expect(result.current.cardNetwork).toBe("PENDING");
    expect(result.current.errorMessage).toEqual(["", "", "", ""]);
    expect(result.current.isError).toEqual([false, false, false, false]);
  });
});

describe("useCardNumber 입력값 처리 확인", () => {
  it("VISA : 유효한 카드 값을 입력했을 때 에러를 발생시키지 않는다.", () => {
    const { result } = renderHook(() => useCardNumber());
    act(() => {
      result.current.setCardNumber(["4123", "1234", "1234", "1234"]);
    });
    expect(result.current.cardNetwork).toBe("VISA");
    expect(result.current.errorMessage).toEqual(["", "", "", ""]);
    expect(result.current.isError).toEqual([false, false, false, false]);
  });

  it("VISA : 유효한 카드 input 길이를 벗어난 경우 유요한 길이의 값 까지만 사용자에게 보여준다.", () => {
    const { result } = renderHook(() => useCardNumber());
    act(() => {
      result.current.setCardNumber(["4123", "12345678", "1234", "1234"]);
    });
    expect(result.current.cardNumber).toEqual(["4123", "1234", "1234", "1234"]);
  });

  it("VISA : 숫자가 아닌 다른 값이 들어온 경우 제거된다", () => {
    const { result } = renderHook(() => useCardNumber());
    act(() => {
      result.current.setCardNumber(["4123", "aaaa", "1234", "1234"]);
    });
    expect(result.current.cardNumber).toEqual(["4123", "", "1234", "1234"]);
  });
});
