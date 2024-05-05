import { renderHook, act } from "@testing-library/react";
import { ChangeEvent } from "react";
import useCardUserName from "../lib/useCardUserName";

describe("useCardUserName 커스텀 훅 테스트", () => {
  const cardUserNameLength = 10;

  it("카드 고객 이름 입력 시 상태가 올바르게 업데이트되는지 확인한다.", () => {
    const cardUserName = "SUNDAY";
    const { result } = renderHook(() => useCardUserName(cardUserNameLength));

    act(() => {
      result.current.handleCardUserName({
        target: { value: cardUserName },
      } as ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.cardUserNameInfo.cardUserName).toBe(cardUserName);
  });

  it("카드 고객 이름 제한 길이 미만의 이름인 경우에도 isValid는 true이다.", () => {
    const cardUserNameUnderTenLength = "HI";
    const { result } = renderHook(() => useCardUserName(cardUserNameLength));

    act(() => {
      result.current.handleCardUserName({
        target: { value: cardUserNameUnderTenLength },
      } as ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.cardUserNameInfo.isValid).toBe(true);
  });

  it("카드 고객 이름 제한 길이를 초과한 이름인 경우 isValid는 false이다.", () => {
    const cardUserNameOverTenLength = "TOOLONGNAME";
    const { result } = renderHook(() => useCardUserName(cardUserNameLength));

    act(() => {
      result.current.handleCardUserName({
        target: { value: cardUserNameOverTenLength },
      } as ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.cardUserNameInfo.isValid).toBe(false);
  });

  it("카드 고객 이름에 공백만 입력한 경우 isValid는 false이다.", () => {
    const nameWithOnlySpaces = "    ";
    const { result } = renderHook(() => useCardUserName(cardUserNameLength));

    act(() => {
      result.current.handleCardUserName({
        target: { value: nameWithOnlySpaces },
      } as ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.cardUserNameInfo.isValid).toBe(false);
  });

  it("카드 고객 이름에 대문자 외의 문자가 있는 경우 isValid는 false이다.", () => {
    const nameNotOnlyCapital = "hELLO";
    const { result } = renderHook(() => useCardUserName(cardUserNameLength));

    act(() => {
      result.current.handleCardUserName({
        target: { value: nameNotOnlyCapital },
      } as ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.cardUserNameInfo.isValid).toBe(false);
  });
});
