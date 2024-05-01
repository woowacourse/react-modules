import { renderHook, act } from "@testing-library/react";
import useCardCVC from "./useCardCVC";

describe("useCardCVC", () => {
  const initialValue = "123";

  it("올바른 초기값(initialValue)이 설정되면 그에 맞는 CVC를 반환할 수 있어야 한다", () => {
    const { result } = renderHook(() => useCardCVC(initialValue));

    expect(result.current.CVC).toBe(initialValue);
  });

  it("올바른 CVC 번호가 handleUpdateCVC를 통해 들어오면, 입력값에 따라 CVC 번호가 정확히 업데이트 되어야 한다", () => {
    const { result } = renderHook(() => useCardCVC(initialValue));

    act(() => {
      result.current.handleUpdateCVC("456");
    });

    expect(result.current.CVC).toBe("456");
    expect(result.current.validationResult).toEqual({ isValid: true });
  });

  it("잘못된 형식의 CVC 번호가 들어오면, CVC 번호는 업데이트되지 않고 validationResult에 에러 여부 및 메시지가 업데이트 되어야 한다", () => {
    const { result } = renderHook(() => useCardCVC(initialValue));

    act(() => {
      result.current.handleUpdateCVC("12");
    });

    expect(result.current.CVC).toBe(initialValue);
    expect(result.current.validationResult).toEqual({
      isValid: false,
      errorMessage: "CVC 번호는 3자리 숫자로 입력하셔야 합니다.",
    });
  });

  it("alwaysUpdateCVC가 true일 때, 잘못된 형식의 CVC 번호가 들어와도 CVC 번호가 업데이트되어야 한다", () => {
    const { result } = renderHook(() => useCardCVC(initialValue, true));

    act(() => {
      result.current.handleUpdateCVC("12");
    });

    expect(result.current.CVC).toBe("12");
    expect(result.current.validationResult).toEqual({
      isValid: false,
      errorMessage: "CVC 번호는 3자리 숫자로 입력하셔야 합니다.",
    });
  });
});
