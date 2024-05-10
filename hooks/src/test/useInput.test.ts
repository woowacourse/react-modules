import { renderHook, act } from "@testing-library/react";
import { useInput } from "../lib";

describe("useInputTest", () => {
  it("알파벳이외의 값을 입력한 경우 에러를 반환한다.", () => {
    const { result } = renderHook(() => useInput());

    act(() => result.current.valueState[1]("1"));
    expect(result.current.valueState[0]).toBe("1");
    act(() => result.current.errorState.setError("ERROR"));
    expect(result.current.errorState.isError).toBe(true);
    expect(result.current.errorState.errorMessage).toBe("ERROR");
  });
});
