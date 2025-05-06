# Hooks Module

본 모듈은 결제 정보 입력 시 필요한 상태 관리와 다양한 유효성 검증을 위한 Hook을 제공합니다. </br>
카드 번호, 유효 기간, CVC, 비밀번호의 입력값을 쉽고 효율적으로 관리하고 검증할 수 있습니다. </br>
각 훅은 입력 상태 관리, 유효성 검증, 에러 메시지 처리를 모두 포함하고 있어 별도의 상태 관리 로직 없이도 완전한 폼 기능을 구현할 수 있습니다.

## 💡 Installation

```
npm i @sooyeoniya/hooks
```

## 📌 How to use: useCardNumber

### 📍 Example

```tsx
import { useState } from "react";
import { useCardNumber } from "@sooyeoniya/hooks";

function App() {
  const { cardNumber, cardNumberValidation, handleCardNumberChange } =
    useCardNumber();

  return (
    <>
      <h2>카드 번호</h2>
      <input
        key="first"
        value={cardNumber.first}
        type="text"
        maxLength={4}
        onChange={(e) => handleCardNumberChange("first", e.target.value)}
      />
      <input
        key="second"
        value={cardNumber.second}
        type="text"
        maxLength={4}
        onChange={(e) => handleCardNumberChange("second", e.target.value)}
      />
      <input
        key="third"
        value={cardNumber.third}
        type="text"
        maxLength={4}
        onChange={(e) => handleCardNumberChange("third", e.target.value)}
      />
      <input
        key="fourth"
        value={cardNumber.fourth}
        type="text"
        maxLength={4}
        onChange={(e) => handleCardNumberChange("fourth", e.target.value)}
      />

      {cardNumberValidation.first.isError && (
        <span>{cardNumberValidation.first.errorMessage}</span>
      )}
      {cardNumberValidation.second.isError && (
        <span>{cardNumberValidation.second.errorMessage}</span>
      )}
      {cardNumberValidation.third.isError && (
        <span>{cardNumberValidation.third.errorMessage}</span>
      )}
      {cardNumberValidation.fourth.isError && (
        <span>{cardNumberValidation.fourth.errorMessage}</span>
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

```tsx
{
  // 카드 번호 입력값
  cardNumber: {
    first: string,   // 첫 번째 필드 (4자리)
    second: string,  // 두 번째 필드 (4자리)
    third: string,   // 세 번째 필드 (4자리)
    fourth: string   // 네 번째 필드 (4자리)
  },

  // 유효성 검증 결과
  cardNumberValidation: {
    first: {
      isError: boolean,
      errorMessage: string | null
    },
    second: {
      isError: boolean,
      errorMessage: string | null
    },
    third: {
      isError: boolean,
      errorMessage: string | null
    },
    fourth: {
      isError: boolean,
      errorMessage: string | null
    }
  },

  // 입력값 변경 핸들러
  handleCardNumberChange: (field: "first" | "second" | "third" | "fourth", value: string) => void
}
```

| attribute              | type     | description                                  |
| ---------------------- | -------- | -------------------------------------------- |
| cardNumber             | Object   | 카드 번호 4개 필드의 입력값을 담고 있는 객체 |
| cardNumberValidation   | Object   | 각 필드별 유효성 검증 결과를 담고 있는 객체  |
| handleCardNumberChange | Function | 각 필드의 입력값 변경을 처리하는 함수        |

### cardNumber

| attribute | type   | description                    |
| --------- | ------ | ------------------------------ |
| first     | string | 첫 번째 카드 번호 필드 (4자리) |
| second    | string | 두 번째 카드 번호 필드 (4자리) |
| third     | string | 세 번째 카드 번호 필드 (4자리) |
| fourth    | string | 네 번째 카드 번호 필드 (4자리) |

### cardNumberValidation의 각 필드

| attribute    | type           | description                                 |
| ------------ | -------------- | ------------------------------------------- |
| isError      | boolean        | 해당 필드의 유효성 검증 에러 여부           |
| errorMessage | string \| null | 에러가 있을 경우 표시될 메시지, 없으면 null |

## 📌 How to use: useExpirationDate

### 📍 Example

```tsx
import { useState } from "react";
import { useExpirationDate } from "@sooyeoniya/hooks";

function App() {
  const {
    expirationDate,
    expirationDateValidation,
    handleExpirationDateChange,
  } = useExpirationDate();

  return (
    <>
      <h2>카드 유효 기간</h2>
      <input
        value={expirationDate.month}
        type="text"
        maxLength={2}
        onChange={(e) => handleExpirationDateChange("month", e.target.value)}
      />
      <input
        value={expirationDate.year}
        type="text"
        maxLength={2}
        onChange={(e) => handleExpirationDateChange("year", e.target.value)}
      />

      {expirationDateValidation.month.isError && (
        <span>{expirationDateValidation.month.errorMessage}</span>
      )}
      {expirationDateValidation.year.isError && (
        <span>{expirationDateValidation.year.errorMessage}</span>
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

```tsx
{
  // 유효 기간 입력값
  expirationDate: {
    month: string,  // 월 (2자리)
    year: string    // 연도 (2자리)
  },

  // 유효성 검증 결과
  expirationDateValidation: {
    month: {
      isError: boolean,
      errorMessage: string | null
    },
    year: {
      isError: boolean,
      errorMessage: string | null
    }
  },

  // 입력값 변경 핸들러
  handleExpirationDateChange: (field: "month" | "year", value: string) => void
}
```

| attribute                  | type     | description                             |
| -------------------------- | -------- | --------------------------------------- |
| expirationDate             | Object   | 유효기간(월, 연도)의 입력값을 담는 객체 |
| expirationDateValidation   | Object   | 각 필드별 유효성 검증 결과를 담는 객체  |
| handleExpirationDateChange | Function | 각 필드의 입력값 변경을 처리하는 함수   |

### expirationDate

| attribute | type   | description         |
| --------- | ------ | ------------------- |
| month     | string | 월 입력값 (2자리)   |
| year      | string | 연도 입력값 (2자리) |

### expirationDateValidation의 각 필드

| attribute    | type           | description                                 |
| ------------ | -------------- | ------------------------------------------- |
| isError      | boolean        | 해당 필드의 유효성 검증 에러 여부           |
| errorMessage | string \| null | 에러가 있을 경우 표시될 메시지, 없으면 null |

## 📌 How to use: useCvcNumber

### 📍 Example

```tsx
import { useState } from "react";
import { useCvcNumber } from "@sooyeoniya/hooks";

function App() {
  const { cvcNumber, cvcNumberValidation, handleCvcNumberChange } =
    useCvcNumber();

  return (
    <>
      <h2>CVC 번호</h2>
      <input
        value={cvcNumber}
        type="text"
        maxLength={3}
        onChange={(e) => handleCvcNumberChange(e.target.value)}
      />
      {cvcNumberValidation.isError && (
        <span>{cvcNumberValidation.errorMessage}</span>
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

```tsx
{
  // CVC 번호 입력값
  cvcNumber: string,  // CVC 번호 (3자리)

  // 유효성 검증 결과
  cvcNumberValidation: {
    isError: boolean,
    errorMessage: string | null
  },

  // 입력값 변경 핸들러
  handleCvcNumberChange: (value: string) => void
}
```

| attribute             | type     | description                                  |
| --------------------- | -------- | -------------------------------------------- |
| cvcNumber             | string   | CVC 번호 입력값 (3자리)                      |
| cvcNumberValidation   | Object   | CVC 번호의 유효성 검증 결과를 담고 있는 객체 |
| handleCvcNumberChange | Function | CVC 번호 입력값 변경을 처리하는 함수         |

### cvcNumberValidation

| attribute    | type           | description                                 |
| ------------ | -------------- | ------------------------------------------- |
| isError      | boolean        | 유효성 검증 에러 여부                       |
| errorMessage | string \| null | 에러가 있을 경우 표시될 메시지, 없으면 null |

## 📌 How to use: usePassword

### 📍 Example

```tsx
import { useState } from "react";
import { usePassword } from "@sooyeoniya/hooks";

function App() {
  const { password, passwordValidation, handlePasswordChange } = usePassword();

  return (
    <>
      <h2>비밀 번호</h2>
      <input
        value={password}
        type="text"
        maxLength={2}
        onChange={(e) => handlePasswordChange(e.target.value)}
      />
      {passwordValidation.isError && (
        <span>{passwordValidation.errorMessage}</span>
      )}
    </>
  );
}

export default App;
```

### 📝 Validation List

1. 비밀번호는 숫자여야한다.
2. 비밀번호는 2자리여야한다.

### ⛏️ Return Value

```tsx
{
  // 비밀번호 입력값
  password: string,  // 비밀번호 (2자리)

  // 유효성 검증 결과
  passwordValidation: {
    isError: boolean,
    errorMessage: string | null
  },

  // 입력값 변경 핸들러
  handlePasswordChange: (value: string) => void
}
```

| attribute            | type     | description                                  |
| -------------------- | -------- | -------------------------------------------- |
| password             | string   | 비밀번호 입력값 (2자리)                      |
| passwordValidation   | Object   | 비밀번호의 유효성 검증 결과를 담고 있는 객체 |
| handlePasswordChange | Function | 비밀번호 입력값 변경을 처리하는 함수         |

### passwordValidation

| attribute    | type           | description                                 |
| ------------ | -------------- | ------------------------------------------- |
| isError      | boolean        | 유효성 검증 에러 여부                       |
| errorMessage | string \| null | 에러가 있을 경우 표시될 메시지, 없으면 null |

## 👥 Author

[sooyeoniya](https://github.com/sooyeoniya),
[minji2219](https://github.com/minji2219)
