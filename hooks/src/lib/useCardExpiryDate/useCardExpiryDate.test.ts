import { renderHook, act } from "@testing-library/react";
import useCardExpiryDate from "./useCardExpiryDate";

describe("useCardExpiryDate", () => {
  const initialValue = { month: "12", year: "25" };

  it("올바른 초기값(initialValue)이 설정되면 그에 맞는 expiryDate를 반환할 수 있어야 한다", () => {
    const { result } = renderHook(() => useCardExpiryDate(initialValue));

    expect(result.current.expiryDate).toEqual(initialValue);
  });

  it("올바른 유효기간이 handleUpdateExpiryDate를 통해 들어오면, 입력값에 따라 expiryDate가 정확히 업데이트 되어야 한다", () => {
    const { result } = renderHook(() => useCardExpiryDate(initialValue));

    act(() => {
      result.current.handleUpdateExpiryDate({ month: "11", year: "26" });
    });

    expect(result.current.expiryDate).toEqual({ month: "11", year: "26" });
    expect(result.current.validationResult).toEqual({ isValid: true });
  });

  it("잘못된 형식의 월(month)이 들어오면, validationResult에 에러 여부 및 메시지가 업데이트 되어야 한다", () => {
    const { result } = renderHook(() => useCardExpiryDate(initialValue));
    const newValue = { month: "13", year: "25" };

    act(() => {
      result.current.handleUpdateExpiryDate(newValue);
    });

    expect(result.current.expiryDate).toEqual(newValue);
    expect(result.current.validationResult).toEqual({
      isValid: false,
      errorMessage:
        "유효 기간의 월은 01 ~ 12 사이의 2자리 숫자로 입력하셔야 합니다.",
    });
  });

  it("잘못된 형식의 연도(year)가 들어오면, expiryDate는 업데이트되지 않고 validationResult에 에러 여부 및 메시지가 업데이트 되어야 한다", () => {
    const { result } = renderHook(() => useCardExpiryDate(initialValue));
    const newValue = { month: "12", year: "2025" };

    act(() => {
      result.current.handleUpdateExpiryDate(newValue);
    });

    expect(result.current.expiryDate).toEqual(newValue);
    expect(result.current.validationResult).toEqual({
      isValid: false,
      errorMessage: "유효 기간의 연도는 2자리 숫자로 입력하셔야 합니다.",
    });
  });

  it("만료된 유효기간이 들어오면, validationResult에 에러 여부 및 메시지가 업데이트 되어야 한다", () => {
    const { result } = renderHook(() => useCardExpiryDate(initialValue));
    const currentYear = new Date().getFullYear() - 2000;
    const currentMonth = new Date().getMonth() + 1;

    act(() => {
      result.current.handleUpdateExpiryDate({
        month: String(currentMonth - 1).padStart(2, "0"),
        year: String(currentYear),
      });
    });

    expect(result.current.validationResult).toEqual({
      isValid: false,
      errorMessage: "유효 기간이 만료되었습니다. 확인 후 다시 입력해 주세요.",
    });
  });
});
