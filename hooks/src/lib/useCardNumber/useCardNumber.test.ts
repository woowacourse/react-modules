import { renderHook, act } from "@testing-library/react";
import useCardNumber from "./useCardNumber";
import { ERROR_MESSAGE } from "../constants";

describe("신용카드 번호 입력 테스트", () => {
  const initialValue = "12345678";

  it("인자로 넘긴 값 그대로 초기값이 설정되어야 한다.", () => {
    const { result } = renderHook(() => useCardNumber(initialValue));

    expect(result.current.inputValue).toEqual(initialValue);
  });

  it("입력값 숫자일 떄 입력한 값으로 업데이트 되어야 한다.", () => {
    const userInput = "1234";
    const { result } = renderHook(() => useCardNumber(initialValue));
    const target = { value: userInput };
    const expectedValidationResult = {
      isValid: true,
      errorMessage: "",
    };

    act(() => {
      result.current.handleCardNumberChange({
        target,
        currentTarget: target,
      } as React.ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.inputValue).toEqual(userInput);
    expect(result.current.validationResult).toEqual(expectedValidationResult);
  });

  it("입력값이 숫자가 아닐 때 업데이트가 안된다", () => {
    const userInput = "notUpdate";
    const { result } = renderHook(() => useCardNumber(initialValue));
    const target = { value: userInput };
    const expectedValidationResult = {
      isValid: false,
      errorMessage: ERROR_MESSAGE.onlyNumber,
    };

    act(() => {
      result.current.handleCardNumberChange({
        target,
        currentTarget: target,
      } as React.ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.inputValue).not.toEqual(userInput);
    expect(result.current.validationResult).toEqual(expectedValidationResult);
  });

  it("입력값이 17자리 이상일 때 업데이트가 안된다", () => {
    const userInput = "12345678911234567";
    const { result } = renderHook(() => useCardNumber(initialValue));
    const target = { value: userInput };
    const expectedValidationResult = {
      isValid: false,
      errorMessage: ERROR_MESSAGE.cardNumberOutOfRange,
    };

    act(() => {
      result.current.handleCardNumberChange({
        target,
        currentTarget: target,
      } as React.ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.inputValue).not.toEqual(userInput);
    expect(result.current.validationResult).toEqual(expectedValidationResult);
  });

  it("입력 값이 모두 채워지고 블러 이벤트 발생 시 에러가 발생하지 않는다", () => {
    const userInput = "1234123412341234";
    const { result } = renderHook(() => useCardNumber(initialValue));
    const target = { value: userInput };
    const expectedValidationResult = {
      isValid: true,
      errorMessage: "",
    };

    act(() => {
      result.current.handleCardNumberBlur({
        target,
        currentTarget: target,
      } as React.FocusEvent<HTMLInputElement>);
    });

    expect(result.current.validationResult).toEqual(expectedValidationResult);
  });

  it("입력 값이 모두 채워지지 않고 블러 이벤트 발생 시 에러가 발생한다", () => {
    const userInput = "125";
    const { result } = renderHook(() => useCardNumber(initialValue));
    const target = { value: userInput };
    const expectedValidationResult = {
      isValid: false,
      errorMessage: ERROR_MESSAGE.cardNumberOutOfRange,
    };

    act(() => {
      result.current.handleCardNumberBlur({
        target,
        currentTarget: target,
      } as React.FocusEvent<HTMLInputElement>);
    });

    expect(result.current.inputValue).not.toEqual(userInput);
    expect(result.current.validationResult).toEqual(expectedValidationResult);
  });

  it.each([
    ["44120982", "Visa"],
    ["51120982", "Master"],
    ["55120982", "Master"],
    ["36120982", "Diners"],
    ["34120982", "AMEX"],
    ["37120982", "AMEX"],
    ["6221261234", "UnionPay"],
    ["6226001234", "UnionPay"],
    ["6229251234", "UnionPay"],
    ["6241234", "UnionPay"],
    ["6261234", "UnionPay"],
    ["62821234", "UnionPay"],
    ["62881234", "UnionPay"],
    ["12345678", "Normal"],
  ])(
    "입력 값에 따라 카드 브랜드가 정상적으로 반환된다",
    (cardNumber: string, cardBrand: string) => {
      const { result } = renderHook(() => useCardNumber(initialValue));
      const target = { value: cardNumber };

      act(() => {
        result.current.handleCardNumberChange({
          target,
          currentTarget: target,
        } as React.ChangeEvent<HTMLInputElement>);
      });

      expect(result.current.brandType).toEqual(cardBrand);
    }
  );

  describe("유저의 입력값이 카드 브랜드의 포멧팅에 맞춰 저장", () => {
    it("Diners 브랜드 는 xxxx xxxxxx xxxx 형식으로 저장된다", () => {
      const userInput = "36112222223333";
      const expectedValue = "3611 222222 3333";
      const { result } = renderHook(() => useCardNumber(initialValue));
      const target = { value: userInput };

      act(() => {
        result.current.handleCardNumberChange({
          target,
          currentTarget: target,
        } as React.ChangeEvent<HTMLInputElement>);
      });

      expect(result.current.inputValue).toEqual(expectedValue);
    });

    it("AMEX 브랜드 는 xxxx xxxxxx xxxxx 형식으로 저장된다", () => {
      const userInput = "341122222233333";
      const expectedValue = "3411 222222 33333";
      const { result } = renderHook(() => useCardNumber(initialValue));
      const target = { value: userInput };

      act(() => {
        result.current.handleCardNumberChange({
          target,
          currentTarget: target,
        } as React.ChangeEvent<HTMLInputElement>);
      });

      expect(result.current.inputValue).toEqual(expectedValue);
    });

    it("그 외 브랜드 는 xxxx xxxx xxxx xxxx 형식으로 저장된다", () => {
      const userInput = "1111222233334444";
      const expectedValue = "1111 2222 3333 4444";
      const { result } = renderHook(() => useCardNumber(initialValue));
      const target = { value: userInput };

      act(() => {
        result.current.handleCardNumberChange({
          target,
          currentTarget: target,
        } as React.ChangeEvent<HTMLInputElement>);
      });

      expect(result.current.inputValue).toEqual(expectedValue);
    });
  });
});
