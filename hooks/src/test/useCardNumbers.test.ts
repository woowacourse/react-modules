import { renderHook } from "@testing-library/react";
import React, { ChangeEvent } from "react";
import { useCardNumbers } from "@/lib";
import { CardNumbersErrorMessages } from "@/constants/error";
import { ErrorStatus } from "@/types/errorStatus";

describe("useCardNumbers 훅 테스트", () => {
  const validValues = {
    cardNumber1: "1234",
    cardNumber2: "1234",
    cardNumber3: "1234",
    cardNumber4: "1234",
  };

  const initialValues = {
    cardNumber1: "",
    cardNumber2: "",
    cardNumber3: "",
    cardNumber4: "",
  };
  it("초기값이 정확히 설정되어야 한다.", () => {
    const { result } = renderHook(() => useCardNumbers(validValues));
    expect(result.current.values).toEqual(validValues);
  });

  it("입력값이 정확히 업데이트 되어야 한다.", () => {
    const changeValue = {
      cardNumber1: "5678",
      cardNumber2: "1234",
      cardNumber3: "1234",
      cardNumber4: "1234",
    };
    const { result } = renderHook(() => useCardNumbers(validValues));

    React.act(() => {
      result.current.onChange({
        target: { value: "5678", name: "cardNumber1" },
      } as ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.values).toEqual(changeValue);
  });

  it("숫자아닌 값이 입력됐을 때 에러를 낸다.", () => {
    const { result } = renderHook(() => useCardNumbers(initialValues));

    const invalidValues = "abcd";
    React.act(() => {
      result.current.onChange({
        target: { value: invalidValues, name: "cardNumber1" },
      } as ChangeEvent<HTMLInputElement>);
    });

    const expectedErrorMessage = {
      cardNumber1: CardNumbersErrorMessages[ErrorStatus.IS_NOT_NUMBER],
      cardNumber2: null,
      cardNumber3: null,
      cardNumber4: null,
    };
    expect(result.current.errorMessages).toEqual(expectedErrorMessage);
  });

  it("숫자가 4자리가 아닐때 에러를 낸다.", () => {
    const { result } = renderHook(() => useCardNumbers(initialValues));

    const invalidValues = "12345";
    React.act(() => {
      result.current.onChange({
        target: { value: invalidValues, name: "cardNumber1" },
      } as ChangeEvent<HTMLInputElement>);
    });

    const expectedErrorMessage = {
      cardNumber1: CardNumbersErrorMessages[ErrorStatus.INVALID_LENGTH],
      cardNumber2: null,
      cardNumber3: null,
      cardNumber4: null,
    };
    expect(result.current.errorMessages).toEqual(expectedErrorMessage);
  });
});
