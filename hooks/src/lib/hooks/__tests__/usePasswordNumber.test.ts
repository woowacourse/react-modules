import { renderHook, act } from "@testing-library/react";
import usePasswordNumber from "../usePasswordNumber";
import { ERROR_MESSAGE, PASSWORD_LENGTH } from "../../constants";

describe("usePasswordNumber", () => {
  it("초기 상태를 올바르게 반환한다", () => {
    const { result } = renderHook(() => usePasswordNumber());
    act(() => {
      result.current.setPasswordNumber("11");
    });
    expect(result.current.passwordNumber).toBe("11");
    expect(result.current.errorMessage).toBe("");
    expect(result.current.isError).toBe(false);
  });

  it(`비밀번호 길이가 2자를 초과하면 비밀번호의 최대 길이까지만 보여준다.`, () => {
    const { result } = renderHook(() => usePasswordNumber());
    act(() => {
      result.current.setPasswordNumber("11112222333344444");
    });

    expect(result.current.isError).toBe(false);
    expect(result.current.passwordNumber).toBe("11");
  });

  it(`비밀번호가 문자열을 받는다면 숫자만 필터링 해서 보여준다`, () => {
    const { result } = renderHook(() => usePasswordNumber());
    act(() => {
      result.current.setPasswordNumber("aa1");
    });
    expect(result.current.errorMessage).toBe(
      ERROR_MESSAGE.INVALID_LENGTH(PASSWORD_LENGTH)
    );
    expect(result.current.isError).toBe(true);
    expect(result.current.passwordNumber).toBe("1");
  });

  it(`비밀번호가 공백을 받는다면 ${ERROR_MESSAGE.INVALID_LENGTH(
    PASSWORD_LENGTH
  )}를 보여준다.`, () => {
    const { result } = renderHook(() => usePasswordNumber());
    act(() => {
      result.current.setPasswordNumber("  3");
    });

    expect(result.current.errorMessage).toBe(
      ERROR_MESSAGE.INVALID_LENGTH(PASSWORD_LENGTH)
    );
    expect(result.current.isError).toBe(true);
  });
});
