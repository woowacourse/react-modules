import React from "react";
import "./App.css";
import { useCardValidation } from "./lib";

function App() {
  const { card, cvc, expiry, password } = useCardValidation();

  const handleCardNumberChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const value = e.target.value;
    const updated = [...card.cardNumber];
    updated[index] = value;
    card.setCardNumber(updated);
  };

  const handleCVCChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    cvc.setCVCNumber(e.target.value);
  };

  const handleExpiryChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const value = e.target.value;
    const updated = [...expiry.expiryDateNumber];
    updated[index] = value;

    expiry.setExpiryDateNumber(updated);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    password.setPasswordNumber(e.target.value);
  };

  console.log(expiry.errorMessage);

  return (
    <div className="App">
      <h1>카드 정보 입력</h1>
      <div className="card-form">
        <div className="input-group">
          <label htmlFor="cardNumber">카드 번호</label>
          {Array.from({ length: 4 }).map((_, index) => (
            <input
              id={`cardNumber-${index}`}
              type="text"
              value={card.cardNumber[index]}
              onChange={(e) => handleCardNumberChange(e, index)}
              placeholder="1234"
            />
          ))}

          {card.errorMessage && (
            <p className="error">
              {card.errorMessage.find((msg) => msg !== "")}
            </p>
          )}
          {card.cardNetwork !== "DEFAULT" && (
            <p className="card-network">{card.cardNetwork}</p>
          )}
        </div>

        <div className="input-group">
          <label htmlFor="cvc">CVC</label>
          <input
            id="cvc"
            type="text"
            value={cvc.CVCNumber}
            onChange={handleCVCChange}
            placeholder="123"
          />
          {cvc.errorMessage && <p className="error">{cvc.errorMessage}</p>}
        </div>

        <div className="input-group">
          <label htmlFor="expiry">유효기간</label>
          <input
            id="expiry-month"
            type="text"
            value={expiry.expiryDateNumber[0]}
            onChange={(e) => handleExpiryChange(e, 0)}
            placeholder="MM"
          />
          <input
            id="expiry-year"
            type="text"
            value={expiry.expiryDateNumber[1]}
            onChange={(e) => handleExpiryChange(e, 1)}
            placeholder="YY"
          />
          {expiry.errorMessage && (
            <p className="error">
              {expiry.errorMessage.find((msg) => msg !== "")}
            </p>
          )}
        </div>

        <div className="input-group">
          <label htmlFor="password">비밀번호</label>
          <input
            id="password"
            type="password"
            value={password.passwordNumber}
            onChange={handlePasswordChange}
            placeholder="비밀번호 앞 2자리"
          />
          {password.errorMessage && (
            <p className="error">{password.errorMessage}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
