import { ChangeEvent } from "react";
import { renderHook, act } from "@testing-library/react";
import useCardCompany from "../lib/useCardCompany";

describe("useCardCompany 커스텀 훅 테스트", () => {
  const defaultValue = "카드사를 선택해주세요.";

  it("카드사를 선택한 경우 isValid는 true이다.", () => {
    const { result } = renderHook(() => useCardCompany());

    act(() => {
      result.current.handleCardCompany(
        {
          target: { value: "올리뱅크" },
        } as ChangeEvent<HTMLSelectElement>,
        defaultValue
      );
    });

    expect(result.current.cardCompanyInfo.isValid).toBe(true);
  });
  it("카드사를 선택하지 않은 경우 isValid는 false이다.", () => {
    const { result } = renderHook(() => useCardCompany());

    act(() => {
      result.current.handleCardCompany(
        {
          target: { value: defaultValue },
        } as ChangeEvent<HTMLSelectElement>,
        defaultValue
      );
    });

    expect(result.current.cardCompanyInfo.isValid).toBe(false);
  });

  it("선택한 카드사로 cardCompany 상태가 업데이트되는지 확인한다.", () => {
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
    expect(result.current.cardCompanyInfo.isValid).toBe(true);
  });
});
