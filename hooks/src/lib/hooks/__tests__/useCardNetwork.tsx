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

  it("카드번호가 변경되면 카드사가 올바로 표시되어야 한다", async () => {
    render(<TestComponent />);
    const input = screen.getByTestId("card-input");
    const networkDisplay = screen.getByTestId("card-network");

    const cases = [
      { number: "4111111111111111", expected: "VISA" },
      { number: "5105105105105100", expected: "MASTERCARD" },
      { number: "341243124124154", expected: "AMEX" },
      { number: "371243124124154", expected: "AMEX" },
      { number: "36123456789012", expected: "DINERS" }, // Diners, 36 시작 14자리
      { number: "6221261111111111", expected: "UNIONPAY" }, // UnionPay 622126~622925
      { number: "6229251111111111", expected: "UNIONPAY" },
      { number: "6240123456789012", expected: "UNIONPAY" }, // UnionPay 624~626
      { number: "6260123456789012", expected: "UNIONPAY" },
      { number: "6282123456789012", expected: "UNIONPAY" }, // UnionPay 6282~6288
      { number: "6288123456789012", expected: "UNIONPAY" },
      { number: "1234567890123456", expected: "DEFAULT" }, // 그 외 기본
    ];

    for (const { number, expected } of cases) {
      await userEvent.clear(input);
      await userEvent.type(input, number);
      expect(networkDisplay).toHaveTextContent(expected);
    }
  });
  it("실패 케이스: 잘못된 프리픽스나 길이는 DEFAULT로 표시되어야 한다", async () => {
    render(<TestComponent />);
    const input = screen.getByTestId("card-input");
    const networkDisplay = screen.getByTestId("card-network");

    const invalidCases = [
      { number: "3612345678901", expected: "DEFAULT" }, // Diners인데 길이(13) 부족
      { number: "361234567890123", expected: "DEFAULT" }, // Diners인데 길이(15) 과다
      { number: "6221251111111111", expected: "DEFAULT" }, // UnionPay 시작 범위 바로 아래
      { number: "6229261111111111", expected: "DEFAULT" }, // UnionPay 시작 범위 바로 위
      { number: "6230123456789012", expected: "DEFAULT" }, // UnionPay 범위가 아닌 623x
      { number: "34123456789012", expected: "DEFAULT" }, // AMEX 프리픽스지만 길이(14) 부족
      { number: "3712345678901234", expected: "DEFAULT" }, // AMEX 프리픽스지만 길이(16) 과다
      { number: "99".repeat(8), expected: "DEFAULT" }, // 완전히 지원하지 않는 프리픽스
    ];

    invalidCases.forEach(({ number, expected }) => {
      userEvent.clear(input);
      userEvent.type(input, number);
      expect(networkDisplay).toHaveTextContent(expected);
    });
  });
});
