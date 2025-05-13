import { renderHook, act } from "@testing-library/react";
import useCardNumbers from "./useCardNumbers";

describe("useCardNumbers 훅", () => {
  test("초기 상태에는 빈 숫자 4개, 에러 없음", () => {
    const { result } = renderHook(() => useCardNumbers());
    expect(result.current.numbers).toEqual(["", "", "", ""]);
    result.current.error.forEach((e) => {
      expect(e.isValid).toBe(false);
      expect(e.errorMessage).toBe("");
    });
  });

  test("단일 segment 4자리 정상 입력", () => {
    const { result } = renderHook(() => useCardNumbers());
    act(() => result.current.handleCardNumberChange("1234"));
    expect(result.current.numbers[0]).toBe("1234");
    expect(result.current.error[0].isValid).toBe(false);
  });

  test("여러 칸 연속 입력 시 segment 분할과 에러 처리", () => {
    const { result } = renderHook(() => useCardNumbers());
    act(() => result.current.handleCardNumberChange("1234567890"));
    expect(result.current.numbers).toEqual(["1234", "5678", "90", ""]);
    expect(result.current.error[2]).toEqual({
      isValid: true,
      errorMessage: "카드 번호는 4자리로 입력해 주세요.",
    });
  });
});
