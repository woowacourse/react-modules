import "@testing-library/jest-dom";
import { renderHook, act } from "@testing-library/react";
import usePassword from "./usePassword";

describe("초기 상태", () => {
  const { result } = renderHook(() => usePassword());

  test("password가 초기화 되어 있어야 한다.", () => {
    expect(result.current.password).toBe("");
  });
  test("errorMessage가 초기화 되어 있어야 한다.", () => {
    expect(result.current.errorMessage).toBe("");
  });
  test("isValid의 초기 값은 true여야 한다.", () => {
    expect(result.current.isValid).toBe(true);
  });
});

describe("입력 처리", () => {
  test("2자리 숫자를 입력하면 반영된다.", () => {
    const { result } = renderHook(() => usePassword());
    const { handlePasswordChange } = result.current;

    const event = {
      target: {
        value: "11",
      },
    };

    act(() =>
      handlePasswordChange(
        event as unknown as React.ChangeEvent<HTMLInputElement>
      )
    );

    expect(result.current.password).toBe("11");
  });

  test("문자열을 입력하면 반영되지 않는다.", () => {
    const { result } = renderHook(() => usePassword());
    const { handlePasswordChange } = result.current;

    const event = {
      target: {
        value: "메룽",
      },
    };

    act(() =>
      handlePasswordChange(
        event as unknown as React.ChangeEvent<HTMLInputElement>
      )
    );

    expect(result.current.password).toBe("");
  });
});

describe("유효성 검증", () => {
  test("2자리 숫자 입력 시 에러가 발생하지 않는다.", () => {
    const { result } = renderHook(() => usePassword());
    const { handlePasswordChange } = result.current;

    const event = {
      target: {
        value: "11",
      },
    };

    act(() => {
      handlePasswordChange(
        event as unknown as React.ChangeEvent<HTMLInputElement>
      );
    });
    expect(result.current.isValid).toBeTruthy();
  });
  test("사용자가 한 글자를 입력하면 에러가 발생한다.", () => {
    const { result } = renderHook(() => usePassword());
    const { handlePasswordChange } = result.current;

    const event = {
      target: {
        value: "1",
      },
    };

    act(() => {
      handlePasswordChange(
        event as unknown as React.ChangeEvent<HTMLInputElement>
      );
    });
    expect(result.current.isValid).toBeFalsy();
  });

  test("사용자가 한 글자를 입력하면 에러 메시지를 표시한다.", () => {
    const { result } = renderHook(() => usePassword());
    const { handlePasswordChange } = result.current;

    const event = {
      target: {
        value: "1",
      },
    };

    act(() => {
      handlePasswordChange(
        event as unknown as React.ChangeEvent<HTMLInputElement>
      );
    });
    expect(result.current.errorMessage).toBe("2자리 숫자를 입력해 주세요.");
  });
});
