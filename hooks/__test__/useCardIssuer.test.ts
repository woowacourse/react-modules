import { act, renderHook } from "@testing-library/react";
import { ERROR_MESSAGE } from "../src/lib/constants/errorMessage";
import { useCardIssuer } from "../src/lib/hooks/useCardIssuer";

describe("useCardIssuer", () => {
  test("사용자가 카드 발급사를 입력하면 유효성 검사를 통과한다", () => {
    const { result } = renderHook(() => useCardIssuer());

    act(() => {
      result.current.handleCardIssuerChange("VISA");
    });

    expect(result.current.cardIssuerValidationResult.isValid).toBe(true);
  });

  test("사용자가 아무런 입력을 하지 않으면 유효성 검사에 실패한다", () => {
    const { result } = renderHook(() => useCardIssuer());

    act(() => {
      result.current.handleCardIssuerChange("");
    });

    expect(result.current.cardIssuerValidationResult.isValid).toBe(false);
    expect(result.current.cardIssuerValidationResult.errorMessage).toBe(ERROR_MESSAGE.NO_INPUT);
  });
});
