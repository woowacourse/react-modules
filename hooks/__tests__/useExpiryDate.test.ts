import { renderHook, act } from "@testing-library/react";
import { useExpiryDate } from "../src/lib/hooks/useExpiryDate";
import { ERROR_MESSAGE } from "../src/lib/constants/errorMessage";

describe("useExpiryDate 첫 번째 input(month)에 대한 테스트", () => {
  it("touched 상태인데 입력값이 비어있다면 에러 메시지를 반환해야 한다", () => {
    const { result } = renderHook(() => useExpiryDate());
    act(() => {
      result.current[1]("month", "");
    });
    expect(result.current[2].isValid).toBe(false);
    expect(result.current[2].errorMessage).toBe(ERROR_MESSAGE.NO_INPUT);
  });

  it("입력값이 숫자가 아니라면 에러 메시지를 반환해야 한다", () => {
    const { result } = renderHook(() => useExpiryDate());
    act(() => {
      result.current[1]("month", "johnnn2");
    });
    expect(result.current[2].isValid).toBe(false);
    expect(result.current[2].errorMessage).toBe(
      ERROR_MESSAGE.CARD_EXPIRY_DATE.INVALID_MONTH_FORMAT
    );
  });

  it("입력값이 1~12가 아니라면 에러 메시지를 반환해야 한다", () => {
    const { result } = renderHook(() => useExpiryDate());
    act(() => {
      result.current[1]("month", "222222");
    });
    expect(result.current[2].isValid).toBe(false);
    expect(result.current[2].errorMessage).toBe(ERROR_MESSAGE.CARD_EXPIRY_DATE.MONTH_OUT_OF_RANGE);
  });

  it("입력값이 유효하다면 isValid가 true여야 한다", () => {
    const { result } = renderHook(() => useExpiryDate());
    act(() => {
      result.current[1]("month", "12");
    });
    expect(result.current[2].isValid).toBe(true);
  });
});

describe("useExpiryDate 두 번째 input(year)에 대한 테스트", () => {
  it("touched 상태인데 입력값이 비어있다면 에러 메시지를 반환해야 한다", () => {
    const { result } = renderHook(() => useExpiryDate());
    act(() => {
      result.current[1]("year", "");
    });
    expect(result.current[2].isValid).toBe(false);
    expect(result.current[2].errorMessage).toBe(ERROR_MESSAGE.NO_INPUT);
  });

  it("입력값이 2자리 숫자가 아니라면 에러 메시지를 반환해야 한다", () => {
    const { result } = renderHook(() => useExpiryDate());
    act(() => {
      result.current[1]("year", "123");
    });
    expect(result.current[2].isValid).toBe(false);
    expect(result.current[2].errorMessage).toBe(ERROR_MESSAGE.CARD_EXPIRY_DATE.INVALID_YEAR_FORMAT);
  });

  it("입력값이 유효하다면 isValid가 true여야 한다", () => {
    const { result } = renderHook(() => useExpiryDate());
    act(() => {
      result.current[1]("year", "30");
    });
    expect(result.current[2].isValid).toBe(true);
  });
});

describe("useExpiryDate 만료 날짜 유효성 검사", () => {
  it("입력된 만료 날짜가 현재 날짜보다 과거라면 에러 메시지를 반환해야 한다", () => {
    const { result } = renderHook(() => useExpiryDate());

    // 현재 날짜보다 과거 날짜 설정
    const currentDate = new Date();
    const pastYear = currentDate.getFullYear() - 1;
    const pastMonth = currentDate.getMonth() + 1;

    act(() => {
      result.current[1]("year", pastYear.toString().slice(-2));
      result.current[1]("month", pastMonth.toString());
    });

    expect(result.current[2].isValid).toBe(false);
    expect(result.current[2].errorMessage).toBe(ERROR_MESSAGE.CARD_EXPIRY_DATE.EXPIRED_CARD);
  });

  it("입력된 만료 날짜가 현재 날짜와 같으면 isValid가 true여야 한다", () => {
    const { result } = renderHook(() => useExpiryDate());

    // 현재 날짜 설정
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear().toString().slice(-2);
    const currentMonth = (currentDate.getMonth() + 1).toString();

    act(() => {
      result.current[1]("year", currentYear);
      result.current[1]("month", currentMonth);
    });

    expect(result.current[2].isValid).toBe(true);
  });
});
