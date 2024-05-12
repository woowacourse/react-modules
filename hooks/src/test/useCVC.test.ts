import { renderHook, act } from "@testing-library/react";
import useCVC from "../lib/useCVC";
import { ChangeEvent } from "react";

describe("useCVC 테스트", () => {
  it("아직 아무 입력도 수행되지 않았을 때 false를 반환해야 함", () => {
    const { result } = renderHook(() => useCVC());

    expect(result.current.validationResult.isValid).toBe(false);
    expect(result.current.validationResult.errorMessages).toHaveLength(0);
  });

  it("올바른 CVC 입력이 들어올 때 true를 반환해야 함", () => {
    const { result } = renderHook(() => useCVC());

    act(() => {
      result.current.handleCVCChange({
        target: { value: "123" },
      } as ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.validationResult.isValid).toBe(true);
    expect(result.current.validationResult.errorMessages).toHaveLength(0);
  });

  it("숫자가 아닌 입력이 들어올 때 false와 '숫자로 입력해주세요.' 를 반환해야 함", () => {
    const { result } = renderHook(() => useCVC());

    act(() => {
      result.current.handleCVCChange({
        target: { value: "ABCD" },
      } as ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.validationResult.isValid).toBe(false);
    expect(result.current.validationResult.errorMessages).toContain(
      "숫자로 입력해주세요."
    );
  });

  it("maxLength를 넘는 입력이 들어올 때 false와 '3자로 입력해주세요.' 를 반환해야 함", () => {
    const { result } = renderHook(() => useCVC());

    act(() => {
      result.current.handleCVCChange({
        target: { value: "1234" },
      } as ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.validationResult.isValid).toBe(false);
    expect(result.current.validationResult.errorMessages).toContain(
      "3자로 입력해주세요."
    );
  });
});
