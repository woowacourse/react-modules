import { renderHook } from "@testing-library/react";
import useCardNumberValidate from "../validation/useCardNumberValidation";
import ERROR_MESSAGES from "../constants/error";
import { act } from "react";

describe("카드 번호 입력 유효성 검증 커스텀 훅 테스트", () => {
  it("카드 번호가 공백일 경우 '불필요한 공백이 포함되어 있습니다.'라는 에러 메시지를 노출한다.", async () => {
    const errorMessage = ERROR_MESSAGES.INVALID_TRIM_BLANK;
    const cardNumberValue = " ";
    const cardNumberName = "cardNumber1";

    const { result } = renderHook(() => useCardNumberValidate());

    act(() => {
      result.current.isCardNumberValid(cardNumberValue, cardNumberName);
    });

    expect(result.current.cardNumberValidation.errorMessage.cardNumber1).toBe(
      errorMessage
    );
    expect(result.current.cardNumberValidation.isError[cardNumberName]).toBe(
      true
    );
  });

  it("카드 번호가 숫자가 아닐 경우 '숫자만 입력해주세요.'라는 에러 메시지를 노출한다.", async () => {
    const errorMessage = ERROR_MESSAGES.INVALID_ONLY_NUMBER;
    const cardNumberValue = "a";
    const cardNumberName = "cardNumber1";

    const { result } = renderHook(() => useCardNumberValidate());

    act(() => {
      result.current.isCardNumberValid(cardNumberValue, cardNumberName);
    });

    expect(result.current.cardNumberValidation.errorMessage.cardNumber1).toBe(
      errorMessage
    );
    expect(result.current.cardNumberValidation.isError[cardNumberName]).toBe(
      true
    );
  });

  it("카드 번호를 4자 이하로 입력할 경우 '4자로 입력해주세요.'라는 에러 메시지를 노출한다.", async () => {
    const errorMessage = ERROR_MESSAGES.INVALID_MAX_LENGTH;
    const cardNumberValue = "411";
    const cardNumberName = "cardNumber1";

    const { result } = renderHook(() => useCardNumberValidate());

    act(() => {
      result.current.isCardNumberValid(cardNumberValue, cardNumberName);
    });

    expect(result.current.cardNumberValidation.errorMessage.cardNumber1).toBe(
      "4" + errorMessage
    );
    expect(result.current.cardNumberValidation.isError[cardNumberName]).toBe(
      true
    );
  });
});
