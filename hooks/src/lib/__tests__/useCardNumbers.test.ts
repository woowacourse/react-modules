import { renderHook, act } from "@testing-library/react";
import useCardNumbers from "../hooks/useCardNumbers";
import { ERROR_MESSAGES } from "../constants/messages";

const MAX_NUMBER_LENGTH = 4;
const INPUT_COUNT = 4;

describe("useCardNumbers 테스트", () => {
  test("초기 카드 번호 상태들은 빈 문자열 배열이어야 한다.", () => {
    const { result } = renderHook(() =>
      useCardNumbers(MAX_NUMBER_LENGTH, INPUT_COUNT)
    );

    expect(result.current.cardNumbers).toEqual(Array(INPUT_COUNT).fill(""));
    expect(result.current.cardNumberErrors).toEqual(
      Array(INPUT_COUNT).fill(false)
    );
  });

  test.each([
    ["123", 0],
    ["123!", 0],
    ["!!!!", 1],
    ["abcd", 2],
  ])(
    `입력한 카드 번호(%s)가 '${MAX_NUMBER_LENGTH}자리 숫자가 아닐 경우', 에러 메시지("${MAX_NUMBER_LENGTH}${ERROR_MESSAGES.maxLengthNumber}")가 표시된다.`,
    (input, inputIndex) => {
      const { result } = renderHook(() =>
        useCardNumbers(MAX_NUMBER_LENGTH, INPUT_COUNT)
      );

      act(() => {
        result.current.handleCardNumbersChange(input, inputIndex);
      });

      expect(result.current.getCardNumbersErrorMessage()).toBe(
        `${MAX_NUMBER_LENGTH}${ERROR_MESSAGES.maxLengthNumber}`
      );
    }
  );
});
