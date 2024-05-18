import React from "react";
import "./App.css";

import { useCVC } from "../src/lib/hooks/useCVC";
import { useCardHolder } from "../src/lib/hooks/useCardHolder";
import { useCardIssuer } from "../src/lib/hooks/useCardIssuer";
import { useCardNumber } from "../src/lib/hooks/useCardNumber";
import { useExpiryDate } from "../src/lib/hooks/useExpiryDate";
import { usePassword } from "../src/lib/hooks/usePassword";

function App() {
  const { cardHolder, handleCardHolderChange, cardHolderValidationResult } = useCardHolder();
  const { password, handlePasswordChange, cardPasswordValidationResult } = usePassword();
  const { CVC, handleCVCChange, cardCVCValidationResult } = useCVC();
  const { expiryDate, handleExpiryDateChange, cardExpiryDateValidationResult } = useExpiryDate();
  const { cardNumbers, handleCardNumberChange, cardNumbersValidationResult, cardIdentifier } =
    useCardNumber();
  const { cardIssuer, handleCardIssuerChange, cardIssuerValidationResult } = useCardIssuer();

  const cardTypes = [
    { name: "현대카드" },
    { name: "국민카드" },
    { name: "신한카드" },
    { name: "우리카드" },
  ];

  return (
    <>
      <h1>Hooks Modules</h1>
      {/* 카드 소유자 이름 입력 */}
      <div>
        <label htmlFor="cardHolder">Card Holder:</label>
        <input
          type="text"
          id="cardHolder"
          value={cardHolder}
          onChange={(e) => handleCardHolderChange(e.target.value)}
        />
        {!cardHolderValidationResult.isValid && (
          <span style={{ color: "red" }}>{cardHolderValidationResult.errorMessage}</span>
        )}
      </div>

      {/* 카드 비밀번호 입력 */}
      <div>
        <label htmlFor="cardPassword">Card Password:</label>
        <input
          type="text"
          id="cardPassword"
          value={password}
          onChange={(e) => handlePasswordChange(e.target.value)}
        />
        {!cardPasswordValidationResult.isValid && (
          <span style={{ color: "red" }}>{cardPasswordValidationResult.errorMessage}</span>
        )}
      </div>

      {/* 카드 CVC 번호 입력 */}
      <div>
        <label htmlFor="cardCVC">Card CVC:</label>
        <input
          type="text"
          id="cardCVC"
          value={CVC}
          onChange={(e) => handleCVCChange(e.target.value)}
        />
        {!cardCVCValidationResult.isValid && (
          <span style={{ color: "red" }}>{cardCVCValidationResult.errorMessage}</span>
        )}
      </div>

      {/* 카드 유효기간 입력 */}
      <div>
        <label htmlFor="cardExpiryDate">Card Expiry Date:</label>
        <input
          type="text"
          id="cardExpiryDate"
          value={expiryDate.month}
          onChange={(e) => handleExpiryDateChange("month", e.target.value)}
        />
        <input
          type="text"
          id="cardExpiryDate"
          value={expiryDate.year}
          onChange={(e) => handleExpiryDateChange("year", e.target.value)}
        />
        {!cardExpiryDateValidationResult.isValid && (
          <span style={{ color: "red" }}>{cardExpiryDateValidationResult.errorMessage}</span>
        )}
      </div>

      {/* 카드 번호 입력 */}
      <div>
        <label htmlFor="cardNumber">Card Number:</label>

        <input
          type="text"
          id={`cardNumber`}
          value={cardNumbers}
          onChange={(e) => handleCardNumberChange(e.target.value)}
        />

        {!cardNumbersValidationResult.isValid && (
          <span style={{ color: "red" }}>{cardNumbersValidationResult.errorMessage}</span>
        )}
      </div>

      {/* 카드 회사 선택 */}
      <div>
        <label htmlFor="cardIssuer">Card Issuer:</label>
        <div>
          {cardTypes.map((type) => (
            <div
              key={type.name}
              onClick={() => handleCardIssuerChange(cardIssuer === type.name ? "" : type.name)}
              style={{
                display: "inline-block",
                padding: "8px",
                border: `2px solid ${cardIssuer === type.name ? "blue" : "gray"}`,
                borderRadius: "4px",
                margin: "5px",
                cursor: "pointer",
              }}
            >
              {type.name}
            </div>
          ))}
        </div>
        {!cardIssuerValidationResult.isValid && (
          <span style={{ color: "red" }}>{cardIssuerValidationResult.errorMessage}</span>
        )}
      </div>
    </>
  );
}

export default App;
