import useCardNumbers from "../../lib/useCardNumbers";
import { renderHook, act } from "@testing-library/react";
import { ChangeEvent } from "react";
import { COMMON_ERROR } from "../../lib/constants/validation";
import { PAYMENT_COMPANY } from "../../lib/constants/paymentCompany";

export const createChangeEvent = (value: string) => {
  return {
    target: { value: value.replace(/\s+/g, "") },
  } as ChangeEvent<HTMLInputElement>;
};

export const setupCardNumberTest = (cardNumber: string) => {
  const { result } = renderHook(() => useCardNumbers());
  const changeEvent = createChangeEvent(cardNumber);
  act(() => {
    result.current.onChangeCardNumbers(changeEvent);
  });
  return result;
};

describe("useCardNumber 커스텀 훅 테스트", () => {
  const cardLength = PAYMENT_COMPANY.NONE.length;
  const whiteSpaceCount = PAYMENT_COMPANY.NONE.whiteSpaceCount;

  it("카드 번호 입력 시 상태가 올바르게 업데이트되는지 확인한다.", () => {
    const cardNumber = "1234567812345678";
    const formattedCardNumber = "1234 5678 1234 5678";

    const result = setupCardNumberTest(cardNumber);

    expect(result.current.cardNumberInfo.isValid).toBe(true);
    expect(result.current.cardNumberInfo.cardNumber).toBe(formattedCardNumber);
    expect(result.current.cardNumberInfo.maxLength).toBe(
      cardLength + whiteSpaceCount
    );
  });

  it("카드 번호에 숫자가 아닌 입력이 있으면 isValid가 false이고, 숫자를 입력해달라는 에러 메세지를 출력한다.", () => {
    const notNumericValue = "1234 5678 a123 1234";

    const result = setupCardNumberTest(notNumericValue);

    expect(result.current.cardNumberInfo.isValid).toBe(false);
    expect(result.current.cardNumberInfo.errorMessages).toContain(
      COMMON_ERROR.notNumeric
    );
  });
});
