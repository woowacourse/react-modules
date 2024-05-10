import { renderHook, act } from "@testing-library/react";
import useCardHolder from "./useCardHolder";
import { ERROR_MESSAGE } from "../constants";

describe("신용카드의 소유자 이름 입력 테스트", () => {
  const initialValue = {
    cardHolder: "testName",
  };

  describe("초기값 설정", () => {
    it("초기값이 key는 cardHolder, value는 영문자 string으로 유효한 값으로 설정되어야 한다.", () => {
      const { result } = renderHook(() => useCardHolder(initialValue));

      expect(result.current.inputValue).toEqual(initialValue);
    });
  });

  describe("유효성 검사", () => {
    describe("입력 type에 따른", () => {
      it("입력값이 영어로 유효할 때, 값이 업데이트 된다.", () => {
        const userInput = "changeName";
        const { result } = renderHook(() => useCardHolder(initialValue));
        const target = { value: userInput, name: "cardHolder" };
        const expectedValidationResult = {
          isValid: true,
          errorMessage: "",
        };

        act(() => {
          result.current.handleCardHolderChange({
            target,
            currentTarget: target,
          } as React.ChangeEvent<HTMLInputElement>);
        });

        expect(result.current.inputValue.cardHolder).toEqual(userInput);
        expect(result.current.validationResult).toEqual(expectedValidationResult);
      });

      it("입력값이 숫자로 유효하지 않을 때 값이 업데이트 되지 않고, 에러가 발생한다.", () => {
        const userInput = "2353";
        const { result } = renderHook(() => useCardHolder(initialValue));
        const target = { value: userInput, name: "cardHolder" };
        const expectedValidationResult = {
          isValid: false,
          errorMessage: ERROR_MESSAGE.onlyEnglish,
        };

        act(() => {
          result.current.handleCardHolderChange({
            target,
            currentTarget: target,
          } as React.ChangeEvent<HTMLInputElement>);
        });

        expect(result.current.inputValue.cardHolder).not.toEqual(userInput);
        expect(result.current.validationResult).toEqual(expectedValidationResult);
      });

      it("입력값이 한글로 유효하지 않을 때, 값이 업데이트되지 않고 에러가 발생한다.", () => {
        const userInput = "한글 입력 테스트";
        const { result } = renderHook(() => useCardHolder(initialValue));
        const target = { value: userInput, name: "cardHolder" };
        const expectedValidationResult = {
          isValid: false,
          errorMessage: ERROR_MESSAGE.onlyEnglish,
        };

        act(() => {
          result.current.handleCardHolderChange({
            target,
            currentTarget: target,
          } as React.ChangeEvent<HTMLInputElement>);
        });

        expect(result.current.inputValue.cardHolder).not.toEqual(userInput);
        expect(result.current.validationResult).toEqual(expectedValidationResult);
      });
    });

    describe("입력 길이에 따른", () => {
      it("입력 값이 유효한 값으로 모두 채워지고 블러/엔터 이벤트 발생 시, 에러가 발생하지 않는다.", () => {
        const userInput = "userInput";
        const { result } = renderHook(() => useCardHolder(initialValue));
        const target = { value: userInput, name: "cardHolder" };
        const expectedValidationResult = {
          isValid: true,
          errorMessage: "",
        };

        act(() => {
          result.current.handleCardHolderBlur({
            target,
            currentTarget: target,
          } as React.FocusEvent<HTMLInputElement>);
        });

        expect(result.current.inputValue.cardHolder).toEqual(userInput);
        expect(result.current.validationResult).toEqual(expectedValidationResult);
      });

      it("입력 값이 공백으로 유효하지 않는 경우 블러/엔터 이벤트 발생 시, 에러가 발생한다.", () => {
        const userInput = "";
        const { result } = renderHook(() => useCardHolder(initialValue));
        const target = { value: userInput, name: "cardHolder" };
        const expectedValidationResult = {
          isValid: false,
          errorMessage: ERROR_MESSAGE.notExistCardHolder,
        };

        act(() => {
          result.current.handleCardHolderBlur({
            target,
            currentTarget: target,
          } as React.FocusEvent<HTMLInputElement>);
        });

        expect(result.current.inputValue.cardHolder).not.toEqual(userInput);
        expect(result.current.validationResult).toEqual(expectedValidationResult);
      });
    });
  });
});
