import { renderHook, act } from "@testing-library/react";
import { useInput } from "../lib/hooks";

describe("useInputTest", () => {
  it("should allow only English characters", () => {
    const { result } = renderHook(() => useInput());

    act(() => result.current.valueState[1]("1"));
    expect(result.current.valueState[0]).toBe("1");
    act(() => result.current.errorState.setError("ERROR"));
    expect(result.current.errorState.isError).toBe(true);
    expect(result.current.errorState.errorMessage).toBe("ERROR");
  });
});
