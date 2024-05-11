import React from "react";
import "./App.css";
import { useCardNumbersInput, useExpiryDateInput, useCardHolderInput, useCVCInput, usePasswordInput } from "chlwlstlf-card-validation-hooks";

function App() {
  const { CardNumbersState, handleCardNumbersChange } = useCardNumbersInput();
  const { ExpiryDateState, handleExpiryDateChange } = useExpiryDateInput();
  const { CardHolderState, handleCardHolderChange } = useCardHolderInput();
  const { CVCState, handleCVCChange } = useCVCInput();
  const { PasswordState, handlePasswordChange } = usePasswordInput();

  return (
    <>
      <h1>Hooks Modules</h1>
      <h2>카드 번호</h2>
      <input
        value={CardNumbersState.value}
        maxLength={CardNumbersState.maxLength}
        type="text"
        onChange={handleCardNumbersChange}
      />
      <div>{CardNumbersState.errorMessage}</div>

      <h2>카드 유효 기간</h2>
      <input
        value={ExpiryDateState.value}
        type="text"
        maxLength={5}
        onChange={handleExpiryDateChange}
      />
      <div>{ExpiryDateState.errorMessage}</div>

      <h2>사용자 이름</h2>
      <input
        value={CardHolderState.value}
        type="text"
        maxLength={22}
        onChange={handleCardHolderChange}
      />
      <div>{CardHolderState.errorMessage}</div>

      <h2>CVC</h2>
      <input
        value={CVCState.value}
        type="text"
        maxLength={3}
        onChange={handleCVCChange}
      />
      <div>{CVCState.errorMessage}</div>

      <h2>비밀번호</h2>
      <input
        value={PasswordState.value}
        type="password"
        maxLength={2}
        onChange={handlePasswordChange}
      />
      <div>{PasswordState.errorMessage}</div>
    </>
  );
}

export default App;
