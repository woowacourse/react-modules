# React Hooks Module

이 프로젝트는 신용카드 입력 폼을 위한 커스텀 React Hooks 모음입니다.

## 설치 방법

```bash
npm i woowacourse-hooks-marvin
```

## 사용 가능한 Hooks

### 1. useCardNumber

- 카드 번호 입력을 관리하는 훅
- 16자리 숫자 입력 제한
- 4자리마다 하이픈(-) 자동 추가
- `onCardNumberChange` 핸들러 제공

### 2. useStrictCardNumber

- 카드 번호의 엄격한 유효성 검사를 수행하는 훅
- Luhn 알고리즘을 통한 체크섬 검증
- 실제 존재하는 카드 번호인지 검증
- `onCardNumberChange` 핸들러 제공

### 3. useExpiryDateNumber

- 카드 유효기간 입력을 관리하는 훅
- MM/YY 형식으로 입력 제한
- 월(1-12)과 연도 유효성 검사
- `onExpiryDateNumberChange` 핸들러 제공

### 4. useCVCNumber

- CVC 번호 입력을 관리하는 훅
- 3자리 숫자 입력 제한
- `onCVCNumberChange` 핸들러 제공

### 5. usePasswordNumber

- 카드 비밀번호 입력을 관리하는 훅
- 2자리 숫자 입력 제한
- `onPasswordNumberChange` 핸들러 제공

### 6. useCardNetwork

- 카드 번호를 기반으로 카드사(VISA, MASTERCARD 등)를 식별하는 훅
- `onChange` 핸들러 제공

### 7. useCardValidation

- 전체 카드 정보의 유효성을 검사하는 훅
- 모든 필드의 입력 상태와 유효성 검사 결과 제공
- 각 필드별 onChange 핸들러 제공

## 사용 예시

```tsx
import React from "react";
import { useCardValidation } from "./lib";

function App() {
  const { card, cvc, expiry, password, network, strictCard } =
    useCardValidation();
  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    card.onCardNumberChange(e);
    network.onChange(e);
  };

  return (
    <div className="App">
      <h1>카드 정보 입력</h1>
      <div className="card-form">
        <div className="input-group">
          <label htmlFor="cardNumber">카드 번호</label>
          <input
            id="cardNumber"
            type="text"
            value={card.cardNumber}
            onChange={handleCardNumberChange}
            placeholder="1234 5678 9012 3456"
          />
          {card.errorMessage && <p className="error">{card.errorMessage}</p>}
          {network.cardNetwork !== "DEFAULT" && (
            <p className="card-network">{network.cardNetwork}</p>
          )}
        </div>

        <div className="input-group">
          <label htmlFor="cvc">CVC</label>
          <input
            id="cvc"
            type="text"
            value={cvc.CVCNumber}
            onChange={cvc.onCVCNumberChange}
            placeholder="123"
          />
          {cvc.errorMessage && <p className="error">{cvc.errorMessage}</p>}
        </div>

        <div className="input-group">
          <label htmlFor="expiry">유효기간</label>
          <input
            id="expiry"
            type="text"
            value={expiry.expiryDateNumber}
            onChange={expiry.onExpiryDateNumberChange}
            placeholder="MM/YY"
          />
          {expiry.errorMessage && (
            <p className="error">{expiry.errorMessage}</p>
          )}
        </div>

        <div className="input-group">
          <label htmlFor="password">비밀번호</label>
          <input
            id="password"
            type="password"
            value={password.passwordNumber}
            onChange={password.onPasswordNumberChange}
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
```

## 기술 스택

- React
- TypeScript
- Vite
