import "@testing-library/jest-dom";
import { renderHook, act } from "@testing-library/react";
import usePassword from "./usePassword";

test("사용자가 정상적인 값을 입력하면 에러가 발생하지 않는다.", async () => {
  const { result } = renderHook(() => usePassword());
  const { errorMessage, isValid, password, handlePasswordChange } =
    result.current;

  const event = {
    target: {
      value: "11",
    },
  };

  act(() =>
    // @ts-ignore
    handlePasswordChange(event)
  );
  expect(isValid).toBeTruthy();
});

test("사용자가 한 글자를 입력하면 에러가 발생한다.", async () => {
  const { result } = renderHook(() => usePassword());
  const { errorMessage, isValid, password, handlePasswordChange } =
    result.current;

  const event = {
    target: {
      value: "1",
    },
  };
  act(() => {
    // @ts-ignore
    handlePasswordChange(event);
  });

  expect(result.current.password).toBe("1");
  expect(result.current.isValid).toBeFalsy();
  expect(result.current.errorMessage).toBe("2글자를 입력해 주세요.");
});

test("사용자가 문자열을 입력하면 값이 바뀌지 않는다.", async () => {
  const { result } = renderHook(() => usePassword());
  const { errorMessage, isValid, password, handlePasswordChange } =
    result.current;

  const event = {
    target: {
      value: "안녕",
    },
  };

  act(() => {
    // @ts-ignore
    handlePasswordChange(event);
  });

  expect(result.current.password).toBe("");
});
