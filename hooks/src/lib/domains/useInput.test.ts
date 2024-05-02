import { renderHook } from "@testing-library/react-hooks";
import useInput from "./useInput";
import { act } from "react";

describe("useInput 테스트", () => {
  test("초기값을 입력했을 때, 초기값의 내용대로 value가 설정된다.", () => {
    const { result } = renderHook(() => useInput("1234"));
    expect(result.current.value).toBe("1234");
  });
  test("setError를 사용했을 때, isError가 true로 바뀌고 errorMessage가 설정된다.", () => {
    const { result } = renderHook(() => useInput("1234"));

    act(() => result.current.setError("error message"));

    expect(result.current.isError).toBe(true);
    expect(result.current.errorMessage).toBe("error message");
  });
  test("resetError를 사용했을 때, isError가 false로 바뀌고 errorMessage가 초기화된다.", () => {
    const { result } = renderHook(() => useInput("1234"));

    act(() => result.current.setError("error message"));
    act(() => result.current.resetError());

    expect(result.current.isError).toBe(false);
    expect(result.current.errorMessage).toBe("");
  });

  test("초기값을 입력 후 setValue를 사용했을 때, 해당 내용대로 value가 설정된다.", () => {
    const { result } = renderHook(() => useInput("1234"));
    act(() => result.current.setValue("5678"));
    expect(result.current.value).toBe("5678");
  });
});
