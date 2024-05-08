import { act, renderHook } from "@testing-library/react";
import { ERROR_MESSAGE } from "../src/lib/constants/errorMessage";
import useExpiryDate from "../src/lib/hooks/useExpiryDate";

describe("useExpiryDate 첫 번째 input(month)에 대한 테스트", () => {
  it("touched 상태인데 입력값이 비어있다면 에러 메시지를 반환해야 한다", () => {
    const { result } = renderHook(() => useExpiryDate());
    act(() => {
      result.current.handleCardExpiryDateChange("month", "");
    });
    expect(result.current.cardExpiryDateValidation.isValid).toBe(false);
    expect(result.current.cardExpiryDateValidation.errorMessage).toBe(ERROR_MESSAGE.NO_INPUT);
  });

  it("입력값이 숫자가 아니라면 에러 메시지를 반환해야 한다", () => {
    const { result } = renderHook(() => useExpiryDate());
    act(() => {
      result.current.handleCardExpiryDateChange("month", "johnnn2");
    });
    expect(result.current.cardExpiryDateValidation.isValid).toBe(false);
    expect(result.current.cardExpiryDateValidation.errorMessage).toBe(
      ERROR_MESSAGE.CARD_EXPIRY_DATE.INVALID_MONTH_FORMAT
    );
  });

  it("입력값이 1~12가 아니라면 에러 메시지를 반환해야 한다", () => {
    const { result } = renderHook(() => useExpiryDate());
    act(() => {
      result.current.handleCardExpiryDateChange("month", "222222");
    });
    expect(result.current.cardExpiryDateValidation.isValid).toBe(false);
    expect(result.current.cardExpiryDateValidation.errorMessage).toBe(
      ERROR_MESSAGE.CARD_EXPIRY_DATE.MONTH_OUT_OF_RANGE
    );
  });

  it("입력값이 유효하다면 isValid가 true여야 한다", () => {
    const { result } = renderHook(() => useExpiryDate());
    act(() => {
      result.current.handleCardExpiryDateChange("month", "12");
    });
    expect(result.current.cardExpiryDateValidation.isValid).toBe(true);
  });
});

describe("useExpiryDate 두 번째 input(year)에 대한 테스트", () => {
  it("touched 상태인데 입력값이 비어있다면 에러 메시지를 반환해야 한다", () => {
    const { result } = renderHook(() => useExpiryDate());
    act(() => {
      result.current.handleCardExpiryDateChange("year", "");
    });
    expect(result.current.cardExpiryDateValidation.isValid).toBe(false);
    expect(result.current.cardExpiryDateValidation.errorMessage).toBe(ERROR_MESSAGE.NO_INPUT);
  });

  it("입력값이 2자리 숫자가 아니라면 에러 메시지를 반환해야 한다", () => {
    const { result } = renderHook(() => useExpiryDate());
    act(() => {
      result.current.handleCardExpiryDateChange("year", "123");
    });
    expect(result.current.cardExpiryDateValidation.isValid).toBe(false);
    expect(result.current.cardExpiryDateValidation.errorMessage).toBe(
      ERROR_MESSAGE.CARD_EXPIRY_DATE.INVALID_YEAR_FORMAT
    );
  });

  it("입력값이 유효하다면 isValid가 true여야 한다", () => {
    const { result } = renderHook(() => useExpiryDate());
    act(() => {
      result.current.handleCardExpiryDateChange("year", "30");
    });
    expect(result.current.cardExpiryDateValidation.isValid).toBe(true);
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
      result.current.handleCardExpiryDateChange("year", pastYear.toString().slice(-2));
      result.current.handleCardExpiryDateChange("month", pastMonth.toString());
    });

    expect(result.current.cardExpiryDateValidation.isValid).toBe(false);
    expect(result.current.cardExpiryDateValidation.errorMessage).toBe(
      ERROR_MESSAGE.CARD_EXPIRY_DATE.EXPIRED_CARD
    );
  });

  it("입력된 만료 날짜가 현재 날짜와 같으면 isValid가 true여야 한다", () => {
    const { result } = renderHook(() => useExpiryDate());

    // 현재 날짜 설정
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear().toString().slice(-2);
    const currentMonth = (currentDate.getMonth() + 1).toString();

    act(() => {
      result.current.handleCardExpiryDateChange("year", currentYear);
      result.current.handleCardExpiryDateChange("month", currentMonth);
    });

    expect(result.current.cardExpiryDateValidation.isValid).toBe(true);
  });
});
