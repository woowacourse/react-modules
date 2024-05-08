import { fireEvent, render, screen } from "@testing-library/react";
import { useCardNumber } from ".";

function UseCardNumberTestComponent() {
  const { value, errorStatus, onChange, onBlur } = useCardNumber();

  return (
    <div>
      <input
        data-testid={"card-number-input"}
        value={value.raw}
        onChange={onChange}
        onBlur={onBlur}
      />
      {errorStatus.isError && <div data-testid={"is-error"}>is error: true</div>}
      {errorStatus.errorMessage && (
        <div data-testid={"error-message"}>{errorStatus.errorMessage}</div>
      )}
    </div>
  );
}

const setup = () => {
  render(<UseCardNumberTestComponent />);
  const input = screen.getByTestId<HTMLInputElement>("card-number-input");

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
describe("useCardNumber에 대한 테스트 케이스", () => {
  describe("onBlur 테스트", () => {
    describe("유효성 검증에 성공하는 경우", () => {
      test.each(["0".repeat(16), "9".repeat(16), "1234".repeat(4)])(
        "유효한 카드번호(%s)을 입력한 경우 유효한 값으로 판단한다.",
        (value) => {
          const { input, getErrorStatus } = setup();

          fireEvent.change(input, { target: { value } });
          fireEvent.blur(input);

          const { isError, errorMessage } = getErrorStatus();

          expect(isError).toBe(false);
          expect(errorMessage).toBeNull();
        }
      );
    });
    describe("유효성 검증에 실패하는 경우", () => {
      test.each(["-000".repeat(4), "0.11".repeat(4), "four".repeat(4), "123A".repeat(4)])(
        "숫자가 아닌 값(%s)을 입력한 경우 유효하지 않은 값으로 판단한다.",
        (value) => {
          const { input, getErrorStatus } = setup();

          fireEvent.change(input, { target: { value } });
          fireEvent.blur(input);

          const { isError, errorMessage } = getErrorStatus();

          expect(isError).toBe(true);
          expect(errorMessage).not.toBeNull();
        }
      );

      test.each(["1".repeat(13), "1".repeat(17)])(
        "유효한 자릿수가 아닌 경우(%s) 유효하지 않은 값으로 판단한다.",
        (value) => {
          const { input, getErrorStatus } = setup();

          fireEvent.change(input, { target: { value } });
          fireEvent.blur(input);

          const { isError, errorMessage } = getErrorStatus();

          expect(isError).toBe(true);
          expect(errorMessage).not.toBeNull();
        }
      );
    });
  });

  describe("onChange 테스트", () => {
    describe("유효성 검증에 성공하는 경우", () => {
      test.each(["0000".repeat(4), "1234".repeat(4), "5678".repeat(4), "9999".repeat(4)])(
        "유효한 카드번호(%s)을 입력한 경우 입력을 받으며 유효한 값으로 판단한다.",
        (value) => {
          const { input, getErrorStatus } = setup();

          fireEvent.change(input, { target: { value } });

          const { isError, errorMessage } = getErrorStatus();

          expect(input.value).toBe(value);
          expect(isError).toBe(false);
          expect(errorMessage).toBeNull();
        }
      );
    });

    describe("유효성 검증에 실패하는 경우", () => {
      test.each(["-000".repeat(4), "0.11".repeat(4), "four".repeat(4), "123A".repeat(4)])(
        "숫자가 아닌 값이 포함된 카드번호(%s)을 입력한 경우 입력을 받지 않으며 유효하지 않은 값으로 판단한다.",
        (value) => {
          const { input, getErrorStatus } = setup();

          fireEvent.change(input, { target: { value } });

          const { isError, errorMessage } = getErrorStatus();

          expect(input.value).toBe("");
          expect(isError).toBe(true);
          expect(errorMessage).not.toBeNull();
        }
      );
    });
  });
});
