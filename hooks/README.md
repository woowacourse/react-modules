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

아래는 `useCardNumbers` 훅의 반환값을 설명하는 표입니다.

| Property                 | Type                                       | Description                                                                                                                                                                                                                                                                  |
| ------------------------ | ------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `cardNumbers`            | `string[]`                                 | 각 카드 번호 부분의 값 카드 브랜드 포매팅 규칙에 맞게 포매팅한 후 결과를 을 배열로 제공합니다. <br/> ex) ['1234', '1234', '1234', '1234'] <br/> 배열로 제공된 값을 자유롭게 문자열로 다시 변경하거나 배열의 값 그대로 사용할 수 있습니다. <br/> ex) `cardNumbers.join('-');` |
| `validationResult`       | `{ isValid: boolean; errorText: string; }` | 카드 입력의 유효성 검사 결과를 포함합니다.                                                                                                                                                                                                                                   |
| `handleCardNumberChange` | `function`                                 | 카드 번호 입력 필드의 변경을 처리하는 함수입니다.                                                                                                                                                                                                                            |

이 훅을 사용하면 각 카드 번호에 따라서 카드 브랜드를 판별할 수 있고, 그에 맞는 유효성 검증과 포매팅 규칙이 적용된 결과를 반환받을 수 있습니다.

### Error Description

`useCardNumbers` 훅은

`visa`, `master`, `diners`, `amex`, `unionpay` 카드 브랜드 판단 기능을 제공합니다.  
각 브랜드 입력 규칙에 맞지 않는 입력을 할 경우, 입력 규칙에 맞는 예외 피드백 메시지를 제공합니다. 다음은 각 브랜드 별 예외 피드백입니다.

|             brand             |  rules  |                 errorText                  |
| :---------------------------: | :-----: | :----------------------------------------: |
|             visa              | 4-4-4-4 | 4-4-4-4 형식의 16자리 숫자를 입력해 주세요 |
|            master             | 4-4-4-4 | 4-4-4-4 형식의 16자리 숫자를 입력해 주세요 |
|            diners             |  4-6-4  |  4-6-4 형식의 16자리 숫자를 입력해 주세요  |
|             amex              |  4-6-5  |  4-6-5 형식의 16자리 숫자를 입력해 주세요  |
|           unionpay            | 4-4-4-4 | 4-4-4-4 형식의 16자리 숫자를 입력해 주세요 |
| none(해당 브랜드가 없는 경우) | 4-4-4-4 | 4-4-4-4 형식의 16자리 숫자를 입력해 주세요 |

추가로, 문자를 입력했을 경우애는 카드 번호의 입력을 막고 해당 규칙에 대한 예외 피드백을 제공합니다.

|       rules        |      errorText       |
| :----------------: | :------------------: |
| 문자를 입력한 경우 | 숫자를 입력해 주세요 |

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

아래는 `useExpiryDate` 훅의 반환값을 설명하는 표입니다.

| Property                 | Type                             | Description                                                                |
| ------------------------ | -------------------------------- | -------------------------------------------------------------------------- |
| `expiryDate`             | `Record<ExpiryDateKeys, string>` | `month`와 `year`을 키로 하는 객체로, 각각 유효기간의 월과 년을 저장합니다. |
| `errorState`             | `boolean`                        | 각 유효기간 입력의 에러 상태를 표현하는 객체입니다.                        |
| `errorText`              | `string`                         | 입력 관련 에러 메시지를 제공합니다.                                        |
| `handleExpiryDateChange` | `function`                       | 유효기간 입력 필드의 변경을 처리하는 함수입니다.                           |
| `isExpiryDateCompleted`  | `boolean`                        | 모든 유효기간 필드(월과 년)가 입력되었는지 여부를 나타냅니다.              |

이 훅을 사용함으로써 개발자는 카드 유효기간 입력 폼의 상태 관리와 유효성 검증을 쉽게 구현할 수 있습니다.

### Error Description

`useExpiryDate` 훅은 카드 유효기간 입력에 대한 유효성 검증 기능을 제공합니다.  
유효하지 입력을 할 경우, 각 입력 규칙에 맞는 예외 피드백 메시지를 제공합니다.  
다음은 각 상황별 예외 피드백입니다.

|            rules             |                errorText                |
| :--------------------------: | :-------------------------------------: |
| 유효하지 않은 월 입력인 경우 | 월 입력은 01 ~ 12 사이의 입력이어야해요 |
| 이미 지난 년도를 입력한 경우 |   이미 지난 년도는 입력할 수 없어요.    |
|  이미 지난 유효 기간인 경우  |        이미 지난 유효기간이에요         |
|      문자를 입력한 경우      |          숫자를 입력해 주세요           |

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

아래는 `useCardHolderName` 훅의 반환값을 설명하는 표입니다.

| Property                     | Type       | Description                                                                                     |
| ---------------------------- | ---------- | ----------------------------------------------------------------------------------------------- |
| `holderName`                 | `string`   | 사용자가 입력한 카드 소유자의 이름입니다. 입력이 유효한 경우, 대문자로 변환됩니다.              |
| `errorState`                 | `boolean`  | 현재 사용자 이름 입력에 오류가 있는지 여부를 나타내는 상태입니다.                               |
| `errorText`                  | `string`   | 입력과 관련된 오류 메시지를 제공합니다.                                                         |
| `handleCardHolderNameChange` | `function` | 카드 소유자 이름 입력 필드의 변경을 처리하는 함수입니다. 입력이 유효하면 이름을 업데이트합니다. |

이 훅을 사용함으로써 개발자는 카드 소유자 이름 입력 폼의 유효성 검사 및 상태 관리를 쉽게 할 수 있습니다. 오류 메시지와 입력 상태 관리를 통해 사용자에게 적절한 피드백을 제공할 수 있습니다.

### Error Description

`useCardHolderName` 훅은 카드 소유자 입력에 대한 유효성 검증 기능을 제공합니다.  
유효하지 입력을 할 경우, 각 입력 규칙에 맞는 예외 피드백 메시지를 제공합니다.  
다음은 각 상황별 예외 피드백입니다.

|              rules               |                  errorText                   |
| :------------------------------: | :------------------------------------------: |
| 유효하지 않은 사용자 입력인 경우 | 사용자 이름은 0 ~ 15자 사이의 영문이어야해요 |
|        문자를 입력한 경우        |             숫자를 입력해 주세요             |

- **useCVCNumber**

```jsx
import React from "react";
import useCVC from "your-library-name";

const CVCNumberForm = () => {
  const { CVCNumber, errorState, errorText, handleCVCChange, isCVCNumberInputCompleted } = useCVCNumber();

  return (
    <form>
      <input type="text" value={CVCNumber} onChange={handleCVCChange} placeholder="CVC" maxLength={4} />
      {errorText && <p>{errorText}</p>}
      <button type="submit" disabled={!CVCNumber.length === 3 || errorState}>
        Submit
      </button>
    </form>
  );
};

export default CVCForm;
```

아래는 `useCVCNumber` 훅의 반환값을 설명하는 표입니다.

## 반환값 설명

| Property                    | Type       | Description                                                                            |
| --------------------------- | ---------- | -------------------------------------------------------------------------------------- |
| `CVCNumber`                 | `string`   | 사용자가 입력한 카드의 CVC 코드입니다.                                                 |
| `errorState`                | `boolean`  | 현재 입력에 오류가 있는지 여부를 나타내는 상태입니다.                                  |
| `errorText`                 | `string`   | 입력과 관련된 오류 메시지를 제공합니다.                                                |
| `handleCVCChange`           | `function` | CVC 입력 필드의 변경을 처리하는 함수입니다. 입력이 유효하면 CVC 코드를 업데이트합니다. |
| `isCVCNumberInputCompleted` | `boolean`  | CVC 번호가 모두 입력되었는지 여부를 나타냅니다.                                        |

이 훅을 사용함으로써 개발자는 CVC 입력 폼의 유효성 검사 및 상태 관리를 쉽게 할 수 있습니다. 오류 메시지와 입력 상태 관리를 통해 사용자에게 적절한 피드백을 제공할 수 있습니다.

### Error Description

`useCVCNumber` 훅은 CVC 번호에 대한 유효성 검증 기능을 제공합니다.  
유효하지 입력을 할 경우, 각 입력 규칙에 맞는 예외 피드백 메시지를 제공합니다.  
다음은 각 상황별 예외 피드백입니다.

|               rules               |          errorText           |
| :-------------------------------: | :--------------------------: |
| 3자리의 숫자를 입력하지 않은 경우 | 3자리의 숫자를 입력해 주세요 |
|        문자를 입력한 경우         |     숫자를 입력해 주세요     |

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

아래는 `useCardPassword` 훅의 반환값을 설명하는 표입니다.

### 반환값 설명

| Property                       | Type       | Description                                                                                      |
| ------------------------------ | ---------- | ------------------------------------------------------------------------------------------------ |
| `cardPassword`                 | `string`   | 사용자가 입력한 카드의 비밀번호입니다.                                                           |
| `errorState`                   | `boolean`  | 현재 입력에 오류가 있는지 여부를 나타내는 상태입니다.                                            |
| `errorText`                    | `string`   | 입력과 관련된 오류 메시지를 제공합니다.                                                          |
| `handleCardPasswordChange`     | `function` | 카드 비밀번호 입력 필드의 변경을 처리하는 함수입니다. 입력이 유효하면 비밀번호를 업데이트합니다. |
| `isCardPasswordInputCompleted` | `boolean`  | 카드 비밀번호가 모두 입력되었는지 여부를 나타냅니다.                                             |

이 훅을 사용함으로써 개발자는 카드 비밀번호 입력 폼의 유효성 검사 및 상태 관리를 쉽게 할 수 있습니다. 오류 메시지와 입력 상태 관리를 통해 사용자에게 적절한 피드백을 제공할 수 있습니다.

### Error Description

`useCardPassword` 훅은 카드 비밀번호 번호에 대한 유효성 검증 기능을 제공합니다.  
유효하지 입력을 할 경우, 각 입력 규칙에 맞는 예외 피드백 메시지를 제공합니다.  
다음은 각 상황별 예외 피드백입니다.

|               rules               |          errorText           |
| :-------------------------------: | :--------------------------: |
| 2자리의 숫자를 입력하지 않은 경우 | 2자리의 숫자를 입력해 주세요 |
|        문자를 입력한 경우         |     숫자를 입력해 주세요     |
