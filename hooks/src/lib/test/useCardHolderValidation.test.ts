import { renderHook } from "@testing-library/react";
import useCardHolderValidation from "../useCardHolderValidation";
import ERROR_MESSAGES from "../constants/error";
import { act } from "react";

describe("cardHolder에 입력 유효성 검증 커스텀 훅 테스트", () => {
  it("사용자 이름에 공백이 입력됐을경우 isError가 true가 되고 errorMessage가 '불필요한 공백이 포함되어 있습니다.'라는 값으로 재할당 된다.", async () => {
    const errorMessage = ERROR_MESSAGES.INVALID_TRIM_BLANK;
    const cardHolderValue = " ";
    const cardHolderName = "cardHolder";

    const { result } = renderHook(() => useCardHolderValidation());

    act(() => {
      result.current.cardHolderValidateHandler(cardHolderValue, cardHolderName);
    });

    expect(result.current.cardHolderValidation.errorMessage.cardHolder).toBe(
      errorMessage,
    );
    expect(result.current.cardHolderValidation.isError[cardHolderName]).toBe(
      true,
    );
  });

  it("사용자 이름에 숫자가 아닌 다른 값이 입력 될 경우 isError가 true가 되고 errorMessage가 '숫자만 입력해주세요.'라는 값으로 재할당 된다.", async () => {
    const errorMessage = ERROR_MESSAGES.INVALID_DOUBLE_BLANK;
    const cardHolderValue = "Kim  gayeon";
    const cardHolderName = "cardHolder";

    const { result } = renderHook(() => useCardHolderValidation());

    act(() => {
      result.current.cardHolderValidateHandler(cardHolderValue, cardHolderName);
    });

    expect(result.current.cardHolderValidation.errorMessage.cardHolder).toBe(
      errorMessage,
    );
    expect(result.current.cardHolderValidation.isError[cardHolderName]).toBe(
      true,
    );
  });

  it("사용자 이름에 대문자가 아닌 문자가 입력될 경우 isError가 true가 되고 errorMessage가 '영대문자로만 입력해주세요.'라는 값으로 재할당 된다.", async () => {
    const errorMessage = ERROR_MESSAGES.INVALID_ONLY_UPPERCASE;
    const cardHolderValue = "woowa";
    const cardHolderName = "cardHolder";

    const { result } = renderHook(() => useCardHolderValidation());

    act(() => {
      result.current.cardHolderValidateHandler(cardHolderValue, cardHolderName);
    });

    expect(result.current.cardHolderValidation.errorMessage.cardHolder).toBe(
      errorMessage,
    );
    expect(result.current.cardHolderValidation.isError[cardHolderName]).toBe(
      true,
    );
  });
});
