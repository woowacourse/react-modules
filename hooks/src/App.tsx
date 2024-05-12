import React from "react";
import {
  useCardHolder,
  useCardNumber,
  useCardPassword,
  useCardTypeCheck,
  useCVC,
  useExpiryDate,
} from "./lib/index";

function App() {
  const {
    validationResult: holderValidationResult,
    cardHolder,
    handleCardHolderChange,
  } = useCardHolder();

  const {
    validationResult: numberValidationResult,
    cardNumber,
    handleCardNumberChange,
  } = useCardNumber();

  const {
    validationResult: passwordValidationResult,
    cardPassword,
    handleCardPasswordChange,
  } = useCardPassword();

  const { cardType, handleCardTypeChange } = useCardTypeCheck();

  const {
    validationResult: cvcValidationResult,
    cvc,
    handleCVCChange,
  } = useCVC();

  const {
    validationResult: expiryValidationResult,
    expiryDate,
    handleExpiryDateChange,
  } = useExpiryDate();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100vw",
      }}
    >
      <div style={{ margin: "30px", fontSize: "20px" }}>
        Paran Card Validation Hooks
      </div>
      <div>
        <input
          type="text"
          value={cardHolder}
          onChange={(e) => handleCardHolderChange(e)}
          placeholder="Card Holder"
        />
        <div>
          {holderValidationResult.errorMessages.map((error, index) => (
            <div key={index}>{error}</div>
          ))}
        </div>
      </div>

      <div>
        <div>Card Type: {cardType}</div>
        <input
          type="text"
          value={cardNumber}
          onChange={(e) => {
            handleCardNumberChange(e);
            handleCardTypeChange(e.target.value);
          }}
          placeholder="Card Number"
        />
        <div>
          {numberValidationResult.errorMessages.map((error, index) => (
            <div key={index}>{error}</div>
          ))}
        </div>
      </div>

      <div>
        <input
          type="text"
          value={cardPassword}
          onChange={(e) => handleCardPasswordChange(e)}
          placeholder="Card Password"
        />
        <div>
          {passwordValidationResult.errorMessages.map((error, index) => (
            <div key={index}>{error}</div>
          ))}
        </div>
      </div>

      <div>
        <input
          type="text"
          value={cvc}
          onChange={(e) => handleCVCChange(e)}
          placeholder="CVC"
        />
        <div>
          {cvcValidationResult.errorMessages.map((error, index) => (
            <div key={index}>{error}</div>
          ))}
        </div>
      </div>

      <div>
        <input
          type="text"
          value={expiryDate}
          onChange={(e) => handleExpiryDateChange(e)}
          placeholder="Expiry Date"
        />
        <div>
          {expiryValidationResult.errorMessages.map((error, index) => (
            <div key={index}>{error}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
