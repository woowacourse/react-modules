import { renderHook } from "@testing-library/react";
import { act } from "react";
import useCardBrand from "../src/useCardBrand/useCardBrand";
import { CARD_BRAND_ERROR_MESSAGE } from "../src/useCardBrand/useCardBrand";

describe("useCardBrand hook 테스트", () => {
  const optionValues = ["신한은행", "BC", "카카오뱅크"];

  it("초깃값은 빈 문자열이다", () => {
    const { result } = renderHook(() => useCardBrand({ optionValues }));
    expect(result.current.cardBrand).toBe("");
  });

  it("초기값을 설정할 수 있다", () => {
    const { result } = renderHook(() =>
      useCardBrand({ userCardBrand: "신한은행", optionValues })
    );
    expect(result.current.cardBrand).toBe("신한은행");
  });

  it("올바른 브랜드를 입력하면 상태가 업데이트된다", () => {
    const { result } = renderHook(() => useCardBrand({ optionValues }));

    const event = {
      target: { value: "BC" },
    } as React.ChangeEvent<HTMLInputElement>;

    act(() => {
      result.current.handleCardBrandChange(event);
    });

    expect(result.current.cardBrand).toBe("BC");
    expect(result.current.error).toBe(false);
  });

  it("옵션에 없는 값을 입력하면 에러 상태를 반환한다", () => {
    const { result } = renderHook(() => useCardBrand({ optionValues }));

    const event = {
      target: { value: "NotABrand" },
    } as React.ChangeEvent<HTMLInputElement>;

    act(() => {
      result.current.handleCardBrandChange(event);
    });

    expect(result.current.error).toBe(true);
    expect(result.current.errorMessage).toBe(
      CARD_BRAND_ERROR_MESSAGE.NOT_SELECTED
    );
  });
});
