import { renderHook, act } from "@testing-library/react";
import { useCardHolder } from "../src/lib/hooks/useCardHolder";
import { ERROR_MESSAGE } from "../src/lib/constants/errorMessage";

describe("useCardHolder 테스트", () => {
  it("touched 상태인데 입력값이 비어있다면 에러 메시지를 반환해야 한다", () => {
    const { result } = renderHook(() => useCardHolder());
    act(() => {
      result.current.handleCardHolderChange("");
    });
    expect(result.current.cardHolderValidation.isValid).toBe(false);
    expect(result.current.cardHolderValidation.errorMessage).toBe(ERROR_MESSAGE.NO_INPUT);
  });

  it("입력값에 유효하지 않은 문자(영어 소문자)가 포함되어 있다면 에러 메시지를 반환해야 한다", () => {
    const { result } = renderHook(() => useCardHolder());
    act(() => {
      result.current.handleCardHolderChange("jo h n");
    });
    expect(result.current.cardHolderValidation.isValid).toBe(false);
    expect(result.current.cardHolderValidation.errorMessage).toBe(
      ERROR_MESSAGE.CARD_HOLDER.INVALID_CHARACTERS
    );
  });

  it("입력값에 유효하지 않은 문자(숫자)가 포함되어 있다면 에러 메시지를 반환해야 한다", () => {
    const { result } = renderHook(() => useCardHolder());
    act(() => {
      result.current.handleCardHolderChange("222222");
    });
    expect(result.current.cardHolderValidation.isValid).toBe(false);
    expect(result.current.cardHolderValidation.errorMessage).toBe(
      ERROR_MESSAGE.CARD_HOLDER.INVALID_CHARACTERS
    );
  });

  it("입력값의 길이가 15자를 초과한다면 에러 메시지를 반환해야 한다", () => {
    const { result } = renderHook(() => useCardHolder());
    act(() => {
      result.current.handleCardHolderChange("JOHNDOELONGLONGLONG");
    });
    expect(result.current.cardHolderValidation.isValid).toBe(false);
    expect(result.current.cardHolderValidation.errorMessage).toBe(
      ERROR_MESSAGE.CARD_HOLDER.MAX_LENGTH_EXCEEDED
    );
  });

  it("입력값이 유효하다면 isValid가 true여야 한다", () => {
    const { result } = renderHook(() => useCardHolder());
    act(() => {
      result.current.handleCardHolderChange("JOHN DOE");
    });
    expect(result.current.cardHolderValidation.isValid).toBe(true);
  });
});
