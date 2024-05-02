import React from "react";
import { useRestrictedState } from "../lib";
import { renderHook } from "@testing-library/react";

describe("useRestrictedState Test", () => {
  it("type이 english일 경우 영어만 입력가능하다.", () => {
    const { result } = renderHook(() => useRestrictedState({ type: "english" }));

    React.act(() => {
      result.current.valueState[1]("aaa");
      result.current.valueState[1]("aaa1");
    });
    expect(result.current.errorState.isError).toBe(true);
    // 오류 입력 전 입력값은 남아있어야 한다.
    expect(result.current.valueState[0]).toBe("aaa");
  });

  it("type이 number일 경우 숫자만 입력가능하다.", () => {
    const { result } = renderHook(() => useRestrictedState({ type: "number", maxLength: 10 }));

    React.act(() => {
      result.current.valueState[1]("123");
      result.current.valueState[1]("123aaa");
    });
    expect(result.current.errorState.isError).toBe(true);
    expect(result.current.valueState[0]).toBe("123");
  });

  it("maxLength가 지정될 경우 그 이상 입력할 수 없다.", () => {
    const { result } = renderHook(() => useRestrictedState({ maxLength: 5 }));

    React.act(() => {
      result.current.valueState[1]("aaaaa");
      result.current.valueState[1]("aaaaaa");
    });
    expect(result.current.errorState.isError).toBe(true);
    expect(result.current.valueState[0]).toBe("aaaaa");
  });
});
