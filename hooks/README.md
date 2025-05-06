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

각 훅은 `value`, `error`, `onChange`, `validate` 속성을 반환합니다.

```jsx
import { useCardNumber, checkNumber, checkLength } from 'dslgpgh-payments-hooks';

function CardForm() {
  const { value, error, onChange, validate } = useCardNumber([
    checkNumber,
    (value) => checkLength(value, 4)
  ]);
  
  return (
    <div>
      <input 
        type="text" 
        value={value.first}
        onChange={(e) => onChange(e, 'first')} 
      />
      {!error.first.isValid && <p className="error">{error.first.errorMessage}</p>}
      
      {/* 다른 카드번호 필드들도 유사하게 구현 */}
    </div>
  );
}
```

## API 문서

### useCardNumber

카드 번호를 4개의 그룹으로 나누어 각각 검증합니다.

```jsx
const { value, error, onChange, validate } = useCardNumber([validators]);
```

- `value`: { first: "", second: "", third: "", fourth: "" } - 각 필드의 현재 값
- `error`: { first: { isValid: true, errorMessage: "" }, ... } - 각 그룹의 유효성 상태와 오류 메시지
- `onChange(e: React.ChangeEvent<HTMLInputElement>, label: CardNumberField)`: 입력 변경 핸들러
- `validate(label: string, value: string)`: 지정된 그룹(`first`, `second`, `third`, `fourth`)의 카드 번호를 검증

### useCardPassword

카드 비밀번호를 검증합니다.

```jsx
const { value, error, onChange, validate } = useCardPassword([validators]);
```

- `value`: string - 현재 입력 값
- `error`: { isValid: boolean, errorMessage: string } - 유효성 상태와 오류 메시지
- `onChange(e: React.ChangeEvent<HTMLInputElement>)`: 입력 변경 핸들러
- `validate(value: string)`: 비밀번호 검증

### useCardCvc

카드 CVC 코드를 검증합니다.

```jsx
const { value, error, onChange, validate } = useCardCvc([validators]);
```

- `value`: string - 현재 입력 값
- `error`: { isValid: boolean, errorMessage: string } - 유효성 상태와 오류 메시지
- `onChange(e: React.ChangeEvent<HTMLInputElement>)`: 입력 변경 핸들러
- `validate(value: string)`: CVC 코드 검증

### useExpirationMonth

카드 만료 월을 검증합니다.

```jsx
const { value, error, onChange, validate } = useExpirationMonth([validators]);
```

- `value`: string - 현재 입력 값
- `error`: { isValid: boolean, errorMessage: string } - 유효성 상태와 오류 메시지
- `onChange(e: React.ChangeEvent<HTMLInputElement>)`: 입력 변경 핸들러
- `validate(value: string)`: 만료 월 검증

### useExpirationYear

카드 만료 연도를 검증합니다.

```jsx
const { value, error, onChange, validate } = useExpirationYear([validators]);
```

- `value`: string - 현재 입력 값
- `error`: { isValid: boolean, errorMessage: string } - 유효성 상태와 오류 메시지
- `onChange(e: React.ChangeEvent<HTMLInputElement>)`: 입력 변경 핸들러
- `validate(value: string)`: 만료 연도 검증

### useCardCompany

카드사 선택을 검증합니다.

```jsx
const { value, error, onChange, validate } = useCardCompany([validators]);
```

- `value`: string - 현재 입력 값
- `error`: { isValid: boolean, errorMessage: string } - 유효성 상태와 오류 메시지
- `onChange(e: React.ChangeEvent<HTMLInputElement>)`: 입력 변경 핸들러
- `validate(value: string)`: 카드사 선택 검증

## 유효성 검증 함수

패키지는 다음과 같은 유효성 검증 함수를 제공합니다:

### checkEmptyValue(value: string)

값이 비어있는지 확인합니다.

```jsx
import { checkEmptyValue } from 'dslgpgh-payments-hooks';

// 사용 예시
const { value, error, onChange, validate } = useCardCompany([checkEmptyValue]);
```

### checkNumber(value: string)

숫자만 입력되었는지 확인합니다.

```jsx
import { checkNumber } from 'dslgpgh-payments-hooks';

// 사용 예시
const { value, error, onChange, validate } = useCardPassword([checkNumber]);
```

### checkLength(value: string, validLength: number)

지정된 길이와 일치하는지 확인합니다.

```jsx
import { checkLength } from 'dslgpgh-payments-hooks';

// 사용 예시
const { value, error, onChange, validate } = useCardCvc([
  checkNumber,
  (value) => checkLength(value, 3)
]);
```

### checkMonthRange(value: string)

월 범위(1~12)가 유효한지 확인합니다.

```jsx
import { checkMonthRange } from 'dslgpgh-payments-hooks';

// 사용 예시
const { value, error, onChange, validate } = useExpirationMonth([
  checkNumber,
  checkMonthRange
]);
```

### checkYearRange(value: string)

연도가 현재 연도 이후인지 확인합니다.

```jsx
import { checkYearRange } from 'dslgpgh-payments-hooks';

// 사용 예시
const { value, error, onChange, validate } = useExpirationYear([
  checkNumber,
  checkYearRange
]);
```

## 라이선스
MIT