import { renderHook, act } from "@testing-library/react";
import useSelectedCardType from "./useSelectCardType";

describe("신용카드 카드사 입력 테스트", () => {
  it("유효한 카드사를 선택하면 값이 업데이트 된다.", () => {
    const selectCardType = "카카오뱅크";
    const { result } = renderHook(() => useSelectedCardType());
    const target = { value: selectCardType };

    act(() => {
      result.current.handleSelectCardTypeChange({
        target,
        currentTarget: target,
      } as React.ChangeEvent<HTMLButtonElement>);
    });

    expect(result.current.selectedCardType).toEqual(selectCardType);
  });

  it("유효하지 않은 카드사를 입력하면, 업데이트 되지 않는다.", () => {
    const selectCardType = "기업은행";
    const { result } = renderHook(() => useSelectedCardType());
    const target = { value: selectCardType };

    act(() => {
      result.current.handleSelectCardTypeChange({
        target,
        currentTarget: target,
      } as React.ChangeEvent<HTMLButtonElement>);
    });

    expect(result.current.selectedCardType).toEqual(null);
  });
});
