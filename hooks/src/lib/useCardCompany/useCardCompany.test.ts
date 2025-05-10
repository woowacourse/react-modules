import { renderHook, act } from "@testing-library/react";
import useCardCompany from "./useCardCompany";

describe("useCardCompany 테스트", () => {
  it("CardCompany가 선택되었을 때 isValid는 true, errorMessage는 빈 문자열인지 확인한다.", () => {
    const { result } = renderHook(() => useCardCompany());

    act(() => {
      result.current.handleChange({
        target: { value: "BC카드" },
      } as React.ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.validationResult.errorState).toBe(false);
    expect(result.current.validationResult.message).toEqual("");
  });

  it("CardCompany가 선택되지 않았을 때 isValid는 false, errorMessage 값이 반환되는지 확인한다.", () => {
    const { result } = renderHook(() => useCardCompany());
    act(() => {
      result.current.handleChange({
        target: { value: "" },
      } as React.ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.validationResult.errorState).toBe(true);
    expect(result.current.validationResult.message).toEqual(
      "카드사를 선택해주세요."
    );
  });
});
