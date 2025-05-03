# `pesu-hooks` – React Custom Hooks Library

React 프로젝트에서 카드 결제 입력 폼 구현에 특화된 커스텀 훅 모음입니다.  
카드 번호, 만료일, CVC, 비밀번호 입력 등 복잡한 입력 검증과 포맷팅을 간결하게 처리할 수 있습니다.

## 목차

- [설치](#설치)
- [훅 목록 및 시그니처](#훅-목록-및-시그니처)
  - [useCardNumber](#usecardnumber)
  - [useExpiryDate](#useexpirydate)
  - [useCvcNumber](#usecvcnumber)
  - [usePassword](#usepassword)
- [예제 코드](#예제-코드)

---

## 설치

```bash
npm install pesu-hooks
# 또는
yarn add pesu-hooks
```

---

## 훅 목록 및 시그니처

### `useCardNumber`

카드 번호 입력값을 관리하고, 자동 포맷팅 및 유효성 검사를 제공합니다.

```typescript
const { value, setValue, isValid, error, handleChange, handleBlur } = useCardNumber();
```

- **value**: 현재 입력값 (string)
- **setValue**: 입력값 직접 설정 함수 (string → void)
- **isValid**: 유효성 여부 (boolean)
- **error**: 에러 메시지 (string | null)
- **handleChange**: input의 onChange에 연결 (event → void)
- **handleBlur**: input의 onBlur에 연결 (event → void)

---

### `useExpiryDate`

카드 만료일(MM/YY) 입력값을 관리하고, 자동 포맷팅 및 유효성 검사를 제공합니다.

```typescript
const { value, setValue, isValid, error, handleChange, handleBlur } = useExpiryDate();
```

- **value**: 현재 입력값 (string)
- **setValue**: 입력값 직접 설정 함수 (string → void)
- **isValid**: 유효성 여부 (boolean)
- **error**: 에러 메시지 (string | null)
- **handleChange**: input의 onChange에 연결 (event → void)
- **handleBlur**: input의 onBlur에 연결 (event → void)

---

### `useCvcNumber`

CVC(카드 뒷면 3~4자리) 입력값을 관리하고, 유효성 검사를 제공합니다.

```typescript
const { value, setValue, isValid, error, handleChange, handleBlur } = useCvcNumber();
```

- **value**: 현재 입력값 (string)
- **setValue**: 입력값 직접 설정 함수 (string → void)
- **isValid**: 유효성 여부 (boolean)
- **error**: 에러 메시지 (string | null)
- **handleChange**: input의 onChange에 연결 (event → void)
- **handleBlur**: input의 onBlur에 연결 (event → void)

---

### `usePassword`

카드 비밀번호(숫자 2자리) 입력값을 관리하고, 유효성 검사를 제공합니다.

```typescript
const { value, setValue, isValid, error, handleChange, handleBlur } = usePassword();
```

- **value**: 현재 입력값 (string)
- **setValue**: 입력값 직접 설정 함수 (string → void)
- **isValid**: 유효성 여부 (boolean)
- **error**: 에러 메시지 (string | null)
- **handleChange**: input의 onChange에 연결 (event → void)
- **handleBlur**: input의 onBlur에 연결 (event → void)

---

## 예제 코드

```tsx
import { useCardNumber, useExpiryDate, useCvcNumber, usePassword } from '@lib';

function CardForm() {
  const cardNumber = useCardNumber();
  const expiryDate = useExpiryDate();
  const cvc = useCvcNumber();
  const password = usePassword();

  return (
    <form>
      <input
        type="text"
        value={cardNumber.value}
        onChange={cardNumber.handleChange}
        onBlur={cardNumber.handleBlur}
        placeholder="카드 번호"
      />
      {cardNumber.error && <span>{cardNumber.error}</span>}

      <input
        type="text"
        value={expiryDate.value}
        onChange={expiryDate.handleChange}
        onBlur={expiryDate.handleBlur}
        placeholder="MM/YY"
      />
      {expiryDate.error && <span>{expiryDate.error}</span>}

      <input type="text" value={cvc.value} onChange={cvc.handleChange} onBlur={cvc.handleBlur} placeholder="CVC" />
      {cvc.error && <span>{cvc.error}</span>}

      <input
        type="password"
        value={password.value}
        onChange={password.handleChange}
        onBlur={password.handleBlur}
        placeholder="비밀번호 앞 2자리"
      />
      {password.error && <span>{password.error}</span>}
    </form>
  );
}
```
