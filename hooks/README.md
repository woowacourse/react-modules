# useError

폼 유효성 검사와 에러 관리를 위한 React 훅

## 설치

```bash
npm install except-woody-input-error
# 또는
yarn add except-woody-input-error
```

## 기능

- 폼 입력값 유효성 검증
- 에러 상태 관리
- TypeScript 지원

## 사용법

```tsx
import { useState } from 'react';
import { useError, NO_ERROR } from 'except-woody-input-error';

function CardForm() {
  const [cardInfo, setCardInfo] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });

  const { error, checkValidation, getErrorMessage, isError } = useError({
    initError: {
      cardNumber: NO_ERROR,
      expiryDate: NO_ERROR,
      cvv: NO_ERROR,
    },
    getValidationFns: (length, value) => [
      {
        condition: () => length === 0,
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
    setCardInfo({
      ...cardInfo,
      [name]: value,
    });

    checkValidation({
      length: value.length,
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
        <label>카드 번호</label>
        <input
          name="cardNumber"
          value={cardInfo.cardNumber}
          onChange={handleChange}
        />
        {error.cardNumber !== NO_ERROR && <p>{error.cardNumber}</p>}
      </div>

      {/* 다른 필드들 */}

      <button type="submit" disabled={isError()}>
        제출
      </button>
    </form>
  );
}
```

## API

### useError

```tsx
const { error, checkValidation, getErrorMessage, isError, resetErrors } =
  useError({
    initError,
    getValidationFns,
  });
```

#### 매개변수

- `initError`: 초기 에러 상태 객체
- `getValidationFns`: 유효성 검사 함수를 반환하는 함수

#### 반환값

- `error`: 현재 에러 상태 객체
- `checkValidation`: 필드 유효성 검사 함수
- `getErrorMessage`: 첫 번째 에러 메시지 가져오기
- `isError`: 에러 여부 확인
- `resetErrors`: 에러 상태 초기화
