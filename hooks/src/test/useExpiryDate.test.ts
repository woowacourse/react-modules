import { renderHook, act } from "@testing-library/react";
import useExpiryDate from "../lib/useExpiryDate";
import { ChangeEvent } from "react";

describe("useExpiryDate 테스트", () => {
  it("아직 아무 입력도 수행되지 않았을 때 false를 반환해야 함", () => {
    const { result } = renderHook(() => useExpiryDate());

    expect(result.current.validationResult.isValid).toBe(false);
    expect(result.current.validationResult.errorMessages).toHaveLength(0);
  });

  it("현재 연도와 월보다 미래의 유효한 연도와 월이 입력될 때 true를 반환해야 함", () => {
    const { result } = renderHook(() => useExpiryDate());

    act(() => {
      result.current.handleExpiryDateChange({
        target: { value: "1225" },
      } as ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.validationResult.isValid).toBe(true);
    expect(result.current.validationResult.errorMessages).toHaveLength(0);
  });

  it("현재 연도와 월보다 과거의 연도가 입력될 때 false와 '만료된 카드입니다.' 를 반환해야 함", () => {
    const { result } = renderHook(() => useExpiryDate());

    act(() => {
      result.current.handleExpiryDateChange({
        target: { value: "1219" },
      } as ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.validationResult.isValid).toBe(false);
    expect(result.current.validationResult.errorMessages).toContain(
      "만료된 카드입니다."
    );
  });

  it("현재 연도와 과거의 월이 입력될 때 false와 '만료된 카드입니다.' 를 반환해야 함", () => {
    const { result } = renderHook(() => useExpiryDate());

    const currentDate = new Date();
    const currentYear = currentDate.getFullYear() - 2000;
    const expiredMonth =
      currentDate.getMonth() < 9
        ? "0" + currentDate.getMonth()
        : currentDate.getMonth().toString();
    act(() => {
      result.current.handleExpiryDateChange({
        target: { value: `${expiredMonth} / ${currentYear}` },
      } as ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.validationResult.isValid).toBe(false);
    expect(result.current.validationResult.errorMessages).toContain(
      "만료된 카드입니다."
    );
  });

  it("숫자가 아닌 입력이 들어올 때 false와 '숫자로 입력해주세요.' 를 반환해야 함", () => {
    const { result } = renderHook(() => useExpiryDate());

    act(() => {
      result.current.handleExpiryDateChange({
        target: { value: "AB" },
      } as ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.validationResult.isValid).toBe(false);
    expect(result.current.validationResult.errorMessages).toContain(
      "숫자로 입력해주세요."
    );
  });

  it("길이가 잘못된 입력이 들어올 때 false와 '잘못된 형식의 만료일자 입력입니다.' 를 반환해야 함", () => {
    const { result } = renderHook(() => useExpiryDate());

    act(() => {
      result.current.handleExpiryDateChange({
        target: { value: "1" },
      } as ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.validationResult.isValid).toBe(false);
    expect(result.current.validationResult.errorMessages).toContain(
      "잘못된 형식의 만료일자 입력입니다."
    );
  });
});
