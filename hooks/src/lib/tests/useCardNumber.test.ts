import { renderHook, act } from "@testing-library/react";
import useCardNumber from "../hooks/useCardNumber";

describe("useError", () => {
  const cardNumber = {
    first: "",
    second: "",
    third: "",
    forth: "",
  };

  const cardNumberError = {
    first: "",
    second: "",
    third: "",
    forth: "",
  };

  let result: any;

  beforeEach(() => {
    const hook = renderHook(() =>
      useCardNumber({
        initCardNumber: cardNumber,
        initCardNumberError: cardNumberError,
      })
    );
    result = hook.result;
  });

  test("카드 번호 초기 값을 가져온다.", () => {
    expect(result.current.cardNumber.values).toEqual(cardNumber);
  });

  test("카드 번호 값을 변경할 수 있다.", () => {
    const type = "first";
    const changeValue = "1001";

    act(() => {
      result.current.cardNumber.changeValues(type, changeValue);
    });

    expect(result.current.cardNumber.values[type]).toEqual(changeValue);
  });

  test("카드 번호가 올바르지 않은 경우 에러를 반환한다.", () => {
    const type = "first";
    const changeValue = "100a";
    const maxLength = 4;

    act(() => {
      result.current.cardNumber.changeValues(type, changeValue);
      result.current.cardNumberError.checkValidation({
        length: maxLength,
        type,
        value: changeValue,
      });
    });

    expect(result.current.cardNumberError.isError()).toEqual(true);
  });

  test("카드 번호가 올바르지 않은 경우 에러 메시지를 반환한다.", () => {
    const type = "first";
    const changeValue = "100a";
    const maxLength = 4;

    act(() => {
      result.current.cardNumber.changeValues(type, changeValue);
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
