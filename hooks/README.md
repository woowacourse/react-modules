# 카드 결제 유효성 검증 React Hooks

React 기반 웹 애플리케이션에서 카드 결제 관련 입력 필드의 유효성을 검증하기 위한 커스텀 훅(hook) 모음입니다.

## 설치

```bash
npm install db0111-react-payments-hooks
# 또는
yarn add db0111-react-payments-hooks
```

## 제공되는 훅

이 패키지는 다음 훅들을 제공합니다:

- `useCardNumber`: 카드번호 유효성 검증
- `useCardPassword`: 카드 비밀번호 유효성 검증
- `useCardCvc`: 카드 CVC 코드 유효성 검증
- `useExpirationDate`: 카드 만료 월, 연도 유효성 검증
- `useCardCompany`: 카드사 선택 유효성 검증

## 사용 방법

각 훅은 상태 값, handleChange(이벤트 핸들러), validationResult(유효성 검증 결과) 속성을 반환합니다.

```jsx
import React from "react";
import { useCardNumber } from "db0111-react-payments-hooks";

function CardNumberForm() {
  const { cardNumber, handleChange, validationResult } = useCardNumber();

  return (
    <div>
      <input
        type="text"
        name="first"
        value={cardNumber.first}
        onChange={handleChange}
        placeholder="1234"
      />
      {validationResult.first.errorState && (
        <p className="error">{validationResult.first.message}</p>
      )}

      <input
        type="text"
        name="second"
        value={cardNumber.second}
        onChange={handleChange}
        placeholder="5678"
      />
      {validationResult.second.errorState && (
        <p className="error">{validationResult.second.message}</p>
      )}

      <input
        type="text"
        name="third"
        value={cardNumber.third}
        onChange={handleChange}
        placeholder="9012"
      />
      {validationResult.third.errorState && (
        <p className="error">{validationResult.third.message}</p>
      )}

      <input
        type="text"
        name="fourth"
        value={cardNumber.fourth}
        onChange={handleChange}
        placeholder="3456"
      />
      {validationResult.fourth.errorState && (
        <p className="error">{validationResult.fourth.message}</p>
      )}
    </div>
  );
}
```

## API 문서

### useCardNumber

카드 번호를 4개의 그룹으로 나누어 각각 검증합니다.

```jsx
const { cardNumber, handleChange, validationResult } = useCardNumber();
```

- `cardNumber`: { first: string, second: string, third: string, fourth: string } - 각 그룹의 카드 번호 상태
- `handleChange`: 입력 필드 변경을 처리하는 이벤트 핸들러
- `validationResult`: { first: { errorState: boolean, message: string }, second: { errorState: boolean, message: string }, third: { errorState: boolean, message: string }, fourth: { errorState: boolean, message: string } } - 각 그룹의 유효성 상태와 오류 메시지

검증 규칙:

- 숫자만 입력 가능
- 각 그룹은 4자리여야 함

### useCardPassword

카드 비밀번호를 검증합니다.

```jsx
const { cardPassword, handleChange, validationResult } = useCardPassword();
```

- `cardPassword`: string - 카드 비밀번호 상태
- `handleChange`: 입력 필드 변경을 처리하는 이벤트 핸들러
- `validationResult`: { errorState: boolean, message: string } - 유효성 상태와 오류 메시지

검증 규칙:

- 숫자만 입력 가능
- 2자리여야 함

### useCardCvc

카드 CVC 코드를 검증합니다.

```jsx
const { cardCVC, handleChange, validationResult } = useCardCvc();
```

- `cardCVC`: string - CVC 코드 상태
- `handleChange`: 입력 필드 변경을 처리하는 이벤트 핸들러
- `validationResult`: { errorState: boolean, message: string } - 유효성 상태와 오류 메시지

검증 규칙:

- 숫자만 입력 가능
- 3자리여야 함

### useExpirationDate

카드 만료 월/연도를 검증합니다.

```jsx
const { expDate, handleChange, validationResult } = useExpirationDate();
```

- `expDate`: { month: string, year: string } - 만료 월/연도 상태
- `handleChange`: 입력 필드 변경을 처리하는 이벤트 핸들러
- `validationResult`: { month: { errorState: boolean, message: string }, year: { errorState: boolean, message: string } } - 유효성 상태와 오류 메시지

검증 규칙:

- 숫자만 입력 가능
- 월은 2자리 형식(MM)이어야 하며 1~12 사이의 값이어야 함
- 연도는 2자리 형식(YY)이어야 하며 현재 연도 이후여야 함

### useCardCompany

카드사 선택을 검증합니다.

```jsx
const { cardCompany, handleChange, validationResult } = useCardCompany();
```

- `cardCompany`: string - 선택된 카드사 상태
- `handleChange`: 입력 필드 변경을 처리하는 이벤트 핸들러
- `validationResult`: { errorState: boolean, message: string } - 유효성 상태와 오류 메시지

검증 규칙:

- 값이 비어있지 않아야 함
