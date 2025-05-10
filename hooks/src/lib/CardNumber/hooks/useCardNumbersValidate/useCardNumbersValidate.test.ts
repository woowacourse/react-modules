import { renderHook, act } from "@testing-library/react";
import useCardNumbersValidate from "./useCardNumbersValidate";

import CardNextWork from "../../types/CardNextWork";

describe("useCardNumbersValidate", () => {
  const cardNumbers = {
    numbers: {
      first: "",
      second: "",
      third: "",
      fourth: "",
    },
    network: "NOTHING" as CardNextWork,
  };

  it("값이 '1234'이면 isValid 값이 true이고 errorMessage 값이 null로 설정되어야 한다.", () => {
    const { result } = renderHook(() => useCardNumbersValidate());

    act(() => {
      result.current.validateCardNumbers({
        key: "first",
        value: "1234",
        cardNumbers: cardNumbers,
      });
    });

    expect(result.current.validationState.first).toBe(true);
    expect(result.current.errorMessage).toBeNull();
  });

  it("값이 '-1'이면 isValid 값이 false이고 errorMessage 값이 '숫자만 입력해주세요.'로 설정되어야 한다.", () => {
    const { result } = renderHook(() => useCardNumbersValidate());

    act(() => {
      result.current.validateCardNumbers({
        key: "first",
        value: "-1",
        cardNumbers: cardNumbers,
      });
    });

    expect(result.current.validationState.first).toBe(false);
    expect(result.current.errorMessage).toBe("숫자만 입력해주세요.");
  });

  it("값이 '12345'이면 isValid 값이 false이고 errorMessage 값이 '4자리만 입력해주세요.'로 설정되어야 한다.", () => {
    const { result } = renderHook(() => useCardNumbersValidate());

    act(() => {
      result.current.validateCardNumbers({
        key: "third",
        value: "12345",
        cardNumbers: cardNumbers,
      });
    });

    expect(result.current.validationState.third).toBe(false);
    expect(result.current.errorMessage).toBe("4자리만 입력해주세요.");
  });
});
