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
      <div>
        <h1>카드 번호 입력</h1>
        <input
          onChange={cardNumber.handleCardNumberChange}
          onBlur={cardNumber.handleCardNumberBlur}
          value={cardNumber.inputValue}
        />
        <div>brandType: {cardNumber.brandType}</div>
        <div>errorMessage: {cardNumber.validationResult.errorMessage}</div>
      </div>
      <div>
        <h1>카드 소유자 입력</h1>
        <input
          onChange={cardHolder.handleCardHolderChange}
          onBlur={cardHolder.handleCardHolderBlur}
          value={cardHolder.inputValue}
        />
        <div>errorStatus: {cardHolder.validationResult.isValid}</div>
        <div>errorMessage: {cardHolder.validationResult.errorMessage}</div>
      </div>
      <div>
        <h1>카드 CVC 입력</h1>
        <input
          onChange={cardCVC.handleCvcChange}
          onBlur={cardCVC.handleCvcBlur}
          value={cardCVC.inputValue}
        />
        <div>errorStatus: {cardCVC.validationResult.isValid}</div>
        <div>errorMessage: {cardCVC.validationResult.errorMessage}</div>
      </div>
      <div>
        <h1>카드 소유자 패스워드</h1>
        <input
          onChange={cardPassword.handlePasswordChange}
          onBlur={cardPassword.handlePasswordBlur}
          value={cardPassword.inputValue}
        />
        <div>errorStatus: {cardPassword.validationResult.isValid}</div>
        <div>errorMessage: {cardPassword.validationResult.errorMessage}</div>
      </div>
      <div>
        <h1>카드 유효기간</h1>
        <input
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
