import { act, renderHook } from "@testing-library/react";
import { ERROR_MESSAGE } from "../src/lib/constants/errorMessage";
import useCVC from "../src/lib/hooks/useCVC";

describe("useCVC 테스트", () => {
  it("touched 상태인데 입력값이 비어있다면 에러 메시지를 반환해야 한다", () => {
    const { result } = renderHook(() => useCVC());
    act(() => {
      result.current.handleCardCVCChange("");
    });
    expect(result.current.cardCVCValidation.isValid).toBe(false);
    expect(result.current.cardCVCValidation.errorMessage).toBe(ERROR_MESSAGE.NO_INPUT);
  });

  it("입력값이 숫자가 아니라면 에러 메시지를 반환해야 한다", () => {
    const { result } = renderHook(() => useCVC());
    act(() => {
      result.current.handleCardCVCChange("jo22222");
    });
    expect(result.current.cardCVCValidation.isValid).toBe(false);
    expect(result.current.cardCVCValidation.errorMessage).toBe(
      ERROR_MESSAGE.CARD_CVC.INVALID_NUMBERS
    );
  });

  it("입력값이 3자리 숫자가 아니라면 에러 메시지를 반환해야 한다", () => {
    const { result } = renderHook(() => useCVC());
    act(() => {
      result.current.handleCardCVCChange("222222");
    });
    expect(result.current.cardCVCValidation.isValid).toBe(false);
    expect(result.current.cardCVCValidation.errorMessage).toBe(
      ERROR_MESSAGE.CARD_CVC.MAX_LENGTH_EXCEEDED
    );
  });

  it("입력값이 유효하다면 isValid가 true여야 한다", () => {
    const { result } = renderHook(() => useCVC());
    act(() => {
      result.current.handleCardCVCChange("123");
    });
    expect(result.current.cardCVCValidation.isValid).toBe(true);
  });
});
