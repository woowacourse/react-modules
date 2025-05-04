import { renderHook, act } from "@testing-library/react";
import useStrictCardNumber from "../useStrictCardNumber";
import { CARD_NUMBER_ERROR_MESSAGES } from "../../validator/constants/error-messages";

describe("useStrictCardNumber hook", () => {
  test("초기 상태에는 카드 번호와 에러 메시지가 비어 있어야 한다.", () => {
    const { result } = renderHook(() => useStrictCardNumber());

    expect(result.current.cardNumber).toBe("");
    expect(result.current.errorMessage).toBeUndefined();
    expect(result.current.isError).toBe(false);
  });

  test("실제 존재하지 않는 카드를 입력하면 존재하지 않는 카드라는 에러를 띄워야 한다.", () => {
    const { result } = renderHook(() => useStrictCardNumber());

    act(() => {
      result.current.onCardNumberChange({
        target: { value: "4111111111111121" },
      } as React.ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.cardNumber).toBe("4111111111111121");
    expect(result.current.errorMessage).toBe(
      CARD_NUMBER_ERROR_MESSAGES.INVALID_CHECKSUM
    );
    expect(result.current.isError).toBe(true);
  });
});
