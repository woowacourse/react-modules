import { act, renderHook } from "@testing-library/react";
import { ERROR_MESSAGE } from "../src/lib/constants/errorMessage";
import useCardIssuer from "../src/lib/hooks/useCardIssuer";

describe("useCardIssuer 테스트", () => {
  it("touched 상태인데 입력값이 비어있다면 에러 메시지를 반환해야 한다", () => {
    const { result } = renderHook(() => useCardIssuer());
    act(() => {
      result.current.handleCardIssuerChange("");
    });
    expect(result.current.cardIssuerValidation.isValid).toBe(false);
    expect(result.current.cardIssuerValidation.errorMessage).toBe(ERROR_MESSAGE.NO_INPUT);
  });
});
