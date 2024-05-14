# @roqkftjs/react-payments-custom-hooks

이 라이브러리는 React 프로젝트에서 카드 정보 입력 필드(카드 회사, CVC, 유효 기간, 카드 번호, 비밀번호, 사용자 이름)의 유효성 검사를 쉽게 수행하고 관리할 수 있도록 도와주는 커스텀 훅모음입니다.

## 설치

```
npm install @roqkftjs/react-payments-custom-hooks
```

## 사용 방법

### 카드 회사 (useCardCompany)

카드 회사 선택의 입력 상태와 유효성 검사를 관리합니다.

```ts
  import { useCardCompany } from '@roqkftjs/react-payments-custom-hooks';

const CardCompanyComponent = () => {
  const { cardCompanyInfo, handleCardCompany } = useCardCompany();

  return (
    <select onChange={handleCardCompany}>
      <option value="">카드 회사 선택</option>
      <option value="Visa">Visa</option>
      <option value="MasterCard">MasterCard</option>
      ...
    </select>
    {cardCompanyInfo.errorMessage && <p>{cardCompanyInfo.errorMessage}</p>}
  );
};
```

#### 매개변수

- 없음.

#### 반환 값

- cardCompanyInfo (object): 카드 회사 선택 상태를 나타내는 객체입니다. cardCompany (string)과 errorMessage (string) 필드를 포함합니다.
- handleCardCompany (function): 선택 요소의 onChange 이벤트에 바인딩할 핸들러 함수입니다. 이 함수는 선택값의 상태를 업데이트하고 유효성 검사를 수행합니다.

### CVC (useCardCVC)

카드 CVC 입력의 상태와 유효성 검사를 관리합니다.

```ts
  import { useCardCVC } from '@roqkftjs/react-payments-custom-hooks';

const CardCVCComponent = () => {
  const { cardCVCInfo, handleCardCVC } = useCardCVC(3);

  return (
    <input type="text" onChange={handleCardCVC} />
    {cardCVCInfo.errorMessage && <p>{cardCVCInfo.errorMessage}</p>}
  );
};
```

#### 매개 변수

- cardCVCLength (number): 카드 CVC의 최대 길이를 설정합니다.

#### 반환 값

- cardCVCInfo (object): 카드 CVC 입력 상태를 나타내는 객체입니다. cardCVC (string)과 errorMessage (string) 필드를 포함합니다.
- handleCardCVC (function): 입력 요소의 onChange 이벤트에 바인딩할 핸들러 함수입니다. 이 함수는 입력값의 상태를 업데이트하고 유효성 검사를 수행합니다.

### 카드 유효 기간 (useCardExpiration)

카드의 유효 기간 입력의 상태와 유효성 검사를 관리합니다.

```ts
import { useCardExpiration } from '@roqkftjs/react-payments-custom-hooks';

const CardExpirationComponent = () => {
  const { cardExpiration, handleCardExpirationMM, handleCardExpirationYY } =
    useCardExpiration();

  return (
    <>
      <input type='text' placeholder='MM' onChange={handleCardExpirationMM} />
      <input type='text' placeholder='YY' onChange={handleCardExpirationYY} />
      {cardExpiration.errorMessage && <p>{cardExpiration.errorMessage}</p>}
    </>
  );
};
```

#### 매개 변수

- 없음.

#### 반환 값

- cardExpiration (object): 카드 만료일 입력 상태를 나타내는 객체입니다. MM (string), YY (string), 그리고 errorMessage (string) 필드를 포함합니다.
- handleCardExpirationMM (function): 월 입력 요소의 onChange 이벤트에 바인딩할 핸들러 함수입니다. 이 함수는 월 입력값의 상태를 업데이트하고 유효성 검사를 수행합니다.
- handleCardExpirationYY (function): 연 입력 요소의 onChange 이벤트에 바인딩할 핸들러 함수입니다. 이 함수는 연 입력값의 상태를 업데이트하고 유효성 검사를 수행합니다.

### 카드 번호 (useCardNumbers)

카드 번호 입력의 상태와 유효성 검사를 관리합니다. 이 훅은 카드 번호 입력에 대한 정보와 함께, 입력값의 변화를 처리하고, 카드 브랜드를 식별하며, 유효성 검사를 수행합니다.

```ts
import { useCardNumbers } from '@roqkftjs/react-payments-custom-hooks';

const CardNumbersComponent = () => {
  const { cardNumbersInfo, handleCardNumbers } = useCardNumbers();

  const onChange = (event) => {
    handleCardNumbers(event.target.value);
  };

  return (
    <div>
      <input type='text' onChange={onChange} />
      {cardNumbersInfo.cardBrand && <p>{cardNumbersInfo.cardBrand}</p>}
      {cardNumbersInfo.formattedCardNumber && (
        <p>{cardNumbersInfo.formattedCardNumber.join(' ')}</p>
      )}
      {cardNumbersInfo.errorMessage && <p>{cardNumbersInfo.errorMessage}</p>}
    </div>
  );
};
```

#### 반환 값

- cardNumbersInfo (object): 카드 번호 입력 상태를 나타내는 객체입니다. cardNumbers (string), cardBrand (string), formattedCardNumber (string[]), errorMessage (string) 필드를 포함합니다.
- handleCardNumbers (function): 입력 요소의 onChange 이벤트에 바인딩할 핸들러 함수입니다. 이 함수는 입력값의 상태를 업데이트하고, 카드 브랜드를 식별하며, 유효성 검사를 수행하고, 카드 번호를 형식화합니다.

### 카드 비밀번호 (useCardPassword)

카드 비밀번호의 유효성을 검사합니다. 비밀번호 길이를 인자로 받아 해당 길이에 맞는지 검증합니다.

```ts
import { useCardPassword } from '@roqkftjs/react-payments-custom-hooks';

const CardPasswordComponent = () => {
  const { cardPassWordInfo, handleCardPassword } = useCardPassword(4);
  return (
    <input type="text" onChange={handleCardPassword} />
    {cardPassWordInfo.errorMessage && <p>{cardPassWordInfo.errorMessage}</p>}
  );
};
```

#### 매개변수

- cardPasswordLength (number): 카드 비밀번호의 최대 길이를 설정합니다.

#### 반환 값

- cardPassWordInfo (object): 카드 비밀번호 입력 상태를 나타내는 객체입니다. password (string)과 errorMessage (string) 필드를 포함합니다.
- handleCardPassword (function): 입력 요소의 onChange 이벤트에 바인딩할 핸들러 함수입니다. 이 함수는 입력값의 상태를 업데이트하고 유효성 검사를 수행합니다.

### 카드 소유자 이름(useCardUserName)

카드 소유자 이름에 대한 입력 상태와 유효성 검사를 관리합니다.

```ts
import React from 'react';
import { useCardUserName } from '@roqkftjs/react-payments-custom-hooks';

function CardUserNameInput({ cardUserNameLength }) {
  const { cardUserNameInfo, handleCardUserName } =
    useCardUserName(cardUserNameLength);

  return (
    <div>
      <input
        type='text'
        value={cardUserNameInfo.cardUserName}
        onChange={handleCardUserName}
        placeholder='카드 소유자 이름'
      />
      {cardUserNameInfo.errorMessage && <p>{cardUserNameInfo.errorMessage}</p>}
    </div>
  );
}
```

#### 매개변수

- cardUserNameLength (number): 카드 소유자 이름의 최대 길이를 설정합니다.

#### 반환 값

- cardUserNameInfo (object): 카드 소유자 이름 입력 상태를 나타내는 객체입니다. cardUserName (string)과 errorMessage (string) 필드를 포함합니다.
- handleCardUserName (function): 입력 요소의 onChange 이벤트에 바인딩할 핸들러 함수입니다. 이 함수는 입력값의 상태를 업데이트하고 유효성 검사를 수행합니다.

## 기여하기

이 프로젝트에 기여하고 싶으신 분은 언제든지 Pull Request를 보내주시거나 이슈를 등록해주세요.

## 라이선스

이 프로젝트는 MIT 라이선스에 따라 제공됩니다.
