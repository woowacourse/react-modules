import { renderHook } from "@testing-library/react";
import React, { ChangeEvent } from "react";
import { ErrorStatus } from "@/types/errorStatus";
import { useExpiryDate } from "@/lib";
import { ExpiryDateErrorMessages } from "@/constants/error";

describe("useExpiryDate 훅 테스트", () => {
  const validValues = {
    month: "12",
    year: "24",
  };
  const initialValues = {
    month: "",
    year: "",
  };
  it("초기값이 정확히 설정되어야 한다.", () => {
    const { result } = renderHook(() => useExpiryDate(validValues));
    expect(result.current.values).toEqual(validValues);
  });

  it("입력값이 정확히 업데이트 되어야 한다.", () => {
    const { result } = renderHook(() => useExpiryDate(validValues));

    React.act(() => {
      result.current.onChange({
        target: { value: "30", name: "year" },
      } as ChangeEvent<HTMLInputElement>);
    });
    const changedValues = {
      month: "12",
      year: "30",
    };
    expect(result.current.values).toEqual(changedValues);
  });

  it("숫자가 아닌 값이 들어오면 에러를 낸다.", () => {
    const { result } = renderHook(() => useExpiryDate(initialValues));

    React.act(() => {
      result.current.onChange({
        target: { value: "ab", name: "month" },
      } as ChangeEvent<HTMLInputElement>);
    });
    const expectedErrorMessage = {
      month: ExpiryDateErrorMessages[ErrorStatus.IS_NOT_NUMBER],
<<<<<<< HEAD
      year: null,
    };
    expect(result.current.errorMessages).toEqual(expectedErrorMessage);
  });

  it("월 입력은 2글자 초과면 에러를 낸다.", () => {
    const { result } = renderHook(() => useExpiryDate(initialValues));

    React.act(() => {
      result.current.onChange({
        target: { value: "123", name: "month" },
      } as ChangeEvent<HTMLInputElement>);
    });

    const expectedErrorMessage = {
      month: ExpiryDateErrorMessages[ErrorStatus.INVALID_LENGTH],
      year: null,
=======
      year: "",
>>>>>>> c04a3007662d19237170a83f917eeba4ed676674
    };
    expect(result.current.errorMessages).toEqual(expectedErrorMessage);
  });

  it("01~12이 아닌 범위의 월을 입력했을 때 에러를 낸다.", () => {
    const { result } = renderHook(() => useExpiryDate(initialValues));

    React.act(() => {
      result.current.onChange({
        target: { value: "13", name: "month" },
      } as ChangeEvent<HTMLInputElement>);
    });

    const expectedErrorMessage = {
      month: ExpiryDateErrorMessages[ErrorStatus.INVALID_MONTH],
<<<<<<< HEAD
      year: null,
=======
      year: "",
>>>>>>> c04a3007662d19237170a83f917eeba4ed676674
    };
    expect(result.current.errorMessages).toEqual(expectedErrorMessage);
  });

  it("두자리 정수가 아닌 년도를 입력했을 때 에러를 낸다.", () => {
    const { result } = renderHook(() => useExpiryDate(initialValues));

    React.act(() => {
      result.current.onChange({
        target: { value: "-2", name: "year" },
      } as ChangeEvent<HTMLInputElement>);
    });

    const expectedErrorMessage = {
<<<<<<< HEAD
      month: null,
=======
      month: "",
>>>>>>> c04a3007662d19237170a83f917eeba4ed676674
      year: ExpiryDateErrorMessages[ErrorStatus.INVALID_YEAR],
    };

    expect(result.current.errorMessages).toEqual(expectedErrorMessage);
  });
});
