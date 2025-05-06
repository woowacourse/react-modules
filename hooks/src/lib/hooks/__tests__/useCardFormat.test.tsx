import { renderHook, act } from "@testing-library/react";
import useCardFormat from "../useCardFormat";

describe("useCardFormat 훅 테스트", () => {
  // 1. 초기 상태 검사
  it("초기 상태: formatted/raw는 빈 문자열, totalLength와 placeholder는 DEFAULT 규칙(4-4-4-4)에 맞아야 한다", () => {
    const { result } = renderHook(() => useCardFormat());
    // formatted와 raw가 빈 문자열이어야 함
    expect(result.current.formatted).toBe("");
    expect(result.current.raw).toBe("");
    // DEFAULT 패턴 4-4-4-4 => 숫자 16 + 구분자 3 = totalLength 19
    expect(result.current.totalLength).toBe(19);
    // placeholder는 "XXXX XXXX XXXX XXXX"
    expect(result.current.placeholder).toBe("XXXX XXXX XXXX XXXX");
  });

  // 2. 숫자 외 문자 제거 및 기본 그룹핑
  it("숫자 외 문자를 제거하고 4자리씩 공백으로 그룹핑해야 한다", () => {
    const { result } = renderHook(() => useCardFormat());
    act(() => {
      result.current.onChange({
        target: { value: "1234-5678 ab90_cd12 3456" },
      } as React.ChangeEvent<HTMLInputElement>);
    });
    // raw에는 숫자만 남아야 함
    expect(result.current.raw).toBe("1234567890123456");
    // formatted는 "1234 5678 9012 3456"
    expect(result.current.formatted).toBe("1234 5678 9012 3456");
  });

  // 3. 커스텀 구분자 사용
  it("커스텀 splitter('-')를 사용하면 하이픈으로 그룹핑된다", () => {
    const { result } = renderHook(() => useCardFormat("-"));
    act(() => {
      result.current.onChange({
        target: { value: "4111111111111111" },
      } as React.ChangeEvent<HTMLInputElement>);
    });
    // raw 검사
    expect(result.current.raw).toBe("4111111111111111");
    // formatted는 "4111-1111-1111-1111"
    expect(result.current.formatted).toBe("4111-1111-1111-1111");
    // placeholder는 "XXXX-XXXX-XXXX-XXXX"
    expect(result.current.placeholder).toBe("XXXX-XXXX-XXXX-XXXX");
  });

  // 4. AMEX 카드 포맷 (15자리, 4-6-5)
  it("AMEX 번호(15자리)는 4-6-5 패턴으로 포맷팅한다", () => {
    const { result } = renderHook(() => useCardFormat());
    act(() => {
      result.current.onChange({
        target: { value: "341234567890123" },
      } as React.ChangeEvent<HTMLInputElement>);
    });
    // raw는 15자리 숫자
    expect(result.current.raw).toBe("341234567890123");
    // formatted는 "3412 345678 90123"
    expect(result.current.formatted).toBe("3412 345678 90123");
    // totalLength는 15 + 2 구분자 = 17
    expect(result.current.totalLength).toBe(17);
    // placeholder는 "XXXX XXXXXX XXXXX"
    expect(result.current.placeholder).toBe("XXXX XXXXXX XXXXX");
  });

  // 5. Diners 카드 포맷 (14자리, 4-4-4-2)
  it("Diners 번호(14자리)는 4-6-4 패턴으로 포맷팅한다", () => {
    const { result } = renderHook(() => useCardFormat());
    act(() => {
      result.current.onChange({
        target: { value: "36123456789012" },
      } as React.ChangeEvent<HTMLInputElement>);
    });
    // raw는 14자리 숫자
    expect(result.current.raw).toBe("36123456789012");
    // formatted는 "3612 3456 7890 12"
    expect(result.current.formatted).toBe("3612 345678 9012");
    // totalLength는 14 + 3 구분자 = 17
    expect(result.current.totalLength).toBe(16);
    // placeholder는 "XXXX XXXXXX XXXX"
    expect(result.current.placeholder).toBe("XXXX XXXXXX XXXX");
  });
  // 6. UnionPay 카드 포맷 (16자리, 4-4-4-4)
  it("UnionPay 번호(16자리)는 4-4-4-4 패턴으로 포맷팅한다", () => {
    const { result } = renderHook(() => useCardFormat());
    act(() => {
      result.current.onChange({
        target: { value: "6521231241414324" },
      } as React.ChangeEvent<HTMLInputElement>);
    });
    // raw는 16자리 숫자
    expect(result.current.raw).toBe("6521231241414324");
    // formatted는 "6521 2312 4141 4324"
    expect(result.current.formatted).toBe("6521 2312 4141 4324");
    // totalLength는 16 + 3 구분자 = 19
    expect(result.current.totalLength).toBe(19);
    // placeholder는 "XXXX XXXX XXXX XXXX"
    expect(result.current.placeholder).toBe("XXXX XXXX XXXX XXXX");
  });
  // 7. 잘못된 카드 번호 처리
  it("잘못된 카드 번호는 formatted와 raw가 Default 규칙을 따라야 한다", () => {
    const { result } = renderHook(() => useCardFormat());
    act(() => {
      result.current.onChange({
        target: { value: "1234524124141411" },
      } as React.ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.raw).toBe("1234524124141411");

    expect(result.current.formatted).toBe("1234 5241 2414 1411");

    expect(result.current.totalLength).toBe(19);

    expect(result.current.placeholder).toBe("XXXX XXXX XXXX XXXX");
  });
});
