import { act, renderHook } from "@testing-library/react";
import useCardNumbers from "./useCardNumbers";
import { ERROR_MESSAGES } from "../../constants/errorMessage";

const INPUT_LENGTH = 4;
const INPUT_COUNT = 4;

describe("useCardNumbers 테스트", () => {
  test("초기 cardNumbers 상태는 빈 문자열이어야 한다.", () => {
    const { result } = renderHook(() =>
      useCardNumbers(INPUT_LENGTH, INPUT_COUNT)
    );

    expect(result.current.cardNumbers).toStrictEqual(["", "", "", ""]);
    expect(result.current.cardNumberErrors).toStrictEqual([
      false,
      false,
      false,
      false,
    ]);
  });

  test("모든 입력 칸의 길이가 4일 때 cardNumberErrors가 모두 false여야 한다.", () => {
    const { result } = renderHook(() =>
      useCardNumbers(INPUT_LENGTH, INPUT_COUNT)
    );

    act(() => {
      result.current.cardNumbers.forEach((_, index) => {
        result.current.handleCardNumbersChange("1234", index);
      });
    });

    expect(result.current.cardNumberErrors).toStrictEqual([
      false,
      false,
      false,
      false,
    ]);
  });
});
describe("useCardNumbers 예외 테스트", () => {
  test.each([
    {
      input: ["1234", "1234", "1234", "123"],
      expected: [false, false, false, true],
    },
    {
      input: ["1234", "1234", "1234", "12345"],
      expected: [false, false, false, true],
    },
    {
      input: ["1234", "1234", "1234", "!@#$"],
      expected: [false, false, false, true],
    },
  ])(
    "입력 값이 $input 일 때 cardNumberErrors가 $expected 여야 한다.",
    ({ input, expected }) => {
      const { result } = renderHook(() =>
        useCardNumbers(INPUT_LENGTH, INPUT_COUNT)
      );

      act(() => {
        input.forEach((value, index) => {
          result.current.handleCardNumbersChange(value, index);
        });
      });

      expect(result.current.cardNumberErrors).toStrictEqual(expected);
    }
  );

  test("cardNumbers의 값이 ['1234', '1234', '1234', ''] 일 때 getCardNumbersErrorMessage() 결과가 ERROR_MESSAGES.maxLengthNumber(4) 가 출력되어야 한다.", () => {
    const { result } = renderHook(() =>
      useCardNumbers(INPUT_LENGTH, INPUT_COUNT)
    );

    act(() => {
      result.current.handleCardNumbersChange("", 3);
    });

    expect(result.current.getCardNumbersErrorMessage()).toBe(
      ERROR_MESSAGES.maxLengthNumber(INPUT_LENGTH)
    );
  });
});
