# brgndy-card-validation-hooks

카드 정보 입력 유효성 검사 커스텀 훅

## - 설치

```
npm install brgndy-card-validate-hooks
```

## - useCardNumbersValidation 사용법

```javascript
import { useState } from "react";
import { useCardNumbersValidation } from "brgndy-card-validate-hooks";

function App() {
  const [cardNumbers, setCardNumbers] = useState(["", "", "", ""]);
  const { validationResult: cardNumbersValidationResult } = useCardNumbersValidation({ cardNumbers: cardNumbers });

  const handleCardNumbers = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const inputValue = e.target.value;
    const newCardNumbers = cardNumbers.map((cardNumber, i) => {
      return i === index ? inputValue : cardNumber;
    });

    setCardNumbers(newCardNumbers);
  };

  return (
    <>
      <h2>카드 번호</h2>
      {cardNumbers.map((_, index) => {
        return (
          <input
            key={index}
            value={cardNumbers[index]}
            type="text"
            maxLength={4}
            onChange={(e) => handleCardNumbers(e, index)}
          />
        );
      })}
      <div>{cardNumbersValidationResult.errorMessage}</div>
    </>
  );
}

export default App;
```

### - useCardNumbersValidation의 유효성 검증 목록

1. 각 카드 번호는 값이 있어야한다.
2. 각 카드 번호는 숫자여야한다.
3. 각 카드 번호는 4자리여야한다.

### - useCardNumbersValidation 인자

| Name        | Datatype | Description |
| ----------- | -------- | ----------- |
| cardNumbers | string[] | 카드 번호   |

## - useExpiryDateValidation 사용법

```javascript
import { useState } from "react";
import { useExpiryDateValidation } from "brgndy-card-validate-hooks";

function App() {
  const [expiryDate, setExpiryDate] = useState({ month: "", year: "" });
  const { validationResult: expiryDateValidationResult } = useExpiryDateValidation({ month: expiryDate.month, year: expiryDate.year });

  const handleExpiryChange = (e: React.ChangeEvent<HTMLInputElement>, field: "month" | "year") => {
    const inputValue = e.target.value;
    setExpiryDate((prevState) => ({
      ...prevState,
      [field]: inputValue,
    }));
  };

  return (
    <>
      <h2>카드 유효 기간</h2>
      <input
        value={expiryDate.month}
        type="text"
        maxLength={2}
        onChange={(e) => handleExpiryChange(e, "month")}
      />
      <input
        value={expiryDate.year}
        type="text"
        maxLength={2}
        onChange={(e) => handleExpiryChange(e, "year")}
      />
      <div>{expiryDateValidationResult.errorMessage}</div>
    </>
  );
}

export default App;
```

### - useExpiryDateValidation 유효성 검증 목록

1. 월과 연도는 값이 있어야한다.
2. 월과 연도는 숫자여야한다.
3. 월과 연도는 2자리여야한다.
4. 월은 1부터 12 사이의 숫자여야한다.

### - useExpiryDateValidation 인자

| Name  | Datatype | Description |
| ----- | -------- | ----------- |
| month | string   | 월          |
| year  | string   | 연도        |

## - useCardHolderValidation 사용법

```javascript
import { useState } from "react";
import { useCardHolderValidation } from "brgndy-card-validate-hooks";

function App() {
  const [cardHolder, setCardHolder] = useState("");
  const { validationResult: cardHolderValidationResult } = useCardHolderValidation({ cardHolder: cardHolder });

  const handleCardHolderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setCardHolder(inputValue);
  };

  return (
    <>
      <h2>사용자 이름</h2>
      <input
        value={cardHolder.toUpperCase()}
        type="text"
        maxLength={22}
        onChange={handleCardHolderChange}
      />
      <div>{cardHolderValidationResult.errorMessage}</div>
    </>
  );
}

export default App;
```

### - useCardHolderValidation 유효성 검증 목록

1. 사용자 이름은 값이 존재해야한다.
2. 사용자 이름은 영어여야한다.
3. 사용자 이름은 최대 21까지 입력 가능하다.

### - useCardHolderValidation 인자

| Name       | Datatype | Description |
| ---------- | -------- | ----------- |
| cardHolder | string   | 사용자 이름 |

## - useCVCValidation 사용법

```javascript
import { useState } from "react";
import { useCVCValidation } from "brgndy-card-validate-hooks";

function App() {
  const [cvc, setCVC] = useState("");
  const { validationResult: cvcValidationResult } = useCVCValidation({
    cvc: cvc,
  });

  const handleCVCChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setCVC(inputValue);
  };

  return (
    <>
      <h2>CVC</h2>
      <input
        value={cvc}
        type="text"
        maxLength={3}
        onChange={handleCVCChange}
      />
      <div>{cvcValidationResult.errorMessage}</div>
    </>
  );
}

export default App;
```

### - useCVCValidation 유효성 검증 목록

1. CVC 번호는 값이 있어야한다.
2. CVC 번호는 숫자여야한다.
3. CVC 번호는 3자리여야한다.

### - useCVCValidation 인자

| Name | Datatype | Description |
| ---- | -------- | ----------- |
| cvc  | string   | CVC         |

## - usePasswordValidation 사용법

```javascript
import { useState } from "react";
import { usePasswordValidation } from "brgndy-card-validate-hooks";

function App() {
  const [password, setPassword] = useState("");
  const { validationResult: passwordValidationResult } = usePasswordValidation({
    password: password,
  });

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setPassword(inputValue);
  };

  return (
    <>
      <h2>비밀번호</h2>
      <input
        value={password}
        type="text"
        maxLength={2}
        onChange={handlePasswordChange}
      />
      <div>{passwordValidationResult.errorMessage}</div>
    </>
  );
}

export default App;
```

### - usePasswordValidation 유효성 검증 목록

1. 비밀번호는 값이 있어야한다.
2. 비밀번호는 숫자여야한다.
3. 비밀번호는 2자리여야한다.

### - usePasswordValidation 인자

| Name     | Datatype | Description            |
| -------- | -------- | ---------------------- |
| password | string   | 카드 비밀번호 앞 2자리 |

## - useCardBrand 사용법

```tsx
function ModuleTestPage() {
  const { cardBrand } = useCardBrand({ cardNumbers });
  return <>{cardBrand}</>;
}
```

### - useCardBrand의 리턴 값

1. MasterCard

앞자리가 51에서 55 사이인 16자리 숫자

2. Visa

앞자리가 4로 시작하는 16자리 숫자

3. Diners

36으로 시작하는 14자리 숫자

4. AMEX

34나 37로 시작하는 15자리 숫자

5. UnionPay

- 622126~622925로 시작하는 경우: 6221 2612 3456 7890

- 624~626로 시작하는 경우: 6240 1234 5678 9012

- 6282~6288로 시작하는 경우: 6282 1234 5678 9012

## Author

- [brgndyy github](https://github.com/brgndyy)

## License

MIT
