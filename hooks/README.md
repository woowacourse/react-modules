# Get started

당신의 패키지 매니저를 통해 `@hannuny/react-card-hooks` 을 설치해 주세요:

```shell
npm install @hannuny/react-card-hooks
```

카드 훅을 import 하세요:

```javascript
import { useCardCVC } from '@hannuny/react-card-hooks';

export const MyComponent = () => {
  const { cvcNumber, isValidCVCNumber, cvcNumberErrorMessage, handleCVCNumberChange } = useCardCVC();

  return (
    <>
      <h3>useCardCVC</h3>
      <input type="text" value={cvcNumber} onChange={(e) => handleCVCNumberChange(e.target.value)} />
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

카드 번호를 관리합니다. 카드 번호를 받고, 카드 타입을 결정하며, 카드 번호의 유효성을 검증하여 카드 타입 별 규칙에 적절하게 자동으로 포맷팅된 카드 번호를 제공합니다.

### `useCardExpirationDate`

카드 만료 일자를 관리합니다. 카드 만료 일자를 받고, 카드 만료 일자의 유효성을 검증하여 유효한 카드 만료 일자 값을 제공합니다.

### `useCardCVC`

카드 CVC(카드 검증 코드) 번호를 관리합니다. 카드 CVC 번호 입력을 받고, 카드 CVC 번호가 유효한지 검증하여 유효한 카드 CVC 번호 값을 제공합니다. 일반적으로 카드 CVC 번호는 카드의 뒷면에 인쇄된 3자리 또는 4자리 숫자입니다.

### `useCardPassword`

카드 비밀 번호를 관리합니다. 카드 비밀 번호를 안전하게 입력받고, 카드 비밀 번호의 유효성을 검증하여 유효한 카드 비밀 번호 값을 제공합니다.

### `useCardOwnerName`

카드 소유자 이름을 관리합니다. 카드 소유자 이름을 받고, 카드 소유자 이름의 유효성을 검증하여 유효한 카드 소유자 이름 값을 제공합니다.

### `useCardCompany`

카드 회사를 관리합니다. 카드 회사의 유효성을 검증하여 유효한 카드 회사 값을 제공합니다.

<br />

# 매개변수 정의

카드 훅 라이브러리를 사용하실 때는 적절한 인자를 전달해야 합니다:

### `useCardNumber`

| Name           | Type     | Default | Description                    |
| -------------- | -------- | ------- | ------------------------------ |
| `initialValue` | `string` | `''`    | 카드 번호 초기값을 전달합니다. |

<br />

### `useCardExpirationDate`

| Name                | Type     | Default | Description                                |
| ------------------- | -------- | ------- | ------------------------------------------ |
| `initialMonthValue` | `string` | `''`    | 카드 만료 일자의 월 초기값을 전달합니다.   |
| `initialYearValue`  | `string` | `''`    | 카드 만료 일자의 년도 초기값을 전달합니다. |

<br />

### `useCardCVC`

| Name           | Type     | Default | Description                    |
| -------------- | -------- | ------- | ------------------------------ |
| `validLength`  | `number` | `3`     | 유효한 CVC 길이를 전달합니다.  |
| `initialValue` | `string` | `''`    | 카드 번호 초기값을 전달합니다. |

<br />

<details>
<summary>사용 예시</summary>

```js
export const MyComponent = () => {
  const { cvcNumber, isValidCVCNumber, cvcNumberErrorMessage, handleCVCNumberChange } = useCardCVC(4);

  // 이제 카드 CVC 번호는 4자리 숫자여야만 유효합니다.
};
```

</details>
<br />

### `useCardPassword`

| Name           | Type     | Default | Description                             |
| -------------- | -------- | ------- | --------------------------------------- |
| `validLength`  | `number` | `2`     | 유효한 카드 비밀번호 길이를 전달합니다. |
| `initialValue` | `string` | `''`    | 카드 번호 초기값을 전달합니다.          |

<br />

<details>
<summary>사용 예시</summary>

```js
export const MyComponent = () => {
  const { password, isValidPassword, passwordErrorMessage, handlePasswordChange } = useCardPassword(4);

  // 이제 카드 비밀번호는 4자리 숫자여야만 유효합니다.
};
```

</details>
<br />

### `useCardOwnerName`

| Name           | Type     | Default | Description                                |
| -------------- | -------- | ------- | ------------------------------------------ |
| `validLength`  | `number` | `21`    | 유효한 카드 소유자 이름 길이를 전달합니다. |
| `initialValue` | `string` | `''`    | 카드 소유자 이름 초기값을 전달합니다.      |

<br />

<details>
<summary>사용 예시</summary>

```js
export const MyComponent = () => {
  const { ownerName, isValidOwnerName, ownerNameErrorMessage, handleOwnerNameChange } = useCardOwnerName(10);

  // 이제 카드 소유자 이름은 10자리 숫자여야만 유효합니다.
};
```

</details>
<br />

### `useCardCompany`

| Name                   | Type       | Default | Description                         |
| ---------------------- | ---------- | ------- | ----------------------------------- |
| `validCardCompanyList` | `string[]` | -       | 유효한 카드 회사 목록을 전달합니다. |
| `initialValue`         | `string`   | `''`    | 카드 회사 초기값을 전달합니다.      |

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

  // 이제 카드 회사는 신한카드, 롯데카드, BC카드 중 하나여야만 유효합니다.
};
```

</details>
