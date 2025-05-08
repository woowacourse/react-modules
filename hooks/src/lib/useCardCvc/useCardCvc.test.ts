import { renderHook, act } from "@testing-library/react";
import useCardCvc from "./useCardCvc";

describe("useCardCvc 테스트", () => {
  it("CVC가 유효하게 입력되었을 때 isValid는 true, errorMessage는 빈 문자열인지 확인한다.", () => {
    const { result } = renderHook(() => useCardCvc());

    act(() => {
      result.current.handleChange({
        target: { value: "123" },
      } as React.ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.validationResult.state).toBe(false);
    expect(result.current.validationResult.message).toEqual("");
  });

  it("CVC 입력에 문자가 포함되었을 때 error.state는 false, error.message 값이 반환되는지 확인한다.", () => {
    const { result } = renderHook(() => useCardCvc());

    act(() => {
      result.current.handleChange({
        target: { value: "12ㄱ" },
      } as React.ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.validationResult.state).toBe(true);
    expect(result.current.validationResult.message).toEqual(
      "숫자만 입력 가능합니다."
    );
  });

  it("CVC 입력 길이가 3자 미만일 경우 error.state true,  error.message 값이 반환되는지 확인한다.", () => {
    const { result } = renderHook(() => useCardCvc());

    act(() => {
      result.current.handleChange({
        target: { value: "12" },
      } as React.ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.validationResult.state).toBe(true);
    expect(result.current.validationResult.message).toEqual(
      "3자리를 입력해주세요."
    );
  });
});
