import { renderHook } from "@testing-library/react";
import useCardNumbers2, { cardCompanyNumbersInfo } from "@/lib/useCardNumbers2";
import React, { ChangeEvent } from "react";
import { CardNumbersErrorMessages } from "@/constants/error";
import { ErrorStatus } from "@/types/errorStatus";

describe("useCardNumbers2 훅 테스트", () => {
  it("초기값이 정확히 설정되어야 한다.", () => {
    const initialValue = {
      cardNumber1: "",
      cardNumber2: "",
      cardNumber3: "",
      cardNumber4: "",
    };
    const { result } = renderHook(() =>
      useCardNumbers2({
        cardCompanyNumbersInfo: cardCompanyNumbersInfo,
        selectedCompany: "VISA",
      })
    );
    expect(result.current.values).toEqual(initialValue);
  });

  it("초기값이 정확히 설정되어야 한다.", () => {
    const initialValue = {
      cardNumber1: "",
      cardNumber2: "",
      cardNumber3: "",
      cardNumber4: "",
    };
    const { result } = renderHook(() =>
      useCardNumbers2({
        cardCompanyNumbersInfo: cardCompanyNumbersInfo,
        selectedCompany: "VISA",
      })
    );
    expect(result.current.values).toEqual(initialValue);
  });

  it("입력값이 정확히 업데이트 되어야 한다.", () => {
    const changeValue = {
      cardNumber1: "5678",
      cardNumber2: "",
      cardNumber3: "",
      cardNumber4: "",
    };
    const { result } = renderHook(() =>
      useCardNumbers2({
        cardCompanyNumbersInfo: cardCompanyNumbersInfo,
        selectedCompany: "VISA",
      })
    );

    React.act(() => {
      result.current.onChange(
        {
          target: { value: "5678" },
        } as ChangeEvent<HTMLInputElement>,
        0
      );
    });

    expect(result.current.values).toEqual(changeValue);
  });

  // it("숫자아닌 값이 입력됐을 때 에러를 낸다.", () => {
  //   const valuesWithString = {
  //     cardNumber1: "",
  //     cardNumber2: "",
  //     cardNumber3: "",
  //     cardNumber4: "",
  //   };

  //   const { result } = renderHook(() => useCardNumbers(valuesWithString));

  //   const invalidValues = "abcd";
  //   React.act(() => {
  //     result.current.onChange({
  //       target: { value: invalidValues, name: "cardNumber1" },
  //     } as ChangeEvent<HTMLInputElement>);
  //   });

  //   const expectedErrorMessage = {
  //     cardNumber1: CardNumbersErrorMessages[ErrorStatus.IS_NOT_NUMBER],
  //   };
  //   expect(result.current.errorMessages).toEqual(expectedErrorMessage);
  // });

  it("[3,4,5,6] 포맷을 가진 카드 브랜드 인 경우, 각 자리의 숫자를 채우지 못하면 에러가 난다.", () => {
    const { result } = renderHook(() =>
      useCardNumbers2({
        cardCompanyNumbersInfo: cardCompanyNumbersInfo,
        selectedCompany: "[3,4,5,6]",
      })
    );

    const fourthNumbersInvalid = ["123", "1234", "12345", "123456"];

    React.act(() => {
      result.current.onChange(
        {
          target: { value: fourthNumbersInvalid[0] },
        } as React.FocusEvent<HTMLInputElement>,
        0
      );
    });

    React.act(() => {
      result.current.onChange(
        {
          target: { value: fourthNumbersInvalid[1] },
        } as React.FocusEvent<HTMLInputElement>,
        1
      );
    });

    React.act(() => {
      result.current.onChange(
        {
          target: { value: fourthNumbersInvalid[2] },
        } as React.FocusEvent<HTMLInputElement>,
        2
      );
    });

    React.act(() => {
      result.current.onChange(
        {
          target: { value: fourthNumbersInvalid[3] },
        } as React.FocusEvent<HTMLInputElement>,
        3
      );
    });

    const expectedErrorMessage = {
      cardNumber4: CardNumbersErrorMessages[ErrorStatus.INVALID_LENGTH],
    };
    expect(result.current.errorMessages).toEqual(expectedErrorMessage);
  });

  // it("[4,4,4,4] 포맷을 가진 카드 브랜드 인 경우, 숫자가 4자리가 아닐때 에러를 낸다.", () => {
  //   const { result } = renderHook(() =>
  //     useCardNumbers2({
  //       cardCompanyNumbersInfo: cardCompanyNumbersInfo,
  //       selectedCompany: "[4,4,4,4]",
  //     })
  //   );

  //   const invalidValues = "123";

  //   React.act(() => {
  //     result.current.onBlurValidLength(
  //       {
  //         target: { value: invalidValues, name: "cardNumber1" },
  //       } as React.FocusEvent<HTMLInputElement>,
  //       0
  //     );
  //   });

  //   const expectedErrorMessage = {
  //     cardNumber1: CardNumbersErrorMessages[ErrorStatus.INVALID_LENGTH],
  //   };
  //   expect(result.current.errorMessages).toEqual(expectedErrorMessage);
  // });

  // it("길이가 3글자이고 포커스를 벗어나면 에러를 낸다.", () => {
  //   const initialValues = {
  //     cardNumber1: "",
  //     cardNumber2: "",
  //     cardNumber3: "",
  //     cardNumber4: "",
  //   };
  //   const { result } = renderHook(() => useCardNumbers(initialValues));
  //   const invalidValue = "123";
  //   React.act(() => {
  //     result.current.onBlurValidLength({
  //       target: { value: invalidValue, name: "cardNumber1" },
  //     } as React.FocusEvent<HTMLInputElement>);
  //   });
  //   const expectedErrorMessage = {
  //     cardNumber1: CardNumbersErrorMessages[ErrorStatus.INVALID_LENGTH],
  //   };
  //   expect(result.current.errorMessages).toEqual(expectedErrorMessage);
  // });
});
