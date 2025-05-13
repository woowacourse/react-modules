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

const formatCases: Array<[string, string]> = [
  ["4000000000000000", "4000 0000 0000 0000"],
  ["5100000000000000", "5100 0000 0000 0000"],
  ["36111111111111", "3611 111111 1111"],
  ["341111111111111", "3411 111111 11111"],
  ["6221261111111111", "6221 2611 1111 1111"],
];

const invalidLengthCases: Array<[string, number]> = [
  ["400000000000000", 3],
  ["510000000000000", 3],
  ["36111111111", 2],
  ["341", 0],
  ["622126111111111", 3],
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

describe("formatted", () => {
  test.each(formatCases)('%s → "%s" 형태로 포맷팅', (input, expected) => {
    const { result } = renderHook(() => useCardNumbers());
    act(() => result.current.handleCardNumberChange(input));
    expect(result.current.formatted).toBe(expected);
  });
});

describe("잘못된 길이 입력 시 에러 처리", () => {
  test.each(invalidLengthCases)(
    "%s 입력 → error[%d]에 INVALID_LENGTH_ERROR",
    (input, segmentIndex) => {
      const { result } = renderHook(() => useCardNumbers());
      act(() => result.current.handleCardNumberChange(input));
      expect(result.current.error[segmentIndex]).toEqual({
        isValid: true,
        errorMessage: "카드 번호는 4자리로 입력해 주세요.",
      });
    }
  );
});
