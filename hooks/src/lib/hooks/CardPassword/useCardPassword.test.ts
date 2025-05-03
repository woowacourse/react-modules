import { renderHook, act } from "@testing-library/react";
import useCardPassword from "./index";

describe("useCardPassword", () => {
  it("입력값이 정확히 업데이트 되어야 한다.", () => {
    const userInput = "12";
    const { result } = renderHook(() => useCardPassword());

    act(() => {
      result.current.handleCardPasswordChange(userInput);
    });
    expect(result.current.cardPassword.value).toBe(userInput);
  });

  it("카드 비밀번호에 문자열을 입력하면 오류가 발생해야한다.", () => {
    const invalidKoreanInput = "ㅁㅁ";
    const { result } = renderHook(() => useCardPassword());

    act(() => {
      result.current.handleCardPasswordChange(invalidKoreanInput);
    });

    expect(result.current.errorState.isValid).toBe(false);
    expect(result.current.errorState.errorMessage).toBe("숫자만 입력해주세요.");
  });

  it("카드 비밀번호에 1자리를 입력하면 오류가 발생해야한다.", () => {
    const invalidLengthInput = "1";
    const { result } = renderHook(() => useCardPassword());

    act(() => {
      result.current.handleCardPasswordChange(invalidLengthInput);
    });

    expect(result.current.errorState.isValid).toBe(false);
    expect(result.current.errorState.errorMessage).toBe(
      "비밀번호는 2자리여야 합니다."
    );
  });

  it("카드 비밀번호에 숫자 2자리를 입력하면 유효하게 작동해야한다. ", () => {
    const validInput = "12";
    const { result } = renderHook(() => useCardPassword());

    act(() => {
      result.current.handleCardPasswordChange(validInput);
    });

    expect(result.current.errorState.isValid).toBe(true);
  });

  it("카드 비밀번호에 3자리를 입력하여도 무시되어 2자리만 입력 가능하다.", () => {
    const { result } = renderHook(() => useCardPassword());

    act(() => {
      Array.from({ length: 3 }).forEach((_, index) => {
        const userInput = "1".repeat(index + 1);
        result.current.handleCardPasswordChange(userInput);
      });
    });

    expect(result.current.cardPassword.value).toHaveLength(2);
  });
});
