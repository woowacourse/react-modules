# @seongjinme/card-validation

우아한테크코스 6기 FE 미션을 위해 제작된 간단한 React 기반 신용카드 입력값 검증 모듈입니다. 아래와 같은 유형들에 대한 입력값 검증 기능을 제공합니다.

- `useCardNumber` : 카드 번호 입력값 검증
- `useCardBrand`: 카드사 입력값 검증
- `useCardExpiryDate`: 카드 유효기간 입력값 검증
- `useCardHolder`: 카드 소유자 이름 입력값 검증
- `useCardCVC`: 카드 CVC 번호 입력값 검증
- `useCardPassword`: 카드 비밀번호 입력값 검증

## 설치 방법

```Bash
npm install @seongjinme/card-validation
```

# 각 Hook별 사용 방법

## useCardNumber

카드 번호 입력값의 유효성을 검증하는 훅입니다. 입력된 카드 번호에 따라 Visa, MasterCard, AMEX, Diners, UnionPay 등의 글로벌 브랜드의 판별 결과와 입력값의 검증 결과를 함께 확인하실 수 있습니다.

각 브랜드별 카드 번호 형식에 따라 입력값의 포맷팅을 자동으로 실행하며, 입력값의 길이를 자동으로 제한하는 기능도 갖추고 있습니다.

```TypeScript
const {
  cardNumber,
  cardGlobalBrand,
  cardNumberFormat,
  cardNumberFormatted,
  validationResult,
  handleUpdateCardNumber,
} = useCardNumber();
```

### 훅을 선언할 때 사용 가능한 파라미터들

```TypeScript
// 훅에 설정되어 있는 파라미터별 기본값
useCardNumbers(
  initialValue: '',
  errorMessages: {
    inputType: '카드 번호는 각 자릿수에 맞춰 숫자로만 입력해 주세요.',
    inputLength: `[ERROR] 카드 번호는 총합 16자리 이내로만 설정 가능합니다. 다시 확인해 주세요.`,
  },
);
```

- `initialValue` : 초기 상태값으로 지정하고 싶은 카드 번호를 `string` 타입으로 지정합니다.
- `errorMessages` : 유형별 에러 메시지를 직접 지정하실 수 있습니다.
  - `inputType` : 입력값에 숫자 이외의 문자가 입력되었을 경우 출력되는 에러 메시지입니다.
  - `inputLength` : 입력값의 길이가 해당 카드 브랜드의 형식에 맞지 않을 경우 출력되는 에러 메시지입니다. `number` 타입의 `length`를 인자로 받아 메시지가 생성되는 구조를 가지고 있습니다.

### 반환값 설명

- `cardNumber` : 입력받은 카드 번호를 구분자 없이 `string` 타입으로 반환합니다.
- `cardGlobalBrand` : 입력받은 카드 번호에 따라 판별된 글로벌 브랜드를 반환합니다.
  - 현재 지원되는 브랜드 : Visa, MasterCard, AMEX, Diners, UnionPay
- `cardNumberFormat` : 판별된 글로벌 브랜드에 따른 카드 번호 형식을 `number[]` 타입으로 반환합니다.
- `cardNumberFormatted` : 입력받은 카드 번호에 구분자를 추가하여 `string` 타입으로 반환합니다.
- `validationResult` : 입력받은 전체 카드 번호의 전체 유효성 검증 결과를 아래와 같은 포맷으로 반환합니다. 검증 미통과시 에러 메시지를 `errorMessage`로 함께 반환합니다.
  ```
  {
    isValid: boolean | null,
    errorMessage?: string,
  }
  ```
- `handleUpdateCardNumber(value)` : 카드 번호 입력 필드에 대한 이벤트 발생시 `string` 타입의 입력값(`value`)을 처리하는 핸들링 함수입니다.

### 사용 예시

```tsx
import React from 'react';
import { useCardNumber } from '@seongjinme/card-validation';

function CardNumberForm() {
  const {
    cardNumber,
    cardGlobalBrand,
    cardNumberFormat,
    cardNumberFormatted,
    validationResult,
    handleUpdateCardNumbers,
  } = useCardNumber();

  return (
    <form>
      <input
        type="text"
        value={cardNumberFormatted}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          handleUpdateCardNumber(event.target.value, event)
        }
        placeholder="카드번호를 입력해 주세요."
      />
      <button type="submit">Submit</button>
    </form>
  );
}
```

## useCardBrands

카드사에 대한 입력값을 검증하는 훅입니다.

```TypeScript
// 기본 설정
const { brand, validationResult, handleUpdateBrand } = useCardBrand();

// 카드사 목록을 직접 삽입하는 경우
const cardBrands = ['신한카드', '현대카드', '카카오뱅크'];
const { brand, validationResult, handleUpdateBrand } = useCardBrand(cardBrands);
```

### 훅을 선언할 때 사용 가능한 파라미터들

```TypeScript
// 훅에 설정되어 있는 파라미터별 기본값
useCardBrand(
  allowedBrands: ['BC카드', '신한카드', '카카오뱅크', '현대카드', '우리카드', '롯데카드', '하나카드', '국민카드'],
  initialValue: '',
  errorMessages: {
    invalidBrand: '지원하지 않는 카드사입니다. 다른 카드를 선택해주세요.',
    emptyAllowedBrands:
      '[ERROR] 카드사 목록에는 최소 1개 이상의 카드사가 포함되어야 합니다. 다시 확인해주세요.',
    initialValueNotExistsInAllowedBrands:
      '[ERROR] 카드사 목록에 포함되지 않은 카드를 초기값으로 설정하실 수 없습니다. 다시 확인해주세요.',
  },
)
```

- `allowedBrands` : 카드사 검증에 필요한 전체 카드사 목록을 `string[]` 타입으로 입력합니다.
- `initialValue` : 카드사 상태에 삽입할 초기값을 `string` 타입으로 입력합니다. 기본값은 `""`입니다. 기본값 외에 `allowedBrands`에 포함되지 않은 값은 입력하실 수 없습니다.
- `errorMessages` : 유형별 에러 메시지를 직접 지정하실 수 있습니다.
  - `inputType` : 입력값의 유효성 검증 미통과시 출력되는 에러 메시지입니다.
  - `emptyAllowedBrands` : `allowedBrands`에 빈 배열을 입력하셨을 경우의 콘솔 에러 메시지입니다.
  - `initialValueNotExistsInAllowedBrands` : `allowedBrands`에 존재하지 않는 값을 `initialValue`로 설정하셨을 경우의 콘솔 에러 메시지입니다.

### 반환값 설명

- `brand` : 입력된 카드사를 저장하고 반환합니다.
- `validationResult` : 입력받은 카드사의 유효성 검증 결과를 아래와 같이 반환합니다. 검증 미통과시에 한해 에러 메시지를 `errorMessage`로 함께 반환합니다.
  ```
  {
    isValid: boolean | null,
    errorMessage?: string,
  }
  ```
- `handleUpdateBrand(value)` : 카드사 입력 필드에 대한 이벤트 발생시 `string` 타입의 입력값(`value`)을 처리하는 핸들링 함수입니다.

### 사용 예시

```tsx
import React from 'react';
import { useCardBrand } from '@seongjinme/card-validation';

const CARD_BRANDS = ['신한카드', '카카오뱅크', '현대카드'];

function CardBrandSelectBox() {
  const { brand, validationResult, handleUpdateBrand } = useCardBrand(CARD_BRANDS);

  const handleChangeCardBrand = (event: React.ChangeEvent<HTMLSelectElement>) => {
    handleUpdateBrand(event.target.value);
  };

  return (
    <select onChange={handleChangeCardBrand}>
      {CARD_BRANDS.map((brand, index) => (
        <option
          key={index}
          value={brand}
        >
          {brand}
        </option>
      ))}
    </select>
  );
}
```

## useCardExpiryDate

카드 유효기간 입력값을 검증하는 훅입니다. 설정값에 따라 `MM`/`YY` 또는 `MM`/`YYYY` 형식의 유효기간을 검증하실 수 있습니다.

```TypeScript
// 기본 설정
const { expiryDate, validationResult, handleUpdateExpiryDate } = useCardExpiryDate();

// 연도를 4자리로 받도록 설정
const isYearFourDigits = true;
const { expiryDate, validationResult, handleUpdateExpiryDate } = useCardExpiryDate(isYearFourDigits);
```

### 훅을 선언할 때 사용 가능한 파라미터들

```TypeScript
// 훅에 설정되어 있는 파라미터별 기본값
useCardExpiryDate(
  isYearFourDigits: false,
  initialValue: { month: '', year: '' },
  errorMessages: {
    invalidMonth: '유효 기간의 월은 01 ~ 12 사이의 2자리 숫자로 입력해 주세요.',
    invalidYear: `유효 기간의 연도는 2자리 숫자로 입력해 주세요.`,
    expiredDate: '유효 기간이 만료되었습니다. 확인 후 다시 입력해 주세요.',
  },
)
```

- `isYearFourDigits` : 유효 기간 연도를 4자리로 받을 것인지 `boolean` 타입으로 지정합니다.
- `initialValue` : 초기 상태값을 `{ month: string, year: string }` 타입으로 지정합니다.
- `errorMessages` : 유형별 에러 메시지를 직접 지정하실 수 있습니다.
  - `invalidMonth` : 월 입력값의 유효성 검증 미통과시 출력되는 에러 메시지입니다.
  - `invalidYear` : 연도 입력값의 유효성 검증 미통과시 출력되는 에러 메시지입니다.
  - `expiredDate` : 유효 기간이 만료된 시점일 때 출력되는 에러 메시지입니다.

### 반환값 설명

- `expiryDate` : 입력 받은 유효기간을 `{ month: string, year: string }` 타입으로 저장하고 반환합니다.
- `validationResult` : 입력 받은 유효기간 검증 결과를 아래와 같이 반환합니다. 검증 미통과시에 한해 에러 메시지를 `errorMessage`로 함께 반환합니다.
  ```
  {
    isValid: boolean | null,
    errorMessage?: string,
  }
  ```
- `handleUpdateExpiryDate({ month: string, year: string })` : 월(`month`), 연도(`year`) 입력 필드에 댇한 이벤트 발생시 입력값을 처리하는 핸들링 함수입니다.

### 사용 예시

```tsx
import React from 'react';
import { useCardExpiryDate } from '@seongjinme/card-validation';

function CardBrandSelectBox() {
  const { expiryDate, validationResult, handleUpdateExpiryDate } = useCardExpiryDate();

  return (
    <form>
      <input
        type="text"
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          handleUpdateExpiryDate({
            month: event.target.value,
            year: expiryDate.year,
          })
        }
      />
      <input
        type="text"
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          handleUpdateExpiryDate({
            month: expiryDate.month,
            year: event.target.value,
          })
        }
      />
    </form>
  );
}
```

- `handleUpdateExpiryDate` 핸들러 함수는 항상 `month`와 `year`를 함께 입력받습니다. 따라서 각각의 입력 필드에 대해서는 아래와 같이 사용해주시면 됩니다.
  - `month` 입력 필드의 경우 : '월'은 새 입력값으로, '연도'는 기존 상태값(`expiryDate.year`)을 사용합니다. `{ month: event.target.value, year: expiryDate.year }`
  - `year` 입력 필드의 경우 : '월'은 기존 상태값(`expiryDate.month`)을, '연도'는 새 입력값을 사용합니다. `{ month: expiryDate.month, year: event.target.value }`

## useCardHolder

카드 소유자 이름 입력값을 검증하는 훅입니다. 영문 대소문자 및 공백 문자만 허용되며, 첫 글자는 반드시 영문 대소문자여야 합니다. 최소 3글자 ~ 최대 30글자 사이로 입력을 허용하실 수 있습니다. 기본 입력 제한 글자수는 20입니다.

```TypeScript
// 기본 설정
const { cardHolder, validationResult, handleUpdateCardHolder } = useCardHolder();

// 입력 제한 길이를 30으로 설정
const { cardHolder, validationResult, handleUpdateCardHolder } = useCardHolder(30);
```

### 훅을 선언할 때 사용 가능한 파라미터들

```TypeScript
// 훅에 설정되어 있는 파라미터별 기본값
useCardHolder(
  allowedLength: 20,
  initialValue: '',
  errorMessages: {
    inputType: '카드 소유자는 영문 대소문자로 입력해 주세요.',
    allowedLengthOutOfRange: `[ERROR] 카드 소유자의 길이는 3~30 사이의 숫자로 설정되어야 합니다. 다시 확인해 주세요.`,
    inputLength: `카드 소유자는 3~20자 이내로 입력해 주세요.`,
  },
)
```

- `allowedLength` : 입력을 허용할 제한 길이를 `number` 타입으로 설정합니다. `3`~`30` 사이의 범위로만 설정 가능합니다.
- `initialValue` : 초기값을 `string` 타입으로 지정하실 수 있습니다.
- `errorMessages` : 유형별 에러 메시지를 직접 지정하실 수 있습니다.
  - `inputType` : 입력값의 유효성 검증 미통과시 출력되는 에러 메시지입니다.
  - `allowedLengthOutOfRange` : `allowedLength`가 `3`~`30` 사이의 범위를 벗어났을 경우의 콘솔 에러 메시지입니다.
  - `inputLength` : 입력값이 허용된 범위를 벗어났을 경우 출력되는 에러 메시지입니다.

### 반환값 설명

- `cardHolder` : 입력 받은 소유자 이름을 `string` 타입으로 저장하고 반환합니다.
- `validationResult` : 입력받은 소유자 이름의 검증 결과를 아래와 같이 반환합니다. 검증 미통과시에 한해 에러 메시지를 `errorMessage`로 함께 반환합니다.
  ```
  {
    isValid: boolean | null,
    errorMessage?: string,
  }
  ```
- `handleUpdateCardHolder(string)` : 카드 소유자 입력 필드에 댇한 이벤트 발생시 입력값을 처리하는 핸들링 함수입니다.

### 사용 예시

```tsx
import React from 'react';
import { useCardHolder } from '@seongjinme/card-validation';

function CardHolderForm() {
  const { cardHolder, validationResult, handleUpdateCardHolder } = useCardHolder();

  return (
    <form>
      <input
        type="text"
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          handleUpdateCardHolder(event.target.value)
        }
      />
    </form>
  );
}
```

## useCardCVC

카드 CVC 번호 입력값을 검증하는 훅입니다. 설정값에 따라 3자리 또는 4자리의 번호를 입력받아 검증하실 수 있습니다.

```TypeScript
// 기본 설정
const { CVC, validationResult, handleUpdateCVC } = useCardCVC();

// CVC 입력 형식을 4자리로 설정할 경우
const { CVC, validationResult, handleUpdateCVC } = useCardCVC(4);
```

### 훅을 선언할 때 사용 가능한 파라미터들

```TypeScript
// 훅에 설정되어 있는 파라미터별 기본값
useCardCVC(
  allowedLength: 3,
  initialValue: '',
  errorMessages: {
    inputType: 'CVC 번호는 숫자로만 입력해 주세요.',
    inputLength: `CVC 번호는 3자리의 숫자로 입력해 주세요.`,
    allowedLengthOutOfRange: `[ERROR] CVC 자릿수는 3~4 사이의 숫자로 설정되어야 합니다. 다시 확인해 주세요.`,
  },
)
```

- `allowedLength` : 입력을 허용할 제한 길이를 `number` 타입으로 설정합니다. `3` 또는 `4`로 설정 가능합니다.
- `initialValue` : 초기값을 `string` 타입으로 지정하실 수 있습니다.
- `errorMessages` : 유형별 에러 메시지를 직접 지정하실 수 있습니다.
  - `inputType` : 입력값의 유효성 검증 미통과시 출력되는 에러 메시지입니다.
  - `inputLength` : 입력값이 허용된 길이를 벗어났을 경우 출력되는 에러 메시지입니다.
  - `allowedLengthOutOfRange` : `allowedLength`가 `3` 또는 `4`가 아닌 경우의 콘솔 에러 메시지입니다.

### 반환값 설명

- `CVC` : 입력 받은 CVC 번호를 `string` 타입으로 저장하고 반환합니다.
- `validationResult` : 입력받은 CVC 번호의 검증 결과를 아래와 같이 반환합니다. 검증 미통과시에 한해 에러 메시지를 `errorMessage`로 함께 반환합니다.
  ```
  {
    isValid: boolean | null,
    errorMessage?: string,
  }
  ```
- `handleUpdateCVC(string)` : 카드 CVC 입력 필드에 댇한 이벤트 발생시 입력값을 처리하는 핸들링 함수입니다.

### 사용 예시

```tsx
import React from 'react';
import { useCardCVC } from '@seongjinme/card-validation';

function CardCVCForm() {
  const { CVC, validationResult, handleUpdateCVC } = useCardCVC();

  return (
    <form>
      <input
        type="text"
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          handleUpdateCVC(event.target.value)
        }
      />
    </form>
  );
}
```

## useCardPassword

카드 비밀번호 입력값을 검증하는 훅입니다.

```TypeScript
// 기본 설정
const {password, validationResult, handleUpdatePassword } = useCardPassword();

// 비밀번호 자릿수를 4자리로 설정할 경우
const {password, validationResult, handleUpdatePassword } = useCardPassword(4);
```

### 훅을 선언할 때 사용 가능한 파라미터들

```TypeScript
// 훅에 설정되어 있는 파라미터별 기본값
useCardPassword(
  allowedLength: 2,
  initialValue: '',
  errorMessages: {
    inputType: `비밀번호는 숫자로만 입력해 주세요.`,
    inputLength: `비밀번호는 2자리의 숫자로 입력해주세요.`,
    allowedLengthOutOfRange: `[ERROR] 비밀번호 자릿수는 2~4 사이의 숫자로 설정되어야 합니다. 다시 확인해 주세요.`,
  },
)
```

- `allowedLength` : 입력을 허용할 제한 길이를 `number` 타입으로 설정합니다. `2`~`4` 범위 안에서 설정 가능합니다.
- `initialValue` : 초기값을 `string` 타입으로 지정하실 수 있습니다.
- `errorMessages` : 유형별 에러 메시지를 직접 지정하실 수 있습니다.
  - `inputType` : 입력값의 유효성 검증 미통과시 출력되는 에러 메시지입니다.
  - `inputLength` : 입력값이 허용된 길이를 벗어났을 경우 출력되는 에러 메시지입니다.
  - `allowedLengthOutOfRange` : `allowedLength`가 `2`~`4` 범위를 벗어난 경우의 콘솔 에러 메시지입니다.

### 반환값 설명

- `password` : 입력 받은 비밀번호를 `string` 타입으로 저장하고 반환합니다.
- `validationResult` : 입력받은 CVC 번호의 검증 결과를 아래와 같이 반환합니다. 검증 미통과시에 한해 에러 메시지를 `errorMessage`로 함께 반환합니다.
  ```
  {
    isValid: boolean | null,
    errorMessage?: string,
  }
  ```
- `handleUpdatePassword(string)` : 비밀번호 입력 필드에 댇한 이벤트 발생시 입력값을 처리하는 핸들링 함수입니다.

### 사용 예시

```tsx
import React from 'react';
import { useCardPassword } from '@seongjinme/card-validation';

function CardPasswordForm() {
  const { cardNumbers, validationResult, handleUpdatePassword } = useCardPassword();

  return (
    <form>
      <input
        type="text"
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          handleUpdatePassword(event.target.value)
        }
      />
    </form>
  );
}
```
