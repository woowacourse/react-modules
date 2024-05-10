// import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { useCardNumbers } from "../lib";

const CardNumberInput = () => {
  const { cardNumbers, cardBrand, handleCardNumbers, isError, errorMessage } =
    useCardNumbers();

  return (
    <div>
      <input
        type="text"
        aria-label="cardNumbers-input"
        onChange={handleCardNumbers}
        value={cardNumbers}
      />
      <div aria-label="cardBrand">{cardBrand}</div>
      <div aria-label="errorMessage">{isError && errorMessage}</div>
    </div>
  );
};

const setup = () => {
  const utils = render(<CardNumberInput />);
  const input = screen.getByLabelText<HTMLInputElement>("cardNumbers-input");
  const cardBrand = screen.getByLabelText<HTMLInputElement>("cardBrand");
  const errorMessage = screen.getByLabelText<HTMLInputElement>("errorMessage");

  return {
    input,
    cardBrand,
    errorMessage,
    ...utils,
  };
};

test("input에 1234 입력시 1234가 들어간다.", () => {
  const { input } = setup();

  fireEvent.change(input, { target: { value: "1234" } });

  expect(input.value).toBe("1234");
});

test("input에 1234a 입력시 1234가 들어가고 errorMessage에 '숫자만 입력 가능합니다'가 입력된다.", () => {
  const { input, errorMessage } = setup();

  fireEvent.change(input, { target: { value: "1234a" } });

  expect(errorMessage.textContent).toBe("숫자만 입력 가능합니다");
});

test("input에 622126 입력시 카드 브랜드에 UnionPay가 들어간다.", () => {
  const { input, cardBrand } = setup();

  fireEvent.change(input, { target: { value: "622126" } });

  expect(cardBrand.textContent).toBe("UnionPay");
});

test("input에 1234123412341234 입력시 1234-1234-1234-1234가 들어간다.", () => {
  const { input } = setup();

  fireEvent.change(input, { target: { value: "1234123412341234" } });

  expect(input.value).toBe("1234-1234-1234-1234");
});
