import { fireEvent, render, screen } from "@testing-library/react";

import { useCardIssuer } from ".";
import { CARD_ISSUERS } from "./validator";

function UseCardIssuerTestComponent() {
  const { value, errorStatus, onChange } = useCardIssuer();

  return (
    <div>
      <select data-testid="card-issuer-select" value={value} onChange={onChange}>
        <option value="" />
        {CARD_ISSUERS.map((issuer) => (
          <option key={issuer} value={issuer} />
        ))}
      </select>
      {errorStatus.isError && <div data-testid="is-error">is error: true</div>}
      {errorStatus.errorMessage && (
        <div data-testid="error-message">{errorStatus.errorMessage}</div>
      )}
    </div>
  );
}

const setup = () => {
  render(<UseCardIssuerTestComponent />);
  const select = screen.getByTestId<HTMLSelectElement>("card-issuer-select");

  const getErrorStatus = () => {
    const isError = screen.queryByTestId("is-error");
    const errorMessage = screen.queryByTestId("error-message");

    return {
      isError: Boolean(isError),
      errorMessage: errorMessage ? errorMessage.textContent : null,
    };
  };

  return { select, getErrorStatus };
};

describe("useCardIssuer onChange에 대한 테스트 케이스", () => {
  describe("유효성 검증에 성공하는 경우", () => {
    test.each(CARD_ISSUERS)("카드사 옵션(%s)을 입력한 경우 유효한 값으로 판단한다.", (value) => {
      const { select, getErrorStatus } = setup();

      fireEvent.change(select, { target: { value: value } });

      const { isError, errorMessage } = getErrorStatus();

      expect(select.value).toBe(value);
      expect(isError).toBe(false);
      expect(errorMessage).toBeNull();
    });
  });

  describe("유효성 검증에 실패하는 경우", () => {
    test.each(["소파카드", "라이언카드", "BCCard"])(
      "카드사 옵션이 아닌 값(%s)을 입력한 경우 입력을 받지 않으며 유효하지 않은 값으로 판단한다.",
      (value) => {
        const { select, getErrorStatus } = setup();

        fireEvent.change(select, { target: { value: value } });

        const { isError, errorMessage } = getErrorStatus();

        expect(select.value).toBe("");
        expect(isError).toBe(true);
        expect(errorMessage).not.toBeNull();
      }
    );
  });
});
