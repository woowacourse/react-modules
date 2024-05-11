# chlwlstlf-card-input-hooks

카드 정보 입력과 유효성 검사 커스텀 훅

## - 설치

```
npm install chlwlstlf-card-input-hooks
```

## - useCardNumbersInput 사용법

```jsx
import { useState } from "react";
import { useCardNumbersInput } from "chlwlstlf-card-input-hooks";

function App() {
  const { CardNumbersState, handleCardNumbersChange } = useCardNumbersInput();

  return (
    <>
      <h1>Hooks Modules</h1>
      <h2>카드 번호</h2>
      <input
        value={CardNumbersState.value}
        maxLength={CardNumbersState.maxLength}
        type="text"
        onChange={handleCardNumbersChange}
      />
      <div>{CardNumbersState.errorMessage}</div>
    </>
  );
}

export default App;
```

### - useCardNumbersInput의 유효성 검증 목록

1. 각 카드 번호는 값이 있어야한다.
2. 각 카드 번호는 숫자여야한다.
3. 각 카드 번호는 4자리여야한다.

### - CardNumbersState 설명

- value: 카드 브랜드와 번호에 맞게 포맷팅 된 값
- isValid: 유효한 지 여부
- errorMessage: 에러메세지
- cardBrand: 카드 번호에 따른 카드 브랜드
- maxLength: 카드 브랜드에 따른 카드 번호 자릿수

<br>
<br>

## - useExpiryDateInput 사용법

```jsx
import { useState } from "react";
import { useExpiryDateInput } from "chlwlstlf-card-input-hooks";

function App() {
  const { ExpiryDateState, handleExpiryDateChange } = useExpiryDateInput();

  return (
    <>
      <h2>카드 유효 기간</h2>
      <input
        value={ExpiryDateState.value}
        type="text"
        maxLength={5}
        onChange={handleExpiryDateChange}
      />
      <div>{ExpiryDateState.errorMessage}</div>
    </>
  );
}

export default App;
```

### - useExpiryDateInput 유효성 검증 목록

1. 월과 연도는 값이 있어야한다.
2. 월과 연도는 숫자여야한다.
3. 월과 연도는 2자리여야한다.
4. 월은 1부터 12 사이의 숫자여야한다.

### - ExpiryDateState 설명

- value: 날짜에 맞게 포맷팅된 값(MM/YY)
- isValid: 유효한 지 여부
- errorMessage: 에러메세지

<br>
<br>

## - useCardHolderInput 사용법

```jsx
import { useState } from "react";
import { useCardHolderInput } from "chlwlstlf-card-input-hooks";

function App() {
  const { CardHolderState, handleCardHolderChange } = useCardHolderInput();

  return (
    <>
      <h2>사용자 이름</h2>
      <input
        value={CardHolderState.value}
        type="text"
        maxLength={22}
        onChange={handleCardHolderChange}
      />
      <div>{CardHolderState.errorMessage}</div>
    </>
  );
}

export default App;
```

### - useCardHolderInput 유효성 검증 목록

1. 사용자 이름은 값이 존재해야한다.
2. 사용자 이름은 영어여야한다.
3. 사용자 이름은 최대 21까지 입력 가능하다.

### - CardHolderState 설명

- value: 영어면 대문자로 포맷팅된 값
- isValid: 유효한 지 여부
- errorMessage: 에러메세지

<br>
<br>

## - useCVCInput 사용법

```jsx
import { useState } from "react";
import { useCVCInput } from "chlwlstlf-card-input-hooks";

function App() {
  const { CVCState, handleCVCChange } = useCVCInput();

  return (
    <>
      <h2>CVC</h2>
      <input
        value={CVCState.value}
        type="text"
        maxLength={3}
        onChange={handleCVCChange}
      />
      <div>{CVCState.errorMessage}</div>
    </>
  );
}

export default App;
```

### - useCVCInput 유효성 검증 목록

1. CVC 번호는 값이 있어야한다.
2. CVC 번호는 숫자여야한다.
3. CVC 번호는 3자리여야한다.

### - CVCState 설명

- value: 입력된 값
- isValid: 유효한 지 여부
- errorMessage: 에러메세지

<br>
<br>

## - usePasswordInput 사용법

```jsx
import { useState } from "react";
import { usePasswordInput } from "chlwlstlf-card-input-hooks";

function App() {
  const { PasswordState, handlePasswordChange } = usePasswordInput();

  return (
    <>
      <h2>비밀번호</h2>
      <input
        value={PasswordState.value}
        type="password"
        maxLength={2}
        onChange={handlePasswordChange}
      />
      <div>{PasswordState.errorMessage}</div>
    </>
  );
}

export default App;
```

### - usePasswordInput 유효성 검증 목록

1. 비밀번호는 값이 있어야한다.
2. 비밀번호는 숫자여야한다.
3. 비밀번호는 2자리여야한다.

### - PasswordState 설명

- value: 입력된 값
- isValid: 유효한 지 여부
- errorMessage: 에러메세지

## Author

- [tenten github](https://github.com/chlwlstlf)

## License

MIT
