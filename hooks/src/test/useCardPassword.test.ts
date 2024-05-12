import { renderHook, act } from "@testing-library/react";
import useCardPassword from "../lib/useCardPassword";

describe("useCardPassword 테스트", () => {
  it("아직 아무 입력도 수행되지 않았을 때 false를 반환해야 함", () => {
    const { result } = renderHook(() => useCardPassword());

    expect(result.current.validationResult.isValid).toBe(false);
    expect(result.current.validationResult.errorMessages).toHaveLength(0);
  });

  it("올바른 비밀번호 입력이 들어올 때 true를 반환해야 함", () => {
    const { result } = renderHook(() => useCardPassword());

    act(() => {
      result.current.handleCardPasswordChange({
        target: { value: "12" },
      } as React.ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.validationResult.isValid).toBe(true);
    expect(result.current.validationResult.errorMessages).toHaveLength(0);
  });

  it("숫자가 아닌 입력이 들어올 때 false와 '숫자로 입력해주세요.' 를 반환해야 함", () => {
    const { result } = renderHook(() => useCardPassword());

    act(() => {
      result.current.handleCardPasswordChange({
        target: { value: "AB" },
      } as React.ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.validationResult.isValid).toBe(false);
    expect(result.current.validationResult.errorMessages).toContain(
      "숫자로 입력해주세요."
    );
  });

  it(`maxLength를 넘는 입력이 들어올 때 false와 '2자리 비밀번호를 입력해주세요.' 를 반환해야 함`, () => {
    const { result } = renderHook(() => useCardPassword());

    act(() => {
      result.current.handleCardPasswordChange({
        target: { value: "123456" },
      } as React.ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.validationResult.isValid).toBe(false);
    expect(result.current.validationResult.errorMessages).toContain(
      "2자리 비밀번호를 입력해주세요."
    );
  });
});
