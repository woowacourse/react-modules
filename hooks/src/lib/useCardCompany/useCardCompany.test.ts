import { renderHook, act } from "@testing-library/react";
import useCardCompany from "./useCardCompany";

describe("useCardCompany 테스트", () => {
  it("초기 상태에서는 errorState는 false, message는 빈 문자열이어야 한다.", () => {
    const { result } = renderHook(() => useCardCompany());

    expect(result.current.validationResult.errorState).toBe(false);
    expect(result.current.validationResult.message).toEqual("");
  });

  it("CardCompany가 선택되었을 때 errorState는 false, message는 빈 문자열이어야 한다.", () => {
    const { result } = renderHook(() => useCardCompany());

    act(() => {
      result.current.handleChange("BC카드");
    });

    expect(result.current.validationResult.errorState).toBe(false);
    expect(result.current.validationResult.message).toEqual("");
  });

  it("CardCompany가 선택되지 않았을 때 errorState는 true, message는 '카드사를 선택해주세요' 여야 한다. ", () => {
    const { result } = renderHook(() => useCardCompany());
    act(() => {
      result.current.handleChange("");
    });

    expect(result.current.validationResult.errorState).toBe(true);
    expect(result.current.validationResult.message).toEqual(
      "카드사를 선택해주세요."
    );
  });
});
