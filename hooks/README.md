[![npm version](https://img.shields.io/npm/v/woowacourse-hooks-marvin.svg)](https://www.npmjs.com/package/woowacourse-hooks-marvin)
[![npm downloads](https://img.shields.io/npm/dm/woowacourse-hooks-marvin.svg)](https://www.npmjs.com/package/woowacourse-hooks-marvin)
[![Bundle Size](https://img.shields.io/bundlephobia/minzip/woowacourse-hooks-marvin)](https://bundlephobia.com/package/woowacourse-hooks-marvin)
[![TypeScript](https://img.shields.io/badge/TypeScript-4.9-blue)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-18-blue)](https://reactjs.org/)

# React Hooks Module

이 프로젝트는 신용카드 입력 폼을 위한 커스텀 React Hooks 모음입니다.

해당 훅은 ESM import 방식만을 지원하고,

react, react-dom 의존을 필요로 합니다.

## 설치 방법

```bash
npm i woowacourse-hooks-marvin
```

## 사용 가능한 Hooks

### 1. useCardNetwork

- 카드 번호를 기반으로 카드사(VISA, MASTERCARD 등)를 식별하는 훅
- `onCardNumberChange` 핸들러 제공

### 2. useCardFormat

- 카드 번호의 형식을 관리하는 훅
- 카드 브랜드에 따른 자동 형식 지정
- 형식이 적용된 문자열과 원시 숫자 문자열 제공
- 플레이스홀더 자동 생성
- `onCardNumberChange` 핸들러 제공
- 구분자(splitter) 커스터마이징 가능

### 3. useCardForm

- 카드 입력 양식 전체를 관리하는 훅
- 카드 번호, CVC, 유효기간, 비밀번호 등 전체 필드 관리
- 각 필드별 값과 에러 상태 제공
- onChange 핸들러 제공
- 커스터마이징 옵션 지원

### 4. useCardValidation

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

## useCardForm 사용 예시

```tsx
import React from "react";
import { useCardForm } from "woowacourse-hooks-marvin";

function CardForm() {
  const { values, errors, handleChange } = useCardForm({
    // 옵션 설정 가능
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 폼 제출 처리
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="cardNumber">카드 번호</label>
        <input
          id="cardNumber"
          name="cardNumber"
          value={values.cardNumber}
          onChange={handleChange}
          placeholder="1234 5678 9012 3456"
        />
        {errors.cardNumber && <p>{errors.cardNumber}</p>}
      </div>

      <div>
        <label htmlFor="cvc">CVC</label>
        <input
          id="cvc"
          name="cvc"
          value={values.cvc}
          onChange={handleChange}
          placeholder="123"
        />
        {errors.cvc && <p>{errors.cvc}</p>}
      </div>

      <div>
        <label htmlFor="expiryDate">유효기간</label>
        <input
          id="expiryDate"
          name="expiryDate"
          value={values.expiryDate}
          onChange={handleChange}
          placeholder="MM/YY"
        />
        {errors.expiryDate && <p>{errors.expiryDate}</p>}
      </div>

      <div>
        <label htmlFor="password">비밀번호</label>
        <input
          id="password"
          name="password"
          type="password"
          value={values.password}
          onChange={handleChange}
          placeholder="비밀번호 앞 2자리"
        />
        {errors.password && <p>{errors.password}</p>}
      </div>

      <button type="submit">제출</button>
    </form>
  );
}
```
