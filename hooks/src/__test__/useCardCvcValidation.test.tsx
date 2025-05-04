import { renderHook } from "@testing-library/react";
import useCardCVC from "../lib/useCardCVC";
import { act } from "react";

describe("cardCvcValidation 테스트", () => {
  it("CardCvc 유효한 형태인지 확인한다.", () => {
    const { result } = renderHook(() => useCardCVC());
    act(() => {
      result.current.handleCvcNumber("123");
    });
    expect(result.current.isCvcError).toBe(false);
  });

  it("CardCvc 유효하지 않은 형태가 있는 지 확인한다.", () => {
    const { result } = renderHook(() => useCardCVC());
    act(() => {
      result.current.handleCvcNumber("asd");
    });
    expect(result.current.isCvcError).toBe(true);
  });
});
