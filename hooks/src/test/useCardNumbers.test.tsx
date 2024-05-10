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
      <div aria-labe="errorMessage">{isError && errorMessage}</div>
    </div>
  );
};

const setup = () => {
  const utils = render(<CardNumberInput />);
  const input = screen.getByLabelText<HTMLInputElement>("cardNumbers-input");
  return {
    input,
    ...utils,
  };
};

test("input에 1234 입력시 1234가 들어간다.", () => {
  const { input } = setup();

  fireEvent.change(input, { target: { value: "1234" } });

  expect(input.value).toBe("1234");
});
