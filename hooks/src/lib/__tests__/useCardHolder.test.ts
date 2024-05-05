import { renderHook } from "@testing-library/react";
import useCardHolder from "../hooks/useCardHolder";
import { act } from "react";
import { ERROR_MESSAGES } from "../constants/messages";

describe("useCardHolder 테스트", () => {
  test("초기 cardHolder 상태는 빈 문자열이어야 한다.", () => {
    const { result } = renderHook(() => useCardHolder());

    expect(result.current.cardHolder).toBe("");
    expect(result.current.cardHolderError).toBeFalsy();
  });

  test.each([["프룬"], ["12345"], ["!@#$%^"], ["FF1"]])(
    `입력한 카드 소유주 이름(%s)이 '영문과 공백이 아닐 경우', 에러 메시지("${ERROR_MESSAGES.cardHolder}")가 표시된다.`,
    (input) => {
      const { result } = renderHook(() => useCardHolder());

      act(() => {
        result.current.handleCardHolderChange(input);
      });

      expect(result.current.getCardHolderErrorMessage()).toBe(
        ERROR_MESSAGES.cardHolder
      );
    }
  );
});
