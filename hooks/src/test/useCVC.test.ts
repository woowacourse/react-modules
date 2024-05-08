import { renderHook } from "@testing-library/react";
import { useCVC } from "@/lib";
import React, { ChangeEvent } from "react";
import { ErrorStatus } from "@/types/errorStatus";
import { CVCErrorMessages } from "@/constants/error";

describe("useCVC 훅 테스트", () => {
  const validValue = "123";
  const changeValue = "456";

  it("초기값이 정확히 설정되어야 한다.", () => {
    const { result } = renderHook(() => useCVC(validValue));
    expect(result.current.value).toEqual(validValue);
  });

  it("입력값이 정확히 업데이트 되어야 한다.", () => {
    const { result } = renderHook(() => useCVC(validValue));
    React.act(() => {
      result.current.onChange({
        target: { value: changeValue },
      } as ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.value).toEqual(changeValue);
  });

  it("숫자가 아닌 값이 들어오면 에러를 낸다.", () => {
    const { result } = renderHook(() => useCVC(""));
    const invalidValue = "ㄱㄴㄷ";

    React.act(() => {
      result.current.onChange({
        target: { value: invalidValue },
      } as ChangeEvent<HTMLInputElement>);
    });

    const expectedErrorMessage = CVCErrorMessages[ErrorStatus.IS_NOT_NUMBER];
    expect(result.current.errorMessage).toBe(expectedErrorMessage);
  });

  // it("길이가 3글자가 아니면 에러를 낸다.", () => {
  //   const { result } = renderHook(() => useCVC(""));
  //   const invalidValue = "1234";

  //   React.act(() => {
  //     result.current.onChange({
  //       target: { value: invalidValue },
  //     } as ChangeEvent<HTMLInputElement>);
  //   });

  //   const expectedErrorMessage = CVCErrorMessages[ErrorStatus.INVALID_LENGTH];
  //   expect(result.current.errorMessage).toBe(expectedErrorMessage);
  // });
});
