import { renderHook, act } from "@testing-library/react";
import useCardSecretNumber from "./index";

describe("useCardSecretNumber", () => {
  it("입력값이 정확히 업데이트 되어야 한다.", () => {
    const userInput = "12";
    const { result } = renderHook(() => useCardSecretNumber());

    act(() => {
      result.current.handleSecretNumberChange(userInput);
    });
    expect(result.current.secretNumber.value).toBe(userInput);
  });

  it("카드 번호에 문자열을 입력하면 오류가 발생해야한다.", () => {
    const invalidKoreanInput = "ㅁㅁ";
    const { result } = renderHook(() => useCardSecretNumber());

    act(() => {
      result.current.handleSecretNumberChange(invalidKoreanInput);
    });

    expect(result.current.errorState.isValid).toBe(false);
    expect(result.current.errorState.errorMessage).toBe("숫자만 입력해주세요.");
  });

  it("카드번호에 1자리를 입력하면 오류가 발생해야한다.", () => {
    const invalidLengthInput = "1";
    const { result } = renderHook(() => useCardSecretNumber());

    act(() => {
      result.current.handleSecretNumberChange(invalidLengthInput);
    });

    expect(result.current.errorState.isValid).toBe(false);
    expect(result.current.errorState.errorMessage).toBe(
      "비밀번호는 2자리여야 합니다."
    );
  });

  it("비밀번호에 숫자 2자리를 입력하면 유효하게 작동해야한다. ", () => {
    const validInput = "12";
    const { result } = renderHook(() => useCardSecretNumber());

    act(() => {
      result.current.handleSecretNumberChange(validInput);
    });

    expect(result.current.errorState.isValid).toBe(true);
  });
});
