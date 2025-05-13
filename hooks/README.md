# summit-hooks

React 애플리케이션에서 신용카드 정보를 안전하게 처리하기 위한 커스텀 훅 모음입니다.

카드 번호, 만료일, CVC 코드, 카드 비밀번호의 입력과 카드사 식별, 유효성 검사를 쉽게 구현할 수 있습니다.

## 설치

```bash
npm i summit-hooks
```

## 사용 가능한 훅

이 패키지는 다음과 같은 훅을 제공합니다:

- `useCardNumber`: 카드 번호 입력 및 유효성 검사를 위한 훅
- `useCardExpiry`: 카드 만료일 입력 및 유효성 검사를 위한 훅
- `useCardCvc`: 카드 CVC 코드 입력 및 유효성 검사를 위한 훅
- `useCardPassword`: 카드 비밀번호 입력 및 유효성 검사를 위한 훅
- `useCardBrand`: 카드사 식별 및 유효성 검사를 위한 훅

## 개별 훅 사용 가이드

### useCardNumber

카드 번호 입력과 유효성 검사를 위한 훅입니다.

```jsx
const { value, onchange, errorState } = useCardNumber();
```

**반환값:**

- `value`: 현재 입력된 카드 번호
- `onchange`: 카드 번호 변경 핸들러 함수
- `errorState`: 유효성 검사 결과 객체

  ```ts
  { isValid: boolean, errorMessage: string }
  ```

---

### useCardExpiryDate

카드 만료일 입력과 유효성 검사를 위한 훅입니다.

```jsx
const { value, onchange, errorState } = useCardExpiryDate();
```

**반환값:**

- `value`: 현재 입력된 카드 만료일
- `onchange`: 카드 만료일 변경 핸들러 함수
- `errorState`: 유효성 검사 결과 객체

  ```ts
  { isValid: boolean, errorMessage: string }
  ```

---

### useCardCvc

카드 CVC 코드 입력과 유효성 검사를 위한 훅입니다.

```jsx
const { value, onchange, errorState } = useCardCvc();
```

**반환값:**

- `value`: 현재 입력된 카드 CVC 코드
- `onchange`: 카드 CVC 코드 변경 핸들러 함수
- `errorState`: 유효성 검사 결과 객체

  ```ts
  { isValid: boolean, errorMessage: string }
  ```

---

### useCardPassword

카드 비밀번호 입력과 유효성 검사를 위한 훅입니다.

```jsx
const { value, onchange, errorState } = useCardPassword();
```

**반환값:**

- `value`: 현재 입력된 카드 비밀번호
- `onchange`: 카드 비밀번호 변경 핸들러 함수
- `errorState`: 유효성 검사 결과 객체

  ```ts
  { isValid: boolean, errorMessage: string }
  ```

---

### useCardBrand

카드 번호에 해당하는 카드사 식별 및 유효성 검사를 위한 훅입니다.

```jsx
const { cardBrand, formattedCardNumber, errorState } = useCardBrand(cardNumber);
```

**파라미터**

- `cardNumber`: 카드사를 식별할 카드 번호

**반환값:**

- `cardBrand`: 카드 번호에 해당하는 카드사
- `formattedCardNumber`: 입력된 카드 번호를 카드사별 포맷 규칙에 맞게 자동으로 하이픈(`-`)을 추가하여 반환
  - 포맷팅 예시:
  - Visa, MasterCard 등 16자리 카드:
    `5112123412341234` → `5112-1234-1234-1234`
  - AMEX 15자리 카드
    `341234567890123` → `3412-345678-90123`
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
