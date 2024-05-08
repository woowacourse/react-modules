import { fireEvent, render, screen } from "@testing-library/react";
import { useCardNumber } from ".";
import { CARD_BRANDS } from "./utils/findCardBrand";

function UseCardNumberTestComponent() {
  const { value, errorStatus, cardBrand, onChange, onBlur } = useCardNumber();

  return (
    <div>
      <input
        data-testid={"card-number-input"}
        value={value.raw}
        onChange={onChange}
        onBlur={onBlur}
      />
      <input readOnly data-testid={"card-brand-input"} value={cardBrand} />
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
  const cardBrandInput = screen.getByTestId<HTMLInputElement>("card-brand-input");

  const getCardBrand = () => cardBrandInput.value;

  const getErrorStatus = () => {
    const isError = screen.queryByTestId("is-error");
    const errorMessage = screen.queryByTestId("error-message");

    return {
      isError: Boolean(isError),
      errorMessage: errorMessage ? errorMessage.textContent : null,
    };
  };

  return { input, getCardBrand, getErrorStatus };
};
describe("카드 브랜드 관련 처리에 대한 테스트 케이스", () => {
  describe("카드 브랜드 식별 기능이 정상적으로 동작한다.", () => {
    test.each([
      {
        cardNumber: "36" + "1".repeat(12),
        expectedCardBrand: CARD_BRANDS.Diners,
      },
      {
        cardNumber: "34" + "1".repeat(13),
        expectedCardBrand: CARD_BRANDS.AMEX,
      },
      {
        cardNumber: "622126" + "1".repeat(10),
        expectedCardBrand: CARD_BRANDS.UnionPay,
      },
      {
        cardNumber: "51" + "1".repeat(14),
        expectedCardBrand: CARD_BRANDS.MasterCard,
      },
      {
        cardNumber: "4" + "1".repeat(15),
        expectedCardBrand: CARD_BRANDS.Visa,
      },
      {
        cardNumber: "9999".repeat(4),
        expectedCardBrand: "unknown",
      },
    ])(
      "카드번호가 $cardNumber일 경우, $expectedCardBrand(으)로 식별한다.",
      ({ cardNumber, expectedCardBrand }) => {
        const { input, getCardBrand } = setup();

        fireEvent.change(input, { target: { value: cardNumber } });

        expect(getCardBrand()).toBe(expectedCardBrand);
      }
    );
  });
});
