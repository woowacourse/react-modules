# Mingtae-Hooks

![NPM 버전](https://img.shields.io/npm/v/mingtae-hooks)
![다운로드](https://img.shields.io/npm/dm/mingtae-hooks)

카드 정보 입력에 특화된 React Hook 모음입니다. 카드 번호, 유효기간, CVC 등의 입력을 쉽게 관리할 수 있습니다.

## 특징

- 카드 번호 입력 및 유효성 검사
- 카드 유효기간 입력 관리
- 단일 숫자 필드 관리 (CVC, 우편번호 등)
- 숫자 입력 유효성 검사
- 카드 브랜드 자동 감지
- 에러 상태 관리

## 설치

```bash
npm install mingtae-hooks
```

또는

```bash
yarn add mingtae-hooks
```

## 사용법

### 카드 번호 입력 Hook (`useCardNumberInput`)

카드 번호 입력을 관리하고 유효성을 검증합니다.

```jsx
import { useCardNumberInput } from 'mingtae-hooks';

const CardNumberInput = () => {
  const {
    cardNumberInputValue,
    setCardNumberInputValue,
    cardBrand,
    formattedCardNumber,
    errorInfo: { isError, errorText },
  } = useCardNumberInput();

  return (
    <div>
      <input
        type="text"
        value={formattedCardNumber}
        onChange={(e) => setCardNumberInputValue(e.target.value)}
        placeholder="카드 번호 입력"
      />
      {cardBrand && <div>카드 종류: {cardBrand}</div>}
      {isError && <div className="error">{errorText}</div>}
    </div>
  );
};
```

### 카드 유효기간 입력 Hook (`useCardExpirationInput`)

카드 유효기간(월/년) 입력을 관리하고 유효성을 검증합니다.

```jsx
import { useCardExpirationInput } from 'mingtae-hooks';

const CardExpirationInput = () => {
  const { cardExpirationValue, setCardExpirationValue, errorInfo } = useCardExpirationInput();

  return (
    <div>
      <div>
        <input
          type="text"
          value={cardExpirationValue.month}
          onChange={(e) => setCardExpirationValue.month(e.target.value)}
          placeholder="MM"
          maxLength={2}
        />
        {errorInfo.month.isError && <div className="error">{errorInfo.month.errorText}</div>}
      </div>
      <div>
        <input
          type="text"
          value={cardExpirationValue.year}
          onChange={(e) => setCardExpirationValue.year(e.target.value)}
          placeholder="YY"
          maxLength={2}
        />
        {errorInfo.year.isError && <div className="error">{errorInfo.year.errorText}</div>}
      </div>
    </div>
  );
};
```

### 단일 숫자 입력 Hook (`useSingleNumberInput`)

CVC나 우편번호 같은 숫자 필드 입력을 관리합니다.

```jsx
import { useSingleNumberInput } from 'mingtae-hooks';

const CVCInput = () => {
  // 최대 길이 3으로 CVC 입력 관리
  const {
    inputValue,
    setInputValue,
    errorInfo: { isError, errorText },
  } = useSingleNumberInput(3);

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="CVC"
        maxLength={3}
      />
      {isError && <div className="error">{errorText}</div>}
    </div>
  );
};
```

## API 참조

### useCardNumberInput

카드 번호 입력을 관리하는 훅입니다.

**반환값:**

| 이름                      | 타입                                      | 설명                                                             |
| ------------------------- | ----------------------------------------- | ---------------------------------------------------------------- |
| `cardNumberInputValue`    | `string`                                  | 현재 카드 번호 입력값                                            |
| `setCardNumberInputValue` | `(value: string) => void`                 | 카드 번호 입력값 설정 함수                                       |
| `cardBrand`               | `string`                                  | 감지된 카드 브랜드 (VISA, Mastercard 등)                         |
| `formattedCardNumber`     | `string[]`                                | 포맷팅된 카드 번호 배열 (예: `['4111', '1111', '1111', '1111']`) |
| `errorInfo`               | `{ isError: boolean, errorText: string }` | 에러 상태 정보                                                   |

### useCardExpirationInput

카드 유효기간 입력을 관리하는 훅입니다.

**반환값:**

| 이름                     | 타입                                                                                                | 설명                        |
| ------------------------ | --------------------------------------------------------------------------------------------------- | --------------------------- |
| `cardExpirationValue`    | `{ month: string, year: string }`                                                                   | 현재 월/년 입력값           |
| `setCardExpirationValue` | `{ month: (value: string) => void, year: (value: string) => void }`                                 | 월/년 입력값 설정 함수      |
| `errorInfo`              | `{ month: { isError: boolean, errorText: string }, year: { isError: boolean, errorText: string } }` | 월/년 각각의 에러 상태 정보 |

### useSingleNumberInput

숫자 필드 입력을 관리하는 훅입니다.

**매개변수:**

| 이름        | 타입     | 설명                  |
| ----------- | -------- | --------------------- |
| `maxLength` | `number` | 입력 필드의 최대 길이 |

**반환값:**

| 이름            | 타입                                      | 설명             |
| --------------- | ----------------------------------------- | ---------------- |
| `inputValue`    | `string`                                  | 현재 입력값      |
| `setInputValue` | `(value: string) => void`                 | 입력값 설정 함수 |
| `errorInfo`     | `{ isError: boolean, errorText: string }` | 에러 상태 정보   |

## 유틸리티 함수

이 라이브러리는 다음 유틸리티 함수들을 내부적으로 사용합니다:

- `checkCardBrand`: 카드 번호로부터 카드 브랜드 감지
- `formatCardNumber`: 카드 번호 포맷팅
- `isNumeric`: 입력값이 숫자인지 확인
- `isNotOverMaxLength`: 입력값이 최대 길이를 초과하지 않는지 확인
- `isBeforeToday`: 유효기간이 오늘 이전인지 확인

## 의존성

- React 16.8.0 이상 (Hooks 기능 필요)

## 라이선스

MIT © MinSungJe
