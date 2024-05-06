import { renderHook, act } from "@testing-library/react";
import { ChangeEvent } from "react";
import { COMMON_ERROR, USERNAME } from "../lib/constants/validation";
import useCardUserName from "../lib/useCardUserName";

describe("useCardUserName 커스텀 훅 테스트", () => {
  const cardUserNameLength = 10;

  it("카드 고객 이름 입력 시 상태가 올바르게 업데이트되는지 확인한다.", () => {
    const cardUserName = "SUNDAY";
    const { result } = renderHook(() => useCardUserName(cardUserNameLength));

    act(() => {
      result.current.onChangeCardUserName({
        target: { value: cardUserName },
      } as ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.cardUserNameInfo.cardUserName).toBe(cardUserName);
  });

  it("정상적인 이름 입력 시 isValid는 true이고, 에러 메시지는 없다.", () => {
    const cardUserName = "HELLO";
    const { result } = renderHook(() => useCardUserName(cardUserNameLength));

    act(() => {
      result.current.onChangeCardUserName({
        target: { value: cardUserName },
      } as ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.cardUserNameInfo.isValid).toBe(true);
    expect(result.current.cardUserNameInfo.errorMessages).toEqual([]);
  });

  it("카드 고객 이름 길이가 부정확할 때 isValid는 false이고, 이름 길이 관련 에러 메세지를 출력한다.", () => {
    const cardUserNameOverLength = "TOOLONGNAME";
    const { result } = renderHook(() => useCardUserName(cardUserNameLength));

    act(() => {
      result.current.onChangeCardUserName({
        target: { value: cardUserNameOverLength },
      } as ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.cardUserNameInfo.isValid).toBe(false);
    expect(result.current.cardUserNameInfo.errorMessages).toContain(
      USERNAME.errorMessage.invalidLength(cardUserNameLength)
    );
  });

  it("카드 고객 이름이 비어있을 때 isValid는 false이고, 값이 비었다는 에러 메세지를 출력한다.", () => {
    const emptyCardUserName = "";
    const { result } = renderHook(() => useCardUserName(cardUserNameLength));

    act(() => {
      result.current.onChangeCardUserName({
        target: { value: emptyCardUserName },
      } as ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.cardUserNameInfo.isValid).toBe(false);
    expect(result.current.cardUserNameInfo.errorMessages).toContain(
      COMMON_ERROR.empty
    );
  });

  it("카드 고객 이름에 공백을 포함한 영문 대문자 외의 문자가 있는 경우 isValid는 false이고, 카드 고객 이름 관련 에러 메세지를 출력한다.", () => {
    const mixedCardUserName = "heLLO WORLD";
    const { result } = renderHook(() => useCardUserName(cardUserNameLength));

    act(() => {
      result.current.onChangeCardUserName({
        target: { value: mixedCardUserName },
      } as ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.cardUserNameInfo.isValid).toBe(false);
    expect(result.current.cardUserNameInfo.errorMessages).toContain(
      USERNAME.errorMessage.invalidLength(cardUserNameLength)
    );
  });
});
