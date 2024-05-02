import { renderHook, act } from "@testing-library/react";
import { ChangeEvent } from "react";
import useCardPassword from "../lib/useCardPassword";

describe("useCardPassword 커스텀 훅 테스트", () => {
  const passwordLength = 2;
  it("카드 비밀번호 입력 시 상태가 올바르게 업데이트되는지 확인한다.", () => {
    const password = "12";
    const { result } = renderHook(() => useCardPassword(passwordLength));

    act(() => {
      result.current.handleCardPassword({
        target: { value: password },
      } as ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.cardPassWordInfo.password).toBe(password);
  });

  it("정상적인 비밀번호 입력 시 isError 상태가 false이다.", () => {
    const password = "12";
    const { result } = renderHook(() => useCardPassword(passwordLength));

    act(() => {
      result.current.handleCardPassword({
        target: { value: password },
      } as ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.cardPassWordInfo.isError).toBe(false);
  });

  it("비밀번호 길이가 부정확할 때 isError 상태가 true이다.", () => {
    const passwordOverLength = "123";
    const { result } = renderHook(() => useCardPassword(passwordLength));

    act(() => {
      result.current.handleCardPassword({
        target: { value: passwordOverLength },
      } as ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.cardPassWordInfo.isError).toBe(true);
  });
});
