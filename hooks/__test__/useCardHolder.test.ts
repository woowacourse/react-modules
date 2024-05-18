import { act, renderHook } from "@testing-library/react";
import { ERROR_MESSAGE } from "../src/lib/constants/errorMessage";
import { useCardHolder } from "../src/lib/hooks/useCardHolder";

describe("useCardHolder", () => {
  test("사용자가 유효한 카드 소유자 이름을 입력하면 유효성 검사를 통과한다", () => {
    const { result } = renderHook(() => useCardHolder());

    act(() => {
      result.current.handleCardHolderChange("CHOI RIVER");
    });

    expect(result.current.cardHolderValidationResult.isValid).toBe(true);
  });

  test("사용자가 유효하지 않은 문자를 입력하면 유효성 검사에 실패한다", () => {
    const { result } = renderHook(() => useCardHolder());

    act(() => {
      result.current.handleCardHolderChange("Choi River");
    });

    expect(result.current.cardHolderValidationResult.isValid).toBe(false);
    expect(result.current.cardHolderValidationResult.errorMessage).toBe(
      "카드 소유자 이름은 영어 대문자와 공백만 입력 가능합니다."
    );
  });

  test("사용자가 15글자 이상을 입력하면 유효성 검사에 실패한다", () => {
    const { result } = renderHook(() => useCardHolder());

    act(() => {
      result.current.handleCardHolderChange("CHOI RIVER ABCDEF");
    });

    expect(result.current.cardHolderValidationResult.isValid).toBe(false);
    expect(result.current.cardHolderValidationResult.errorMessage).toBe(
      ERROR_MESSAGE.CARD_HOLDER.MAX_LENGTH_EXCEEDED
    );
  });

  test("사용자가 아무런 입력을 하지 않으면 유효성 검사에 실패한다", () => {
    const { result } = renderHook(() => useCardHolder());

    act(() => {
      result.current.handleCardHolderChange("");
    });

    expect(result.current.cardHolderValidationResult.isValid).toBe(false);
    expect(result.current.cardHolderValidationResult.errorMessage).toBe(ERROR_MESSAGE.NO_INPUT);
  });
});
