import "@testing-library/jest-dom";
import useCardNumber from "./useCardNumber";
import { renderHook, act } from "@testing-library/react";

test("사용자가 정상적인 값을 입력하면 에러가 발생하지 않는다.", async () => {
  const { result } = renderHook(() => useCardNumber());
  const { isValid, handleCardNumberChange } = result.current;

  const event = {
    target: {
      value: "1111",
    },
  };

  act(() =>
    handleCardNumberChange(
      event as unknown as React.ChangeEvent<HTMLInputElement>,
      "first"
    )
  );
  expect(isValid).toBeTruthy();
});

test("사용자가 문자열을 입력하면 값이 바뀌지 않는다.", async () => {
  const { result } = renderHook(() => useCardNumber());
  const { handleCardNumberChange } = result.current;

  const event = {
    target: {
      value: "11",
    },
  };
  act(() => {
    handleCardNumberChange(
      event as unknown as React.ChangeEvent<HTMLInputElement>,
      "first"
    );
  });

  expect(result.current.cardNumber.first).toBe("11");
  expect(result.current.isValid).toBeFalsy();
  expect(result.current.errorMessage.first).toBe("4글자를 입력해 주세요.");
});

test("사용자가 두 글자를 입력하면 에러가 발생한다.", async () => {
  const { result } = renderHook(() => useCardNumber());
  const { handleCardNumberChange } = result.current;

  const event = {
    target: {
      value: "안녕",
    },
  };

  act(() => {
    handleCardNumberChange(
      event as unknown as React.ChangeEvent<HTMLInputElement>,
      "first"
    );
  });

  expect(result.current.cardNumber.first).toBe("");
});
