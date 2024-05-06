import { fireEvent, render, screen } from "@testing-library/react";
import { useCardNumber } from ".";

function UseCardNumberTestComponent() {
  const cardNumberControls = useCardNumber();

  return cardNumberControls.map((control, index) => {
    const { value, errorStatus, onChange, onBlur } = control;

    return (
      <div key={index}>
        <input
          data-testid={`card-number-input-${index}`}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
        />
        {errorStatus.isError && <div data-testid={`is-error-${index}`}>is error: true</div>}
        {errorStatus.errorMessage && (
          <div data-testid={`error-message-${index}`}>{errorStatus.errorMessage}</div>
        )}
      </div>
    );
  });
}

const setup = () => {
  render(<UseCardNumberTestComponent />);
  const getInput = (index: number) =>
    screen.getByTestId<HTMLInputElement>(`card-number-input-${index}`);

  const getErrorStatus = (index: number) => {
    const isError = screen.queryByTestId(`is-error-${index}`);
    const errorMessage = screen.queryByTestId(`error-message-${index}`);

    return {
      isError: Boolean(isError),
      errorMessage: errorMessage ? errorMessage.textContent : null,
    };
  };

  return { getInput, getErrorStatus };
};
describe("useCardNumber에 대한 테스트 케이스", () => {
  const TARGET_INDEX = 0;

  describe("onBlur 테스트", () => {
    describe("유효성 검증에 성공하는 경우", () => {
      test.each(["0000", "1234", "5678", "9999"])(
        "유효한 카드번호(%s)을 입력한 경우 유효한 값으로 판단한다.",
        (value) => {
          const { getInput, getErrorStatus } = setup();

          const input = getInput(TARGET_INDEX);
          fireEvent.change(input, { target: { value } });
          fireEvent.blur(input);

          const { isError, errorMessage } = getErrorStatus(TARGET_INDEX);

          expect(isError).toBe(false);
          expect(errorMessage).toBeNull();
        }
      );
    });
    describe("유효성 검증에 실패하는 경우", () => {
      test.each(["-000", "0.11", "four", "123A"])(
        "숫자가 아닌 값(%s)을 입력한 경우 유효하지 않은 값으로 판단한다.",
        (value) => {
          const { getInput, getErrorStatus } = setup();

          const input = getInput(TARGET_INDEX);
          fireEvent.change(input, { target: { value } });
          fireEvent.blur(input);

          const { isError, errorMessage } = getErrorStatus(TARGET_INDEX);

          expect(isError).toBe(true);
          expect(errorMessage).not.toBeNull();
        }
      );

      test.each(["1", "12", "123", "12345"])(
        "4자리가 아닌 경우(%s) 유효하지 않은 값으로 판단한다.",
        (value) => {
          const { getInput, getErrorStatus } = setup();

          const input = getInput(TARGET_INDEX);
          fireEvent.change(input, { target: { value } });
          fireEvent.blur(input);

          const { isError, errorMessage } = getErrorStatus(TARGET_INDEX);

          expect(isError).toBe(true);
          expect(errorMessage).not.toBeNull();
        }
      );
    });
  });

  describe("onChange 테스트", () => {
    describe("유효성 검증에 성공하는 경우", () => {
      test.each(["0000", "1234", "5678", "9999"])(
        "유효한 카드번호(%s)을 입력한 경우 입력을 받으며 유효한 값으로 판단한다.",
        (value) => {
          const { getInput, getErrorStatus } = setup();

          const input = getInput(TARGET_INDEX);
          fireEvent.change(input, { target: { value } });

          const { isError, errorMessage } = getErrorStatus(TARGET_INDEX);

          expect(input.value).toBe(value);
          expect(isError).toBe(false);
          expect(errorMessage).toBeNull();
        }
      );
    });

    describe("유효성 검증에 실패하는 경우", () => {
      test.each(["-000", "0.11", "four", "123A"])(
        "숫자가 아닌 값이 포함된 카드번호(%s)을 입력한 경우 입력을 받지 않으며 유효하지 않은 값으로 판단한다.",
        (value) => {
          const { getInput, getErrorStatus } = setup();

          const input = getInput(TARGET_INDEX);
          fireEvent.change(input, { target: { value } });

          const { isError, errorMessage } = getErrorStatus(TARGET_INDEX);

          expect(input.value).toBe("");
          expect(isError).toBe(true);
          expect(errorMessage).not.toBeNull();
        }
      );
    });
  });
});
