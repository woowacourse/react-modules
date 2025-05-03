import { renderHook, act } from "@testing-library/react";
import useExpirationDate from "./useExpirationDate";

describe("useExpirationDate 훅 테스트", () => {
  it("유효한 월, 연도 입력 시 isValid가 true이고 에러 메시지가 없음", () => {
    const { result } = renderHook(() => useExpirationDate());

    act(() => {
      result.current.validate("month", "12");
      result.current.validate("year", "30");
    });

    expect(result.current.isValid).toEqual({ month: true, year: true });
    expect(result.current.errorMessage).toEqual({ month: "", year: "" });
  });

  it("문자가 포함된 월 입력 시 숫자 에러 메시지 반환", () => {
    const { result } = renderHook(() => useExpirationDate());

    act(() => {
      result.current.validate("month", "1a");
    });

    expect(result.current.isValid.month).toBe(false);
    expect(result.current.errorMessage.month).toBe("숫자만 입력 가능합니다.");
  });

  it("월이 2자리가 아닐 경우 형식 에러 반환", () => {
    const { result } = renderHook(() => useExpirationDate());

    act(() => {
      result.current.validate("month", "1");
    });

    expect(result.current.isValid.month).toBe(false);
    expect(result.current.errorMessage.month).toBe("MM형태로 입력해주세요.");
  });

  it("월이 1~12 범위를 벗어날 경우 범위 에러 반환", () => {
    const { result } = renderHook(() => useExpirationDate());

    act(() => {
      result.current.validate("month", "13");
    });

    expect(result.current.isValid.month).toBe(false);
    expect(result.current.errorMessage.month).toBe(
      "1~12까지의 범위만 입력 가능합니다."
    );
  });

  it("문자가 포함된 연도 입력 시 숫자 에러 메시지 반환", () => {
    const { result } = renderHook(() => useExpirationDate());

    act(() => {
      result.current.validate("year", "2a");
    });

    expect(result.current.isValid.year).toBe(false);
    expect(result.current.errorMessage.year).toBe("숫자만 입력 가능합니다.");
  });

  it("연도가 2자리가 아닐 경우 형식 에러 반환", () => {
    const { result } = renderHook(() => useExpirationDate());

    act(() => {
      result.current.validate("year", "1");
    });

    expect(result.current.isValid.year).toBe(false);
    expect(result.current.errorMessage.year).toBe("YY형태로 입력해주세요.");
  });

  it("현재보다 이전 연도를 입력하면 범위 에러 메시지 반환", () => {
    const { result } = renderHook(() => useExpirationDate());
    const currentYear = new Date().getFullYear() % 100;
    const pastYear = String(currentYear - 1).padStart(2, "0");

    act(() => {
      result.current.validate("year", pastYear);
    });

    expect(result.current.isValid.year).toBe(false);
    expect(result.current.errorMessage.year).toBe(
      "현재보다 이전년도는 입력할 수 없습니다."
    );
  });
});
