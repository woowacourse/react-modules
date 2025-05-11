import { renderHook, act } from "@testing-library/react";
import useCardNumbers from "../useCardNumbers/useCardNumbers";

const cardTypeCases: Array<[string, string]> = [
  ["4000000000000000", "visa"],
  ["4999999999999999", "visa"],
  ["5100000000000000", "master"],
  ["5599999999999999", "master"],
  ["36111111111111", "diners"],
  ["341111111111111", "amex"],
  ["371111111111111", "amex"],
  ["6221261111111111", "unionPay"],
  ["6229259999999999", "unionPay"],
  ["6241111111111111", "unionPay"],
  ["6269999999999999", "unionPay"],
  ["6282111111111111", "unionPay"],
  ["6288999999999999", "unionPay"],
  ["0000000000000000", "default"],
];

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

  test("숫자와 문자 섞어 입력 입력하면 문자 필터링", () => {
    const { result } = renderHook(() => useCardNumbers());
    act(() => result.current.handleCardNumberChange("12ab34"));
    expect(result.current.numbers[0]).toBe("1234");
    expect(result.current.error[0].isValid).toBe(false);
  });
});

describe("카드 타입 감지", () => {
  test.each(cardTypeCases)(
    "입력 %s → cardType이 %s로 설정",
    (input, expectedType) => {
      const { result } = renderHook(() => useCardNumbers());
      act(() => result.current.handleCardNumberChange(input));
      expect(result.current.cardType).toBe(expectedType);
    }
  );
});
