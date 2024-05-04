import React from "react";
import "./App.css";
import { useState } from "react";
import { useCardNumbersValidation, useExpiryDateValidation, useCardHolderValidation, useCVCValidation, usePasswordValidation } from "chlwlstlf-card-validation-hooks";

function App() {
  const [cardNumbers, setCardNumbers] = useState(["", "", "", ""]);
  const { validationResult: cardNumbersValidationResult } = useCardNumbersValidation({ cardNumbers: cardNumbers });
  const [expiryDate, setExpiryDate] = useState({ month: "", year: "" });
  const { validationResult: expiryDateValidationResult } = useExpiryDateValidation({ month: expiryDate.month, year: expiryDate.year });
  const [cardHolder, setCardHolder] = useState("");
  const { validationResult: cardHolderValidationResult } = useCardHolderValidation({ cardHolder: cardHolder });
  const [cvc, setCVC] = useState("");
  const { validationResult: cvcValidationResult } = useCVCValidation({ cvc: cvc });
  const [password, setPassword] = useState("");
  const { validationResult: passwordValidationResult } = usePasswordValidation({ password: password });

  const handleCardNumbers = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    setCardNumbers(
      cardNumbers.map((cardNumber, i) => {
        return i === index ? e.target.value : cardNumber;
      })
    );
  };

  const handleExpiryChange = (e: React.ChangeEvent<HTMLInputElement>, field: "month" | "year") => {
    setExpiryDate((prevState) => ({
      ...prevState,
      [field]: e.target.value,
    }));
  };

  const handleCardHolderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCardHolder(e.target.value);
  };

  const handleCVCChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCVC(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <>
      <h1>Hooks Modules</h1>
      <h2>카드 번호</h2>
      {cardNumbers.map((_, index) => {
        return (
          <input
            key={index}
            value={cardNumbers[index]}
            type="text"
            maxLength={4}
            onChange={(e) => handleCardNumbers(e, index)}
          />
        );
      })}
      <div>{cardNumbersValidationResult.errorMessage}</div>

      <h2>카드 유효 기간</h2>
      <input
        value={expiryDate.month}
        type="text"
        maxLength={2}
        onChange={(e) => handleExpiryChange(e, "month")}
      />
      <input
        value={expiryDate.year}
        type="text"
        maxLength={2}
        onChange={(e) => handleExpiryChange(e, "year")}
      />
      <div>{expiryDateValidationResult.errorMessage}</div>

      <h2>사용자 이름</h2>
      <input
        value={cardHolder.toUpperCase()}
        type="text"
        maxLength={22}
        onChange={handleCardHolderChange}
      />
      <div>{cardHolderValidationResult.errorMessage}</div>

      <h2>CVC</h2>
      <input
        value={cvc}
        type="text"
        maxLength={3}
        onChange={handleCVCChange}
      />
      <div>{cvcValidationResult.errorMessage}</div>

      <h2>비밀번호</h2>
      <input
        value={password}
        type="text"
        maxLength={2}
        onChange={handlePasswordChange}
      />
      <div>{passwordValidationResult.errorMessage}</div>
    </>
  );
}

export default App;
