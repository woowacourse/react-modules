import { renderHook } from "@testing-library/react";
import useCardExpirationValidation from "../lib/useCardExpirationValidation";

describe("useCardExpirationValidation 테스트", () => {
  it("유효기간이 유효한 형태인지 확인한다.", () => {
    const expirationPeriod = {
      month: "12",
      year: "25",
    };

    const { result } = renderHook(() =>
      useCardExpirationValidation(expirationPeriod.month, expirationPeriod.year)
    );
    expect(result.current.isCardExpirationError).toEqual([false, false]);
  });

  it("유효기간 중 월과 년이 둘다 에러인지 확인한다.", () => {
    const expirationPeriod = {
      month: "16",
      year: "12",
    };

    const { result } = renderHook(() =>
      useCardExpirationValidation(expirationPeriod.month, expirationPeriod.year)
    );
    expect(result.current.isCardExpirationError).toEqual([true, true]);
  });

  it("유효기간 중 년이 에러인지 확인한다.", () => {
    const expirationPeriod = {
      month: "12",
      year: "12",
    };

    const { result } = renderHook(() =>
      useCardExpirationValidation(expirationPeriod.month, expirationPeriod.year)
    );
    expect(result.current.isCardExpirationError).toEqual([false, true]);
  });

  it("유효기간중 월이 에러인지 확인한다.", () => {
    const expirationPeriod = {
      month: "25",
      year: "25",
    };

    const { result } = renderHook(() =>
      useCardExpirationValidation(expirationPeriod.month, expirationPeriod.year)
    );
    expect(result.current.isCardExpirationError).toEqual([true, false]);
  });
});
