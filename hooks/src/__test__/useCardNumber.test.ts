import { act, renderHook } from "@testing-library/react";
import {
  defaultValidationValue,
  ERROR_MESSAGE,
} from "../lib/constants/validation";
import useCardNumber from "../lib/hooks/useCardNumber";

const defaultCardNumberValue = {
  first: "",
  second: "",
  third: "",
  fourth: "",
};

const defaultCardNumberValidationValue = {
  first: defaultValidationValue,
  second: defaultValidationValue,
  third: defaultValidationValue,
  fourth: defaultValidationValue,
};

describe("useCardNumber", () => {
  it("초깃값은 카드 번호의 4개 필드가 모두 빈 문자열이고, 유효성 검증 상태는 초기 상태(에러 없음)이어야 한다.", () => {
    // given
    // when
    const { result } = renderHook(() => useCardNumber());
    const { cardNumber, cardNumberValidation } = result.current;

    // then
    expect(cardNumber).toEqual(defaultCardNumberValue);
    expect(cardNumberValidation).toEqual(defaultCardNumberValidationValue);
  });

  it("카드 번호의 4개 필드가 모두 올바른 경우, 유효성 검증 상태는 초기 상태를 유지한다.", () => {
    // given
    const validValue = {
      first: "1111",
      second: "2222",
      third: "3333",
      fourth: "4444",
    };

    // when
    const { result } = renderHook(() => useCardNumber());

    act(() => {
      result.current.handleCardNumberChange("first", validValue.first);
      result.current.handleCardNumberChange("second", validValue.second);
      result.current.handleCardNumberChange("third", validValue.third);
      result.current.handleCardNumberChange("fourth", validValue.fourth);
    });

    // then
    expect(result.current.cardNumber).toEqual(validValue);
    expect(result.current.cardNumberValidation).toEqual(
      defaultCardNumberValidationValue
    );
  });

  it("카드 번호가 숫자가 아닌 경우, 해당 필드에 에러가 발생한다.", () => {
    // given
    const nonNumeric = "abcd";

    // when
    const { result } = renderHook(() => useCardNumber());

    act(() => {
      result.current.handleCardNumberChange("first", nonNumeric);
    });

    // then
    expect(result.current.cardNumber.first).toEqual(nonNumeric);
    expect(result.current.cardNumberValidation.first).toEqual({
      isError: true,
      errorMessage: ERROR_MESSAGE.INVALID_NUMBER,
    });
  });

  it("카드 번호 필드의 자릿수가 4가 아닌 경우, 해당 필드에 에러가 발생한다.", () => {
    // given
    const invalidLength = "123";
    const MAX_LENGTH = 4;

    // when
    const { result } = renderHook(() => useCardNumber());

    act(() => {
      result.current.handleCardNumberChange("first", invalidLength);
    });

    // then
    expect(result.current.cardNumber.first).toEqual(invalidLength);
    expect(result.current.cardNumberValidation.first).toEqual({
      isError: true,
      errorMessage: `${MAX_LENGTH}${ERROR_MESSAGE.INVALID_LENGTH}`,
    });
  });

  it("여러 필드에 각각 다른 에러가 발생하는 경우, 각 필드마다 적절한 에러가 발생한다.", () => {
    // given
    const nonNumeric = "abc";
    const invalidLength = "123";
    const MAX_LENGTH = 4;

    // when
    const { result } = renderHook(() => useCardNumber());

    act(() => {
      result.current.handleCardNumberChange("first", nonNumeric);
      result.current.handleCardNumberChange("second", invalidLength);
    });

    // then
    expect(result.current.cardNumber.first).toEqual(nonNumeric);
    expect(result.current.cardNumberValidation.first).toEqual({
      isError: true,
      errorMessage: ERROR_MESSAGE.INVALID_NUMBER,
    });

    expect(result.current.cardNumber.second).toEqual(invalidLength);
    expect(result.current.cardNumberValidation.second).toEqual({
      isError: true,
      errorMessage: `${MAX_LENGTH}${ERROR_MESSAGE.INVALID_LENGTH}`,
    });

    expect(result.current.cardNumber.third).toEqual("");
    expect(result.current.cardNumberValidation.third).toEqual(
      defaultValidationValue
    );

    expect(result.current.cardNumber.fourth).toEqual("");
    expect(result.current.cardNumberValidation.fourth).toEqual(
      defaultValidationValue
    );
  });
});
