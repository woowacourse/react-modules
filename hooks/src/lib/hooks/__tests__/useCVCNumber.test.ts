import { renderHook, act } from "@testing-library/react";
import useCVCNumber from "../useCVCNumber";
import { CVC_LENGTH, ERROR_MESSAGE } from "../../constants";

describe("useCVCNumber", () => {
  it("초기 상태를 올바르게 반환한다", () => {
    const { result } = renderHook(() => useCVCNumber());
    act(() => {
      result.current.setCVCNumber("123");
    });
    expect(result.current.CVCNumber).toBe("123");
    expect(result.current.errorMessage).toBe("");
    expect(result.current.isError).toBe(false);
  });

  it(`CVC 길이가 초과하면 CVC 최대 길이까지만 보여준다.`, () => {
    const { result } = renderHook(() => useCVCNumber());
    act(() => {
      result.current.setCVCNumber("11112222333344444");
    });

    expect(result.current.isError).toBe(false);
    expect(result.current.CVCNumber).toBe("111");
  });

  it(`문자 입력 시 숫자만 필터링되는지 확인한다 `, () => {
    const { result } = renderHook(() => useCVCNumber());
    act(() => {
      result.current.setCVCNumber("aaa");
    });

    expect(result.current.errorMessage).toBe(
      ERROR_MESSAGE.INVALID_LENGTH(CVC_LENGTH)
    );
    expect(result.current.isError).toBe(true);
    expect(result.current.CVCNumber).toEqual("");
  });

  it(`CVC 넘버가 공백을 받는다면 ${ERROR_MESSAGE.INVALID_LENGTH(
    CVC_LENGTH
  )}를 보여준다.`, () => {
    const { result } = renderHook(() => useCVCNumber());
    act(() => {
      result.current.setCVCNumber(" 12");
    });

    expect(result.current.errorMessage).toBe(
      ERROR_MESSAGE.INVALID_LENGTH(CVC_LENGTH)
    );
    expect(result.current.isError).toBe(true);
  });
});
