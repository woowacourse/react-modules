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
  const cardNumberInput = screen.getByTestId<HTMLInputElement>("card-number-input");

  const getErrorStatus = () => {
    const isError = screen.queryByTestId("is-error");
    const errorMessage = screen.queryByTestId("error-message");

    return {
      isError: Boolean(isError),
      errorMessage: errorMessage ? errorMessage.textContent : null,
    };
  };

  return { cardNumberInput: cardNumberInput, getErrorStatus };
};
describe("useCardNumber", () => {
  describe("유효성 검증 (onBlur)", () => {
    describe("유효한 카드번호를 입력한 경우", () => {
      test.each(["0".repeat(16), "9".repeat(16), "1234".repeat(4)])(
        "(%s) 유효한 값으로 판단한다.",
        (value) => {
          const { cardNumberInput, getErrorStatus } = setup();

          fireEvent.change(cardNumberInput, { target: { value } });
          fireEvent.blur(cardNumberInput);

          const { isError, errorMessage } = getErrorStatus();

          expect(isError).toBe(false);
          expect(errorMessage).toBeNull();
        }
      );
    });
    describe("유효하지 않은 카드번호를 입력한 경우", () => {
      test.each(["-000".repeat(4), "0.11".repeat(4), "four".repeat(4), "123A".repeat(4)])(
        "(%s, 숫자 아닌 값) 유효하지 않은 값으로 판단한다.",
        (value) => {
          const { cardNumberInput, getErrorStatus } = setup();

          fireEvent.change(cardNumberInput, { target: { value } });
          fireEvent.blur(cardNumberInput);

          const { isError, errorMessage } = getErrorStatus();

          expect(isError).toBe(true);
          expect(errorMessage).not.toBeNull();
        }
      );

      test.each(["1".repeat(13), "1".repeat(17)])(
        "(%s, 잘못된 자릿수) 유효하지 않은 값으로 판단한다.",
        (value) => {
          const { cardNumberInput, getErrorStatus } = setup();

          fireEvent.change(cardNumberInput, { target: { value } });
          fireEvent.blur(cardNumberInput);

          const { isError, errorMessage } = getErrorStatus();

          expect(isError).toBe(true);
          expect(errorMessage).not.toBeNull();
        }
      );
    });
  });

  describe("유효성 검증 (onChange)", () => {
    describe("유효한 카드번호를 입력한 경우", () => {
      test.each(["0000".repeat(4), "1234".repeat(4), "5678".repeat(4), "9999".repeat(4)])(
        "(%s) 입력값을 상태에 반영하며 유효한 값으로 판단한다.",
        (value) => {
          const { cardNumberInput, getErrorStatus } = setup();

          fireEvent.change(cardNumberInput, { target: { value } });

          const { isError, errorMessage } = getErrorStatus();

          expect(cardNumberInput.value).toBe(value);
          expect(isError).toBe(false);
          expect(errorMessage).toBeNull();
        }
      );
    });

    describe("숫자가 아닌 카드번호를 입력한 경우", () => {
      test.each(["-000".repeat(4), "0.11".repeat(4), "four".repeat(4), "123A".repeat(4)])(
        "(%s) 입력값을 상태에 반영하지 않으며 유효하지 않은 값으로 판단한다.",
        (value) => {
          const { cardNumberInput, getErrorStatus } = setup();

          fireEvent.change(cardNumberInput, { target: { value } });

          const { isError, errorMessage } = getErrorStatus();

          expect(cardNumberInput.value).toBe("");
          expect(isError).toBe(true);
          expect(errorMessage).not.toBeNull();
        }
      );
    });
  });
});
