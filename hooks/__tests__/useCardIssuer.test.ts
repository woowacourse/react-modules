import { renderHook, act } from "@testing-library/react";
import { useCardIssuer } from "../src/lib/hooks/useCardIssuer";
import { ERROR_MESSAGE } from "../src/lib/constants/errorMessage";

describe("useCardIssuer 테스트", () => {
  it("touched 상태인데 입력값이 비어있다면 에러 메시지를 반환해야 한다", () => {
    const { result } = renderHook(() => useCardIssuer());
    act(() => {
      result.current[1]("");
    });
    expect(result.current[2].isValid).toBe(false);
    expect(result.current[2].errorMessage).toBe(ERROR_MESSAGE.NO_INPUT);
  });
});
