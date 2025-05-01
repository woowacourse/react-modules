# bunju-summit-hooks

React 애플리케이션에서 신용카드 정보를 안전하게 처리하기 위한 커스텀 훅 모음입니다.

카드 번호, 만료일, CVC 코드, 카드 비밀번호의 입력과 유효성 검사를 쉽게 구현할 수 있습니다.

## 설치

```bash
npm install bunju-summit-hooks
# 또는
yarn add bunju-summit-hooks
# 또는
pnpm add bunju-summit-hooks
```

## 사용 가능한 훅

이 패키지는 다음과 같은 훅을 제공합니다:

- `useCardNumber`: 카드 번호 입력 및 유효성 검사를 위한 훅
- `useCardExpiry`: 카드 만료일 입력 및 유효성 검사를 위한 훅
- `useCardCvc`: 카드 CVC 코드 입력 및 유효성 검사를 위한 훅
- `useCardSecretNumber`: 카드 비밀번호 입력 및 유효성 검사를 위한 훅

## 개별 훅 사용 가이드

### useCardNumber

카드 번호 입력과 유효성 검사를 위한 훅입니다.

```jsx
const { cardNumberState, handleCardNumberChange, errorState } = useCardNumber();
```

**반환값:**

- `cardNumberState`: 현재 입력된 카드 번호 상태 객체

  ```ts
  {
    first: { value: string },
    second: { value: string },
    third: { value: string },
    fourth: { value: string },
  }
  ```

- `handleCardNumberChange`: 카드 번호 변경 핸들러 함수
- `errorState`: 유효성 검사 결과 객체

  ```ts
  { isValid: boolean, errorMessage: string }
  ```

### useCardExpiry

카드 만료일 입력과 유효성 검사를 위한 훅입니다.

```jsx
const { expiryDate, handleExpiryChange, errorState } = useCardExpiry();
```

**반환값:**

- `expiryDate`: 현재 입력된 만료일 상태 객체
  ```ts
  {
    value: string;
  }
  ```
- `handleExpiryChange`: 만료일 변경 핸들러 함수
- `errorState`: 유효성 검사 결과 객체

  ```ts
  { isValid: boolean, errorMessage: string }
  ```

### useCardCvc

카드 CVC 코드 입력과 유효성 검사를 위한 훅입니다.

```jsx
const { cvcState, handleCVCState, errorState } = useCardCvc();
```

**반환값:**

- `cvcState`: 현재 입력된 CVC 상태 객체

  ```ts
  {
    value: string;
  }
  ```

- `handleCVCState`: CVC 변경 핸들러 함수
- `errorState`: 유효성 검사 결과 객체

  ```ts
  { isValid: boolean, errorMessage: string }
  ```

### useCardSecretNumber

카드 비밀번호 입력과 유효성 검사를 위한 훅입니다.

```jsx
const { secretNumber, handleSecretNumberChange, errorState } =
  useCardSecretNumber();
```

**반환값:**

- `secretNumber`: 현재 입력된 카드 비밀번호 상태 객체
  ```ts
  {
    value: string;
  }
  ```
- `handleSecretNumberChange`: 카드 비밀번호 변경 핸들러 함수
- `errorState`: 유효성 검사 결과 객체

  ```ts
  { isValid: boolean, errorMessage: string }
  ```

## 에러 처리

모든 훅은 `errorState` 객체를 반환합니다. 이 객체는 다음과 같은 구조를 가집니다:

```typescript
interface ValidationResult {
  isValid: boolean;
  errorMessage: string;
}
```

`isValid`가 `false`인 경우, `errorMessage`에 오류 메시지가 포함됩니다.
