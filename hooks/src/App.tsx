import React from "react";
import "./App.css";
import useCardNumber from "./lib/useCardNumber/useCardNumber";
import useCardHolder from "./lib/useCardHolder/useCardHolder";
import useCVC from "./lib/useCVC/useCVC";
import usePassword from "./lib/usePassword/usePassword";
import useExpiryDate from "./lib/useExpiryDate/useExpiryDate";

function App() {
  const cardNumber = useCardNumber("");
  const cardHolder = useCardHolder("");
  const cardCVC = useCVC("");
  const cardPassword = usePassword("");
  const cardExpiryDate = useExpiryDate({ month: "", year: "" });

  return (
    <div>
      <h1>커스텀 훅 테스트</h1>
      <div>
        <label htmlFor="cardNumberInput">
          <h2>카드 번호 입력</h2>
        </label>
        <input
          id="cardNumberInput"
          onChange={cardNumber.handleCardNumberChange}
          onBlur={cardNumber.handleCardNumberBlur}
          value={cardNumber.inputValue}
        />
        <div>brandType: {cardNumber.brandType}</div>
        <div>errorMessage: {cardNumber.validationResult.errorMessage}</div>
      </div>
      <div>
        <label htmlFor="cardHolderInput">
          <h2>카드 소유자 입력</h2>
        </label>
        <input
          id="cardHolderInput"
          onChange={cardHolder.handleCardHolderChange}
          onBlur={cardHolder.handleCardHolderBlur}
          value={cardHolder.inputValue}
        />
        <div>errorStatus: {cardHolder.validationResult.isValid}</div>
        <div>errorMessage: {cardHolder.validationResult.errorMessage}</div>
      </div>
      <div>
        <label htmlFor="cardCvcInput">
          <h2>카드 CVC 입력</h2>
        </label>
        <input
          id="cardCvcInput"
          onChange={cardCVC.handleCvcChange}
          onBlur={cardCVC.handleCvcBlur}
          value={cardCVC.inputValue}
        />
        <div>errorStatus: {cardCVC.validationResult.isValid}</div>
        <div>errorMessage: {cardCVC.validationResult.errorMessage}</div>
      </div>
      <div>
        <label htmlFor="cardPasswordInput">
          <h2>카드 소유자 패스워드</h2>
        </label>
        <input
          id="cardPasswordInput"
          onChange={cardPassword.handlePasswordChange}
          onBlur={cardPassword.handlePasswordBlur}
          value={cardPassword.inputValue}
        />
        <div>errorStatus: {cardPassword.validationResult.isValid}</div>
        <div>errorMessage: {cardPassword.validationResult.errorMessage}</div>
      </div>
      <div>
        <label htmlFor="cardExpiryDateInput">
          <h2>카드 유효기간</h2>
        </label>
        <input
          id="cardExpiryDateInput"
          onChange={cardExpiryDate.handleExpiryChange}
          onBlur={cardExpiryDate.handleExpiryDateBlur}
          name="month"
          placeholder="월"
          value={cardExpiryDate.inputValue.month}
        />
        <input
          onChange={cardExpiryDate.handleExpiryChange}
          onBlur={cardExpiryDate.handleExpiryDateBlur}
          name="year"
          placeholder="연도"
          value={cardExpiryDate.inputValue.year}
        />
        <div>errorStatus: {cardExpiryDate.validationResult.isValid}</div>
        <div>errorMessage: {cardExpiryDate.validationResult.errorMessage}</div>
      </div>
    </div>
  );
}

export default App;
