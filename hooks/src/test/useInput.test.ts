import React from "react";
import { renderHook } from "@testing-library/react";
import { useInput } from "../lib";

describe("useInputTest", () => {
  it("should allow only English characters", () => {
    const { result } = renderHook(() => useInput());

    React.act(() => result.current.valueState[1]("1"));
    expect(result.current.valueState[0]).toBe("1");

    React.act(() => result.current.errorState.setError("ERROR"));
    expect(result.current.errorState.isError).toBe(true);
    expect(result.current.errorState.errorMessage).toBe("ERROR");
  });
});
