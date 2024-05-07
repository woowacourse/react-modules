import { renderHook, act } from "@testing-library/react";
import { useCVC } from "../src/lib/hooks/useCVC";
import { ERROR_MESSAGE } from "../src/lib/constants/errorMessage";

describe("useCVC 테스트", () => {
  it("touched 상태인데 입력값이 비어있다면 에러 메시지를 반환해야 한다", () => {
    const { result } = renderHook(() => useCVC());
    act(() => {
      result.current[1]("");
    });
    expect(result.current[2].isValid).toBe(false);
    expect(result.current[2].errorMessage).toBe(ERROR_MESSAGE.NO_INPUT);
  });

  it("입력값이 숫자가 아니라면 에러 메시지를 반환해야 한다", () => {
    const { result } = renderHook(() => useCVC());
    act(() => {
      result.current[1]("jo22222");
    });
    expect(result.current[2].isValid).toBe(false);
    expect(result.current[2].errorMessage).toBe(ERROR_MESSAGE.CARD_CVC.INVALID_CHARACTERS);
  });

  it("입력값이 3자리 숫자가 아니라면 에러 메시지를 반환해야 한다", () => {
    const { result } = renderHook(() => useCVC());
    act(() => {
      result.current[1]("222222");
    });
    expect(result.current[2].isValid).toBe(false);
    expect(result.current[2].errorMessage).toBe(ERROR_MESSAGE.CARD_CVC.MAX_LENGTH_EXCEEDED);
  });

  it("입력값이 유효하다면 isValid가 true여야 한다", () => {
    const { result } = renderHook(() => useCVC());
    act(() => {
      result.current[1]("123");
    });
    expect(result.current[2].isValid).toBe(true);
  });
});
