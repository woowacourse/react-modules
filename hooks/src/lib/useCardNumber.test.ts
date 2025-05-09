import "@testing-library/jest-dom";
import { renderHook, act } from "@testing-library/react";
import useCardNumber from "./useCardNumber";

const changeCardNumber = (
  result: { current: ReturnType<typeof useCardNumber> },
  rerender: () => void,
  value: string
) => {
  act(() => {
    result.current.handleCardNumberChange({
      target: { value },
    } as React.ChangeEvent<HTMLInputElement>);
  });
  rerender();
};

describe("useCardNumber 테스트", () => {
  describe("초기 상태", () => {
    const { result } = renderHook(() => useCardNumber());
    test("cardNumber 값이 초기화 되어 있어야 한다.", () => {
      expect(result.current.cardNumber).toBe("");
    });

    test("errorMessage 값이 초기화 되어 있어야 한다.", () => {
      expect(result.current.errorMessage).toBe("");
    });

    test("isValid가 true여야 한다.", () => {
      expect(result.current.isValid).toBeTruthy();
    });
  });

  describe("입력 처리", () => {
    test("숫자 입력 시 cardNumber 상태 값에 반영된다.", () => {
      const { result, rerender } = renderHook(() => useCardNumber());
      changeCardNumber(result, rerender, "411111111111");

      expect(result.current.cardNumber).toBe("411111111111");
    });

    test("문자 입력 시 cardNumber 상태 값에 반영되지 않는다.", () => {
      const { result, rerender } = renderHook(() => useCardNumber());
      changeCardNumber(result, rerender, "안녕");

      expect(result.current.cardNumber).toBe("");
    });

    test("최대 길이를 초과한 값을 입력시 cardNumber 상태 값에 반영되지 않는다.", () => {
      const { result, rerender } = renderHook(() => useCardNumber());
      changeCardNumber(result, rerender, "4111111111111111");
      changeCardNumber(result, rerender, "41111111111111111");

      expect(result.current.cardNumber).toBe("4111111111111111");
    });
  });

  describe("브랜드 식별", () => {
    test("cardNumber가 4로 시작할 경우 Visa 카드를 반환한다.", () => {
      const { result, rerender } = renderHook(() => useCardNumber());

      changeCardNumber(result, rerender, "4");

      expect(result.current.cardBrand()).toBe("Visa");
    });
  });

  describe("유효성 검증", () => {
    test("visa 카드일 경우 16자리일 경우 에러가 발생하지 않는다.", () => {
      const { result, rerender } = renderHook(() => useCardNumber());

      changeCardNumber(result, rerender, "4111111111111111");

      expect(result.current.isValid).toBeTruthy();
    });

    test("visa 카드일 경우 12자리 미만일 시 에러가 발생한다.", () => {
      const { result, rerender } = renderHook(() => useCardNumber());

      changeCardNumber(result, rerender, "4");

      expect(result.current.isValid).toBeFalsy();
    });
  });

  describe("포맷", () => {
    test("visa 카드를 입력할 경우 4자리씩 띄어서 반환한다.", () => {
      const { result, rerender } = renderHook(() => useCardNumber());
      changeCardNumber(result, rerender, "4111111111111111");

      expect(result.current.formatCardNumber()).toEqual([
        "4111",
        "1111",
        "1111",
        "1111",
      ]);
    });

    test("visa 카드를 입력할 경우 4자리씩 띄어서 반환한다.", () => {
      const { result, rerender } = renderHook(() => useCardNumber());
      changeCardNumber(result, rerender, "411111");

      expect(result.current.formatCardNumber()).toEqual(["4111", "11", "", ""]);
    });
  });
});
