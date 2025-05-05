import { renderHook, act } from "@testing-library/react";
import useCardNumber from "../useCardNumber";

describe("useCardNumber 훅", () => {
  it("빈 카드 번호와 에러 없이 초기화되어야 한다.", () => {
    const { result } = renderHook(() => useCardNumber());

    expect(result.current.cardNumber).toBe("");
    expect(result.current.errorMessage).toBeUndefined();
    expect(result.current.isError).toBe(false);
  });

  it("카드 번호가 변경되면 업데이트되어야 한다.", () => {
    const { result } = renderHook(() => useCardNumber());
    const newNumber = "1234567812345678";

    act(() => {
      result.current.onCardNumberChange({
        target: { value: newNumber },
      } as React.ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.cardNumber).toBe(newNumber);
  });

  it("유효하지 않은 카드 번호일 경우, 유효성 검사 에러를 반영해야 한다.", () => {
    const { result } = renderHook(() => useCardNumber());

    act(() => {
      result.current.onCardNumberChange({
        target: { value: "invalidinvalidin" },
      } as React.ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.errorMessage).toBe("카드 번호는 16 자리여야 합니다.");
    expect(result.current.isError).toBe(true);

    act(() => {
      result.current.onCardNumberChange({
        target: { value: "4111111111111111" },
      } as React.ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.errorMessage).toBeUndefined();
    expect(result.current.isError).toBe(false);
  });

  it("빈 카드 번호일 경우, 적절하게 처리되어야 한다.", () => {
    const { result } = renderHook(() => useCardNumber());

    act(() => {
      result.current.onCardNumberChange({
        target: { value: "" },
      } as React.ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.errorMessage).toBeUndefined();
    expect(result.current.isError).toBe(false);
  });

  it(`카드 번호수가 모자랄때 적절한 메세지를 보여줘야한다.`, () => {
    const { result } = renderHook(() => useCardNumber());

    act(() => {
      result.current.onCardNumberChange({
        target: { value: "11" },
      } as React.ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.errorMessage).toBe("카드 번호는 16 자리여야 합니다.");
    expect(result.current.isError).toBe(true);

    act(() => {
      result.current.onCardNumberChange({
        target: { value: "4111111111111111" },
      } as React.ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.errorMessage).toBeUndefined();
    expect(result.current.isError).toBe(false);
  });
});
