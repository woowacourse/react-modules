# React Hooks Module

이 프로젝트는 신용카드 입력 폼을 위한 커스텀 React Hooks 모음입니다.

해당 훅은 ESM import 방식만을 지원하고,

react, react-dom 의존을 필요로 합니다.

## 설치 방법

```bash
npm i woowacourse-hooks-marvin
```

## 사용 가능한 Hooks

### 1. useCardNumber

- 카드 번호 입력을 관리하는 훅
- 브랜드 별로 자리수 검증(ex/AMEX: 15자리)
- `onCardNumberChange` 핸들러 제공

### 2. useStrictCardNumber

- 카드 번호의 엄격한 유효성 검사를 수행하는 훅
- Luhn 알고리즘을 통해 실제 존재하는 카드 번호인지 검증
- 다양한 카드 길이 (비자의 경우에는 14, 16, 19자리) 지원
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
- `onCardNumberChange` 핸들러 제공

### 7. useCardFormat

- 카드 번호의 형식을 관리하는 훅
- 카드 브랜드에 따른 자동 형식 지정
- 형식이 적용된 문자열과 원시 숫자 문자열 제공
- 플레이스홀더 자동 생성
- `onCardNumberChange` 핸들러 제공
- 구분자(splitter) 커스터마이징 가능

### 8. useCardValidation

- 전체 카드 정보의 유효성을 검사하는 훅
- 모든 필드의 입력 상태와 유효성 검사 결과 제공
- 각 필드별 onChange 핸들러 제공
- 형식 지정 옵션 커스터마이징 가능

## 사용 예시

```tsx
import React from "react";
import { useCardValidation } from "./lib";

function App() {
  const { card, cvc, expiry, password, network, strictCard, format } =
    useCardValidation({
      format: { splitter: " " }, // 카드 번호 구분자 설정 (기본값: " ")
    });

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    format.onCardNumberChange(e);

    const digits = e.target.value.replace(/\D/g, "");

    const sanitizedEvent = {
      ...e,
      target: { ...e.target, value: digits },
    };
    network.onCardNumberChange(sanitizedEvent);
    card.onCardNumberChange(sanitizedEvent);
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
            value={format.formatted || card.cardNumber}
            onChange={handleCardNumberChange}
            placeholder={format.placeholder || "1234 5678 9012 3456"}
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
