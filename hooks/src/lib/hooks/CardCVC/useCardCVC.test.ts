import { renderHook, act } from "@testing-library/react";
import useCardCVC from "./index";

describe("useCardCVC", () => {
  it("입력값이 정확히 업데이트 되어야 한다.", () => {
    const userInput = "123";
    const { result } = renderHook(() => useCardCVC());

    act(() => {
      result.current.handleCVCStateChange(userInput);
    });
    expect(result.current.cvcState.value).toBe(userInput);
  });

  it("CVC 입력에 문자열을 입력하면 오류가 발생해야한다.", () => {
    const invalidKoreanInput = "ㅁㅁㅁ";
    const { result } = renderHook(() => useCardCVC());

    act(() => {
      result.current.handleCVCStateChange(invalidKoreanInput);
    });

    expect(result.current.errorState.isValid).toBe(false);
    expect(result.current.errorState.errorMessage).toBe("숫자만 입력해주세요.");
  });

  it("CVC 입력에 2자리를 입력하면 오류가 발생해야한다.", () => {
    const invalidLengthInput = "12";
    const { result } = renderHook(() => useCardCVC());

    act(() => {
      result.current.handleCVCStateChange(invalidLengthInput);
    });

    expect(result.current.errorState.isValid).toBe(false);
    expect(result.current.errorState.errorMessage).toBe(
      "CVC는 3자리여야 합니다."
    );
  });

  it("CVC 입력에 숫자 3자리를 입력하면 유효하게 작동해야한다.", () => {
    const validInput = "123";
    const { result } = renderHook(() => useCardCVC());

    act(() => {
      result.current.handleCVCStateChange(validInput);
    });

    expect(result.current.errorState.isValid).toBe(true);
  });

  it("CVC 입력에 4자리를 입력하여도 무시되어 3자리만 입력 가능하다.", () => {
    const { result } = renderHook(() => useCardCVC());

    act(() => {
      Array.from({ length: 4 }).forEach((_, index) => {
        const userInput = "1".repeat(index + 1);
        result.current.handleCVCStateChange(userInput);
      });
    });

    expect(result.current.cvcState.value).toHaveLength(3);
  });
});
