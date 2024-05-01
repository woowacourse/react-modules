import { renderHook, act } from "@testing-library/react";
import useCardHolder from "./useCardHolder";

describe("useCardHolder", () => {
  const initialValue = "Seongjin Hong";

  it("올바른 초기값(initialValue)이 설정되면 그에 맞는 cardHolder를 반환할 수 있어야 한다", () => {
    const { result } = renderHook(() => useCardHolder(initialValue));

    expect(result.current.cardHolder).toBe(initialValue);
  });

  it("올바른 카드 소유자 이름이 handleUpdateCardHolder를 통해 들어오면, 입력값에 따라 카드 소유자 이름이 정확히 업데이트 되어야 한다", async () => {
    const { result } = renderHook(() => useCardHolder(initialValue));

    act(() => {
      result.current.handleUpdateCardHolder("Suya Choi");
    });

    expect(result.current.cardHolder).toBe("Suya Choi");
    expect(result.current.validationResult).toEqual({ isValid: true });
  });

  it("잘못된 형식의 카드 소유자 이름이 들어오면, 카드 소유자 이름은 업데이트되지 않고 validationResult에 에러 여부 및 메시지가 업데이트 되어야 한다", async () => {
    const { result } = renderHook(() => useCardHolder(initialValue));

    act(() => {
      result.current.handleUpdateCardHolder("Seongjin123");
    });

    expect(result.current.validationResult.isValid).toBe(false);
    expect(result.current.cardHolder).toBe(initialValue);
    expect(result.current.validationResult).toEqual({
      isValid: false,
      errorMessage: "영문자만 입력할 수 있습니다.",
    });
  });

  it("alwaysUpdateCardHolder가 true일 때, 잘못된 형식의 카드 소유자 이름이 들어와도 카드 소유자 이름이 업데이트되어야 한다", async () => {
    const { result } = renderHook(() => useCardHolder(initialValue, true));

    act(() => {
      result.current.handleUpdateCardHolder("Seongjin123");
    });

    expect(result.current.cardHolder).toBe("Seongjin123");
    expect(result.current.validationResult).toEqual({
      isValid: false,
      errorMessage: "영문자만 입력할 수 있습니다.",
    });
  });
});
