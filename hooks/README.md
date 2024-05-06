# @seongjinme/card-validation

우아한테크코스 6기 FE 미션을 위해 제작된 간단한 React 기반 신용카드 입력값 검증 모듈입니다. 아래와 같은 유형들에 대한 입력값 검증 기능을 제공합니다.

- `useCardNumbers` : 카드 번호 입력값 검증
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

## useCardNumbers

카드 번호 입력값의 유효성을 검증하는 훅입니다. 최대 20자리 이내로 임의의 카드 번호 입력 형식을 정하여 입력값을 저장하고, 각 입력 필드별 입력값 검증과 전체 필드의 검증 통과 여부를 체크할 수 있습니다.

```TypeScript
// 기본 설정 : 4자리씩 4개의 입력 필드로 분할된 16자리 카드 번호를 검증할 경우
const {
  cardNumbers,
  validStates,
  validationResult,
  handleUpdateCardNumbers,
} = useCardNumbers();

// 4-6-5자리씩 분할된 15자리 카드 번호를 검증할 경우
const {
  cardNumbers,
  validStates,
  validationResult,
  handleUpdateCardNumbers,
} = useCardNumbers([4, 6, 5]);
```

### 훅을 선언할 때 사용 가능한 파라미터들

```TypeScript
// 훅에 설정되어 있는 파라미터별 기본값
useCardNumbers(
  format: [4, 4, 4, 4],
  initialValue: [],
  errorMessages: {
    inputType: '카드 번호는 각 자릿수에 맞춰 숫자로만 입력해 주세요.',
    allowedLengthOutOfRange: `[ERROR] 카드 번호는 총합 20자리 이내로만 설정 가능합니다. 다시 확인해 주세요.`,
  },
);
```

- `format` : 카드 번호의 입력 필드 형식을 `number[]` 타입으로 지정합니다.
  - 기본값은 `[4, 4, 4, 4]`입니다.
  - 원소의 길이는 카드 번호 입력 필드의 전체 수를 의미합니다.
  - 각 원소는 해당 필드에 허용되는 입력값의 길이를 의미합니다.
  - 배열의 길이에는 제한이 없으나, 배열에 포함된 숫자의 총합은 `20`을 초과할 수 없습니다.
- `initialValue` : 초기 상태값으로 지정하고 싶은 카드 번호를 `string[]` 타입으로 지정합니다.
  - 기본값은 `[]`입니다.
  - `format`으로 지정한 입력 필드의 길이보다 짧은 길이의 배열을 입력할 경우, 입력되지 않은 뒷자리에 한하여 빈 값(`''`)으로 초기화되어 입력됩니다.
  - `format`으로 지정한 입력 필드의 길이보다 긴 길이의 배열을 입력할 경우, 배열의 앞에서부터 `format`의 길이에 해당하는 만큼의 원소들만 초기값으로 입력됩니다.
- `errorMessages` : 유형별 에러 메시지를 직접 지정하실 수 있습니다.
  - `inputType` : 입력값의 유효성 검증 미통과시 출력되는 에러 메시지입니다.
  - `allowedLengthOutOfRange` : `format`에 입력된 숫자의 통합이 `20`을 초과할 경우 콘솔에 나타나는 에러 메시지입니다.

### 반환값 설명

- `cardNumbers` : 입력받은 카드 번호를 4자리씩 분할된 `string` 타입의 배열 형태로 반환합니다.
- `validStates` : 입력받은 카드 번호를 4자리 단위로 검증한 결과를 `boolean | null` 타입의 배열 형태로 반환합니다.
- `validationResult` : 입력받은 전체 카드 번호의 전체 유효성 검증 결과를 아래와 같은 포맷으로 반환합니다. 검증 미통과시 에러 메시지를 `errorMessage`로 함께 반환합니다.
  ```
  {
    isValid: boolean | null,
    errorMessage?: string,
  }
  ```
- `handleUpdateCardNumbers(inputIndex, value)` : 각 입력 필드에 대한 이벤트 발생시 입력값을 처리하기 위한 핸들링 함수입니다.
  - `inputIndex` : 해당 입력 필드의 `index` 값입니다. `number` 타입으로 입력합니다.
  - `value` : 해당 입력 필드에 입력된 `string` 값입니다.

### 사용 예시

```tsx
import React from 'react';
import { useCardNumbers } from '@seongjinme/card-validation';

function CardNumbersForm() {
  const { cardNumbers, validStates, validationResult, handleUpdateCardNumbers } = useCardNumbers();

  return (
    <form>
      {cardNumbers.map((_, index) => (
        <input
          key={index}
          type="text"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            handleUpdateCardNumbers(index, event.target.value)
          }
        />
      ))}
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
