import { renderHook, act } from "@testing-library/react";
import useCardNumber from "./index";

describe("useCardNumber", () => {
  it("입력값이 정확히 업데이트 되어야 한다.", () => {
    const userInput = "1234";
    const { result } = renderHook(() => useCardNumber());

    act(() => {
      result.current.handleCardNumberChange("first", userInput);
    });
    expect(result.current.cardNumberState.first.value).toBe(userInput);
  });

  it("카드 번호에 문자열을 입력하면 오류가 발생해야한다.", () => {
    const invalidKoreanInput = "ㅁㅁㅁㅁ";
    const { result } = renderHook(() => useCardNumber());

    act(() => {
      result.current.handleCardNumberChange("first", invalidKoreanInput);
      result.current.handleCardNumberChange("second", invalidKoreanInput);
      result.current.handleCardNumberChange("third", invalidKoreanInput);
      result.current.handleCardNumberChange("fourth", invalidKoreanInput);
    });

    expect(result.current.errorState.isValid).toBe(false);
    expect(result.current.errorState.errorMessage).toBe("숫자만 입력해주세요.");
  });

  it("카드번호에 3자리를 입력하면 오류가 발생해야한다.", () => {
    const invalidLengthInput = "123";
    const { result } = renderHook(() => useCardNumber());

    act(() => {
      result.current.handleCardNumberChange("first", invalidLengthInput);
      result.current.handleCardNumberChange("second", invalidLengthInput);
      result.current.handleCardNumberChange("third", invalidLengthInput);
      result.current.handleCardNumberChange("fourth", invalidLengthInput);
    });

    expect(result.current.errorState.isValid).toBe(false);
    expect(result.current.errorState.errorMessage).toBe(
      "카드 번호는 4자리여야 합니다."
    );
  });

  it("카드번호에 숫자 4자리를 입력하면 유효하게 작동해야한다. ", () => {
    const validInput = "1234";
    const { result } = renderHook(() => useCardNumber());

    act(() => {
      result.current.handleCardNumberChange("first", validInput);
      result.current.handleCardNumberChange("second", validInput);
      result.current.handleCardNumberChange("third", validInput);
      result.current.handleCardNumberChange("fourth", validInput);
    });

    expect(result.current.errorState.isValid).toBe(true);
  });
});
