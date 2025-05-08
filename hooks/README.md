# React Hooks 라이브러리

입력 폼과 카드 정보 유효성 검사를 위한 React 훅 모음

## 설치

```bash
npm install @except-useCardHook/hooks
# 또는
yarn add @except-useCardHook/hooks
```

## 기능

- 폼 입력값 유효성 검증
- 에러 상태 관리
- 신용카드 정보 입력 및 검증
- TypeScript 지원

## 사용법

### useInputError

입력값의 유효성 검사와 에러 관리를 위한 훅입니다.

```tsx
import { useState } from 'react';
import { useInputError, NO_ERROR } from '@except-useCardHook/hooks';

function Form() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
  });

  const { error, checkValidation, getErrorMessage, isError, resetErrors } =
    useInputError({
      initError: {
        username: NO_ERROR,
        email: NO_ERROR,
      },
      getValidationFns: (value) => [
        {
          condition: () => value.length === 0,
          errorMsg: '필수 입력 항목입니다',
        },
        {
          condition: () => value.includes('invalid'),
          errorMsg: '잘못된 값입니다',
        },
      ],
    });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    checkValidation({
      value,
      type: name,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isError()) {
      // 폼 제출 로직
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>사용자명</label>
        <input
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
        {error.username !== NO_ERROR && <p>{error.username}</p>}
      </div>

      <div>
        <label>이메일</label>
        <input name="email" value={formData.email} onChange={handleChange} />
        {error.email !== NO_ERROR && <p>{error.email}</p>}
      </div>

      <button type="submit" disabled={isError()}>
        제출
      </button>
    </form>
  );
}
```

### useCardForm

신용카드 정보 입력 폼을 관리하기 위한 통합 훅입니다.

```tsx
import { useCardForm } from '@except-useCardHook/hooks';

function CardForm() {
  const {
    cardNumber,
    cardExpiry,
    cardCVC,
    isFormValid,
    resetForm,
    getFormData,
    hasErrors,
  } = useCardForm();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isFormValid()) {
      const formData = getFormData();
      console.log('카드 정보:', formData);
      // API 호출 등의 처리
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>카드 번호</label>
        <input
          value={cardNumber.value}
          onChange={(e) => cardNumber.setValue(e.target.value)}
          onBlur={cardNumber.validate}
        />
        {cardNumber.error && <p>{cardNumber.error}</p>}
      </div>

      <div>
        <label>유효기간</label>
        <input
          value={cardExpiry.month.value}
          onChange={(e) => cardExpiry.month.setValue(e.target.value)}
          placeholder="MM"
          maxLength={2}
        />
        /
        <input
          value={cardExpiry.year.value}
          onChange={(e) => cardExpiry.year.setValue(e.target.value)}
          placeholder="YY"
          maxLength={2}
        />
        {cardExpiry.hasError && <p>{cardExpiry.errorMessage}</p>}
      </div>

      <div>
        <label>CVC</label>
        <input
          value={cardCVC.value}
          onChange={(e) => cardCVC.setValue(e.target.value)}
          maxLength={4}
        />
        {cardCVC.error && <p>{cardCVC.error}</p>}
      </div>

      <button type="submit" disabled={!isFormValid() || hasErrors()}>
        결제하기
      </button>
    </form>
  );
}
```

## API

### useInputError

```tsx
const { error, checkValidation, getErrorMessage, isError, resetErrors } =
  useInputError({
    initError,
    getValidationFns,
  });
```

#### 매개변수

- `initError`: 초기 에러 상태 객체
- `getValidationFns`: 유효성 검사 함수를 반환하는 함수 (value를 매개변수로 받음)

#### 반환값

- `error`: 현재 에러 상태 객체
- `checkValidation`: 필드 유효성 검사 함수
- `getErrorMessage`: 첫 번째 에러 메시지 가져오기
- `isError`: 에러 여부 확인
- `resetErrors`: 에러 상태 초기화

### useCardForm

신용카드 입력 폼을 관리하는 통합 훅입니다.

```tsx
const {
  cardNumber,
  cardExpiry,
  cardCVC,
  isFormValid,
  resetForm,
  getFormData,
  hasErrors,
} = useCardForm();
```

#### 반환값

- `cardNumber`: 카드 번호 관리 객체

  - `value`: 카드 번호 문자열
  - `setValue`: 카드 번호 설정 함수
  - `error`: 카드 번호 오류 메시지
  - `validate`: 카드 번호 유효성 검사 함수
  - `isValid`: 유효성 여부 확인 함수
  - `reset`: 카드 번호 초기화 함수
  - `cardType`: 카드 타입 (VISA, MASTER 등)

- `cardExpiry`: 카드 유효기간 관리 객체

  - `month`: 월 관리 객체 (value, setValue 등)
  - `year`: 년 관리 객체 (value, setValue 등)
  - `isValid`: 유효성 여부 확인 함수
  - `hasError`: 오류 여부
  - `errorMessage`: 오류 메시지
  - `reset`: 유효기간 초기화 함수

- `cardCVC`: CVC 관리 객체

  - `value`: CVC 문자열
  - `setValue`: CVC 설정 함수
  - `error`: CVC 오류 메시지
  - `isValid`: 유효성 여부 확인 함수
  - `reset`: CVC 초기화 함수

- `isFormValid`: 전체 폼 유효성 확인 함수
- `resetForm`: 전체 폼 초기화 함수
- `getFormData`: 폼 데이터 객체 반환 함수
- `hasErrors`: 폼에 오류가 있는지 확인하는 함수
