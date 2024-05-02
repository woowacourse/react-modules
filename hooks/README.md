# Card Validation Hooks Module

우아한테크코스 6기 FE 미션을 위해 제작된 간단한 React 기반 신용카드 입력값 검증 모듈입니다. 아래와 같은 유형들에 대한 입력값 검증 기능을 제공합니다.

- `useCardNumbers` : 카드 번호 입력값 검증 (4자리씩 x 4개)
- `useCardBrand`: 카드사 입력값 검증
- `useCardExpiryDate`: 카드 유효기간 입력값 검증 (`MM`, `YY` 형식)
- `useCardHolder`: 카드 소유자 이름 입력값 검증
- `useCardCVC`: 카드 CVC 번호 입력값 검증
- `useCardPassword`: 카드 비밀번호 입력값 검증

## 설치 방법

```Bash
npm install @seongjinme/card-validation
```

## 사용 방법

### useCardNumbers

4자리씩 입력 받는 4개의 카드 번호 입력 필드에 대해 유효성을 검증하는 훅입니다.

```TypeScript
const {
    cardNumbers,
    validStates,
    validationResult,
    handleUpdateCardNumbers,
  } = useCardNumbers(["", "", "", ""]);
```

#### 초기화 방법

- 초기값으로 `length`가 `4`이며 각 원소가 `string` 타입인 배열을 사용합니다.
- 특별한 경우가 아니라면 `["", "", "", ""]`를 초기값으로 추천합니다.

#### 반환값 설명

- `cardNumbers` : 입력받은 카드 번호를 4자리씩 분할된 `string` 타입의 배열 형태로 반환합니다.
- `validStates` : 입력받은 카드 번호를 4자리 단위로 검증한 결과를 `boolean` 타입의 배열 형태로 반환합니다.
- `validationResult` : 입력받은 전체 카드 번호의 전체 유효성 검증 결과를 아래와 같은 포맷으로 반환합니다. 검증 미통과시 에러 메시지를 `errorMessage`로 함께 반환합니다.
  ```
  {
    isValid: boolean,
    errorMessage?: string,
  }
  ```
- `handleUpdateCardNumbers(inputIndex, value)` : 각 입력 필드에 대한 이벤트 발생시 입력값을 처리하기 위한 핸들링 함수입니다.
  - `inputIndex` : 해당 입력 필드의 `index` 값입니다. `number` 타입으로 입력합니다.
  - `value` : 해당 입력 필드에 입력된 `string` 값입니다.

#### 사용 예시

```tsx
import React from "react";
import { useCardNumbers } from "@seongjinme/card-validation";

function CardNumbersForm() {
  const {
    cardNumbers,
    validStates,
    validationResult,
    handleUpdateCardNumbers,
  } = useCardNumbers(["", "", "", ""]);

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

### useCardBrands

카드사에 대한 입력값을 검증하는 훅입니다.

```TypeScript
const { brand, validationResult, handleUpdateBrand } = useCardBrand("", cardBrands);
```

#### 초기화 방법

- 첫 번째 인자로 초기값을 `string` 타입으로 입력합니다.
- 두 번째 인자로 검증 대상에 포함시킬 전체 카드사의 목록을 `string` 타입의 배열로 입력합니다.

#### 반환값 설명

- `brand` : 입력된 카드사를 저장하고 반환합니다.
- `validationResult` : 입력받은 카드사의 유효성 검증 결과를 아래와 같이 반환합니다. 검증 미통과시에 한해 에러 메시지를 `errorMessage`로 함께 반환합니다.
  ```
  {
    isValid: boolean,
    errorMessage?: string,
  }
  ```
- `handleUpdateBrand(value)` : 카드사 입력 필드에 대한 이벤트 발생시 `string` 타입의 입력값(`value`)을 처리하는 핸들링 함수입니다.

#### 사용 예시

```tsx
import React from "react";
import { useCardBrand } from "@seongjinme/card-validation";

const CARD_BRANDS = ["신한카드", "카카오뱅크", "현대카드"];

function CardBrandSelectBox() {
  const { brand, validationResult, handleUpdateBrand } = useCardBrand(
    "",
    CARD_BRANDS
  );

  const handleChangeCardBrand = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    handleUpdateBrand(event.target.value);
  };

  return (
    <select onChange={handleChangeCardBrand}>
      {CARD_BRANDS.map((brand, index) => (
        <option key={index} value={brand}>
          {brand}
        </option>
      ))}
    </select>
  );
}
```

### useCardExpiryDate

카드 유효기간 입력값(`MM`, `YY` 형식)을 검증하는 훅입니다.

```TypeScript
const { expiryDate, validationResult, handleUpdateExpiryDate } = useCardExpiryDate({ month: "", year: "" });
```

#### 초기화 방법

- `month`와 `year`에 해당하는 `string` 타입의 초기값을 객체 형태로 삽입합니다.
- 각 필드에 들어가는 초기값의 길이는 `2` 이내여야 합니다.

#### 반환값 설명

- `expiryDate` : 입력 받은 유효기간을 `{ month: string, year: string }` 타입으로 저장하고 반환합니다.
- `validationResult` : 입력 받은 유효기간 검증 결과를 아래와 같이 반환합니다. 검증 미통과시에 한해 에러 메시지를 `errorMessage`로 함께 반환합니다.
  ```
  {
    isValid: boolean,
    errorMessage?: string,
  }
  ```
- `handleUpdateExpiryDate({ month: string, year: string })` : 월(`month`), 연도(`year`) 입력 필드에 댇한 이벤트 발생시 입력값을 처리하는 핸들링 함수입니다.

#### 사용 예시

```tsx
import React from "react";
import { useCardExpiryDate } from "@seongjinme/card-validation";

function CardBrandSelectBox() {
  const { expiryDate, validationResult, handleUpdateExpiryDate } =
    useCardExpiryDate({ month: "", year: "" });

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

### useCardHolder

카드 소유자 이름 입력값을 검증하는 훅입니다.

```TypeScript
const { cardHolder, validationResult, handleUpdateCardHolder } = useCardHolder("");
```

#### 초기화 방법

- `string` 타입의 초기값을 인자로 입력합니다.

#### 반환값 설명

- `cardHolder` : 입력 받은 소유자 이름을 `string` 타입으로 저장하고 반환합니다.
- `validationResult` : 입력받은 소유자 이름의 검증 결과를 아래와 같이 반환합니다. 검증 미통과시에 한해 에러 메시지를 `errorMessage`로 함께 반환합니다.
  ```
  {
    isValid: boolean,
    errorMessage?: string,
  }
  ```
- `handleUpdateCardHolder(string)` : 카드 소유자 입력 필드에 댇한 이벤트 발생시 입력값을 처리하는 핸들링 함수입니다.

#### 사용 예시

```tsx
import React from "react";
import { useCardHolder } from "@seongjinme/card-validation";

function CardHolderForm() {
  const { cardHolder, validationResult, handleUpdateCardHolder } =
    useCardHolder("");

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

### useCardCVC

카드 CVC 번호 입력값을 검증하는 훅입니다.

```TypeScript
const { CVC, validationResult, handleUpdateCVC } = useCardCVC("");
```

#### 초기화 방법

- `string` 타입의 초기값을 인자로 입력합니다.

#### 반환값 설명

- `CVC` : 입력 받은 CVC 번호를 `string` 타입으로 저장하고 반환합니다.
- `validationResult` : 입력받은 CVC 번호의 검증 결과를 아래와 같이 반환합니다. 검증 미통과시에 한해 에러 메시지를 `errorMessage`로 함께 반환합니다.
  ```
  {
    isValid: boolean,
    errorMessage?: string,
  }
  ```
- `handleUpdateCVC(string)` : 카드 CVC 입력 필드에 댇한 이벤트 발생시 입력값을 처리하는 핸들링 함수입니다.

#### 사용 예시

```tsx
import React from "react";
import { useCardCVC } from "@seongjinme/card-validation";

function CardCVCForm() {
  const { CVC, validationResult, handleUpdateCVC } = useCardCVC("");

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

### useCardPassword

카드 비밀번호 입력값을 검증하는 훅입니다.

```TypeScript
const {password, validationResult, handleUpdatePassword } = useCardPassword("");
```

#### 초기화 방법

- `string` 타입의 초기값을 인자로 입력합니다.

#### 반환값 설명

- `password` : 입력 받은 비밀번호를 `string` 타입으로 저장하고 반환합니다.
- `validationResult` : 입력받은 CVC 번호의 검증 결과를 아래와 같이 반환합니다. 검증 미통과시에 한해 에러 메시지를 `errorMessage`로 함께 반환합니다.
  ```
  {
    isValid: boolean,
    errorMessage?: string,
  }
  ```
- `handleUpdatePassword(string)` : 비밀번호 입력 필드에 댇한 이벤트 발생시 입력값을 처리하는 핸들링 함수입니다.

#### 사용 예시

```tsx
import React from "react";
import { useCardPassword } from "@seongjinme/card-validation";

function CardPasswordForm() {
  const { cardNumbers, validationResult, handleUpdatePassword } =
    useCardPassword("");

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
