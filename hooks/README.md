# 카드 결제 유효성 검증 React Hooks

React 기반 웹 애플리케이션에서 카드 결제 관련 입력 필드의 유효성을 검증하기 위한 커스텀 훅(hook) 모음입니다.

## 설치

```bash
npm install dslgpgh-payments-hooks
# 또는
yarn add dslgpgh-payments-hooks
```

## 제공되는 훅

이 패키지는 다음 훅들을 제공합니다:

- `useCardNumber`: 카드번호 유효성 검증
- `useCardPassword`: 카드 비밀번호 유효성 검증
- `useCardCvc`: 카드 CVC 코드 유효성 검증
- `useExpirationMonth`: 카드 만료 월 유효성 검증
- `useExpirationYear`: 카드 만료 연도 유효성 검증
- `useCardCompany`: 카드사 선택 유효성 검증

## 사용 방법

각 훅은 `error`, `validate` 속성을 반환합니다.

```jsx
import { useCardNumber } from 'dslgpgh-payments-hooks';

function CardForm() {
  const { error, validate } = useCardNumber();
  
  const handleCardNumberChange = (e) => {
    const value = e.target.value;
    validate('first', value);
  };
  
  return (
    <div>
      <input type="text" onChange={handleCardNumberChange} />
      {!error.first.isValid && <p className="error">{error.first.errorMessage}</p>}
    </div>
  );
}
```

## API 문서

### useCardNumber

카드 번호를 4개의 그룹으로 나누어 각각 검증합니다.

```jsx
const { error, validate } = useCardNumber();
```

- `error`: `first`: { `isValid`: `true`, `errorMessage`: `""` }, - 각 그룹의 유효성 상태와 오류 메시지 
- `validate(label: string, value: string)`: 지정된 그룹(`first`, `second`, `third`, `fourth`)의 카드 번호를 검증

검증 규칙:
- 숫자만 입력 가능
- 각 그룹은 4자리여야 함

### useCardPassword

카드 비밀번호를 검증합니다.

```jsx
const { error, validate } = useCardPassword();
```

- `error.isValid`: boolean - 유효성 상태
- `error.errorMessage`: string - 오류 메시지
- `validate(value: string)`: 비밀번호 검증

검증 규칙:
- 숫자만 입력 가능
- 2자리여야 함

### useCardCvc

카드 CVC 코드를 검증합니다.

```jsx
const { error, validate } = useCardCvc();
```

- `error.isValid`: boolean - 유효성 상태
- `error.errorMessage`: string - 오류 메시지
- `validate(value: string)`: CVC 코드 검증

검증 규칙:
- 숫자만 입력 가능
- 3자리여야 함

### useExpirationMonth

카드 만료 월을 검증합니다.

```jsx
const { error, validate } = useExpirationMonth();
```

- `error.isValid`: boolean - 유효성 상태
- `error.errorMessage`: string - 오류 메시지
- `validate(value: string)`: 만료 월 검증

검증 규칙:
- 숫자만 입력 가능
- 2자리 형식(MM)이어야 함
- 1~12 사이의 값이어야 함

### useExpirationYear

카드 만료 연도를 검증합니다.

```jsx
const { error, validate } = useExpirationYear();
```

- `error.isValid`: boolean - 유효성 상태
- `error.errorMessage`: string - 오류 메시지
- `validate(value: string)`: 만료 연도 검증

검증 규칙:
- 숫자만 입력 가능
- 2자리 형식(YY)이어야 함
- 현재 연도 이후여야 함

### useCardCompany

카드사 선택을 검증합니다.

```jsx
const { error, validate } = useCardCompany();
```

- `error.isValid`: boolean - 유효성 상태
- `error.errorMessage`: string - 오류 메시지
- `validate(value: string)`: 카드사 선택 검증

검증 규칙:
- 값이 비어있지 않아야 함