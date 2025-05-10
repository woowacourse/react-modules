import { renderHook, act } from "@testing-library/react";
import useExpirationDate from "./useExpirationDate";

describe("useExpirationDate 훅 테스트", () => {
  it("유효한 월, 연도 입력 시 isValid가 true이고 에러 메시지가 없음", () => {
    const { result } = renderHook(() => useExpirationDate());
    act(() => {
      result.current.handleChange({
        target: { name: "month", value: "12" },
      } as React.ChangeEvent<HTMLInputElement>);
      result.current.handleChange({
        target: { name: "year", value: "30" },
      } as React.ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.validationResult.month).toEqual({
      errorState: false,
      message: "",
    });
  });

  it("문자가 포함된 월 입력 시 숫자 에러 메시지 반환", () => {
    const { result } = renderHook(() => useExpirationDate());

    act(() => {
      result.current.handleChange({
        target: { name: "month", value: "1a" },
      } as React.ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.validationResult.month).toEqual({
      errorState: true,
      message: "숫자만 입력 가능합니다.",
    });
  });

  it("월이 2자리가 아닐 경우 형식 에러 반환", () => {
    const { result } = renderHook(() => useExpirationDate());

    act(() => {
      result.current.handleChange({
        target: { name: "month", value: "1" },
      } as React.ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.validationResult.month).toEqual({
      errorState: true,
      message: "MM형태로 입력해주세요.",
    });
  });

  it("월이 1~12 범위를 벗어날 경우 범위 에러 반환", () => {
    const { result } = renderHook(() => useExpirationDate());

    act(() => {
      result.current.handleChange({
        target: { name: "month", value: "13" },
      } as React.ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.validationResult.month).toEqual({
      errorState: true,
      message: "1~12까지의 범위만 입력 가능합니다.",
    });
  });

  it("문자가 포함된 연도 입력 시 숫자 에러 메시지 반환", () => {
    const { result } = renderHook(() => useExpirationDate());

    act(() => {
      result.current.handleChange({
        target: { name: "year", value: "2a" },
      } as React.ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.validationResult.year).toEqual({
      errorState: true,
      message: "숫자만 입력 가능합니다.",
    });
  });

  it("연도가 2자리가 아닐 경우 형식 에러 반환", () => {
    const { result } = renderHook(() => useExpirationDate());

    act(() => {
      result.current.handleChange({
        target: { name: "year", value: "1" },
      } as React.ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.validationResult.year).toEqual({
      errorState: true,
      message: "YY형태로 입력해주세요.",
    });
  });

  it("현재보다 이전 연도를 입력하면 범위 에러 메시지 반환", () => {
    const { result } = renderHook(() => useExpirationDate());
    const currentYear = new Date().getFullYear() % 100;
    const pastYear = String(currentYear - 1).padStart(2, "0");

    act(() => {
      result.current.handleChange({
        target: { name: "year", value: pastYear },
      } as React.ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.validationResult.year).toEqual({
      errorState: true,
      message: "현재보다 이전년도는 입력할 수 없습니다.",
    });
  });
});
