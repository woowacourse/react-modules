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
- `useCardBrand`: 카드번호 기반 카드사 자동 감지 및 포맷팅
- `useCardPassword`: 카드 비밀번호 유효성 검증
- `useCardCvc`: 카드 CVC 코드 유효성 검증
- `useExpirationMonth`: 카드 만료 월 유효성 검증
- `useExpirationYear`: 카드 만료 연도 유효성 검증
- `useCardCompany`: 카드사 선택 유효성 검증

## 사용 방법

### 기본 사용법

각 훅은 입력값, 에러 상태, 그리고 입력 변경 핸들러를 제공합니다.

```jsx
import { useCardNumber } from 'dslgpgh-payments-hooks';

function CardForm() {
  const { cardNumber, onChange, cardNumberError } = useCardNumber();
  
  return (
    <div>
      <input 
        type="text" 
        value={cardNumber}
        onChange={(e) => onChange(e.target.value)} 
      />
      {!cardNumberError.isValid && <p className="error">{cardNumberError.errorMessage}</p>}
    </div>
  );
}
```

### 카드 브랜드 감지 및 번호 포맷팅

```jsx
import { useCardNumber, useCardBrand } from 'dslgpgh-payments-hooks';

function CardForm() {
  const { cardNumber, onChange, cardNumberError } = useCardNumber();
  const { cardBrand, formattedCardNumber, cardBrandError } = useCardBrand(cardNumber);
  
  return (
    <div>
      <input 
        type="text" 
        value={formattedCardNumber}
        onChange={(e) => onChange(e.target.value)} 
      />
      {!cardNumberError.isValid && <p className="error">{cardNumberError.errorMessage}</p>}
      {cardBrand && <p>감지된 카드사: {cardBrand}</p>}
      {!cardBrandError.isValid && <p className="error">{cardBrandError.errorMessage}</p>}
    </div>
  );
}
```

## API 문서

### useCardNumber

카드 번호 입력 필드를 관리하고 유효성을 검증합니다.

```jsx
const { cardNumber, onChange, cardNumberError } = useCardNumber();
```

- `cardNumber`: string - 현재 입력된 카드 번호
- `onChange(cardNumberInput: string)`: 입력 변경 핸들러
- `cardNumberError`: { isValid: boolean, errorMessage: string } - 유효성 상태와 오류 메시지

### useCardBrand

카드 번호를 기반으로 카드 브랜드(카드사)를 자동 감지하고, 포맷팅된 카드 번호를 제공합니다.

```jsx
const { cardBrand, formattedCardNumber, cardBrandError } = useCardBrand(cardNumber);
```

- `cardBrand`: "AMEX" | "Diners" | "Visa" | "Mastercard" | "UnionPay" | null - 감지된 카드 브랜드
- `formattedCardNumber`: string - 카드 브랜드에 맞게 포맷팅된 카드 번호 (예: 1234-5678-9012-3456)
- `cardBrandError`: { isValid: boolean, errorMessage: string | null } - 카드 브랜드 감지 관련 오류

### useCardPassword

카드 비밀번호를 검증합니다.

```jsx
const { cardPassword, cardPasswordError, onChange } = useCardPassword();
```

- `cardPassword`: string - 현재 입력 값
- `onChange(value:string)`: 입력 변경 핸들러
- `cardPasswordError`: { isValid: boolean, errorMessage: string | null } - 카드 패스워드 관련 오류

### useCardCvc

카드 CVC 코드를 검증합니다.

```jsx
const { cardCvc, cardPasswordError, onChange } = useCardCvc();
```

- `cardCvc`: string - 현재 입력 값
- `onChange(value:string)`: 입력 변경 핸들러
- `cardPasswordError`: { isValid: boolean, errorMessage: string | null } - 카드 cvc 관련 오류

### useExpirationMonth

카드 만료 월을 검증합니다.

```jsx
const { expirationMonth, cardExpirationMonthError, onChange } = useExpirationMonth();
```

- `expirationMonth`: string - 현재 입력 값
- `onChange(value:string)`: 입력 변경 핸들러
- `cardExpirationMonthError`: { isValid: boolean, errorMessage: string | null } - 카드 유효기간(월) 관련 오류

### useExpirationYear

카드 만료 연도를 검증합니다.

```jsx
const { expirationYear, cardExpirationYearError, onChange } = useExpirationYear();
```

- `expirationYear`: string - 현재 입력 값
- `onChange(value:string)`: 입력 변경 핸들러
- `cardExpirationYearError`: { isValid: boolean, errorMessage: string | null } - 카드 유효기간(년) 관련 오류

### useCardCompany

카드사 선택을 검증합니다.

```jsx
const { cardCompany, cardCompanyError, onChange } = useCardCompany();
```

- `cardCompany`: string - 현재 입력 값
- `onChange(value:string)`: 입력 변경 핸들러
- `cardCompanyError`: { isValid: boolean, errorMessage: string | null } - 카드사 관련 오류

## 유효성 검증 함수

패키지는 다음과 같은 유효성 검증 함수를 제공합니다:

### checkEmptyValue(value: string)

값이 비어있는지 확인합니다.

```jsx
import { checkEmptyValue } from 'dslgpgh-payments-hooks';

// 사용 예시
const emptyCheck = checkEmptyValue(""); // true
```

### checkNumber(value: string)

숫자만 입력되었는지 확인합니다. 숫자가 아닌 경우 true를 반환합니다.

```jsx
import { checkNumber } from 'dslgpgh-payments-hooks';

// 사용 예시
const notNumberCheck = checkNumber("abc"); // true
const numberCheck = checkNumber("123"); // false
```

### checkLength(value: string, validLength: number)

지정된 길이보다 작은지 확인합니다. 짧은 경우 true를 반환합니다.

```jsx
import { checkLength } from 'dslgpgh-payments-hooks';

// 사용 예시
const lengthCheck = checkLength("123", 4); // true (3 < 4)
```

### checkMonthRange(value: string)

월 범위(1~12)가 유효한지 확인합니다. 범위를 벗어나면 true를 반환합니다.

```jsx
import { checkMonthRange } from 'dslgpgh-payments-hooks';

// 사용 예시
const invalidMonth = checkMonthRange("13"); // true
const validMonth = checkMonthRange("6"); // false
```

### checkYearRange(value: string)

연도가 현재 연도 이후인지 확인합니다. 현재 연도보다 작으면 true를 반환합니다.

```jsx
import { checkYearRange } from 'dslgpgh-payments-hooks';

// 사용 예시
const pastYear = checkYearRange("22"); // 현재가 2025년이라면 true
```

### getError(value: string | null, errorCases: ErrorCase[])

여러 유효성 검증 조건을 검사하고 첫 번째 발생한 오류를 반환합니다.

```jsx
import { getError } from 'dslgpgh-payments-hooks';

// 사용 예시
const errorCases = [
  {
    validate: (value) => value.trim() === "",
    errorMessage: "값을 입력해주세요."
  },
  {
    validate: (value) => isNaN(Number(value)),
    errorMessage: "숫자만 입력 가능합니다."
  }
];

const error = getError("", errorCases);
// { isValid: false, errorMessage: "값을 입력해주세요." }
```

## 카드 브랜드 유틸리티 함수

### detectCardBrand(cardNumber: string)

카드 번호를 기반으로 카드 브랜드를 감지합니다.

```jsx
import { detectCardBrand } from 'dslgpgh-payments-hooks';

// 사용 예시
const brand = detectCardBrand("4111111111111111"); // "Visa"
```

### formatCardNumber(cardNumber: string, cardBrand: CardBrand)

카드 번호를 카드 브랜드에 맞는 포맷으로 변환합니다.

```jsx
import { formatCardNumber } from 'dslgpgh-payments-hooks';

// 사용 예시
const formatted = formatCardNumber("4111111111111111", "Visa"); // "4111-1111-1111-1111"
```

## 라이선스
MIT