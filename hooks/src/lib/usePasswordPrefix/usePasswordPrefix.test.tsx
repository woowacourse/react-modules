import { fireEvent, render, screen } from "@testing-library/react";
import { usePasswordPrefix } from ".";

function UsePasswordPrefixTestComponent() {
  const { value, errorStatus, onChange, onBlur } = usePasswordPrefix();

  return (
    <div>
      <input
        data-testid="password-prefix-input"
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
  render(<UsePasswordPrefixTestComponent />);
  const input = screen.getByTestId<HTMLInputElement>("password-prefix-input");

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
describe("usePasswordPrefix에 대한 테스트 케이스", () => {
  describe("onBlur 테스트", () => {
    describe("유효성 검증에 성공하는 경우", () => {
      test.each(["00", "12", "45", "99"])(
        "유효한 비밀번호 앞자리(%s)을 입력한 경우 유효한 값으로 판단한다.",
        (value) => {
          const { input, getErrorStatus } = setup();

          fireEvent.change(input, { target: { value: value } });
          fireEvent.blur(input);

          const { isError, errorMessage } = getErrorStatus();

          expect(isError).toBe(false);
          expect(errorMessage).toBeNull();
        }
      );
    });

    describe("유효성 검증에 실패하는 경우", () => {
      test.each(["ab", "AB", "1a"])(
        "숫자가 아닌 값(%s)을 입력한 경우 유효하지 않은 값으로 판단한다.",
        (value) => {
          const { input, getErrorStatus } = setup();

          fireEvent.change(input, { target: { value: value } });
          fireEvent.blur(input);

          const { isError, errorMessage } = getErrorStatus();

          expect(isError).toBe(true);
          expect(errorMessage).not.toBeNull();
        }
      );

      test.each(["1", "123"])("2자리가 아닌 경우(%s) 유효하지 않은 값으로 판단한다.", (value) => {
        const { input, getErrorStatus } = setup();

        fireEvent.change(input, { target: { value: value } });
        fireEvent.blur(input);

        const { isError, errorMessage } = getErrorStatus();

        expect(isError).toBe(true);
        expect(errorMessage).not.toBeNull();
      });

      test.each(["-10", "-1", "-99"])("음수인 경우(%s) 유효하지 않은 값으로 판단한다.", (value) => {
        const { input, getErrorStatus } = setup();

        fireEvent.change(input, { target: { value: value } });
        fireEvent.blur(input);

        const { isError, errorMessage } = getErrorStatus();

        expect(isError).toBe(true);
        expect(errorMessage).not.toBeNull();
      });
    });
  });

  describe("onChange 테스트", () => {
    describe("유효성 검증에 성공하는 경우", () => {
      test.each(["00", "12", "45", "99"])(
        "유효한 값(%s)을 입력한 경우 입력을 받으며 유효한 값으로 판단한다.",
        (value) => {
          const { input, getErrorStatus } = setup();

          fireEvent.change(input, { target: { value: value } });

          const { isError, errorMessage } = getErrorStatus();

          expect(isError).toBe(false);
          expect(errorMessage).toBeNull();
        }
      );
    });

    describe("유효성 검증에 실패하는 경우", () => {
      test.each(["ab", "AB", "1a"])(
        "숫자가 아닌 값이 포함된 값(%s)을 입력한 경우 입력을 받지 않으며 유효하지 않은 값으로 판단한다.",
        (value) => {
          const { input, getErrorStatus } = setup();

          fireEvent.change(input, { target: { value: value } });

          const { isError, errorMessage } = getErrorStatus();

          expect(input.value).toBe("");
          expect(isError).toBe(true);
          expect(errorMessage).not.toBeNull();
        }
      );
    });
  });
});
