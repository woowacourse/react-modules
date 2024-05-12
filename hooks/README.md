# Hooks Module

- Custom card validation hooks made by paran

## How to install

npm install paran-card-validation-hooks

## Hooks

- 에러가 발생하면 아래 문서에 작성된 순서대로 해당하는 에러 문자열을 validationResult의 errorMessages 배열에 저장합니다.
- 사용하고 싶은 에러 메시지를 각 handler가 반환하는 배열에서 문자열로 찾아 사용하거나 배열을 순회하면서 모두 사용할 수 있습니다.

### useCardNumber

```ts
return { validationResults, handleCardNumberChange };
```

```ts
validationResult {
  isValid: boolean;
  errorMessages: string[];
}

handleCardNumberChange(cardNumber: string, index: number)
```

사용 예시:

```tsx
const [cardNumber, setCardNumber] = useState(["", "", "", ""]);

const { validationResults: numberValidationResults, handleCardNumberChange } =
  useCardNumber();

{
  cardNumber.map((number, index) => (
    <input
      key={index}
      type="text"
      value={number}
      maxLength={4}
      onChange={(e) => handleCardNumberInputChange(e.target.value, index)}
    />
  ));
}
```

반환 에러 문자열:
cardNumber가 숫자가 아닌 경우: 숫자를 입력해주세요.
cardNumber의 길이가 4가 아닌 경우: 4자리 숫자를 입력해주세요.

### useExpiryDate

```ts
return { validationResult, handleExpiryDateChange };
```

```ts

validationResult {
isValidMonth: boolean;
monthErrorMessages: string[];

isValidYear: boolean;
yearErrorMessages: string[];
}

handleExpiryDateChange(month: string, year: string)
```

반환 에러 문자열:

월 입력이 숫자가 아닌 경우: 숫자로 입력해주세요.

월 입력이 범위를 벗어난 경우: 올바른 월을 입력해주세요 (01~12).

연 입력이 숫자가 아닌 경우: 숫자로 입력해주세요.

월 입력이 2자가 아닌 경우: 2자로 입력해주세요.

연 입력이 2자가 아닌 경우: 2자로 입력해주세요.

현재 년/월 이전의 값을 입력한 경우: 만료된 카드입니다.

사용 예시:

```tsx

const [expiryMonth, setExpiryMonth] = useState('');
const [expiryYear, setExpiryYear] = useState('');

const { validationResult: expiryValidationResult, handleExpiryDateChange } = useExpiryDate();

<input
type='text'
value={expiryMonth}
maxLength={2}
onChange={(e) => {
setExpiryMonth(e.target.value);
handleExpiryDateChange(e.target.value, expiryYear);
}}
/>

<input
type='text'
value={expiryYear}
maxLength={2}
onChange={(e) => {
setExpiryYear(e.target.value);
handleExpiryDateChange(expiryMonth, e.target.value);
}}
/>
```

### useCVC

```ts
return { validationResult, handleCVCChange };
```

```ts
validationResult {
isValid: boolean;
errorMessages: string[];
}

handleCVCChange(value: string, maxLength: number)
```

반환 에러 문자열:

value가 숫자가 아닌 경우: 숫자로 입력해주세요.
value의 길이가 maxLength가 아닌 경우: {maxLength}자로 입력해주세요.

사용 예시:

```tsx
const [cvc, setCVC] = useState("");
const { validationResult: cvcValidationResult, handleCVCChange } = useCVC();

<input
  type="text"
  value={cvc}
  onChange={(e) => {
    setCVC(e.target.value);
    handleCVCChange(e.target.value, 4);
  }}
/>;
```

useCardHolder

```ts
return { validationResult, handleCardHolderChange };
```

```ts
validationResult {
isValid: boolean;
errorMessages: string[];
}

handleCardHolderChange = (value: string, maxLength: number)
```

반환 에러 문자열:

value가 대문자 영어가 아닌 경우: 1개 이하의 공백이 연속된 대문자 영어로 입력해주세요.
value의 길이가 maxlength를 넘을 경우: ${maxLength}자 이내로 입력해주세요.

사용 예시:

```tsx
const [cardHolder, setCardHolder] = useState("");
const { validationResult: holderValidationResult, handleCardHolderChange } =
  useCardHolder();

<input
  type="text"
  value={cardHolder}
  onChange={(e) => {
    setCardHolder(e.target.value);
    handleCardHolderChange(e.target.value, 15);
  }}
/>;
```

### useCardPassword

```ts
return { validationResult, handleCardPasswordChange };
```

```ts
validationResult {
isValid: boolean;
errorMessages: string[];
}

handleCardPasswordChange(value: string, maxLength: number)
```

반환 에러 문자열:

value가 숫자가 아닌 경우: 숫자로 입력해주세요.
value의 길이가 maxLength가 아닌 경우: ${maxLength}자리 비밀번호를 입력해주세요.

사용 예시:

```tsx
const [cardPassword, setCardPassword] = useState("");
const { validationResult: passwordValidationResult, handleCardPasswordChange } =
  useCardPassword();

<input
  type="text"
  value={cardPassword}
  maxLength={2}
  onChange={(e) => {
    setCardPassword(e.target.value);
    handleCardPasswordChange(e.target.value);
  }}
/>;
```

### useCardTypeCheck

```ts
return { checkResult, handleCardTypeChange };
```

```ts
checkResult {
cardType: 'Visa' | 'Mastercard' | 'none';
}

handleCardTypeChange = (value: string)
```

사용 예시:

```tsx
const [cardType, setCardType] = useState("");
const { checkResult: typeCheckResult, handleCardTypeChange } =
  useCardTypeCheck();

<input
  type="text"
  value={cardType}
  onChange={(e) => {
    setCardType(e.target.value);
    handleCardTypeChange(e.target.value);
  }}
/>;
```

반환값:

value의 첫 글자가 4일 경우: Visa
value의 첫 두 글자가 51~55일 경우: Mastercard
value의 첫 두 글자가 36일 경우: Diners
value의 첫 두 글자가 34 혹은 37일 경우: Amex
value의 첫 세 글자가 624~626이거나, 첫 네 글자가 6282~6288이거나, 첫 여섯 글자가 622126~622925일 경우: Unionpay
그 외: etc

### 전체 훅 사용 예시

```tsx
import React from "react";
import {
  useCardHolder,
  useCardNumber,
  useCardPassword,
  useCardTypeCheck,
  useCVC,
  useExpiryDate,
} from "./lib/index";

function App() {
  const {
    validationResult: holderValidationResult,
    cardHolder,
    handleCardHolderChange,
  } = useCardHolder();

  const {
    validationResult: numberValidationResult,
    cardNumber,
    handleCardNumberChange,
  } = useCardNumber();

  const {
    validationResult: passwordValidationResult,
    cardPassword,
    handleCardPasswordChange,
  } = useCardPassword();

  const { cardType, handleCardTypeChange } = useCardTypeCheck();

  const {
    validationResult: cvcValidationResult,
    cvc,
    handleCVCChange,
  } = useCVC();

  const {
    validationResult: expiryValidationResult,
    expiryDate,
    handleExpiryDateChange,
  } = useExpiryDate();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100vw",
      }}
    >
      <div style={{ margin: "30px", fontSize: "20px" }}>
        Paran Card Validation Hooks
      </div>
      <div>
        <input
          type="text"
          value={cardHolder}
          onChange={(e) => handleCardHolderChange(e)}
          placeholder="Card Holder"
        />
        <div>
          {holderValidationResult.errorMessages.map((error, index) => (
            <div key={index}>{error}</div>
          ))}
        </div>
      </div>

      <div>
        <div>Card Type: {cardType}</div>
        <input
          type="text"
          value={cardNumber}
          onChange={(e) => {
            handleCardNumberChange(e);
            handleCardTypeChange(e.target.value);
          }}
          placeholder="Card Number"
        />
        <div>
          {numberValidationResult.errorMessages.map((error, index) => (
            <div key={index}>{error}</div>
          ))}
        </div>
      </div>

      <div>
        <input
          type="text"
          value={cardPassword}
          onChange={(e) => handleCardPasswordChange(e)}
          placeholder="Card Password"
        />
        <div>
          {passwordValidationResult.errorMessages.map((error, index) => (
            <div key={index}>{error}</div>
          ))}
        </div>
      </div>

      <div>
        <input
          type="text"
          value={cvc}
          onChange={(e) => handleCVCChange(e)}
          placeholder="CVC"
        />
        <div>
          {cvcValidationResult.errorMessages.map((error, index) => (
            <div key={index}>{error}</div>
          ))}
        </div>
      </div>

      <div>
        <input
          type="text"
          value={expiryDate}
          onChange={(e) => handleExpiryDateChange(e)}
          placeholder="Expiry Date"
        />
        <div>
          {expiryValidationResult.errorMessages.map((error, index) => (
            <div key={index}>{error}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
```
