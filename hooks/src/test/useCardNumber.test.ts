import { renderHook, act } from "@testing-library/react";
import useCardNumber from "../lib/useCardNumber";

describe("useCardNumber 테스트", () => {
  it("아직 아무 입력도 수행되지 않았을 때 false를 반환해야 함", () => {
    const { result } = renderHook(() => useCardNumber());

    expect(result.current.validationResult.isValid).toBe(false);
    expect(result.current.validationResult.errorMessages).toHaveLength(0);
  });

  it("올바른 카드 번호 입력이 들어올 때 true를 반환해야 함", () => {
    const { result } = renderHook(() => useCardNumber());

    act(() => {
      result.current.handleCardNumberChange({
        target: { value: "1234 1234 1234 1234" },
      } as React.ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.validationResult.isValid).toBe(true);
    expect(result.current.validationResult.errorMessages).toHaveLength(0);
  });

  it("숫자가 아닌 입력이 들어올 때 false와 '숫자를 입력해주세요.' 를 반환해야 함", () => {
    const { result } = renderHook(() => useCardNumber());

    act(() => {
      result.current.handleCardNumberChange({
        target: { value: "ABCD" },
      } as React.ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.validationResult.isValid).toBe(false);
    expect(result.current.validationResult.errorMessages).toContain(
      "숫자를 입력해주세요."
    );
  });

  it("Diners 카드 형식에 맞지 않는 입력이 들어올 때 false와 '14자리 숫자를 입력해주세요.' 를 반환해야 함", () => {
    const { result } = renderHook(() => useCardNumber());

    act(() => {
      result.current.handleCardNumberChange({
        target: { value: "3612 345678 90" },
      } as React.ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.validationResult.isValid).toBe(false);
    expect(result.current.validationResult.errorMessages).toContain(
      "14자리 숫자를 입력해주세요."
    );
  });

  it("Diners 카드 형식에 맞는 입력이 들어올 때 true를 반환해야 함", () => {
    const { result } = renderHook(() => useCardNumber());

    act(() => {
      result.current.handleCardNumberChange({
        target: { value: "3612 345678 9012" },
      } as React.ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.validationResult.isValid).toBe(true);
    expect(result.current.validationResult.errorMessages).toHaveLength(0);
  });

  it("AMEX 카드 형식에 맞지 않는 입력이 들어올 때 false와 '15자리 숫자를 입력해주세요.' 를 반환해야 함", () => {
    const { result } = renderHook(() => useCardNumber());

    act(() => {
      result.current.handleCardNumberChange({
        target: { value: "3712 345678 901" },
      } as React.ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.validationResult.isValid).toBe(false);
    expect(result.current.validationResult.errorMessages).toContain(
      "15자리 숫자를 입력해주세요."
    );
  });

  it("AMEX 카드 형식에 맞는 입력이 들어올 때 true를 반환해야 함", () => {
    const { result } = renderHook(() => useCardNumber());

    act(() => {
      result.current.handleCardNumberChange({
        target: { value: "3412 345678 90123" },
      } as React.ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.validationResult.isValid).toBe(true);
    expect(result.current.validationResult.errorMessages).toHaveLength(0);
  });
});
