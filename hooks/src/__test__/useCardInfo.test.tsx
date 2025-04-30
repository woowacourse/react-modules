import { renderHook, act } from "@testing-library/react";
import useCardInfo from "../lib/useCardInfo";
import { CardInfo } from "../types/Card";

describe("useCardInfo 테스트", () => {
  it("초기 상태가 올바르게 설정되어야 한다", () => {
    const { result } = renderHook(() => useCardInfo());

    expect(result.current.cardInfo).toEqual({
      number: {
        first: "",
        second: "",
        third: "",
        fourth: "",
      },
      expiration: {
        month: "",
        year: "",
      },
      company: "",
      cvc: "",
      passwordFront: "",
    });
  });

  it("handleCardInfo로 number의 특정 필드를 업데이트할 수 있어야 한다", () => {
    const { result } = renderHook(() => useCardInfo());

    act(() => {
      result.current.handleCardInfo("number", "1234", "first");
    });

    expect(result.current.cardInfo.number.first).toBe("1234");
  });

  it("handleCardInfo로 expiration의 특정 필드를 업데이트할 수 있어야 한다", () => {
    const { result } = renderHook(() => useCardInfo());

    act(() => {
      result.current.handleCardInfo("expiration", "12", "month");
    });

    expect(result.current.cardInfo.expiration.month).toBe("12");
  });

  it.each([
    ["company", "BC카드"],
    ["cvc", "123"],
    ["passwordFront", "12"],
  ])("handleCardInfo로 %s를 업데이트할 수 있어야 한다", (field, value) => {
    const { result } = renderHook(() => useCardInfo());

    act(() => result.current.handleCardInfo(field as keyof CardInfo, value));
    expect(result.current.cardInfo[field as keyof CardInfo]).toBe(value);
  });
});
