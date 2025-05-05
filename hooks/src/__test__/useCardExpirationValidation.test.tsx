import { renderHook } from "@testing-library/react";
import useCardExpirationDate from "../lib/useCardExpirationDate";
import { act } from "react";

describe("cardExpirationValidation 테스트", () => {
  it("유효기간이 유효한 형태인지 확인한다.", () => {
    const { result } = renderHook(() => useCardExpirationDate());
    act(() => {
      result.current.handleExpirationDate("12", "month");
      result.current.handleExpirationDate("25", "year");
    });
    expect(result.current.isCardExpirationError).toEqual([false, false]);
  });

  it("유효기간 중 월과 년이 둘다 에러인지 확인한다.", () => {
    const { result } = renderHook(() => useCardExpirationDate());
    act(() => {
      result.current.handleExpirationDate("16", "month");
      result.current.handleExpirationDate("12", "year");
    });
    expect(result.current.isCardExpirationError).toEqual([true, true]);
  });

  it("유효기간 중 년이 에러인지 확인한다.", () => {
    const { result } = renderHook(() => useCardExpirationDate());
    act(() => {
      result.current.handleExpirationDate("12", "month");
      result.current.handleExpirationDate("12", "year");
    });
    expect(result.current.isCardExpirationError).toEqual([false, true]);
  });

  it("유효기간중 월이 에러인지 확인한다.", () => {
    const { result } = renderHook(() => useCardExpirationDate());
    act(() => {
      result.current.handleExpirationDate("25", "month");
      result.current.handleExpirationDate("25", "year");
    });
    expect(result.current.isCardExpirationError).toEqual([true, false]);
  });
});
