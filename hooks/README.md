# Card Input Custom Hooks for Form 사용 가이드

이 패키지는 카드 폼 입력값에 대한 유효성 검사를 위한 여러 가지 커스텀 React 훅을 제공합니다.

## 설치

```bash
npm install hash-payment-hooks
```

## 훅 목록 및 설명

## 1. `useCardHolderInput`

**카드 소지자 이름 입력 관련 상태 관리와 유효성 검증을 쉽게 구현할 수 있게 도와주는 커스텀 Hook을 제공합니다. 사용자가 입력한 카드 소지자 이름의 유효성을 검사하고, 관련 상태를 관리하는 기능을 포함하고 있습니다.**

#### 반환 값

- cardHolder: 객체. 카드 소지자 이름에 대한 현재 상태를 나타냅니다.
  - value: 객체. 카드 소지자 이름 값을 담고 있습니다.
  - errorMessage: 객체. 유효성 검사 실패 시 오류 메시지를 담고 있습니다.
  - isError: 객체. 필드별 유효성 검사 통과 여부를 나타냅니다.
- handleCardHolderChange: 함수. 카드 소지자 이름 입력 필드의 값이 변경될 때 호출해야 하는 함수입니다. 변경된 값과 필드 이름을 인자로 받습니다.

#### handleCardHolderChange 인자

- `value` (string): 사용자 입력값.
- `name` (CardHolderName): 입력 필드의 이름, 이 경우에는 'cardHolder'.

#### 사용법

```jsx
import React from "react";
import useCardHolderInput from "hash-payment-hooks";

function CardHolderInputComponent() {
  const { cardHolder, handleCardHolderChange } = useCardHolderInput();

  const onChange = (e) => {
    handleCardHolderChange(e.target.value, "cardHolder");
  };

  return (
    <div>
      <input
        type="text"
        value={cardHolder.value.cardHolder}
        onChange={onChange}
        placeholder="카드 소지자 이름 입력"
      />
      {cardHolder.isError.cardHolder && (
        <p>{cardHolder.errorMessage.cardHolder}</p>
      )}
    </div>
  );
}

export default CardHolderInputComponent;
```

## 2.`useCardNumberInput`

`useCardNumberInput`은 사용자로부터 신용카드 번호 입력을 받고, 해당 입력값을 포맷팅하여 상태를 관리하는 React Hook입니다. 이 Hook은 입력된 카드 번호의 타입을 식별하고, 해당 번호의 유효성을 검증합니다. 또한, 사용자가 입력 폼 내에서 커서 위치를 조정할 수 있도록 도와줍니다.

### 기능

#### 커서 위치 조정

- 입력 폼의 중간에 숫자를 수정할 때 커서 위치를 조정하기 위한 기능입니다.
- 사용자가 값을 입력하거나 삭제할 때, 커서의 위치를 자동으로 조정해 줍니다.

#### 값 포맷팅

- 사용자가 입력한 값에 따라 신용카드 번호를 포맷팅합니다.
- 카드 타입(CARD_TYPE)에 따라 다른 포맷을 적용합니다.

#### 카드 번호 업데이트

- 사용자의 입력에 따라 카드 번호의 상태를 업데이트합니다.
- 입력값의 유효성을 검증하고, 오류 메시지나 포맷팅된 값을 상태에 저장합니다.

#### 카드 번호 변경 핸들러

- 입력 필드에서 발생하는 변경사항을 처리합니다.
- 카드 타입을 식별하고, 입력값을 포맷팅하며, 값의 유효성을 검증합니다.

## 반환값

- `cardNumber`: 사용자로부터 입력 받은 카드 번호의 상태를 포함한 객체입니다.
- `handleCardNumberChange`: 입력 필드의 변경을 처리하는 함수입니다.
- `cardType`: 식별된 카드 타입입니다.

## 예시 코드

```javascript
import {useCardNumberInput} from "hash-payment-hooks";
import styled from "styled-components";

function App() {
  const { cardNumber, cardType, handleCardNumberChange } = useCardNumberInput();
  return (
    <DefaultStyle>
      <label htmlFor="card-number">카드 번호 입력</label>
      <input
        id="card-number"
        value={cardNumber.value.cardNumber}
        onChange={(e) => handleCardNumberChange(e)}
        name="cardNumber"
      ></input>
      <p "error">
        에러메세지: {cardNumber.errorMessage.cardNumber}
      </p>
      <p "value">값: {cardNumber.value.cardNumber}</p>
      <p "type"> 카드 타입: {cardType}</p>
    </DefaultStyle>
  );
}
```

## 3. `useCardPasswordInput`

useCardPasswordInput은 사용자로부터 카드 비밀번호 입력을 받고, 해당 입력값을 관리하는 동시에, 비밀번호의 유효성을 검증하는 React Hook입니다. 이 Hook은 비밀번호 유효성 검증을 위해 usePasswordValidation Hook을 사용하며, 입력된 비밀번호가 설정된 조건을 만족하는지 확인합니다.

### 기능

- 비밀번호 유효성 검증
  usePasswordValidation을 통해 설정된 조건(예: 길이, 특수 문자 포함 여부 등)에 대한 비밀번호의 유효성을 검증합니다.
  비밀번호가 유효성 검증 조건을 만족하지 않는 경우, 관련 정보를 상태에 저장합니다.
- 비밀번호 변경 핸들러
  입력 필드에서 발생하는 변경사항을 처리합니다.
  비밀번호 유효성 검증을 통과하면, 비밀번호의 상태를 업데이트합니다.

### 반환값

- password: 사용자로부터 입력 받은 비밀번호의 상태를 포함한 객체입니다. 이 객체는 비밀번호 값, 오류 메시지, 오류 여부 등을 포함합니다.
- handlePasswordChange: 입력 필드의 변경을 처리하는 함수입니다. 이 함수는 비밀번호 값과 비밀번호의 이름을 인자로 받습니다.

### 예시 코드

```js
import React, { useState } from "react";
import useCardPasswordInput from "hash-payment-hooks";

function App() {
  const { password, handlePasswordChange } = useCardPasswordInput();

  return (
    <div>
      <label htmlFor="password">카드 비밀번호 입력</label>
      <input
        id="password"
        type="password"
        value={password.value.password}
        onChange={(e) => handlePasswordChange(e.target.value, "password")}
        name="password"
      />
      {password.isError.password && (
        <p className="error">에러 메시지: {password.errorMessage.password}</p>
      )}
    </div>
  );
}

export default App;
```

## 4. `useCVCInput`

useCVCInput은 사용자로부터 카드의 CVC(카드 검증 코드) 입력을 받고, 해당 입력값의 상태를 관리하는 동시에, CVC의 유효성을 검증하는 React Hook입니다. 이 Hook은 CVC 유효성 검증을 위해 useCVCValidation Hook을 사용하며, 입력된 CVC가 설정된 조건을 만족하는지 확인합니다.

### 기능

- CVC 유효성 검증
  useCVCValidation을 통해 설정된 조건(예: 길이, 숫자 여부 등)에 대한 CVC의 유효성을 검증합니다.
  CVC가 유효성 검증 조건을 만족하지 않는 경우, 관련 정보를 상태에 저장합니다.
- CVC 변경 핸들러
  입력 필드에서 발생하는 변경사항을 처리합니다.
  CVC 유효성 검증을 통과하면, CVC의 상태를 업데이트합니다.

### 반환값

- CVC: 사용자로부터 입력 받은 CVC의 상태를 포함한 객체입니다. 이 객체는 CVC 값, 오류 메시지, 오류 여부 등을 포함합니다.

- handleCVCChange: 입력 필드의 변경을 처리하는 함수입니다. 이 함수는 CVC 값과 CVC의 이름을 인자로 받습니다.

## 4. `useCardExpiryDateInput`

useCardExpiryDateInput은 카드 만료 날짜 입력(월과 년)을 받고, 해당 입력값을 관리하며, 만료 날짜의 유효성을 검증하는 React Hook입니다.

### 기능

- 만료 날짜 유효성 검증
  useExpiryDateValidation을 통해 설정된 조건에 대한 만료 날짜의 유효성을 검증합니다.
  만료 날짜가 유효성 검증 조건을 만족하지 않는 경우, 관련 정보를 상태에 저장합니다.

- 만료 날짜 변경 핸들러
  입력 필드에서 발생하는 변경사항을 처리합니다.
  만료 날짜 유효성 검증을 통과하면, 만료 날짜의 상태를 업데이트합니다.

### 반환값

- expiryDate: 사용자로부터 입력 받은 만료 날짜의 상태를 포함한 객체입니다. 이 객체는 만료 날짜 값(월, 년), 오류 메시지, 오류 여부 등을 포함합니다.

- handleExpiryDateChange: 입력 필드의 변경을 처리하는 함수입니다. 이 함수는 만료 날짜 값과 만료 날짜의 이름(월 또는 년)을 인자로 받습니다.
