import { renderHook, act } from "@testing-library/react";
import useCardCompany, { ERROR_MESSAGE } from "./useCardCompany";

describe("useCardCompany 테스트", () => {
  const VALID_CARD_COMPANIES = [
    "BC카드",
    "신한카드",
    "카카오뱅크",
    "현대카드",
    "우리카드",
    "롯데카드",
    "하나카드",
    "국민카드",
  ];

  it("초기 상태에서는 errorState는 false, message는 빈 문자열이어야 한다.", () => {
    const { result } = renderHook(() => useCardCompany(VALID_CARD_COMPANIES));

    expect(result.current.validationResult.errorState).toBe(false);
    expect(result.current.validationResult.message).toEqual("");
  });

  it("유효한 카드사가 선택되었을 때 errorState는 false, message는 빈 문자열이어야 한다.", () => {
    const { result } = renderHook(() => useCardCompany(VALID_CARD_COMPANIES));

    act(() => {
      result.current.handleChange("BC카드");
    });

    expect(result.current.validationResult.errorState).toBe(false);
    expect(result.current.validationResult.message).toEqual("");
  });

  it("유효하지 않은 카드사가 선택되지 않았을 때 errorState는 true, message는 '카드사를 선택해주세요' 여야 한다. ", () => {
    const { result } = renderHook(() => useCardCompany(VALID_CARD_COMPANIES));
    act(() => {
      result.current.handleChange("");
    });

    expect(result.current.validationResult.errorState).toBe(true);
    expect(result.current.validationResult.message).toEqual(
      ERROR_MESSAGE.EMPTY_CARD_COMPANY
    );
  });
});
