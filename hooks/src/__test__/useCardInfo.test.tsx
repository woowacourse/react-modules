import { renderHook, act } from "@testing-library/react";
import { CardInfo } from "../lib/types/Card";
import {
  useCardCVC,
  useCardExpirationDate,
  useCardNumber,
  useCardPassword,
} from "../lib";

describe("useCardInfo 테스트", () => {
  it("handleCardNumber로 number의 특정 필드를 업데이트할 수 있어야 한다", () => {
    const { result } = renderHook(() => useCardNumber());

    act(() => {
      result.current.handleCardNumber("1234", "first");
    });

    expect(result.current.cardNumber.first).toBe("1234");
  });

  it("handleExpirationDate로 expiration의 특정 필드를 업데이트할 수 있어야 한다", () => {
    const { result } = renderHook(() => useCardExpirationDate());

    act(() => {
      result.current.handleExpirationDate("12", "month");
    });

    expect(result.current.expirationDate.month).toBe("12");
  });

  it("handleCvcNumber로 cvc 필드를 업데이트할 수 있어야 한다", () => {
    const { result } = renderHook(() => useCardCVC());

    act(() => {
      result.current.handleCvcNumber("123");
    });

    expect(result.current.cvcNumber).toBe("123");
  });

  it("handlePassword로 password 필드를 업데이트할 수 있어야 한다", () => {
    const { result } = renderHook(() => useCardPassword());

    act(() => {
      result.current.handlePassword("12");
    });

    expect(result.current.password).toBe("12");
  });
});
