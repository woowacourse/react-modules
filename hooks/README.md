# Get started

당신의 패키지 매니저를 통해 `@pakxe/react-card-info-hooks` 을 설치해 주세요:

```shell
npm install @pakxe/react-card-info-hooks
```

`@pakxe/react-card-info-hooks` 컴포넌트를 import 하세요:

```javascript
import { useCardCVC } from '@pakxe/react-card-info-hooks';

export const MyComponent = () => {
  const { cvcNumber, isValidCVCNumber, cvcNumberErrorMessage, handleCVCNumberChange } = useCardCVC();

  return (
    <>
      <h3>useCardCVC</h3>
      <input type='text' value={cvcNumber} onChange={(e) => handleCVCNumberChange(e.target.value)} />
      <div>
        <p>{isValidCVCNumber ? 'true' : 'false'}</p>
        <p>{cvcNumberErrorMessage}</p>
      </div>
    </>
  );
};
```

<br />

# 카드 훅 라이브러리 사용하기

카드 훅 라이브러리의 각 훅은 카드 정보 처리와 관련된 특정 기능을 제공합니다. 아래는 각 훅의 기능에 대한 정확한 설명입니다:

### `useCardNumber`

카드 번호를 관리합니다. 카드 번호를 받고, 카드 번호의 유효성을 검증하며, 유효한 값만으로 구성된 카드 번호로 관리됩니다.

카드 번호로 브랜드를 식별합니다. 현재 지원되는 브랜드는 다음과 같습니다.

- Visa
- Master Card
- Diners
- AMEX
- Union Pay
- JCB
- Discover

### `useCardCompany`

카드 회사를 선택합니다. 입력으로 들어온 카드 회사 리스트와 맞지 않는 값 또는 선택하지 않은 경우에 대해 유효성을 검증합니다.

### `useCardExpirationDate`

카드의 만료 날짜를 관리합니다. 사용자가 입력한 만료 월과 연도를 처리하고, 현재 날짜와 비교하여 카드의 유효성을 판단합니다. 또한, 만료 날짜가 유효하지 않거나 만료된 경우에 대한 에러 메시지를 제공합니다.

### `useCardOwnerName`

카드 소유자의 이름을 관리합니다. 카드 사용자의 이름을 입력받고 저장하는 기능을 제공합니다. 또한, 이름의 유효성을 검사하고, 유효한 값만으로 구성된 카드 소유자명으로 관리됩니다.

### `useCardCVC`

카드의 CVC(카드 검증 코드)를 관리합니다. CVC 입력을 받고, 해당 CVC가 유효한지 검증합니다. 일반적으로 CVC는 카드의 뒷면에 인쇄된 3자리 또는 4자리 숫자입니다. 유효한 값만으로 구성된 CVC로 관리됩니다.

### `useCardPassword`

카드 거래 시 사용되는 비밀번호를 관리합니다. 이 훅은 카드 비밀번호를 안전하게 입력받고 저장하며, 비밀번호의 유효성을 검사할 수 있는 기능을 제공합니다. 유효한 값만으로 구성된 비밀번호로 관리됩니다.

<br />

# 매개변수 정의

카드 훅 라이브러리를 사용하실 때는 적절한 인자를 전달해야 합니다:

`?` 가 붙은 인자는 필요시 선택적으로 추가할 수 있습니다.

### `useCardNumber` 입력

| Name             | Type     | Default | Description                  |
| ---------------- | -------- | ------- | ---------------------------- |
| `initialNumber`? | `string` | `''`    | 초기 카드 번호를 전달합니다. |

### `useCardNumber` 반환 값

| Name                     | Type                                                                    | Default | Description                                          |
| ------------------------ | ----------------------------------------------------------------------- | ------- | ---------------------------------------------------- |
| `cardNumber`             | `string`                                                                | -       | 현재 입력된 카드 번호입니다.                         |
| `cardType`               | `'VISA',  'MASTER',  'DINERS',  'AMEX',  'UNION_PAY', 'JCB', 'UNKNOWN'` | -       | 카드 타입을 저장하고 유지합니다.                     |
| `isValidCardNumber`      | `boolean`                                                               | -       | 카드 번호의 유효성 여부입니다.                       |
| `cardNumberErrorMessage` | `string`                                                                | -       | 카드 번호 입력 시 발생하는 오류 메시지입니다.        |
| `handleCardNumberChange` | `function`                                                              | -       | 카드 번호 입력 및 유효성 검사를 처리하는 함수입니다. |

<br />

<details>
<summary>사용 예시</summary>

```js
export const MyComponent = () => {
  const { cardNumber, isValidCardNumbers, cardNumberErrorMessages, handleCardNumberChange } = useCardNumber('1234');

  return (
    <>
      <h3>useCardNumber</h3>
      <input type='text' value={cardNumber} onChange={(e) => handleCardNumberChange(e.target.value)}></input>
      <div>
        <p>{`${isValidCardNumber}`}</p>
        <p>{cardNumberErrorMessage}</p>
      </div>
    </>
  );
};
```

</details>

### `useCardCompany` 입력

| Name                   | Type       | Default | Description                         |
| ---------------------- | ---------- | ------- | ----------------------------------- |
| `validCardCompanyList` | `string[]` | -       | 유효한 카드 회사 목록을 전달합니다. |
| `initialSelected`?     | `string`   | `''`    | 카드 회사 초기값을 전달합니다.      |

### `useCardCompany` 반환 값

| Name                      | Type       | Description                                         |
| ------------------------- | ---------- | --------------------------------------------------- |
| `cardCompany`             | `string`   | 현재 선택된 카드 회사입니다.                        |
| `isValidCardCompany`      | `boolean`  | 선택된 카드 회사가 유효한 목록에 있는지 여부입니다. |
| `cardCompanyErrorMessage` | `string`   | 카드 회사 선택시 발생하는 오류 메시지입니다.        |
| `handleCardCompanyChange` | `function` | 카드 회사 변경을 처리하고 오류 메시지를 설정합니다. |

<br />

<details>
<summary>사용 예시</summary>

```js
export const MyComponent = () => {
  const { cardCompany, isValidCardCompany, cardCompanyErrorMessage, handleCardCompanyChange } = useCardCompany([
    '신한카드',
    '롯데카드',
    'BC카드',
  ]);

  return (
    <>
      <h3>useCardCompany</h3>
      <select onChange={(e) => handleCardCompanyChange(e.target.value)}>
        <option selected={cardCompany === ''} value=''>
          선택해 주세요
        </option>
        <option selected={cardCompany === '신한카드'}>신한카드</option>
        <option selected={cardCompany === '롯데카드'}>롯데카드</option>
        <option selected={cardCompany === 'BC카드'}>BC카드</option>
      </select>
      <div>
        <p>{isValidCardCompany ? 'true' : 'false'}</p>
        <p>{cardCompanyErrorMessage}</p>
      </div>
    </>
  );
};
```

</details>

### `useCardExpirationDate` 입력

| Name     | Type     | Default | Description                            |
| -------- | -------- | ------- | -------------------------------------- |
| `month`? | `string` | `''`    | 카드 만료 월의 초기 값을 설정합니다.   |
| `year`?  | `string` | `''`    | 카드 만료 연도의 초기 값을 설정합니다. |

### `useCardExpirationDate` 반환 값

| Name                 | Type       | Description                                        |
| -------------------- | ---------- | -------------------------------------------------- |
| `month`              | `string`   | 현재 입력된 카드 만료 월입니다.                    |
| `year`               | `string`   | 현재 입력된 카드 만료 연도입니다.                  |
| `handleMonthChange`  | `function` | 카드 만료 월을 변경하는 함수입니다.                |
| `handleYearChange`   | `function` | 카드 만료 연도를 변경하는 함수입니다.              |
| `monthErrorMessages` | `string`   | 카드 만료 월 입력 시 발생하는 오류 메시지입니다.   |
| `yearErrorMessages`  | `string`   | 카드 만료 연도 입력 시 발생하는 오류 메시지입니다. |
| `isValidMonth`       | `boolean`  | 입력된 카드 만료 월의 유효성 여부입니다.           |
| `isValidYear`        | `boolean`  | 입력된 카드 만료 연도의 유효성 여부입니다.         |

<br />

<details>
<summary>사용 예시</summary>

```js
import { useCardExpirationDate } from '@pakxe/react-card-info-hooks';

export const MyComponent = () => {
  const {
    month,
    year,
    handleMonthChange,
    handleYearChange,
    monthErrorMessages,
    yearErrorMessages,
    isValidMonth,
    isValidYear,
  } = useCardExpirationDate();

  return (
    <>
      <h3>Card Expiration Date</h3>
      <div>
        <label htmlFor='month'>Month:</label>
        <input
          type='text'
          id='month'
          value={month}
          onChange={(e) => handleMonthChange(e.target.value)}
          placeholder='MM'
        />
        <p>{isValidMonth ? 'Valid Month' : 'Invalid Month'}</p>
        <p>{monthErrorMessages}</p>
      </div>
      <div>
        <label htmlFor='year'>Year:</label>
        <input type='text' id='year' value={year} onChange={(e) => handleYearChange(e.target.value)} placeholder='YY' />
        <p>{isValidYear ? 'Valid Year' : 'Invalid Year'}</p>
        <p>{yearErrorMessages}</p>
      </div>
    </>
  );
};
```

</details>

### `useCardOwnerName` 입력

| Name           | Type     | Default | Description                           |
| -------------- | -------- | ------- | ------------------------------------- |
| `maxLength`    | `number` | `21`    | 소유자 이름의 최대 길이를 설정합니다. |
| `initialName`? | `string` | `''`    | 카드 소유자의 초기 이름을 설정합니다. |

### `useCardOwnerName` 반환 값

| Name                    | Type       | Description                                                    |
| ----------------------- | ---------- | -------------------------------------------------------------- |
| `ownerName`             | `string`   | 현재 입력된 카드 소유자 이름입니다.                            |
| `isValidOwnerName`      | `boolean`  | 입력된 카드 소유자 이름의 유효성 여부입니다.                   |
| `ownerNameErrorMessage` | `string`   | 카드 소유자 이름 입력 시 발생하는 오류 메시지입니다.           |
| `handleOwnerNameChange` | `function` | 카드 소유자 이름 변경을 처리하고 유효성을 검사하는 함수입니다. |

<br />

<details>
<summary>사용 예시</summary>

```js
import { useCardOwnerName } from '@pakxe/react-card-info-hooks';

export const MyComponent = () => {
  const { ownerName, isValidOwnerName, ownerNameErrorMessage, handleOwnerNameChange } = useCardOwnerName();

  return (
    <>
      <h3>useCardOwnerName</h3>
      <input type='text' value={ownerName} onChange={(e) => handleOwnerNameChange(e.target.value)} />
      <div>
        <p>{isValidOwnerName ? 'true' : 'false'}</p>
        <p>{ownerNameErrorMessage}</p>
      </div>
    </>
  );
};
```

</details>

### `useCardCVC` 입력

| Name                | Type     | Default | Description                        |
| ------------------- | -------- | ------- | ---------------------------------- |
| `validLength`       | `number` | `3`     | CVC 번호의 유효 길이를 설정합니다. |
| `initialCVCNumber`? | `string` | `''`    | 초기 CVC 번호를 설정합니다.        |

### `useCardCVC` 반환 값

| Name                    | Type       | Description                                            |
| ----------------------- | ---------- | ------------------------------------------------------ |
| `cvcNumber`             | `string`   | 현재 입력된 CVC 번호입니다.                            |
| `isValidCVCNumber`      | `boolean`  | 입력된 CVC 번호의 유효성 여부입니다.                   |
| `cvcNumberErrorMessage` | `string`   | CVC 번호 입력 시 발생하는 오류 메시지입니다.           |
| `handleCVCNumberChange` | `function` | CVC 번호 변경을 처리하고 유효성을 검사하는 함수입니다. |

<br />

<details>
<summary>사용 예시</summary>

```js
import { useCardCVC } from '@pakxe/react-card-info-hooks';

export const MyComponent = () => {
  const { cvcNumber, isValidCVCNumber, cvcNumberErrorMessage, handleCVCNumberChange } = useCardCVC(4);

  // 이제 카드 CVC 번호는 4자리 숫자여야만 유효합니다.

  return (
    <>
      <h3>useCardCVC</h3>
      <input type='text' value={cvcNumber} onChange={(e) => handleCVCNumberChange(e.target.value)} />;<div>
        <p>{isValidCVCNumber ? 'true' : 'false'}</p>
        <p>{cvcNumberErrorMessage}</p>
      </div>
    </>
  );
};
```

</details>

### `useCardPassword` 입력

| Name          | Type     | Default | Description                             |
| ------------- | -------- | ------- | --------------------------------------- |
| `validLength` | `number` | `2`     | 유효한 카드 비밀번호 길이를 전달합니다. |

### `useCardPassword` 반환 값

| Name                   | Type       | Description                                                 |
| ---------------------- | ---------- | ----------------------------------------------------------- |
| `password`             | `string`   | 현재 입력된 카드 패스워드입니다.                            |
| `isValidPassword`      | `boolean`  | 입력된 카드 패스워드의 유효성 여부입니다.                   |
| `passwordErrorMessage` | `string`   | 카드 패스워드 입력 시 발생하는 오류 메시지입니다.           |
| `handlePasswordChange` | `function` | 카드 패스워드 변경을 처리하고 유효성을 검사하는 함수입니다. |

<br />

<details>
<summary>사용 예시</summary>

```js
import { useCardPassword } from '@pakxe/react-card-info-hooks';

export const MyComponent = () => {
  const { password, isValidPassword, passwordErrorMessage, handlePasswordChange } = useCardPassword(4);

  // 이제 카드 비밀번호는 4자리 숫자여야만 유효합니다.

  return (
    <>
      <h3>useCardPassword</h3>
      <input type='text' value={password} onChange={(e) => handlePasswordChange(e.target.value)} />
      <div>
        <p>{isValidPassword ? 'true' : 'false'}</p>
        <p>{passwordErrorMessage}</p>
      </div>
      ;
    </>
  );
};
```

</details>

# PresetModal

간편하게 사용할 수 있는 3종류의 모달입니다.

## AlertModal

### 스냅샷

![alt text](image.png)

### 사용 예시

```js
<AlertModal
  isOpen={isOpen}
  close={() => setIsOpen(false)}
  title='아이디를 입력해주세요.'
  description='아이디는 필수로 입력해야 합니다.'
  onConfirm={() => setIsOpen(false)}
/>
```

## ConfirmModal

### 스냅샷

![alt text](image-1.png)

### 사용 예시

```js
<ConfirmModal
  isOpen={isOpen}
  close={() => setIsOpen(false)}
  title='카드를 삭제하시겠습니까?'
  description='삭제하면 복구하실 수 없습니다.'
  onConfirm={() => setIsOpen(false)}
/>
```

## PromptModal

### 스냅샷

![alt text](image-2.png)

### 사용 예시

```js
<PromptModal
  onConfirm={() => setIsOpen(false)}
  value={value}
  onChange={handleChange}
  isOpen={isOpen}
  close={() => setIsOpen(false)}
  title='쿠폰 번호를 입력해 주세요.'
/>
```
