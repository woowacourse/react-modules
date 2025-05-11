# Hooks Module

본 모듈은 결제 정보 입력 시 필요한 다양한 유효성 검증 Hook을 제공합니다. 카드 번호, 유효 기간, CVC, 비밀번호 등의 입력값을 쉽고 효율적으로 검증할 수 있습니다.

## 💡 Installation

```
npm i @muffin2219/hooks
```

## 📌 How to use: useCardNumber

### 📍 Example

```tsx
import {useCardNumber} from '@muffin2219/hooks';

function App() {
  const {
    cardNumber,
    onChange,
    cardNumberValidationResult,
    cardBrand,
    formattingCardNumber,
  } = useCardNumber();

  return (
    <>
      <h2>카드 번호</h2>
      <h2>{cardBrand}</h2>

      <input
        value={cardNumber}
        type="text"
        maxLength={16}
        onChange={(e) => onChange(e.target.value)}
      />

      {formattingCardNumber?.map((field) => (
        <span style={{padding: 30}}>{field}</span>
      ))}

      {cardNumberValidationResult.isError && (
        <span>{cardNumberValidationResult.errorMessage}</span>
      )}
    </>
  );
}

export default App;
```

## 📝 Validation List

1. 카드 번호는 숫자여야한다.
2. 카드 번호는 14자리 이상 16자리 이하여야한다.

## ⛏️ Return Value

### cardNumberValidationResult (Object)

| Name         | Datatype | Description |
| ------------ | -------- | ----------- |
| isError      | boolean  | 에러 여부   |
| errorMessage | string   | 에러 메시지 |

| Name                 | Datatype                                 | Description                                        |
| -------------------- | ---------------------------------------- | -------------------------------------------------- |
| cardNumber           | string                                   | 카드 번호                                          |
| onChange             | (label : string, value : string) => void | onChange 함수                                      |
| cardBrand            | string                                   | 카드 브랜드(Visa, MasterCard, Union, Diners, AMEX) |
| formattingCardNumber | string[]                                 | 카드 번호를 포맷팅한 결과                          |

## 📌 How to use: useExpirationDate

### 📍 Example

```tsx
import {useExpirationDate} from '@muffin2219/hooks';

function App() {
  const {onChange, expirationDate, expirationDateValidationResult} =
    useExpirationDate();

  return (
    <>
      <h2>카드 유효 기간</h2>
      <input
        value={expirationDate.month}
        type="text"
        maxLength={2}
        onChange={(e) => onChange('month', e.target.value)}
      />
      <input
        value={expirationDate.year}
        type="text"
        maxLength={2}
        onChange={(e) => onChange('year', e.target.value)}
      />

      {expirationDateValidationResult.month.isError && (
        <span>{expirationDateValidationResult.month.errorMessage}</span>
      )}
      {expirationDateValidationResult.year.isError && (
        <span>{expirationDateValidationResult.year.errorMessage}</span>
      )}
    </>
  );
}

export default App;
```

## 📝 Validation List

1. 월과 연도는 값이 숫자여야한다.
2. 월과 연도는 2자리여야한다.
3. 월은 1부터 12 사이의 숫자여야한다.
4. 연도는 현재 연도보다 크거나 같아야한다.

## ⛏️ Return Value

### expirationDate (Object)

| Name  | Datatype | Description |
| ----- | -------- | ----------- |
| month | string   | 월          |
| year  | string   | 연도        |

### expirationDateValidationResult (Object)

```javascript
{
  month: {
    isError: string
    errorMessage: string
  },
  year: {
    isError: string,
    errorMessage: string,
  },
}
```

| Name         | Datatype | Description |
| ------------ | -------- | ----------- |
| isError      | boolean  | 에러 여부   |
| errorMessage | string   | 에러 메시지 |

### onChange

| Name     | Datatype                                 | Description   |
| -------- | ---------------------------------------- | ------------- |
| onChange | (label : string, value : string) => void | onChange 함수 |

## 📌 How to use: useCvc

### 📍 Example

```tsx
import {useCvc} from '@muffin2219/hooks';

function App() {
  const {onChange, cvc, cvcValidationResult} = useCvc();

  return (
    <>
      <h2>CVC 번호</h2>
      <input
        value={cvc}
        type="text"
        maxLength={3}
        onChange={(e) => onChange(e.target.value)}
      />
      {cvcValidationResult.isError && (
        <span>{cvcValidationResult.errorMessage}</span>
      )}
    </>
  );
}

export default App;
```

## 📝 Validation List

1. CVC 번호는 숫자여야한다.
2. CVC 번호는 3자리여야한다.

## ⛏️ Return Value

### cvcValidationResult (Object)

| Name         | Datatype | Description |
| ------------ | -------- | ----------- |
| isError      | boolean  | 에러 여부   |
| errorMessage | string   | 에러 메시지 |

| Name     | Datatype                  | Description   |
| -------- | ------------------------- | ------------- |
| cvc      | string                    | cvc번호       |
| onChange | ( value : string) => void | onChange 함수 |

## 📌 How to use: usePassword

### 📍 Example

```tsx
import {usePassword} from '@muffin2219/usePassword';

function App() {
  const {onChange, password, passwordValidationResult} = usePassword();

  return (
    <>
      <h2>비밀 번호</h2>
      <input
        value={password}
        type="text"
        maxLength={2}
        onChange={(e) => onChange(e.target.value)}
      />
      {passwordValidationResult.isError && (
        <span>{passwordValidationResult.errorMessage}</span>
      )}
    </>
  );
}

export default App;
```

## 📝 Validation List

1. 비밀번호는 숫자여야한다.
2. 비밀번호는 2자리여야한다.

## ⛏️ Return Value (Object)

### passwordValidationResult (Object)

| Name         | Datatype | Description |
| ------------ | -------- | ----------- |
| isError      | boolean  | 에러 여부   |
| errorMessage | string   | 에러 메시지 |

| Name     | Datatype                  | Description            |
| -------- | ------------------------- | ---------------------- |
| password | string                    | 카드 비밀번호 앞 2자리 |
| onChange | ( value : string) => void | onChange 함수          |

## 👥 Author

sooyeoniya, minji2219
