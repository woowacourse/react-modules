import { useCardCompany } from "../lib";
import { renderHook, act } from "@testing-library/react";

describe("useCardCompany Test", () => {
  it("click 이벤트의 target value를 검사한다.", () => {
    const { result } = renderHook(() =>
      useCardCompany(["하나은행", "하나카드"])
    );

    act(() => {
      result.current.clickCardCompany({ target: { value: "하나카드" } } as any);
    });
    expect(result.current.cardCompany).toBe("하나카드");
  });

  it("error 잘못된 은행을 입력하면 에러를 발생한다.", () => {
    const { result } = renderHook(() => useCardCompany(["하나은행"]));

    act(() => {
      result.current.clickCardCompany({ target: { value: "하나카드" } } as any);
    });
    expect(result.current.errorState.isError).toBe(true);
  });

  it("reset에러를 실행하면 에러가 사라진다.", () => {
    const { result } = renderHook(() => useCardCompany(["하나은행"]));

    act(() => {
      result.current.clickCardCompany({ target: { value: "하나카드" } } as any);
      result.current.errorState.resetError();
    });
    expect(result.current.errorState.isError).toBe(false);
  });
});
