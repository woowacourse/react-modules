import { renderHook, act } from "@testing-library/react";
import { useCardCompanyInput } from "./useCardCompany";
import { ChangeEvent } from "react";

describe("useCardCompanyInput", () => {
  it('초기 렌더링 시 빈 문자열("")을 상태값으로 가진다.', () => {
    const initialValue = "";
    const { result } = renderHook(() => useCardCompanyInput());

    expect(result.current.cardCompany).toBe(initialValue);
  });

  it('사용자가 "카카오뱅크"를 입력하면 cardCVC 값도 "카카오뱅크"로 설정된다.', () => {
    const userInput = "카카오뱅크";
    const { result } = renderHook(() => useCardCompanyInput());

    act(() => {
      result.current.onChangeHandler({
        target: { value: userInput },
      } as ChangeEvent<HTMLSelectElement>);
    });

    expect(result.current.cardCompany).toBe(userInput);
  });
});
