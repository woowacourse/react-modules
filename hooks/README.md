# Get started

당신의 패키지 매니저를 통해 `@hannuny/react-card-hooks` 을 설치해 주세요:

```shell
npm install @hannuny/react-card-hooks
```

카드 훅을 import 하세요:

```javascript
import { useCardCVC } from '@hannuny/react-card-hooks';

export const MyComponent = () => {
  const { cvcNumber, isValidCVCNumber, cvcNumberErrorMessage, handleCVCNumberChange } =
    useCardCVC();

  return (
    <>
      <h3>useCardCVC</h3>
      <input
        type="text"
        value={cvcNumber}
        onChange={(e) => handleCVCNumberChange(e.target.value)}
      />
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

### `useCardNumber`

| Name               | Type     | Default | Description                                                           |
| ------------------ | -------- | ------- | --------------------------------------------------------------------- |
| `unitCount`        | `number` | -       | 카드 번호 배열의 길이를 전달합니다.                                   |
| `singleUnitLength` | `number` | -       | 카드 번호 유닛의 길이(카드 번호 배열 중 한 요소의 길이)를 전달합니다. |

<br />

<details>
<summary>사용 예시</summary>

```js
export const MyComponent = () => {
  const { cardNumber, isValidCardNumbers, cardNumberErrorMessages, handleCardNumberChange } =
    useCardNumber(4, 4);

  return (
    <>
      <h3>useCardNumber</h3>
      <input
        type="text"
        value={cardNumbers.cardNumber[0]}
        onChange={(e) => cardNumbers.handleCardNumberChange(e.target.value, 0)}
      ></input>
      <input
        type="text"
        value={cardNumbers.cardNumber[1]}
        onChange={(e) => cardNumbers.handleCardNumberChange(e.target.value, 1)}
      ></input>
      <input
        type="text"
        value={cardNumbers.cardNumber[2]}
        onChange={(e) => cardNumbers.handleCardNumberChange(e.target.value, 2)}
      ></input>
      <input
        type="text"
        value={cardNumbers.cardNumber[3]}
        onChange={(e) => cardNumbers.handleCardNumberChange(e.target.value, 3)}
      ></input>
      <div>
        <p>{`${cardNumbers.isValidCardNumbers}`}</p>
        // 에러 메세지를 하나씩 띄우도록 해야합니다.
        <p>{cardNumbers.cardNumberErrorMessages}</p>
      </div>
    </>
  );
};
```

</details>

### `useCardCompany`

| Name                   | Type       | Default | Description                         |
| ---------------------- | ---------- | ------- | ----------------------------------- |
| `validCardCompanyList` | `string[]` | -       | 유효한 카드 회사 목록을 전달합니다. |

<br />

<details>
<summary>사용 예시</summary>

```js
export const MyComponent = () => {
  const { cardCompany, isValidCardCompany, cardCompanyErrorMessage, handleCardCompanyChange } =
    useCardCompany(['신한카드', '롯데카드', 'BC카드']);

  return (
    <>
      <h3>useCardCompany</h3>
      <select onChange={(e) => handleCardCompanyChange(e.target.value)}>
        <option selected={cardCompany === ''} value="">
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

### `useCardCVC`

| Name          | Type     | Default | Description                   |
| ------------- | -------- | ------- | ----------------------------- |
| `validLength` | `number` | `3`     | 유효한 CVC 길이를 전달합니다. |

<br />

<details>
<summary>사용 예시</summary>

```js
export const MyComponent = () => {
  const { cvcNumber, isValidCVCNumber, cvcNumberErrorMessage, handleCVCNumberChange } =
    useCardCVC(4);

  // 이제 카드 CVC 번호는 4자리 숫자여야만 유효합니다.

  return (
    <>
      <h3>useCardCVC</h3>
      <input
        type="text"
        value={cvcNumber}
        onChange={(e) => handleCVCNumberChange(e.target.value)}
      />;<div>
        <p>{isValidCVCNumber ? 'true' : 'false'}</p>
        <p>{cvcNumberErrorMessage}</p>
      </div>
    </>
  );
};
```

</details>

### `useCardPassword`

| Name          | Type     | Default | Description                             |
| ------------- | -------- | ------- | --------------------------------------- |
| `validLength` | `number` | `2`     | 유효한 카드 비밀번호 길이를 전달합니다. |

<br />

<details>
<summary>사용 예시</summary>

```js
export const MyComponent = () => {
  const { password, isValidPassword, passwordErrorMessage, handlePasswordChange } =
    useCardPassword(4);

  // 이제 카드 비밀번호는 4자리 숫자여야만 유효합니다.

  return (
    <>
      <h3>useCardPassword</h3>
      <input type="text" value={password} onChange={(e) => handlePasswordChange(e.target.value)} />
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
