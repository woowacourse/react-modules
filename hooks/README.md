# chlwlstlf-card-input-hooks

카드 정보 입력과 유효성 검사 커스텀 훅

## - 설치

```
npm install chlwlstlf-card-input-hooks
```

## - 각 hooks에 대한 공통 사용법

### 1. import 하기

`chlwlstlf-card-input-hooks` 에는 아래 5가지에 대한 입력 커스텀 훅이 있습니다.

- 카드 번호: useCardNumbersInput
- 유효 기간: useExpiryDateInput
- 소유자 이름: useCardHolderInput
- CVC: useCVCInput
- 비밀 번호: usePasswordInput

예시 코드

```jsx
import { useCardNumbersInput, useExpiryDateInput, useCardHolderInput, useCVCInput, usePasswordInput } from "chlwlstlf-card-input-hooks";
```

<br>

### 2. 선언하기

```jsx
const { 입력한_값에_대한_정보, 핸들러_함수 } = 카드_정보입력_커스텀훅();
```

예시 코드

```jsx
const { CardNumbersState, handleCardNumbersChange } = useCardNumbersInput();
```

1\. `입력한_값에_대한_정보` 에는 3가지 정보가 담겨 있습니다.

- value: 사용자가 입력한 값
- isValid: 유효성 여부
- errorMessage: 에러메세지(유효한 입력이라면 빈 문자열입니다.)

※ useCardNumbersInput는 이 세개의 정보에서 cardBrand와 maxLength가 추가됩니다.

2\. `핸들러_함수` 는 `onChange={handleCardNumbersChange}` 이런식으로 사용할 수 있으며 인자는 event이기 때문에 인자 전달하는 코드를 제거해도 됩니다.

3\. 내부 코드 살펴보기

1. state를 선언합니다. 이때 state에는 value, isValid, errorMessage 정보가 담겨있습니다.
2. 핸들러 함수를 선언합니다. e.target.value로 value를 설정한 후 유효성 검사를 진행합니다. 유효성 검사가 끝나면 state를 업데이트해줍니다.

```tsx
const usePasswordInput = (): Props => {
  const [passwordState, setPasswordState] = useState<InputState>({
    value: "",
    isValid: false,
    errorMessage: "",
  });

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    let isValid = true;
    let errorMessage = "";

    if (!validator.isValidEmptyValue(value)) {
      isValid = false;
      errorMessage = ERROR_MESSAGE.EMPTY_VALUE;
    } else if (!validator.isValidDigit(value)) {
      isValid = false;
      errorMessage = ERROR_MESSAGE.ONLY_NUMBER;
    } else if (!validator.isValidLength({ value: value, matchedLength: MAX_PASSWORD_LENGTH })) {
      isValid = false;
      errorMessage = ERROR_MESSAGE.INVALID_PASSWORD_LENGTH;
    }

    setPasswordState({
      value: value,
      isValid,
      errorMessage,
    });
  };

  return { PasswordState: passwordState, handlePasswordChange };
};
```

<br>

### 3. 유효성 검증 목록

유효성 검증은 6개입니다.

1. 값이 비어있다면 에러메세지를 반환합니다.
2. 숫자만 입력해야 하는 input에 다른 입력이 들어온다면 에러메세지를 반환합니다.
3. 영어만 입력해야 하는 input에 다른 입력이 들어온다면 에러메세지를 반환합니다.
4. 카드 번호 16자리, cvc 3자리 등 정해진 길이를 벗어나는 입력을 한다면 에러메세지를 반환합니다.
5. 소유자 이름은 최대 21자까지 적을 수 있으며 이 길이를 벗어나는 입력을 한다면 에러메세지를 반환합니다.
6. 월은 1부터 12사이의 숫자만 입력할 수 있으며 이 범위를 벗어나느 입력을 한다면 에러메세지를 반환합니다.

<br>

+) 유효성 검증에 실패한다면 isValid가 false로 되고, 에러메세지에 문구가 들어가게 됩니다.

- isValid로 인풋의 색상을 변경하거나 submit이 안 되게 막을 수 있습니다.
- 에러메세지를 인풋 하단에 띄우거나 alert창, toast, modal 등으로 사용자에게 알릴 수 있습니다.

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
