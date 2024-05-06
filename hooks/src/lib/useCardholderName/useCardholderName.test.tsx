import { fireEvent, render, screen } from "@testing-library/react";
import { useCardholderName } from ".";

function UseCardholderNameTestComponent() {
  const { value, errorStatus, onChange, onBlur } = useCardholderName();

  return (
    <div>
      <input
        data-testid="cardholder-name-input"
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      {errorStatus.isError && <div data-testid="is-error">is error: true</div>}
      {errorStatus.errorMessage && (
        <div data-testid="error-message">{errorStatus.errorMessage}</div>
      )}
    </div>
  );
}

const setup = () => {
  render(<UseCardholderNameTestComponent />);
  const input = screen.getByTestId<HTMLInputElement>("cardholder-name-input");

  const getErrorStatus = () => {
    const isError = screen.queryByTestId("is-error");
    const errorMessage = screen.queryByTestId("error-message");

    return {
      isError: Boolean(isError),
      errorMessage: errorMessage ? errorMessage.textContent : null,
    };
  };

  return { input, getErrorStatus };
};

describe("useCardholderName에 대한 테스트 케이스", () => {
  describe("onBlur 테스트", () => {
    describe("유효성 검증에 성공하는 경우", () => {
      it("공백 없이 영어 대문자로만 이루어진 값을 입력한 경우 유효한 값으로 판단한다.", () => {
        const CORRECT_VALUE = "ABC";
        const { input, getErrorStatus } = setup();

        fireEvent.change(input, { target: { value: CORRECT_VALUE } });
        fireEvent.blur(input);

        const { isError, errorMessage } = getErrorStatus();

        expect(isError).toBe(false);
        expect(errorMessage).toBeNull();
      });

      it("사이 공백이 한 개 이하로 포함된 경우 유효한 값으로 판단한다.", () => {
        const CORRECT_VALUE = "A B C";
        const { input, getErrorStatus } = setup();

        fireEvent.change(input, { target: { value: CORRECT_VALUE } });
        fireEvent.blur(input);

        const { isError, errorMessage } = getErrorStatus();

        expect(isError).toBe(false);
        expect(errorMessage).toBeNull();
      });
    });

    describe("유효성 검증에 실패하는 경우", () => {
      it("한글을 입력한 경우 유효하지 않은 값으로 판단한다.", () => {
        const { input, getErrorStatus } = setup();

        const WRONG_VALUE = "홍길동";
        fireEvent.change(input, { target: { value: WRONG_VALUE } });
        fireEvent.blur(input);

        const { isError, errorMessage } = getErrorStatus();

        expect(isError).toBe(true);
        expect(errorMessage).not.toBeNull();
      });

      it("숫자를 입력한 경우 유효하지 않은 값으로 판단한다.", () => {
        const { input, getErrorStatus } = setup();

        const WRONG_VALUE = "123";
        fireEvent.change(input, { target: { value: WRONG_VALUE } });
        fireEvent.blur(input);

        const { isError, errorMessage } = getErrorStatus();

        expect(isError).toBe(true);
        expect(errorMessage).not.toBeNull();
      });

      it("대소문자를 섞어서 입력한 경우 유효하지 않은 값으로 판단한다.", () => {
        const { input, getErrorStatus } = setup();

        const WRONG_VALUE = "AbC";
        fireEvent.change(input, { target: { value: WRONG_VALUE } });
        fireEvent.blur(input);

        const { isError, errorMessage } = getErrorStatus();

        expect(isError).toBe(true);
        expect(errorMessage).not.toBeNull();
      });

      it.each([" ABC ", "ABC ", " ABC"])(
        "양 끝에 공백이 포함된 경우(%s) 유효하지 않은 값으로 판단한다.",
        (value) => {
          const { input, getErrorStatus } = setup();

          fireEvent.change(input, { target: { value: value } });
          fireEvent.blur(input);

          const { isError, errorMessage } = getErrorStatus();

          expect(isError).toBe(true);
          expect(errorMessage).not.toBeNull();
        }
      );

      it("사이 공백이 두 개 이상 포함된 경우 유효하지 않은 값으로 판단한다.", () => {
        const { input, getErrorStatus } = setup();

        const WRONG_VALUE = "A B  C";
        fireEvent.change(input, { target: { value: WRONG_VALUE } });
        fireEvent.blur(input);

        const { isError, errorMessage } = getErrorStatus();

        expect(isError).toBe(true);
        expect(errorMessage).not.toBeNull();
      });
    });
  });

  describe("onChange 테스트", () => {
    it("유효한 값일 경우 입력을 받으며 유효한 값으로 판단한다.", () => {
      const CORRECT_VALUE = "ABC";
      const { input, getErrorStatus } = setup();

      fireEvent.change(input, { target: { value: CORRECT_VALUE } });

      const { isError, errorMessage } = getErrorStatus();

      expect(input.value).toBe(CORRECT_VALUE);
      expect(isError).toBe(false);
      expect(errorMessage).toBeNull();
    });

    it("영문자가 아닌 값일 경우 입력을 받지 않으며 유효하지 않은 값으로 판단한다.", () => {
      const WRONG_VALUE = "홍길동";
      const { input, getErrorStatus } = setup();

      fireEvent.change(input, { target: { value: WRONG_VALUE } });

      const { isError, errorMessage } = getErrorStatus();

      expect(input.value).toBe("");
      expect(isError).toBe(true);
      expect(errorMessage).not.toBeNull();
    });
  });
});
