import "@testing-library/jest-dom";
import { render, fireEvent, screen } from "@testing-library/react";
import ERROR_MESSAGES from "../constants/error";
import App from "../../App";
import { CARD_TYPE } from "../constants/cardType";
import { CARD_TYPE_NAME } from "../type";

describe("useCardNumberInput", () => {
  describe("카드 번호 유효성 검증 테스트", () => {
    it("숫자가 아닌 값을 입력할 경우 '숫자를 입력해주세요'라는 에러 메시지를 노출한다.", () => {
      render(<App />);
      const input = screen.getByLabelText("카드 번호 입력");

      fireEvent.change(input, { target: { value: "aaaa" } });

      const errorMessage = screen.getByTestId("error");

      expect(errorMessage).toHaveTextContent(
        `에러메세지: ${ERROR_MESSAGES.INVALID_ONLY_NUMBER}`
      );
    });

    it("숫자가 아닌 값을 입력할 경우 값이 입력되지 않아야 한다.", () => {
      render(<App />);
      const input = screen.getByLabelText("카드 번호 입력");

      fireEvent.change(input, { target: { value: "aaaa" } });

      const value = screen.getByTestId("value");

      expect(value).toHaveTextContent("값:");
    });

    it("숫자가 아닌 값을 입력할 경우 카드 타입은 EMPTY 여야 한다.", () => {
      render(<App />);
      const input = screen.getByLabelText("카드 번호 입력");

      fireEvent.change(input, { target: { value: "aaaa" } });

      const cardType = screen.getByTestId("type");

      expect(cardType).toHaveTextContent("카드 타입: EMPTY");
    });
  });
  describe("카드 타입 결정", () => {
    describe.each([
      ["Diners", [{ cardNumbers: "36", expectedCardBrand: "DINERS" }]],
      [
        "Amex",
        [
          { cardNumbers: "34", expectedCardBrand: "AMEX" },
          { cardNumbers: "37", expectedCardBrand: "AMEX" },
        ],
      ],
      [
        "UnionPay",
        [
          { cardNumbers: "622126", expectedCardBrand: "UNION_PAY" },
          { cardNumbers: "622925", expectedCardBrand: "UNION_PAY" },
          { cardNumbers: "624", expectedCardBrand: "UNION_PAY" },
          { cardNumbers: "626", expectedCardBrand: "UNION_PAY" },
          { cardNumbers: "6282", expectedCardBrand: "UNION_PAY" },
          { cardNumbers: "6288", expectedCardBrand: "UNION_PAY" },
        ],
      ],
      ["Visa", [{ cardNumbers: "4", expectedCardBrand: "VISA" }]],
      [
        "Master",
        [
          { cardNumbers: "51", expectedCardBrand: "MASTER" },
          { cardNumbers: "55", expectedCardBrand: "MASTER" },
        ],
      ],
      ["EMPTY", [{ cardNumbers: "00000", expectedCardBrand: "EMPTY" }]],
    ])("%s 카드", (_, testCases) => {
      it.each(testCases)(
        '"$cardNumbers"로 시작하는 값 입력 시, 카드 타입은 "$expectedCardBrand"이어야 한다',
        ({ cardNumbers, expectedCardBrand }) => {
          render(<App />);
          const input = screen.getByLabelText("카드 번호 입력");

          fireEvent.change(input, { target: { value: cardNumbers } });

          const type = screen.getByTestId("type");

          expect(type).toHaveTextContent(`카드 타입: ${expectedCardBrand}`);
        }
      );
    });
  });

  describe("카드 타입 별 입력값 길이 체크", () => {
    describe.each([
      [
        "Diners",
        [{ cardNumbers: "36", expectedCardBrand: "DINERS", length: 14 }],
      ],
      [
        "Amex",
        [
          { cardNumbers: "34", expectedCardBrand: "AMEX", length: 15 },
          { cardNumbers: "37", expectedCardBrand: "AMEX", length: 15 },
        ],
      ],
      [
        "UnionPay",
        [
          { cardNumbers: "622126", expectedCardBrand: "UNION_PAY", length: 16 },
          { cardNumbers: "622925", expectedCardBrand: "UNION_PAY", length: 16 },
          { cardNumbers: "624", expectedCardBrand: "UNION_PAY", length: 16 },
          { cardNumbers: "626", expectedCardBrand: "UNION_PAY", length: 16 },
          { cardNumbers: "6282", expectedCardBrand: "UNION_PAY", length: 16 },
          { cardNumbers: "6288", expectedCardBrand: "UNION_PAY", length: 16 },
        ],
      ],
      ["Visa", [{ cardNumbers: "4", expectedCardBrand: "VISA", length: 16 }]],
      [
        "Master",
        [
          { cardNumbers: "51", expectedCardBrand: "MASTER", length: 16 },
          { cardNumbers: "55", expectedCardBrand: "MASTER", length: 16 },
        ],
      ],
      [
        "EMPTY",
        [{ cardNumbers: "00000", expectedCardBrand: "EMPTY", length: 16 }],
      ],
    ])("%s 카드", (_, testCases) => {
      it.each(testCases)(
        `"$cardNumbers"로 시작하는 값 입력 시, $length자를 입력해야 한다.`,
        ({ cardNumbers, expectedCardBrand }) => {
          const type = expectedCardBrand as CARD_TYPE_NAME;
          render(<App />);
          const input = screen.getByLabelText("카드 번호 입력");

          fireEvent.change(input, { target: { value: cardNumbers } });

          const errorMessage = screen.getByTestId("error");

          expect(errorMessage).toHaveTextContent(
            `에러메세지: ${CARD_TYPE[type].length}${ERROR_MESSAGES.INVALID_MAX_LENGTH}`
          );
        }
      );
    });

    describe("카드 포맷팅", () => {
      describe.each([
        [
          "Diners",
          [
            {
              cardNumbers: "36123456789012",
              expectedCardBrand: "DINERS",
              expectedCardValue: "3612 345678 9012",
            },
          ],
        ],
        [
          "Amex",
          [
            {
              cardNumbers: "341234567890123",
              expectedCardBrand: "AMEX",
              expectedCardValue: "3412 345678 90123",
            },
          ],
        ],
        [
          "UnionPay",
          [
            {
              cardNumbers: "6221261234567890",
              expectedCardBrand: "UNION_PAY",
              expectedCardValue: "6221 2612 3456 7890",
            },
          ],
        ],
        [
          "Visa",
          [
            {
              cardNumbers: "4444444444444444",
              expectedCardBrand: "VISA",
              expectedCardValue: "4444 4444 4444 4444",
            },
          ],
        ],
        [
          "Master",
          [
            {
              cardNumbers: "5111111111111111",
              expectedCardBrand: "MASTER",
              expectedCardValue: "5111 1111 1111 1111",
            },
          ],
        ],
        [
          "EMPTY",
          [
            {
              cardNumbers: "0000000000000000",
              expectedCardBrand: "EMPTY",
              expectedCardValue: "0000 0000 0000 0000",
            },
          ],
        ],
      ])("%s 카드", (_, testCases) => {
        it.each(testCases)(
          '"$expectedCardBrand"카드 타입 입력 시 올바르게 포맷팅 되어야 한다.',
          ({ cardNumbers, expectedCardValue }) => {
            render(<App />);
            const input = screen.getByLabelText("카드 번호 입력");

            fireEvent.change(input, { target: { value: cardNumbers } });

            const type = screen.getByTestId("value");

            expect(type).toHaveTextContent(`값: ${expectedCardValue}`);
          }
        );
      });
    });
  });
});
