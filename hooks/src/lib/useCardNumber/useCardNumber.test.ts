import { renderHook, act } from "@testing-library/react";
import useCardNumber from "./useCardNumber";

describe("useCardNumber 테스트", () => {
  it("카드 번호가 유효하게 입력되었을 때 errorState가 false,  errorMessage는 빈 문자열인지 확인한다.", () => {
    const { result } = renderHook(() => useCardNumber());

    const testValue = {
      first: "1234",
      second: "1111",
      third: "3333",
      fourth: "1234",
    };

    for (const [label, value] of Object.entries(testValue)) {
      act(() => {
        result.current.handleChange({
          target: { name: label, value: value },
        } as React.ChangeEvent<HTMLInputElement>);
      });
    }

    expect(result.current.validationResult).toEqual({
      first: { errorState: false, message: "" },
      second: { errorState: false, message: "" },
      third: { errorState: false, message: "" },
      fourth: { errorState: false, message: "" },
    });
  });

  it("카드 번호에 문자가 포함되었을 때 유효하지 않은 경우만 errorState가 true,  errorMessage 값이 반환되는지 확인한다.", () => {
    const { result } = renderHook(() => useCardNumber());
    const testValue = {
      first: "123a",
      second: "1111",
      third: "3333",
      fourth: "1234",
    };
    for (const [label, value] of Object.entries(testValue)) {
      act(() => {
        result.current.handleChange({
          target: { name: label, value: value },
        } as React.ChangeEvent<HTMLInputElement>);
      });
    }

    expect(result.current.validationResult).toEqual({
      first: { errorState: true, message: "숫자만 입력 가능합니다." },
      second: { errorState: false, message: "" },
      third: { errorState: false, message: "" },
      fourth: { errorState: false, message: "" },
    });
  });

  it("카드 번호 길이가 4자 미만일 경우 유효하지 않은 경우만 errorState가 true, errorMessage 값이 반환되는지 확인한다.", () => {
    const { result } = renderHook(() => useCardNumber());

    const testValue = {
      first: "123",
      second: "1111",
      third: "3333",
      fourth: "1234",
    };

    for (const [label, value] of Object.entries(testValue)) {
      act(() => {
        result.current.handleChange({
          target: { name: label, value: value },
        } as React.ChangeEvent<HTMLInputElement>);
      });
    }

    expect(result.current.validationResult).toEqual({
      first: { errorState: true, message: "4자리를 입력해주세요." },
      second: { errorState: false, message: "" },
      third: { errorState: false, message: "" },
      fourth: { errorState: false, message: "" },
    });
  });

  it("카드가 Diners 타입인 경우 14자리인지 확인하고, 유효할 경우 errorState는 모두 false로 반환한다.", async () => {
    const { result } = renderHook(() => useCardNumber());

    const testValue = {
      first: "3612",
      second: "111112",
      third: "3333",
      fourth: "",
    };

    for (const [label, value] of Object.entries(testValue)) {
      act(() => {
        result.current.handleChange({
          target: { name: label, value: value },
        } as React.ChangeEvent<HTMLInputElement>);
      });
    }

    expect(result.current.cardType).toBe("Diners");

    expect(result.current.validationResult).toEqual({
      first: { errorState: false, message: "" },
      second: { errorState: false, message: "" },
      third: { errorState: false, message: "" },
      fourth: { errorState: false, message: "" },
    });
  });

  it("카드가 AMEX 타입인 경우 15자리인지 확인하고, 유효할 경우 errorState는 모두 false로 반환한다.", async () => {
    const { result } = renderHook(() => useCardNumber());

    const testValue = {
      first: "3412",
      second: "111112",
      third: "33333",
      fourth: "",
    };

    for (const [label, value] of Object.entries(testValue)) {
      act(() => {
        result.current.handleChange({
          target: { name: label, value: value },
        } as React.ChangeEvent<HTMLInputElement>);
      });
    }

    expect(result.current.cardType).toBe("AMEX");

    expect(result.current.validationResult).toEqual({
      first: { errorState: false, message: "" },
      second: { errorState: false, message: "" },
      third: { errorState: false, message: "" },
      fourth: { errorState: false, message: "" },
    });
  });

  it("카드가 UnionPay 타입인 경우 16자리인지 확인하고, 유효할 경우 errorState는 모두 false로 반환한다.", async () => {
    const { result } = renderHook(() => useCardNumber());

    const testValue = {
      first: "6221",
      second: "2612",
      third: "3333",
      fourth: "1111",
    };

    for (const [label, value] of Object.entries(testValue)) {
      act(() => {
        result.current.handleChange({
          target: { name: label, value: value },
        } as React.ChangeEvent<HTMLInputElement>);
      });
    }

    expect(result.current.cardType).toBe("UnionPay");

    expect(result.current.validationResult).toEqual({
      first: { errorState: false, message: "" },
      second: { errorState: false, message: "" },
      third: { errorState: false, message: "" },
      fourth: { errorState: false, message: "" },
    });
  });
});
