## `hook-simo-harry` Get Started

### 설치하기

```shell
npm install hook-simo-harry
```

### 사용예시

- **useCardNumbers**

```jsx
import React from "react";
import useCardNumbers from "hook-simo-harry";

const CardNumberForm = () => {
  const { cardNumbers, validationResult, handleCardNumberChange } = useCardNumbers();

  return (
    <form>
      <input
        key="your input key"
        name="your input name"
        value={cardNumbers.join("-")}
        onChange={(e) => handleCardNumberChange(e.target.value.replaceAll("-", ""))}
        placeholder="please enter your card number"
      />
      {validationResult.errorText && <p>{validationResult.errorText}</p>}
      <button type="submit" disabled={!validationResult.isValid}>
        Submit
      </button>
    </form>
  );
};

export default CardNumberForm;
```

### 반환값 설명

아래는 `useCardNumbers` 훅의 반환값을 설명하는 표입니다 :)

| Property                 | Type                                       | Description                                                                                                                                                                                                                                                                  |
| ------------------------ | ------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `cardNumbers`            | `string[]`                                 | 각 카드 번호 부분의 값 카드 브랜드 포매팅 규칙에 맞게 포매팅한 후 결과를 을 배열로 제공합니다. <br/> ex) ['1234', '1234', '1234', '1234'] <br/> 배열로 제공된 값을 자유롭게 문자열로 다시 변경하거나 배열의 값 그대로 사용할 수 있습니다. <br/> ex) `cardNumbers.join('-');` |
| `validationResult`       | `{ isValid: boolean; errorText: string; }` | 카드 입력의 유효성 검사 결과를 포함합니다.                                                                                                                                                                                                                                   |
| `handleCardNumberChange` | `function`                                 | 카드 번호 입력 필드의 변경을 처리하는 함수입니다.                                                                                                                                                                                                                            |

이 훅을 사용하면 각 카드 번호에 따라서 카드 브랜드를 판별할 수 있고, 그에 맞는 유효성 검증과 포매팅 규칙이 적용된 결과를 반환받을 수 있습니다.

- **useExpiryDate**

```jsx
import React from "react";
import useExpiryDate from "your-library-name";

const ExpiryDateForm = () => {
  const { expiryDate, isExpiryDateCompleted, errorState, errorText, handleExpiryDateChange } = useExpiryDate();

  return (
    <form>
      <input name="month" value={expiryDate.month} onChange={handleExpiryDateChange} placeholder="MM" />
      <input name="year" value={expiryDate.year} onChange={handleExpiryDateChange} placeholder="YY" />
      {errorText && <p>{errorText}</p>}
      <button type="submit" disabled={!isExpiryDateCompleted}>
        Submit
      </button>
    </form>
  );
};

export default ExpiryDateForm;
```

### 반환값 설명

아래는 `useExpiryDate` 훅의 반환값을 설명하는 표입니다 :)

| Property                 | Type                             | Description                                                                |
| ------------------------ | -------------------------------- | -------------------------------------------------------------------------- |
| `expiryDate`             | `Record<ExpiryDateKeys, string>` | `month`와 `year`을 키로 하는 객체로, 각각 유효기간의 월과 년을 저장합니다. |
| `isExpiryDateCompleted`  | `boolean`                        | 모든 유효기간 필드(월과 년)가 적절히 입력되었는지 여부를 나타냅니다.       |
| `errorState`             | `boolean`                        | 각 유효기간 입력의 에러 상태를 표현하는 객체입니다.                        |
| `errorText`              | `string`                         | 입력 관련 에러 메시지를 제공합니다.                                        |
| `handleExpiryDateChange` | `function`                       | 유효기간 입력 필드의 변경을 처리하는 함수입니다.                           |

이 훅을 사용함으로써 개발자는 카드 유효기간 입력 폼의 상태 관리와 유효성 검증을 쉽게 구현할 수 있습니다.

- **useCardHolderName**

```jsx
import React from "react";
import useCardHolderName from "your-library-name";

const CardHolderNameForm = () => {
  const { holderName, errorState, errorText, handleCardHolderNameChange } = useCardHolderName();

  return (
    <form>
      <input type="text" value={holderName} onChange={handleCardHolderNameChange} placeholder="Card Holder Name" />
      {errorText && <p>{errorText}</p>}
      <button type="submit" disabled={errorState}>
        Submit
      </button>
    </form>
  );
};

export default CardHolderNameForm;
```

### 반환값 설명

아래는 `useCardHolderName` 훅의 반환값을 설명하는 표입니다 :)

| Property                     | Type       | Description                                                                                     |
| ---------------------------- | ---------- | ----------------------------------------------------------------------------------------------- |
| `holderName`                 | `string`   | 사용자가 입력한 카드 소유자의 이름입니다. 입력이 유효한 경우, 대문자로 변환됩니다.              |
| `errorState`                 | `boolean`  | 현재 사용자 이름 입력에 오류가 있는지 여부를 나타내는 상태입니다.                               |
| `errorText`                  | `string`   | 입력과 관련된 오류 메시지를 제공합니다.                                                         |
| `handleCardHolderNameChange` | `function` | 카드 소유자 이름 입력 필드의 변경을 처리하는 함수입니다. 입력이 유효하면 이름을 업데이트합니다. |

이 훅을 사용함으로써 개발자는 카드 소유자 이름 입력 폼의 유효성 검사 및 상태 관리를 쉽게 할 수 있습니다. 오류 메시지와 입력 상태 관리를 통해 사용자에게 적절한 피드백을 제공할 수 있습니다.

- **useCVC**

```jsx
import React from "react";
import useCVC from "your-library-name";

const CVCForm = () => {
  const { cvc, errorState, errorText, handleCVCChange } = useCVC();

  return (
    <form>
      <input type="text" value={cvc} onChange={handleCVCChange} placeholder="CVC" maxLength={4} />
      {errorText && <p>{errorText}</p>}
      <button type="submit" disabled={!cvc.length === 3 || errorState}>
        Submit
      </button>
    </form>
  );
};

export default CVCForm;
```

아래는 `useCVC` 훅의 반환값을 설명하는 표입니다 :)

## 반환값 설명

| Property          | Type       | Description                                                                            |
| ----------------- | ---------- | -------------------------------------------------------------------------------------- |
| `cvc`             | `string`   | 사용자가 입력한 카드의 CVC 코드입니다.                                                 |
| `errorState`      | `boolean`  | 현재 입력에 오류가 있는지 여부를 나타내는 상태입니다.                                  |
| `errorText`       | `string`   | 입력과 관련된 오류 메시지를 제공합니다.                                                |
| `handleCVCChange` | `function` | CVC 입력 필드의 변경을 처리하는 함수입니다. 입력이 유효하면 CVC 코드를 업데이트합니다. |

이 훅을 사용함으로써 개발자는 CVC 입력 폼의 유효성 검사 및 상태 관리를 쉽게 할 수 있습니다. 오류 메시지와 입력 상태 관리를 통해 사용자에게 적절한 피드백을 제공할 수 있습니다.

- **useCardPassword**

```jsx
import React from "react";
import useCardPassword from "your-library-name";

const CardPasswordForm = () => {
  const { cardPassword, errorState, errorText, handleCardPasswordChange } = useCardPassword();

  return (
    <form>
      <input type="password" value={cardPassword} onChange={handleCardPasswordChange} placeholder="Card Password" />
      {errorText && <p>{errorText}</p>}
      <button type="submit" disabled={!cardPassword.length === 4 || errorState}>
        Submit
      </button>
    </form>
  );
};

export default CardPasswordForm;
```

아래는 `useCardPassword` 훅의 반환값을 설명하는 표입니다 😃

### 반환값 설명

| Property                   | Type       | Description                                                                                      |
| -------------------------- | ---------- | ------------------------------------------------------------------------------------------------ |
| `cardPassword`             | `string`   | 사용자가 입력한 카드의 비밀번호입니다.                                                           |
| `errorState`               | `boolean`  | 현재 입력에 오류가 있는지 여부를 나타내는 상태입니다.                                            |
| `errorText`                | `string`   | 입력과 관련된 오류 메시지를 제공합니다.                                                          |
| `handleCardPasswordChange` | `function` | 카드 비밀번호 입력 필드의 변경을 처리하는 함수입니다. 입력이 유효하면 비밀번호를 업데이트합니다. |

이 훅을 사용함으로써 개발자는 카드 비밀번호 입력 폼의 유효성 검사 및 상태 관리를 쉽게 할 수 있습니다. 오류 메시지와 입력 상태 관리를 통해 사용자에게 적절한 피드백을 제공할 수 있습니다.

`
