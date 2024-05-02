import { ChangeEvent } from "react";
import { renderHook, act } from "@testing-library/react";
import useCardCompany from "../lib/useCardCompany";

describe("useCardCompany 커스텀 훅 테스트", () => {
  const defaultValue = "카드사를 선택해주세요.";

  it("카드 회사 선택한 경우 isError 상태가 false이다.", () => {
    const { result } = renderHook(() => useCardCompany());

    act(() => {
      result.current.handleCardCompany(
        {
          target: { value: "올리뱅크" },
        } as ChangeEvent<HTMLSelectElement>,
        defaultValue
      );
    });

    expect(result.current.cardCompanyInfo.isError).toBe(false);
  });
  it("카드사를 선택하지 않으면 isError 상태가 true이다.", () => {
    const { result } = renderHook(() => useCardCompany());

    act(() => {
      result.current.handleCardCompany(
        {
          target: { value: defaultValue },
        } as ChangeEvent<HTMLSelectElement>,
        defaultValue
      );
    });

    expect(result.current.cardCompanyInfo.isError).toBe(true);
  });

  it("카드 회사의 선택에 따라 cardCompany 상태가 올바르게 업데이트되는지 확인한다.", () => {
    const { result } = renderHook(() => useCardCompany());
    const cardCompany = "썬데이뱅크";

    act(() => {
      result.current.handleCardCompany(
        {
          target: { value: cardCompany },
        } as ChangeEvent<HTMLSelectElement>,
        defaultValue
      );
    });

    expect(result.current.cardCompanyInfo.cardCompany).toBe(cardCompany);
    expect(result.current.cardCompanyInfo.isError).toBe(false);
  });
});
