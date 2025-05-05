import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import useCardNetwork from "../useCardNetwork";
describe("useCardNetwork 훅 테스트", () => {
  const TestComponent = () => {
    const { cardNumber, cardNetwork, onChange } = useCardNetwork();

    return (
      <div>
        <input
          data-testid="card-input"
          value={cardNumber}
          onChange={onChange}
        />
        <div data-testid="card-network">{cardNetwork}</div>
      </div>
    );
  };

  describe("useCardNetwork", () => {
    it("카드번호가 변경되면 카드사가 올바로 변경되어야 한다.", async () => {
      render(<TestComponent />);
      const input = screen.getByTestId("card-input");
      const networkDisplay = screen.getByTestId("card-network");

      await userEvent.type(input, "4111111111111111");
      expect(networkDisplay).toHaveTextContent("VISA");

      await userEvent.clear(input);
      await userEvent.type(input, "5105105105105100");
      expect(networkDisplay).toHaveTextContent("MASTERCARD");
    });
  });
});
