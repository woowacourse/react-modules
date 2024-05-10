import { renderHook } from "@testing-library/react";
import { ChangeEvent, act } from "react";
import useCardNumbers from "./useCardNumbers";

describe("useCardNumbers 테스트", () => {
  it("입력값이 숫자가 아니라면 입력을 제한한다.", () => {
    const userInput = "nakta";
    const { result } = renderHook(() => useCardNumbers());

    act(() => {
      result.current.cardNumbers.forEach((cardNumber) => {
        cardNumber.onChange({
          target: { value: userInput },
        } as ChangeEvent<HTMLInputElement>);
      });
    });

    result.current.cardNumbers.forEach((cardNumber) => {
      expect(cardNumber.value).toBe("");
    });
  });

  it("카드번호가 4로 시작하는 경우 카드 브랜드를 visa 설정한다.", () => {
    const VISA = "visa";
    const userInput = ["4000", "0000", "0000", "0000"];
    const { result } = renderHook(() => useCardNumbers());

    act(() => {
      result.current.cardNumbers.forEach((cardNumber, index) => {
        cardNumber.onChange({
          target: { value: userInput[index] },
        } as ChangeEvent<HTMLInputElement>);
      });
    });

    expect(result.current.cardBrand).toBe(VISA);
  });

  it.each([
    [["5100", "0000", "0000", "0000"]],
    [["5200", "0000", "0000", "0000"]],
    [["5300", "0000", "0000", "0000"]],
    [["5400", "0000", "0000", "0000"]],
    [["5500", "0000", "0000", "0000"]],
  ])("카드번호가 51~55로 시작하는 경우 카드 브랜드를 mastercard 설정한다.", (userInput) => {
    const MASTER_CARD = "mastercard";
    const { result } = renderHook(() => useCardNumbers());

    act(() => {
      result.current.cardNumbers.forEach((cardNumber, index) => {
        cardNumber.onChange({
          target: { value: userInput[index] },
        } as ChangeEvent<HTMLInputElement>);
      });
    });

    expect(result.current.cardBrand).toBe(MASTER_CARD);
  });

  it.each([
    [["0000", "0000", "0000", "0000"], true],
    [["0000", "0000", "0000", ""], false],
  ])(
    "입력 값이 유효하다면 true를 반환하고, 유효하지 않다면 false를 반환한다.",
    (userInput, isValid) => {
      const { result } = renderHook(() => useCardNumbers());

      act(() => {
        result.current.cardNumbers.forEach((cardNumber, index) => {
          cardNumber.onChange({
            target: { value: userInput[index] },
          } as ChangeEvent<HTMLInputElement>);
        });
      });

      expect(result.current.isCardNumbersValid).toBe(isValid);
    }
  );
});
