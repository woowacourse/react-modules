import { fireEvent, render, screen } from "@testing-library/react";
import { useExpiryDate } from ".";

function UseExpiryDateTestComponent() {
  const expiryDateControl = useExpiryDate();

  return ["month", "year"].map((key: string) => {
    const control = expiryDateControl[key as "month" | "year"];
    const { value, errorStatus, onChange, onBlur } = control;

    return (
      <div key={key}>
        <input data-testid={`${key}-input`} value={value} onChange={onChange} onBlur={onBlur} />
        {errorStatus.isError && <div data-testid={`${key}-is-error`}>is error: true</div>}
        {errorStatus.errorMessage && (
          <div data-testid={`${key}-error-message`}>{errorStatus.errorMessage}</div>
        )}
      </div>
    );
  });
}

const setup = () => {
  render(<UseExpiryDateTestComponent />);
  const monthInput = screen.getByTestId<HTMLInputElement>("month-input");
  const getMonthErrorStatus = () => ({
    isError: Boolean(screen.queryByTestId("month-is-error")),
    errorMessage: screen.queryByTestId("month-error-message"),
  });

  const yearInput = screen.getByTestId<HTMLInputElement>("year-input");
  const getYearErrorStatus = () => ({
    isError: Boolean(screen.queryByTestId("year-is-error")),
    errorMessage: screen.queryByTestId("year-error-message"),
  });

  return {
    month: { input: monthInput, getErrorStatus: getMonthErrorStatus },
    year: { input: yearInput, getErrorStatus: getYearErrorStatus },
  };
};

describe("useExpiryMonth에 대한 테스트 케이스", () => {
  describe("onBlur 테스트", () => {
    describe("유효성 검증에 성공하는 경우", () => {
      test.each(["01", "12"])(
        "년(年)의 범위 내의 값(%s)을 입력한 경우 유효한 값으로 판단한다.",
        (value) => {
          const { input, getErrorStatus } = setup().month;

          fireEvent.change(input, { target: { value } });
          fireEvent.blur(input);

          const { isError, errorMessage } = getErrorStatus();

          expect(input.value).toBe(value);
          expect(isError).toBe(false);
          expect(errorMessage).toBeNull();
        }
      );
    });

    describe("유효성 검증에 실패하는 경우", () => {
      test.each(["00", "13"])(
        "월(月)의 최소, 최대 범위를 벗어난 값(%s)을 입력한 경우 유효하지 않은 값으로 판단한다.",
        (value) => {
          const { input, getErrorStatus } = setup().month;

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
      test.each(["01", "12"])(
        "월(月)의 범위 내의 값(%s)을 입력한 경우 입력을 받으며 유효한 값으로 판단한다.",
        (value) => {
          const { input, getErrorStatus } = setup().month;

          fireEvent.change(input, { target: { value } });

          const { isError, errorMessage } = getErrorStatus();

          expect(input.value).toBe(value);
          expect(isError).toBe(false);
          expect(errorMessage).toBeNull();
        }
      );
    });

    describe("유효성 검증에 실패하는 경우", () => {
      test.each(["a1", ".1"])(
        "숫자가 아닌 값이 포함된 값(%s)을 입력한 경우 입력을 받지 않으며 유효하지 않은 값으로 판단한다.",
        (value) => {
          const { input, getErrorStatus } = setup().month;

          fireEvent.change(input, { target: { value } });

          const { isError, errorMessage } = getErrorStatus();

          expect(isError).toBe(true);
          expect(errorMessage).not.toBeNull();
        }
      );
    });
  });
});

describe("useExpiryYear에 대한 테스트 케이스", () => {
  describe("onBlur 테스트", () => {
    describe("유효성 검증에 성공하는 경우", () => {
      test.each(["24", "40"])(
        "년(年)의 범위 내의 값(%s)을 입력한 경우 유효한 값으로 판단한다.",
        (value) => {
          const { input, getErrorStatus } = setup().year;

          fireEvent.change(input, { target: { value } });
          fireEvent.blur(input);

          const { isError, errorMessage } = getErrorStatus();

          expect(input.value).toBe(value);
          expect(isError).toBe(false);
          expect(errorMessage).toBeNull();
        }
      );
    });

    describe("유효성 검증에 실패하는 경우", () => {
      test.each(["23", "41"])(
        "년(年)의 최소, 최대 범위를 벗어난 값(%s)을 입력한 경우 유효하지 않은 값으로 판단한다.",
        (value) => {
          const { input, getErrorStatus } = setup().year;

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
      test.each(["24", "40"])(
        "년(年)의 범위 내의 값(%s)을 입력한 경우 입력을 받으며 유효한 값으로 판단한다.",
        (value) => {
          const { input, getErrorStatus } = setup().year;

          fireEvent.change(input, { target: { value } });

          const { isError, errorMessage } = getErrorStatus();

          expect(input.value).toBe(value);
          expect(isError).toBe(false);
          expect(errorMessage).toBeNull();
        }
      );
    });

    describe("유효성 검증에 실패하는 경우", () => {
      test.each(["a3", ".1"])(
        "숫자가 아닌 값이 포함된 값(%s)을 입력한 경우 입력을 받지 않으며 유효하지 않은 값으로 판단한다.",
        (value) => {
          const { input, getErrorStatus } = setup().year;

          fireEvent.change(input, { target: { value } });

          const { isError, errorMessage } = getErrorStatus();

          expect(isError).toBe(true);
          expect(errorMessage).not.toBeNull();
        }
      );
    });
  });
});
