# React Custom Hooks

신용카드 번호 처리를 위한 React 훅으로, 자동 카드 브랜드 감지, 필드 유효성 검사 및 형식 지정 기능을 제공합니다.

<br/>

## 주요 기능

```
- 자동 카드 브랜드 감지 (Visa, Mastercard, Amex 등)
- 다양한 카드 형식에 대한 내장 유효성 검사
- 여러 필드로 나눠진 카드 번호 입력 지원
- 입력 정제 및 오류 처리
- 카드 유형에 따른 반응형 필드 길이 조정
```

<br/>

## 설치

```bash
npm install @suhwa/react-custom-hooks
```

또는

```bash
yarn add @suhwa/react-custom-hooks
```

<br/>

## 기본 사용법

```jsx
import React from 'react';
import { useCardNumber } from '@suhwa/react-custom-hooks';

function CreditCardForm() {
  const {
    formattedCardNumber,
    cardNumberError,
    handleCardNumberChange,
    isCardNumberValid,
    cardBrand,
    requiredFields,
    fieldLengthArr,
  } = useCardNumber();

  return (
    <div>
      <div>
        {Array.from({ length: requiredFields }).map((_, idx) => (
          <input
            key={idx}
            type="text"
            value={formattedCardNumber[idx]}
            onChange={(e) => handleCardNumberChange({ idx, value: e.target.value })}
            maxLength={fieldLengthArr[idx]}
            placeholder="••••"
            className={cardNumberError[idx] ? 'error' : ''}
          />
        ))}
      </div>

      {cardNumberError.map(
        (error, idx) =>
          error && (
            <p key={idx} className="error-message">
              {error}
            </p>
          ),
      )}

      <div>
        <p>카드 브랜드: {cardBrand}</p>
        <p>유효성: {isCardNumberValid() ? '유효함' : '유효하지 않음'}</p>
      </div>
    </div>
  );
}
```

<br/>

## API 참조

### useCardNumber(initialCardNumber?: string, initialErrorMsg?: string)

<br/>

#### 매개변수

| 이름              | 타입   | 설명              | 기본값 |
| ----------------- | ------ | ----------------- | ------ |
| initialCardNumber | string | 초기 카드 번호 값 | `''`   |
| initialErrorMsg   | string | 초기 오류 메시지  | `''`   |

<br/>

#### 반환 값

| 이름                   | 타입     | 설명                                      |
| ---------------------- | -------- | ----------------------------------------- |
| cardNumber             | string   | 공백 없는 전체 카드 번호                  |
| formattedCardNumber    | string[] | 카드 번호를 구분자로 자른 배열            |
| cardNumberError        | string[] | 각 카드 번호 배열에 대한 오류 메시지 배열 |
| handleCardNumberChange | Function | 카드 번호 입력 변경 핸들러                |
| isCardNumberValid      | Function | 카드 번호가 유효한지 확인하는 함수        |
| cardBrand              | string   | 계산된 카드 브랜드                        |
| requiredFields         | number   | 계산된 카드에 필요한 입력 필드 수         |
| fieldLengthArr         | number[] | 각 입력 필드의 최대 길이 배열             |

<br/>

## 카드 브랜드 감지

처음 몇 자리 숫자를 기반으로 다음 카드 브랜드를 자동으로 감지합니다.

- Visa : 4로 시작 / 16자리
- Mastercard : 51~55로 시작 / 16자리
- Diners : 36으로 시작 / 14

각 카드 브랜드는 동적으로 조정되는 특정 형식 규칙을 가지고 있습니다.

<br/>

## 고급 사용 예제

```jsx
import React, { useState } from 'react';
import { useCardNumber } from '@suhwa/react-custom-hooks';

function AdvancedCreditCardForm() {
  const {
    formattedCardNumber,
    cardNumberError,
    handleCardNumberChange,
    isCardNumberValid,
    cardBrand,
    requiredFields,
    fieldLengthArr,
  } = useCardNumber();

  const [isFocused, setIsFocused] = useState(Array(4).fill(false));

  const handleFocus = (idx) => {
    const newFocused = Array(4).fill(false);
    newFocused[idx] = true;
    setIsFocused(newFocused);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isCardNumberValid()) {
      console.log('유효한 카드 제출');
    } else {
      console.log('유효하지 않은 카드');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={`card-fields ${cardBrand.toLowerCase()}`}>
        {Array.from({ length: requiredFields }).map((_, idx) => (
          <div key={idx} className="input-wrapper">
            <input
              type="text"
              value={formattedCardNumber[idx]}
              onChange={(e) => handleCardNumberChange({ idx, value: e.target.value })}
              onFocus={() => handleFocus(idx)}
              onBlur={() => setIsFocused(Array(4).fill(false))}
              maxLength={fieldLengthArr[idx]}
              placeholder="••••"
              className={`
                card-input 
                ${cardNumberError[idx] ? 'has-error' : ''} 
                ${isFocused[idx] ? 'is-focused' : ''}
              `}
              aria-invalid={!!cardNumberError[idx]}
            />
            {cardNumberError[idx] && <div className="error-tooltip">{cardNumberError[idx]}</div>}
          </div>
        ))}
      </div>

      <div className="card-brand-indicator">
        <img src={`/images/card-brands/${cardBrand.toLowerCase()}.svg`} alt={`${cardBrand} 카드`} />
      </div>

      <button type="submit" disabled={!isCardNumberValid()}>
        제출
      </button>
    </form>
  );
}
```
