import "@testing-library/jest-dom";
import { renderHook, act } from "@testing-library/react";
import useCardNumber from "./useCardNumber";

const changeCardNumber = (
  result: { current: ReturnType<typeof useCardNumber> },
  rerender: () => void,
  field: keyof ReturnType<typeof useCardNumber>["cardNumber"],
  value: string
) => {
  act(() => {
    result.current.handleCardNumberChange(
      {
        target: { value },
      } as React.ChangeEvent<HTMLInputElement>,
      field
    );
  });
  rerender();
};

describe("useCardNumber 테스트", () => {
  describe("초기 상태", () => {
    test("cardNumber 4칸이 초기화 되어 있어야 한다.", () => {
      const { result } = renderHook(() => useCardNumber());
      expect(result.current.cardNumber).toEqual({
        first: "",
        second: "",
        third: "",
        fourth: "",
      });
    });

    test("cardNumber의 각 errorMessage가 초기화 되어 있어야 한다.", () => {
      const { result } = renderHook(() => useCardNumber());
      expect(result.current.errorMessage).toEqual({
        first: "",
        second: "",
        third: "",
        fourth: "",
      });
    });

    test("isValid의 초기 값은 true여야 한다.", () => {
      const { result } = renderHook(() => useCardNumber());
      expect(result.current.isValid).toBe(true);
    });
  });

  describe("입력 처리", () => {
    test("각 칸에 숫자 입력 시 해당 칸에 반영된다.", () => {
      const { result, rerender } = renderHook(() => useCardNumber());

      changeCardNumber(result, rerender, "first", "1111");
      changeCardNumber(result, rerender, "second", "2222");
      changeCardNumber(result, rerender, "third", "3333");
      changeCardNumber(result, rerender, "fourth", "4444");

      expect(result.current.cardNumber).toEqual({
        first: "1111",
        second: "2222",
        third: "3333",
        fourth: "4444",
      });
    });

    test("각 칸에 문자열 입력 시 해당 칸에 반영되지 않는다.", () => {
      const { result, rerender } = renderHook(() => useCardNumber());

      changeCardNumber(result, rerender, "first", "메롱");
      changeCardNumber(result, rerender, "second", "메롱롱");
      changeCardNumber(result, rerender, "third", "메롱롱롱");
      changeCardNumber(result, rerender, "fourth", "메룽");

      expect(result.current.cardNumber).toEqual({
        first: "",
        second: "",
        third: "",
        fourth: "",
      });
    });
  });

  describe("유효성 검증", () => {
    test("각 칸에 유효한 값을 입력하면 에러가 발생하지 않는다.", () => {
      const { result, rerender } = renderHook(() => useCardNumber());

      changeCardNumber(result, rerender, "first", "1111");
      changeCardNumber(result, rerender, "second", "1111");
      changeCardNumber(result, rerender, "third", "1111");
      changeCardNumber(result, rerender, "fourth", "1111");

      expect(result.current.isValid).toBeTruthy();
    });

    test("한 칸이라도 4자리 미만의 숫자 입력 시 에러가 발생한다.", () => {
      const { result, rerender } = renderHook(() => useCardNumber());

      changeCardNumber(result, rerender, "first", "111");
      changeCardNumber(result, rerender, "second", "1111");
      changeCardNumber(result, rerender, "third", "1111");
      changeCardNumber(result, rerender, "fourth", "1111");

      expect(result.current.isValid).toBeFalsy();
    });

    test("4자리 미만의 숫자 입력 시 각 칸에 에러 메시지를 표시한다.", () => {
      const { result, rerender } = renderHook(() => useCardNumber());

      changeCardNumber(result, rerender, "first", "1");
      changeCardNumber(result, rerender, "second", "11");
      changeCardNumber(result, rerender, "third", "111");
      changeCardNumber(result, rerender, "fourth", "111");

      expect(result.current.errorMessage).toEqual({
        first: "4자리 숫자를 입력해 주세요.",
        second: "4자리 숫자를 입력해 주세요.",
        third: "4자리 숫자를 입력해 주세요.",
        fourth: "4자리 숫자를 입력해 주세요.",
      });
    });
  });
});
