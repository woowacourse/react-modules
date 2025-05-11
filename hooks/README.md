# React Hooks Module

이 프로젝트는 신용카드 입력 폼을 위한 커스텀 React Hooks 모음입니다.

## 설치 방법

```bash
npm install npm i hooks-kangoll-test
```

## 사용 가능한 Hooks

### 1. useCardNumber

- 카드 번호를 그룹 단위(string[])로 관리
- 카드사별 그룹 구조(VISA, AMEX 등)에 맞춰 입력 길이 자동 제한
- 숫자 외 문자 자동 제거
- 카드 네트워크 자동 판별
- 각 그룹별 유효성 검사 수행
- 에러 메시지 및 에러 여부 반환
- 하이픈 자동 추가는 UI에서 처리 (훅 내부엔 없음)

### 2. useExpiryDateNumber

- 카드 유효기간 입력을 관리하는 훅
- MM/YY 형식으로 입력 제한
- 월(1-12)과 연도 유효성 검사

### 3. useCVCNumber

- CVC 번호 입력을 관리하는 훅
- 3자리 숫자 입력 제한

### 4. usePasswordNumber

- 카드 비밀번호 입력을 관리하는 훅
- 2자리 숫자 입력 제한

### 5. useCardValidation

- 전체 카드 정보의 유효성을 검사하는 훅
- 모든 필드의 입력 상태와 유효성 검사 결과 제공

## 사용 예시

```tsx
import React from "react";
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
              className={card.isError[index] ? "input-error" : ""}
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
```

## 기술 스택

- React
- TypeScript
- Vite
