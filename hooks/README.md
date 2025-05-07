# Hooks Module

본 모듈은 결제 정보 입력 시 필요한 다양한 유효성 검증 Hook을 제공합니다. </br>
카드 번호, 유효 기간, CVC, 비밀번호 등의 입력값을 쉽고 효율적으로 검증할 수 있습니다.

## 💡 Installation

```
npm i @muffin2219/hooks
```

## 📌 How to use: useCardNumber

### 📍 Example

```tsx
import {useCardNumber} from '@muffin2219/hooks';

function App() {
  const {cardNumber, onChange, cardNumberValidationResult} = useCardNumber();

  return (
    <>
      <h2>카드 번호</h2>
      <input
        key="first"
        value={cardNumber.first}
        type="text"
        maxLength={4}
        onChange={(e) => onChange('first', e.target.value)}
      />
      <input
        key="second"
        value={cardNumber.second}
        type="text"
        maxLength={4}
        onChange={(e) => onChange('second', e.target.value)}
      />
      <input
        key="third"
        value={cardNumber.third}
        type="text"
        maxLength={4}
        onChange={(e) => onChange('third', e.target.value)}
      />
      <input
        key="fourth"
        value={cardNumber.fourth}
        type="text"
        maxLength={4}
        onChange={(e) => onChange('fourth', e.target.value)}
      />

      {cardNumberValidationResult.first.isError && (
        <span>{cardNumberValidationResult.first.errorMessage}</span>
      )}
      {cardNumberValidationResult.second.isError && (
        <span>{cardNumberValidationResult.second.errorMessage}</span>
      )}
      {cardNumberValidationResult.third.isError && (
        <span>{cardNumberValidationResult.third.errorMessage}</span>
      )}
      {cardNumberValidationResult.fourth.isError && (
        <span>{cardNumberValidationResult.fourth.errorMessage}</span>
      )}
    </>
  );
}

export default App;
```

### 📝 Validation List

1. 각 카드 번호는 숫자여야한다.
2. 각 카드 번호는 4자리여야한다.

### ⛏️ Return Value

### cardNumber (Object)

| Name   | Datatype | Description  |
| ------ | -------- | ------------ |
| first  | string   | 첫 번째 자리 |
| second | string   | 두 번째 자리 |
| third  | string   | 세 번째 자리 |
| fourth | string   | 네 번째 자리 |

### cardNumberValidationResult (Object)

```
{
  first: {
    isError: string
    errorMessage: string
  },
  second: {
    isError: string,
    errorMessage: string,
  },
  third: {
    isError: string
    errorMessage: string
  },
  fourth: {
    isError: string,
    errorMessage: string,
  }
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

### 📝 Validation List

1. 월과 연도는 값이 숫자여야한다.
2. 월과 연도는 2자리여야한다.
3. 월은 1부터 12 사이의 숫자여야한다.
4. 연도는 현재 연도보다 크거나 같아야한다.

### ⛏️ Return Value

### expirationDate (Object)

| Name  | Datatype | Description |
| ----- | -------- | ----------- |
| month | string   | 월          |
| year  | string   | 연도        |

### expirationDateValidationResult (Object)

```
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

### 📝 Validation List

1. CVC 번호는 숫자여야한다.
2. CVC 번호는 3자리여야한다.

### ⛏️ Return Value

### cvc

| Name | Datatype | Description |
| ---- | -------- | ----------- |
| cvc  | string   | cvc번호     |

### cvcValidationResult (Object)

| Name         | Datatype | Description |
| ------------ | -------- | ----------- |
| isError      | boolean  | 에러 여부   |
| errorMessage | string   | 에러 메시지 |

### onChange

| Name     | Datatype                  | Description   |
| -------- | ------------------------- | ------------- |
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

### 📝 Validation List

1. 비밀번호는 숫자여야한다.
2. 비밀번호는 2자리여야한다.

### ⛏️ Return Value (Object)

### password

| Name     | Datatype | Description            |
| -------- | -------- | ---------------------- |
| password | string   | 카드 비밀번호 앞 2자리 |

### passwordValidationResult (Object)

| Name         | Datatype | Description |
| ------------ | -------- | ----------- |
| isError      | boolean  | 에러 여부   |
| errorMessage | string   | 에러 메시지 |

### onChange

| Name     | Datatype                  | Description   |
| -------- | ------------------------- | ------------- |
| onChange | ( value : string) => void | onChange 함수 |

## 👥 Author

[sooyeoniya](https://github.com/sooyeoniya),
[minji2219](https://github.com/minji2219)
