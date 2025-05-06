import { renderHook } from "@testing-library/react";
import useCardNumbers, {
  CARD_NUMBER_ERROR_MESSAGE,
  CARD_NUMBER_MAX_LENGTH,
} from "../src/useCardNumbers/useCardNumbers";
import { act } from "react";

describe("useCardNumbers hook 테스트", () => {
  it("초깃값은 빈 문자열이다", () => {
    const { result } = renderHook(() => useCardNumbers());

    expect(result.current.cardNumbers).toEqual({
      FIRST: "",
      SECOND: "",
      THIRD: "",
      FOURTH: "",
    });
  });

  it("초기값을 설정 할 수 있다", () => {
    const { result } = renderHook(() =>
      useCardNumbers({
        FIRST: "1234",
        SECOND: "2345",
        THIRD: "3456",
        FOURTH: "4567",
      })
    );

    expect(result.current.cardNumbers).toEqual({
      FIRST: "1234",
      SECOND: "2345",
      THIRD: "3456",
      FOURTH: "4567",
    });
  });

  it("handleCardNumbersChange를 호출하면 카드 번호가 변경된다", () => {
    const { result } = renderHook(() => useCardNumbers());

    const event = {
      target: {
        value: "1234",
      },
    } as React.ChangeEvent<HTMLInputElement>;

    act(() => {
      result.current.handleCardNumbersChange({ target: "FIRST" })(event);
    });
    expect(result.current.cardNumbers).toEqual({
      FIRST: "1234",
      SECOND: "",
      THIRD: "",
      FOURTH: "",
    });
  });

  describe("잘못된 값이 들어오면 그에 맞는 에러 상태를 반환한다", () => {
    it(`${CARD_NUMBER_MAX_LENGTH}자리 이상의 input이 들어오면 에러 상태를 반환한다`, () => {
      const { result } = renderHook(() => useCardNumbers());

      const event = {
        target: {
          value: "12345",
        },
      } as React.ChangeEvent<HTMLInputElement>;

      act(() => {
        result.current.handleCardNumbersChange({ target: "FIRST" })(event);
      });
      expect(result.current.error.FIRST).toBe(true);
      expect(result.current.errorMessage.FIRST).toEqual(
        CARD_NUMBER_ERROR_MESSAGE.INVALID_LENGTH
      );
    });

    it("숫자가 아닌 input이 들어오면 에러 상태를 반환한다", () => {
      const { result } = renderHook(() => useCardNumbers());

      const event = {
        target: {
          value: "11a",
        },
      } as React.ChangeEvent<HTMLInputElement>;

      act(() => {
        result.current.handleCardNumbersChange({ target: "FIRST" })(event);
      });
      expect(result.current.error.FIRST).toBe(true);
      expect(result.current.errorMessage.FIRST).toEqual(
        CARD_NUMBER_ERROR_MESSAGE.NOT_NUMERIC
      );
    });
  });
});
