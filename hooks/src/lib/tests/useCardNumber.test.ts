import { renderHook, act } from "@testing-library/react";
import useCardNumber from "../hooks/useCardNumber";

describe("useError", () => {
  const cardNumberError = {
    cardNumber: "",
  };

  let result: any;

  beforeEach(() => {
    const hook = renderHook(() =>
      useCardNumber({
        initCardNumberError: cardNumberError,
      })
    );
    result = hook.result;
  });

  test("카드 번호 초기 값을 가져온다.", () => {
    expect(result.current.cardNumber).toEqual("");
  });

  test("카드 번호 값을 변경할 수 있다.", () => {
    const changeValue = "1234";

    act(() => {
      result.current.changeCardNumber(changeValue);
    });

    expect(result.current.cardNumber).toEqual(changeValue);
  });

  test.each([
    ["412345", "Visa"],
    ["512345", "MasterCard"],
    ["361234", "Diners"],
    ["341234", "AMEX"],
    ["622126", "UnionPay"],
    ["628299", "UnionPay"],
    ["000000", "Unknown"],
  ])(
    "'%s' 입력 시 카드 브랜드는 '%s' 이어야 한다",
    (changeValue, expectedBrand) => {
      act(() => {
        result.current.changeCardNumber(changeValue);
      });

      expect(result.current.cardBrand).toEqual(expectedBrand);
    }
  );

  test.each([
    {
      brand: "visa",
      value: "4234567890123456",
      expectedFormat: ["4234", "5678", "9012", "3456"],
      expectedInputCount: 4,
    },
    {
      brand: "amex",
      value: "378282246310005",
      expectedFormat: ["3782", "822463", "10005"],
      expectedInputCount: 3,
    },
    {
      brand: "mastercard",
      value: "5555555555554444",
      expectedFormat: ["5555", "5555", "5555", "4444"],
      expectedInputCount: 4,
    },
    {
      brand: "Diners",
      value: "36555555555544",
      expectedFormat: ["3655", "555555", "5544"],
      expectedInputCount: 3,
    },
  ])(
    "카드 브랜드 $brand에 따라 포맷팅을 진행한다.",
    ({ value, expectedFormat, expectedInputCount }) => {
      act(() => {
        result.current.changeCardNumber(value);
      });

      expect(result.current.formattedCardNumber).toEqual(expectedFormat);
      expect(result.current.inputCount).toEqual(expectedInputCount);
    }
  );

  test("카드 번호가 올바르지 않은 경우 에러 메시지를 반환한다.", () => {
    const type = "cardNumber";
    const changeValue = "100a";
    const maxLength = 4;

    act(() => {
      result.current.changeCardNumber(changeValue);
      result.current.cardNumberError.checkValidation({
        length: maxLength,
        type,
        value: changeValue,
      });
    });

    expect(result.current.cardNumberError.getErrorMessage()).toEqual(
      "숫자만 입력 가능합니다."
    );
  });
});
