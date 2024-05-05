import React from "react";
import "./App.css";
import { useState } from "react";
import useCardNumbersValidation from "./hooks/lib/useCardNumbersValidation";
import useExpiryDateValidation from "./hooks/lib/useExpiryDateValidation";
import useCardHolderValidation from "./hooks/lib/useCardHolderValidation";
import useCVCValidation from "./hooks/lib/useCVCValidation";
import usePasswordValidation from "./hooks/lib/usePasswordValidation";

function App() {
  const [cardNumbers, setCardNumbers] = useState(["", "", "", ""]);
  const { validationResult: cardNumbersValidationResult } =
    useCardNumbersValidation({ cardNumbers: cardNumbers });
  const [expiryDate, setExpiryDate] = useState({ month: "", year: "" });
  const { validationResult: expiryDateValidationResult } =
    useExpiryDateValidation({ month: expiryDate.month, year: expiryDate.year });
  const [cardHolder, setCardHolder] = useState("");
  const { validationResult: cardHolderValidationResult } =
    useCardHolderValidation({ cardHolder: cardHolder });
  const [cvc, setCVC] = useState("");
  const { validationResult: cvcValidationResult } = useCVCValidation({
    cvc: cvc,
  });
  const [password, setPassword] = useState("");
  const { validationResult: passwordValidationResult } = usePasswordValidation({
    password: password,
  });

  const handleCardNumbers = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const inputValue = e.target.value;
    const newCardNumbers = cardNumbers.map((cardNumber, i) => {
      return i === index ? inputValue : cardNumber;
    });

    setCardNumbers(newCardNumbers);
  };

  const handleExpiryChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: "month" | "year"
  ) => {
    const inputValue = e.target.value;
    setExpiryDate((prevState) => ({
      ...prevState,
      [field]: inputValue,
    }));
  };

  const handleCardHolderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setCardHolder(inputValue);
  };

  const handleCVCChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setCVC(inputValue);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setPassword(inputValue);
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
      <input value={cvc} type="text" maxLength={3} onChange={handleCVCChange} />
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
