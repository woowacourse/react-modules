import { renderHook, act } from "@testing-library/react";
import usePassword from "../hooks/usePassword";

describe("비밀번호 테스트", () => {
  const initialPassword = {
    value: "",
  };

  const initialPasswordError = {
    password: "",
  };

  let result: any;

  beforeEach(() => {
    const hook = renderHook(() =>
      usePassword({
        initPassword: initialPassword,
        initPasswordError: initialPasswordError,
      })
    );
    result = hook.result;
  });

  test("비밀번호 초기 값을 가져온다.", () => {
    expect(result.current.password.values).toEqual(initialPassword);
  });

  test("비밀번호 값을 변경할 수 있다.", () => {
    const type = "value";
    const changeValue = "32";

    act(() => {
      result.current.password.changeValues(type, changeValue);
    });

    expect(result.current.password.values.value).toEqual(changeValue);
  });

  test("비밀번호가 올바르지 않은 경우 에러를 반환한다.", () => {
    const type = "value";
    const changeValue = "1a";
    const maxLength = 2;

    act(() => {
      result.current.password.changeValues(type, changeValue);
      result.current.passwordError.checkValidation({
        length: maxLength,
        type,
        value: changeValue,
      });
    });

    expect(result.current.passwordError.isError()).toEqual(true);
  });

  test("비밀번호가 올바르지 않은 경우 에러 메시지를 반환한다.", () => {
    const type = "value";
    const changeValue = "1a";
    const maxLength = 2;

    act(() => {
      result.current.password.changeValues(type, changeValue);
      result.current.passwordError.checkValidation({
        length: maxLength,
        type,
        value: changeValue,
      });
    });

    expect(result.current.passwordError.getErrorMessage()).toEqual(
      "숫자만 입력 가능합니다."
    );
  });
});
