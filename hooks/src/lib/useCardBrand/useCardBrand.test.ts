import { act, renderHook } from "@testing-library/react";

import useCardBrand from "./useCardBrand";

describe("useCardBrand 테스트", () => {
  const allowedBrands = ["신한카드", "KB카드", "카카오뱅크", "현대카드"];

  it("초기값과 카드사 목록이 설정되면 정확한 카드사 이름이 출력되어야 한다.", () => {
    const initialValue = "신한카드";
    const { result } = renderHook(() =>
      useCardBrand(initialValue, allowedBrands)
    );

    expect(result.current.brand).toBe(initialValue);
    expect(result.current.validationResult.isValid).toBe(true);
  });

  it("카드사 목록의 길이가 1 미만이라면 에러를 반환해야 한다.", () => {
    const initialValue = "국민카드";

    expect(() => {
      renderHook(() => useCardBrand(initialValue, []));
    }).toThrow("[ERROR]");
  });

  it("초기값이 카드사 목록에 존재하지 않는다면 에러를 반환해야 한다.", () => {
    const initialValue = "국민카드";

    expect(() => {
      renderHook(() => useCardBrand(initialValue, allowedBrands));
    }).toThrow("[ERROR]");
  });

  it("유효한 카드사로 업데이트하면 isValid가 true로 반환되어야 한다.", () => {
    const initialValue = "신한카드";
    const newValue = "현대카드";
    const { result } = renderHook(() =>
      useCardBrand(initialValue, allowedBrands)
    );

    act(() => {
      result.current.handleUpdateBrand(newValue);
    });

    expect(result.current.brand).toBe(newValue);
    expect(result.current.validationResult.isValid).toBe(true);
  });

  it("유효하지 않은 카드사로 업데이트하면 isValid가 false이며 에러메시지가 함께 반환되어야 한다.", () => {
    const initialValue = "신한카드";
    const newValue = "마스터카드";
    const { result } = renderHook(() =>
      useCardBrand(initialValue, allowedBrands)
    );

    act(() => {
      result.current.handleUpdateBrand(newValue);
    });

    expect(result.current.brand).toBe(newValue);
    expect(result.current.validationResult.isValid).toBe(false);
    expect(
      result.current.validationResult.isValid ||
        result.current.validationResult.errorMessage
    ).toBe("지원하지 않는 카드사입니다. 다른 카드를 선택해주세요.");
  });
});
