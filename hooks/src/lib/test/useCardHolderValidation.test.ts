import { renderHook } from "@testing-library/react";
import useCardHolderValidation from "../validation/useCardHolderValidation";
import ERROR_MESSAGES from "../constants/error";
import { act } from "react";

describe("cardHolder에 입력 유효성 검증 커스텀 훅 테스트", () => {
  it("사용자 이름이 공백일 경우 '불필요한 공백이 포함되어 있습니다.'라는 에러 메시지를 노출한다.", async () => {
    const errorMessage = ERROR_MESSAGES.INVALID_TRIM_BLANK;
    const cardHolderValue = " ";
    const cardHolderName = "cardHolder";

    const { result } = renderHook(() => useCardHolderValidation());

    act(() => {
      result.current.isCardHolderValid(cardHolderValue, cardHolderName);
    });

    expect(result.current.cardHolderValidation.errorMessage.cardHolder).toBe(
      errorMessage
    );
    expect(result.current.cardHolderValidation.isError[cardHolderName]).toBe(
      true
    );
  });

  it("사용자 이름이 영대문자가 아닐 경우 '영대문자로만 입력해주세요.'라는 에러 메시지를 노출한다.", async () => {
    const errorMessage = ERROR_MESSAGES.INVALID_ONLY_UPPERCASE;
    const cardHolderValue = "woowa";
    const cardHolderName = "cardHolder";

    const { result } = renderHook(() => useCardHolderValidation());

    act(() => {
      result.current.isCardHolderValid(cardHolderValue, cardHolderName);
    });

    expect(result.current.cardHolderValidation.errorMessage.cardHolder).toBe(
      errorMessage
    );
    expect(result.current.cardHolderValidation.isError[cardHolderName]).toBe(
      true
    );
  });
});
