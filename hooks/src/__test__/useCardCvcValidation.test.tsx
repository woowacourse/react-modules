import { renderHook } from "@testing-library/react";
import cardCvcValidation from "../lib/cardCvcValidation";

describe("cardCvcValidation 테스트", () => {
  it("CardCvc 유효한 형태인지 확인한다.", () => {
    const cvc = "123";

    const { result } = renderHook(() => cardCvcValidation(cvc));
    expect(result.current.isCvcError).toBe(false);
  });

  it("CardCvc 유효하지 않은 형태가 있는 지 확인한다.", () => {
    const cvc = "asd";

    const { result } = renderHook(() => cardCvcValidation(cvc));
    expect(result.current.isCvcError).toBe(true);
  });
});
