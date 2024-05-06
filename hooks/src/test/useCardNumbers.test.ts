import { renderHook, act } from "@testing-library/react";
import { ChangeEvent } from "react";
import { COMMON_ERROR, CARD_NUMBER } from "../lib/constants/validation";
import useCardNumbers from "../lib/useCardNumbers";

describe("useCardNumber 커스텀 훅 테스트", () => {
  const cardNumbersLength = 16;

  it("카드 번호 입력 시 상태가 올바르게 업데이트되는지 확인한다.", () => {
    const cardNumber = "1234567812345678";
    const { result } = renderHook(() => useCardNumbers(cardNumbersLength));
    const mockEvent = {
      target: { value: cardNumber },
    };
    act(() => {
      result.current.handleCardNumbers(
        mockEvent as ChangeEvent<HTMLInputElement>
      );
    });

    expect(result.current.cardNumberInfo.cardNumber).toBe(cardNumber);
    expect(result.current.cardNumberInfo.isValid).toBe(true);
  });

  it("카드 번호 길이를 초과하면 isValid가 false이고, 카드 번호 길이 관련 에러 메세지를 출력한다.", () => {
    const numbersOverSixteenLength = "12345678901234567";
    const { result } = renderHook(() => useCardNumbers(cardNumbersLength));

    const mockEvent = {
      target: { value: numbersOverSixteenLength },
    };
    act(() => {
      result.current.handleCardNumbers(
        mockEvent as ChangeEvent<HTMLInputElement>
      );
    });

    expect(result.current.cardNumberInfo.isValid).toBe(false);
    expect(result.current.cardNumberInfo.errorMessages).toContain(
      CARD_NUMBER.errorMessage.invalidLength(cardNumbersLength)
    );
  });

  it("카드 번호 길이 미만이면 isValid가 false이고, 카드 번호 길이 관련 에러 메세지를 출력한다.", () => {
    const numbersUnderSixteenLength = "12345";
    const { result } = renderHook(() => useCardNumbers(cardNumbersLength));

    const mockEvent = {
      target: { value: numbersUnderSixteenLength },
    };
    act(() => {
      result.current.handleCardNumbers(
        mockEvent as ChangeEvent<HTMLInputElement>
      );
    });

    expect(result.current.cardNumberInfo.isValid).toBe(false);
    expect(result.current.cardNumberInfo.errorMessages).toContain(
      CARD_NUMBER.errorMessage.invalidLength(cardNumbersLength)
    );
  });

  it("카드 번호가 숫자가 아니면 isValid가 false이고, 숫자를 입력해달라는 에러 메세지를 출력한다.", () => {
    const notNumericValue = "abcd56781234efgh";
    const { result } = renderHook(() => useCardNumbers(cardNumbersLength));

    const mockEvent = {
      target: { value: notNumericValue },
    };
    act(() => {
      result.current.handleCardNumbers(
        mockEvent as ChangeEvent<HTMLInputElement>
      );
    });

    expect(result.current.cardNumberInfo.isValid).toBe(false);
    expect(result.current.cardNumberInfo.errorMessages).toContain(
      COMMON_ERROR.notNumeric
    );
  });
});
