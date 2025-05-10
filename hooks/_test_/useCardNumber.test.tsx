import { describe, it, expect } from "vitest";
import { renderHook, act } from "@testing-library/react";
import useCardNumber from "../src/lib/useCardNumber";

describe("useCardNumber 테스트", () => {
  it("모든 입력이 유효한 경우 isValid는 true고 errorMessage는 비어있어야 한다", () => {
    const { result } = renderHook(() => useCardNumber());

    act(() => {
      result.current.handleCardNumberValidation("1234-5678-1234-5678");
    });

    expect(result.current.isValid).toEqual(true);
    expect(result.current.errorMessage).toBe("");
  });

  it("숫자가 아닌 값이 포함된 경우, isValid 값이 false가 되어야 하며 에러 메시지가 설정되어야 한다", () => {
    const { result } = renderHook(() => useCardNumber());

    act(() => {
      result.current.handleCardNumberValidation("1234-5678-9012-34a6");
    });

    expect(result.current.isValid).toEqual(false);
    expect(result.current.errorMessage).toBe("숫자만 입력해 주세요.");
  });
  it("카드 번호가 13자리 미만이면 isValid는 false이고, 에러 메시지가 설정되어야 한다", () => {
    const { result } = renderHook(() => useCardNumber());

    act(() => {
      result.current.handleCardNumberValidation("123456789012");
    });

    expect(result.current.isValid).toBe(false);
    expect(result.current.errorMessage).toBe(
      "카드 번호는 13자리 이상으로 입력해주세요."
    );
  });
  it("카드 번호가 19자리 초과이면 isValid는 false이고, 에러 메시지가 설정되어야 한다", () => {
    const { result } = renderHook(() => useCardNumber());

    act(() => {
      result.current.handleCardNumberValidation("123456789012345678901");
    });

    expect(result.current.isValid).toBe(false);
    expect(result.current.errorMessage).toBe(
      "카드 번호는 19자리 이하로 입력해주세요."
    );
  });
  it("customErrorMessages가 주어지면 해당 메시지가 우선 적용되어야 한다", () => {
    const customErrorMessages = {
      format: "형식 에러메세지 커스텀",
      minLength: "최소 길이 에러메세지 커스텀",
      maxLength: "최대 길이 에러메세지 커스텀",
    };
    const { result } = renderHook(() =>
      useCardNumber({
        customErrorMessages: customErrorMessages,
      })
    );
    act(() => {
      result.current.handleCardNumberValidation("1234-5678-9012");
    });

    expect(result.current.isValid).toEqual(false);
    expect(result.current.errorMessage).toBe(customErrorMessages.minLength);
  });
});
