import React from "react";
import {
  useCVC,
  useCardHolder,
  useCardIssuer,
  useCardNumber,
  useExpiryDate,
  usePassword,
} from "../src/lib/index";
import "./App.css";

function App() {
  const [cardHolder, handleCardHolderChange, cardHolderValidation] = useCardHolder();
  const [cardPassword, handleCardPasswordChange, cardPasswordValidation] = usePassword();
  const [cardCVC, handleCardCVCChange, cardCVCValidation] = useCVC();
  const [cardExpiryDate, handleCardExpiryDateChange, cardExpiryDateValidation] = useExpiryDate();
  const [cardNumbers, handleCardNumbersChange, cardNumbersValidation] = useCardNumber();
  const [cardIssuer, handleCardIssuerChange, cardIssuerValidation] = useCardIssuer();

  const cardNumberKeys = Object.keys(cardNumbers) as Array<keyof typeof cardNumbers>;

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
        {!cardHolderValidation.isValid && (
          <span style={{ color: "red" }}>{cardHolderValidation.errorMessage}</span>
        )}
      </div>

      {/* 카드 비밀번호 입력 */}
      <div>
        <label htmlFor="cardPassword">Card Password:</label>
        <input
          type="text"
          id="cardPassword"
          value={cardPassword}
          onChange={(e) => handleCardPasswordChange(e.target.value)}
        />
        {!cardPasswordValidation.isValid && (
          <span style={{ color: "red" }}>{cardPasswordValidation.errorMessage}</span>
        )}
      </div>

      {/* 카드 CVC 번호 입력 */}
      <div>
        <label htmlFor="cardCVC">Card CVC:</label>
        <input
          type="text"
          id="cardCVC"
          value={cardCVC}
          onChange={(e) => handleCardCVCChange(e.target.value)}
        />
        {!cardCVCValidation.isValid && (
          <span style={{ color: "red" }}>{cardCVCValidation.errorMessage}</span>
        )}
      </div>

      {/* 카드 유효기간 입력 */}
      <div>
        <label htmlFor="cardExpiryDate">Card Expiry Date:</label>
        <input
          type="text"
          id="cardExpiryDate"
          value={cardExpiryDate.month}
          onChange={(e) => handleCardExpiryDateChange("month", e.target.value)}
        />
        <input
          type="text"
          id="cardExpiryDate"
          value={cardExpiryDate.year}
          onChange={(e) => handleCardExpiryDateChange("year", e.target.value)}
        />
        {!cardExpiryDateValidation.isValid && (
          <span style={{ color: "red" }}>{cardExpiryDateValidation.errorMessage}</span>
        )}
      </div>

      {/* 카드 번호 입력 */}
      <div>
        <label htmlFor="cardNumber">Card Number:</label>
        {cardNumberKeys.map((key, index) => (
          <input
            key={index}
            type="text"
            id={`cardNumber-${index}`}
            value={cardNumbers[key]}
            onChange={(e) => handleCardNumbersChange(key, e.target.value)}
          />
        ))}
        {!cardNumbersValidation.isValid && (
          <span style={{ color: "red" }}>{cardNumbersValidation.errorMessage}</span>
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
        {!cardIssuerValidation.isValid && (
          <span style={{ color: "red" }}>{cardIssuerValidation.errorMessage}</span>
        )}
      </div>
    </>
  );
}

export default App;
