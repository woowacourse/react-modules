# badahertz52-react-modules-hooks

**카드 정보에 대한 유효성 검사를 제공하는 모듈입니다.**
카드 결제 정보 입력 시 필요한 여러 종류의 유효성 검사를 위한 hooks 포함하고 있습니다.
아래의 훅들을 사용하여 각 입력 필드의 유효성과 상태를 체계적으로 관리할 수 있습니다.

## Install

```shell
npm install badahertz52-react-modules-hooks
```

## Introduce

☑️ 모든 훅은 입력값이 빈 문자열인지에 대한 검사를 기본적으로 진행하고 있습니다.

| 훅                | 설명                                                                                                                                                                             | 검사 대상                    |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------- |
| useCVC            | 카드 CVC(Card Verification Code) 입력 필드에 대한 유효성 검사를 수행하는 훅입니다. 입력된 CVC의 길이와 숫자 여부 등을 검사하여 유효성 검사 결과를 반환합니다.                    | CVC                          |
| useExpirationDate | 카드의 만료 일자 입력 필드에 대한 유효성 검사를 수행하는 훅입니다. 입력된 만료 일자의 형식과 유효한 날짜 범위를 검사하여 유효성 검사 결과를 반환합니다.                          | 카드 만료 기간               |
| useMonth          | useExpirationDate 에서 카드 만료 일자 중 '달'에 대한 유효성 검사를 수행하는 훅입니다. 입력된 달의 형식(숫자),유효한 범위를 검사하여 유효성 검사 결과를 반환합니다.               | 카드 만료 기간 중 달         |
| useYear           | useExpirationDate 에서 카드 만료 일자 중 '연도'에 대한 유효성 검사를 수행하는 훅입니다. 입력된 연도의 형식(숫자),유효한 범위를 검사하여 유효성 검사 결과를 반환합니다.           | 카드 만료 기간 중 연도       |
| useAvailability   | useExpirationDate 에서 카드 만료 일자가 현재를 기준으로 사용가능한 지를 검사하는 훅입니다.                                                                                       | 카드 만료 기간의 사용 가능성 |
| useCardHolder     | 카드 소유자 이름 입력 필드에 대한 유효성 검사를 수행하는 훅입니다. 입력된 이름의 길이와 알파벳으로만 이루어졌는 지를 검사하여 유효성 검사 결과를 반환합니다.                     | 카드 소유자 이름             |
| useCardIssuer     | 카드 발급사에 대한 유효성 검사를 수행하는 훅입니다.선택된 issuer가 유효한 카드 발급사인지를 검사하여 유효성 검사 결과를 반환합니다.                                              | 카드 발급사                  |
| useCardNumbers    | 여러 개의 카드 번호 입력 필드를 관리하는 훅입니다. 카드 번호 입력 필드의 개수와 각 필드의 길이를 설정할 수 있으며, 입력된 카드 번호들에 대한 검사 결과를 배열 형태로 반환합니다. | 카드 번호                    |
| usePassword       | 카드 비밀번호 입력 필드에 대한 유효성 검사를 수행하는 훅입니다. 입력된 비밀번호의 길이와 숫자 여부를 검사하여 유효성 검사 결과를 반환합니다.                                     | 비밀번호                     |
| useCardType       | 카드 번호의 앞의 4자리를 기준으로 카드 브랜드를 확인해 이를 반환하는 훅입니다.                                                                                                   | 카드 브랜드                  |

## how to use

### useCardCVC

#### props

```ts
// 오류 시, 화면에 표시한 오류 메세지
interface CardCVCValidationErrorMessages {
  empty: string; // 입력값이 없을 경우
  number: string; // 숫자 타입이 아닐 경우
  length: string; // cvc의 길기가 props로 준 length 미만이거나 이상일 경우
}

interface UseCardCVCProps {
  cardCVC: string;
  errorMessages: CardCVCValidationErrorMessages;
  validation: {
    length: number;
  };
  isNeedValidValue: boolean;
}
```

| 값               | 설명                                                                                                                                                                                                                            | 타입                             | 필수 |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- | ---- |
| cardCVC          | CVC 입력 필드 value입니다.                                                                                                                                                                                                      | `string`                         | Y    |
| errorMessage     | cvc가 오류 시, 화면에 표시할 오류 메세지                                                                                                                                                                                        | `CardCVCValidationErrorMessages` | Y    |
| validation       | cvc 유효성 검사시, 사용자가 지정할 수 있는 검사 기준으로 length은 CVC의 길이                                                                                                                                                    | `{length:number}`                | Y    |
| isNeedValidValue | <ul><li>cvc 입력값이 유효한 경우에만 input value에 값이 보이기를 원하는 지 여부</li> <li>해당 값에 따라 formattedValue의 값이 달라집니다. isNeedValue가 true이고 입력값이 유효하지 않다면 formattedValue값은 빈문자열</li></ul> | `boolean`                        | Y    |

#### return

```ts
export interface UseCardCVCResult {
  isFilledValue: boolean;
  isValidNumber: boolean;
  isValidLength: boolean;
}
```

| 값                     | 설명                                                                                                                                                                              | 타입               |
| ---------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ |
| validationErrorMessage | cvc에 대한 유효성 검사에 따른 오류 메세지                                                                                                                                         | `string  or null`  |
| validationResult       | cvc에 대한 유효성 검사 결과                                                                                                                                                       | `UseCardCVCResult` |
| formattedValue         | <ul><li>cvc 입력값이 3자 초과 시, 3자로 잘린 글자를 기본적으로 반환</li><li> isNeedValidValue===true 이면, length에 대한 검사를 제외한 오류가 있을 경우 빈문자열로 반환</li></ul> | `string`           |

#### example

[🖇️ 예시 : 컴포넌트페이지로 바로가기](https://github.com/BadaHertz52/react-modules/blob/step1/hooks/src/components/CardCVC.tsx)

### useMonth

##### props

| 값    | 설명                                 | 타입     | 필수 |
| ----- | ------------------------------------ | -------- | ---- |
| month | 카드 만료 기간 중 '달'에 대한 입력값 | `string` | Y    |

#### return

```ts
type DateError = 'number' | 'empty' | 'length' | 'format' | null;
```

| 값      | 설명                                                   | 타입        |
| ------- | ------------------------------------------------------ | ----------- |
| isValid | '달'에 대한 입력값이 유효한지 여부                     | `boolean`   |
| error   | '달'에 대한 입력값의 오류 타입으로, 오류가 없으면 null | `DateError` |

### useYear

##### props

| 값             | 설명                                                                                                                        | 타입     | 필수 |
| -------------- | --------------------------------------------------------------------------------------------------------------------------- | -------- | ---- |
| year           | 카드 만료 기간 중 '연도'에 대한 입력값                                                                                      | `string` | Y    |
| maxYearFromNow | <ul><li>현재를 기준으로 사용 가능한 카드 연도 (EX:5년까지 유효하다면 5)</li><li>입력값이 없다면 5년이 적용됩니다.</li></ul> | `number` | N    |

```ts
type DateError = 'number' | 'empty' | 'length' | 'format' | null;
```

| 값      | 설명                                                     | 타입        |
| ------- | -------------------------------------------------------- | ----------- |
| isValid | '연도'에 대한 입력값이 유효한지 여부                     | `boolean`   |
| error   | '연도'에 대한 입력값의 오류 타입으로, 오류가 없으면 null | `DateErro`r |

### useAvailability

### props

| 값         | 설명                         | 타입         | 필수 |
| ---------- | ---------------------------- | ------------ | ---- |
| expiryDate | 카드 만료 기간에 대한 입력값 | `ExpiryDate` | Y    |

### return

| 값      | 설명                                                       | 타입        |
| ------- | ---------------------------------------------------------- | ----------- |
| isValid | '연도'에 대한 입력값이 유효한지 여부                       | `boolean`   |
| error   | '연도'에 대한 입력값의 오류 타입으로, 오류가 없으면 `null` | `DateError` |

### useCardExpiryDate

#### props

```ts
interface ExpiryDate {
  month: string;
  year: string;
}
interface ExpiryDateErrorMessages {
  empty: string; // 빈값일 경우
  number: string; // 숫자외의 문자인 경우
  length: string; //달, 연도가 2자리가 아닐 경우
  yearFormat: string; // 연도에 대한 형식(현재 기준 연도 ~ 최대 기간)이 올바르지 않을 경우
  monthFormat: string; // 달이 1~12 사이의 숫자가 아닐 경우
  availability: string; // 만료 기간이  현재를 기준으로 사용 불가능한 경우 (=카드가 만료됨)
}

interface UseExpiryDateProps {
  expiryDate: ExpiryDate;
  errorMessages: ExpiryDateErrorMessages;
  validation: {
    maxYearsFromNow: number;
  };
  isNeedValidValue: boolean;
}
```

| 값               | 설명                                                                                                                                                                                                                                                            | 타입                         | 필수 |
| ---------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------- | ---- |
| expiryDate       | 카드 만료 기간인 달,연도에 대한 입력값                                                                                                                                                                                                                          | `ExpiryDate`                 | Y    |
| errorMessages    | 카드 만료 기간 오류 시, 화면에 표기할 메세지                                                                                                                                                                                                                    | `ExpiryDateErrorMessages`    | Y    |
| validation       | <ul><li>카드 만료 기간의 유효성 검사에 사용될 목록으로 만료 기간 중 연도에 대한 최대 기간을 설정할 수 있음</li><li> maxYearFromNow: 현재 연도를 기준으로 최대 몇년까지 유효한지에 대한 값</li></ul>                                                             | `{ maxYearsFromNow: number}` | Y    |
| isNeedValidValue | <ul><li> 달,연도의 입력값에 대한 숫자 오류 시에도 input value에 해당 값이 보이기를 원하는 지 여부</li><li> 해당 값에 따라 formattedValue의 값이 달라짐</li><li> isNeedValue가 true이고 입력값이 유효하지 않다면 formattedValue값의 달/연도는 빈문자열</li></ul> | `boolean`                    | Y    |

#### return

```ts
type ExpiryDateValidationErrorMessage = null | {
  month: string | null;
  year: string | null;
  availability: string | null;
};

type ExpiryDateError = 'empty' | 'length' | 'number' |

interface UseExpiryDateResult {
  month: {
    isValid: boolean; //오류가 없다면 true
    error: ExpiryDateError;
  };
  year: {
    isValid: boolean;
    error: ExpiryDateError;
  };
  isValidAvailability: boolean; // 카드 만료 기간의 사용 가능성 여부
}

```

| 값                     | 설명                                                                                                                                                                     | 타입                               |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------- |
| validationErrorMessage | 유효성 검사에 따른 오류 메세지                                                                                                                                           | `ExpiryDateValidationErrorMessage` |
| validationResult       | 유효성 검사 결과                                                                                                                                                         | `UseExpiryDateResult`              |
| formattedValue         | <ul><li> 달,연도의 입력값이 2자 초과 시, 글자 수에 맞춘 글자를 기본적으로 반환</li><li> `isNeedValidValue===true` 이면, 숫자 오류라면 해당 입력값이 빈문자열로 반환</li> | `ExpiryDate`                       |

#### example

[🖇️ 예시 : 컴포넌트 페이지로 바로가기](https://github.com/BadaHertz52/react-modules/blob/step1/hooks/src/components/CardExpiryDate.tsx)

### useCardHolder

#### props

```ts
interface CardHolderValidationErrorMessages {
  empty: string;
  alphabet: string;
  length: string;
}
interface UseCardHolderProps {
  cardHolder: string;
  errorMessages: CardHolderValidationErrorMessages;
  validation: {
    isOnlyUpperCase: boolean;
    maxLength?: number;
  };
  isNeedValidValue: boolean;
  isNeedUpperCase: boolean;
}
```

| 값               | 설명                                                                                                                                                    | 타입                                              | 필수 |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------- | ---- |
| cardHolder       | 카드 소유자 이름에 대한 입력값                                                                                                                          | `ExpiryDate`                                      | Y    |
| errorMessages    | 카드 소유자 이름 유효성 검사 오류 시 화면에 표시될 오류 메세지                                                                                          | `CardHolderValidationErrorMessages`               | Y    |
| validation       | 카드 소유자 이름에 대한 유효성 검사 시 사용자 지정 검사 항목                                                                                            | `{ isOnlyUpperCase: boolean;maxLength?: number;}` | Y    |
| isNeedValidValue | <ul><li>이름의 길이를 제외한 유효성 검사 통과 시에만 formattedValue의 값을 보여줄 것 인지 여부</li> <li>통과 하지 못하면 formattedValue는 빈문자열</li> | `boolean`                                         | Y    |
| isNeedUpperCase  | 소유자 이름을 대문자로 변경해서 반환할 것 인지 여부                                                                                                     | `boolean`                                         | Y    |

- validation 설명
  | 값 | 설명 | 타입 | 필수 |
  | ---------- | ---------------------------- | ---------- | ---- |
  |isOnlyUpperCase|소유자 이름의 입력값을 오직 대문자로만 받을 것 인지 여부|`boolean` |Y|
  |maxLength|소유자 이름의 최대 길이로, 기본값은 50|`number` |N|

#### return

```ts
interface UseCardHolderResult {
  isFilledValue: boolean; // 입력값이 빈 문자열이 아닌지 여부
  isValidAlphabet: boolean; // 입력값이 알파벳으로 이루어졌는 지 여부 (isOnlyUpperCase이 true이면 대문자만 가능, false이면 대소문자 가능)
  isValidLength: boolean; // 입력값이 maxLength(기본값:50)이내 인지 여부
}
```

| 값                     | 설명                                                                                                                                                                                                 | 타입                  |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------- |
| validationErrorMessage | 유효성 검사에 따른 오류 메세지                                                                                                                                                                       | `string  or   null`   |
| validationResult       | 유효성 검사 결과                                                                                                                                                                                     | `UseCardHolderResult` |
| formattedValue         | <ul><li>소유자 이름이 입력값이 maxLength 초과 시, 해당 글자수에 맞춘 글자가 기본적으로 반환</li> <li>isNeedValidValue===true 이면서 길이를 제외한 오류가 존재하면 해당 입력값이 빈문자열로 반환</li> | `string`              |

#### example

[🖇️ 예시 : 컴포넌트 페이지로 바로가기](https://github.com/BadaHertz52/react-modules/blob/step1/hooks/src/components/CardHolder.tsx)

### useCardIssuer

```ts
interface CardIssuerValidationErrorMessages {
  empty: string; // 빈값일 경우
  issuer: string; // 올바른 발급사가 아닐 경우(issuers안에 존재하지 않을 경우)
}

interface UseCardIssuerProps {
  issuerValue: string;
  validation: {
    issuers: string[];
  };
  errorMessages: CardIssuerValidationErrorMessages;
}
```

#### props

| 값           | 설명                                                                                                                            | 타입                                | 필수 |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------- | ---- |
| issuerValue  | 입력/선택된 카드 발급사                                                                                                         | `string`                            | Y    |
| validation   | <ul><li>카드 발급사에 대한 유효성 검사 시, 사용자 지정 검사 항목</li><ll>issuers: 유효한 카드 발급사 이름이 담긴 배열</li></ul> | `{issuers:string[]} `               | Y    |
| errorMessage | 카드 발급사 유효 검사 결과가 오류 일 경우 화면에 표시될 메세지                                                                  | `CardIssuerValidationErrorMessages` | Y    |

#### return

```ts
interface UseCardIssuerResult {
  isFilledValue: boolean;
  isValidIssuer: boolean;
}
```

| 값                     | 설명                           | 타입                  |
| ---------------------- | ------------------------------ | --------------------- |
| validationErrorMessage | 유효성 검사에 따른 오류 메세지 | `string  or  null`    |
| validationResult       | 유효성 검사 결과               | `UseCardIssuerResult` |

#### example

[🖇️ 예시 : 컴포넌트 페이지로 바로가기](https://github.com/BadaHertz52/react-modules/blob/step1/hooks/src/components/CardIssuer.tsx)

### useCardType

#### props

```ts
interface Brand {
  name: string;
  cardTypePatters: number[];
}

interface UseCardTypeProps {
  firstCardNumbers: string;
  brands: Brand[];
}
```

| 값               | 설명                           | 타입      | 필수 |
| ---------------- | ------------------------------ | --------- | ---- |
| firstCardNumbers | 카드 브랜드를 판독한 카드 번호 | `string`  | Y    |
| brans            | 카드 브랜드 정보               | `brand[]` | Y    |

- brans= 설명

| 값              | 설명                                                                      | 타입       | 필수 |
| --------------- | ------------------------------------------------------------------------- | ---------- | ---- |
| name            | 카드 브랜드                                                               | `string`   | Y    |
| cardTypePatters | 카드 브랜드를 판별하는 카드 번호 배열 (ex: 마스터 카드 - `[51,52,53,54]`) | `number[]` | Y    |

#### return

| 값   | 설명                                                     | 타입             |
| ---- | -------------------------------------------------------- | ---------------- |
| bran | 카드 브랜드 이름, props의 brands에 속하지 않을 경우 null | `string or null` |

#### example

[🖇️ 예시 : 컴포넌트 페이지로 바로가기](https://github.com/BadaHertz52/react-modules/blob/step1/hooks/src/components/CardType.tsx)

### useCardPassword

#### props

```ts
interface PasswordValidationErrorMessages {
  empty: string; // 빈값일 경우
  number: string; // 숫자가 아닐 경우
  length: string; // 비밀 번호의 길이가 validation.length와 다를 경우
}
interface UsePasswordProps {
  cardPassword: string;
  errorMessages: PasswordValidationErrorMessages;
  validation: {
    length?: number;
  };
  isNeedValidValue: boolean;
}
```

| 값               | 설명                                                                                                                   | 타입                              | 필수 |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------- | --------------------------------- | ---- |
| cardPassword     | 카드 비밀번호에 대한 입력값                                                                                            | `string`                          | Y    |
| errorMessages    | 카드 비밀번호 오류 시 화면에 표시할 오류 메세지                                                                        | `PasswordValidationErrorMessages` | Y    |
| validation       | 비밀번호 유효성 검사 시, 사용자 지정 검사 항목으로 length의 기본값은 2                                                 | `{  length?: number;}`            | Y    |
| isNeedValidValue | 비밀번호의 길이를 제외한 유효성 검사 통과 시에만 formattedValue의 값을 보여줄 것 인지 여부 (통과 하지 못하면 빈문자열) | `boolean`                         | Y    |

#### return

```ts
interface UsePasswordResult {
  isFilledValue: boolean; // 빈문자열이 아닌 지 에 대해
  isValidNumber: boolean; // 숫자 형식인지
  isValidLength: boolean; // validation.length에 맞는 문자열 길이인지
}
```

| 값                     | 설명                                                                                                                                                                                                         | 타입                |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------- |
| validationErrorMessage | 유효성 검사에 따른 오류 메세지                                                                                                                                                                               | `string or null``   |
| validationResult       | 유효성 검사 결과                                                                                                                                                                                             | `UsePasswordResult` |
| formattedValue         | <ul><li>입력값이 `validation.length(기본값 2 )`자 초과 시, 해당 글자수에 맞춘 글자를 기본적으로 반환</li> <li>`isNeedValidValue===true` 이면, 길이를 제외한 오류라면 해당 입력값이 빈문자열로 반환</li></ul> | `ExpiryDate`        |

#### example

[🖇️ 예시 : 컴포넌트 페이지로 바로가기](https://github.com/BadaHertz52/react-modules/blob/step1/hooks/src/components/CardPassword.tsx)

### useCardNumbers

#### props

```ts
type CardNumbersType = (string | undefined)[];

interface UseCardNumbersErrorMessage {
  empty: string; // 빈문자일 경우
  number: string; // 숫자가 아닐 경우
  length: string; // 번호의 length가 틀린 경우
}
interface UseCardNumbersProps {
  fieldCount: number;
  cardNumberCounts: number[];
  cardNumbers: CardNumbersType;
  errorMessages: UseCardNumbersErrorMessage;
  isNeedValidValue: boolean;
}
```

| 값               | 설명                                                                                                                             | 타입                         | 필수 |
| ---------------- | -------------------------------------------------------------------------------------------------------------------------------- | ---------------------------- | ---- |
| fieldCount       | 카드 번호 입력 필드의 개수                                                                                                       | `number `                    | Y    |
| cardNumberCounts | 카드 번호 입력 필드 당 입력해햐는 번호개수(ex:16자리 -`[4,4,4,4]`,15자리- `[4,3,4,4]`)                                           | `number`[]                   | Y    |
| cardNumbers      | 카드 번호 입력 필드의 입력값으로 입력값이 없으면 undefined (ex:`['1234',undefined,'1111','2222] `)                               | `CardNumbersType`            | Y    |
| errorMessages    | 카드 번호가 오류 시 화면에 표시할 오류 메세지                                                                                    | `UseCardNumbersErrorMessage` | Y    |
| isNeedValidValue | 길이를 제외한 유효성 검사 통과 시에만 formattedValue 속 현재 입력되는 필드의 값을 보여줄 것 인지 여부, 통과 하지 못하면 빈문자열 | `boolean`                    | Y    |

#### return

```ts
type ValidationErrorMessage =(string| null)[]
**
 * 카드 번호 입력 필드 하나에 대한 유효성 검사 결과
 */
interface CardNumberValidationResult {
  error: CardNumberError;
  isValid: boolean;
}
/**
 * 모든 카드 번호 입력 필드에 대한 유효성 검사 결과
 */
type CardNumbersValidationResults = CardNumberValidationResult[];
```

| 값                     | 설명                                                                                                                                                                                                                                                                                | 타입                           |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------ |
| validationErrorMessage | <ul><li>유효성 검사에 따른 오류 메세지로 입력 필드별 오류 메세지가 들어 있는 배열</li><li>배열의 index와 입력 필드의 index가 동일</li></ul>                                                                                                                                         | `ValidationErrorMessage`       |
| validationResult       | <ul><li>유효성 검사 결과로 입력 필드 당 검사 결과가 담긴 배열</li><li>배열의 index와 입력 필드의 index가 동일</li></ul>                                                                                                                                                             | `CardNumbersValidationResults` |
| formattedValue         | <ul><li>번호의 입력값이 지정된 개수(props로 준 cardNumberCounts를 기반으로 검사)를 초과 시, 해당 글자 수에 맞춘 글자를 기본적으로 반환</li><li>`isNeedValidValue===true` 이면, 길이를 제외한 오류 시 해당 필드의 값은 빈문자열</li><li>배열의 index와 입력 필드의 index가 동일</li> | `CardNumbersType`              |

#### example

[🖇️ 예시 : 컴포넌트 페이지로 바로가기](https://github.com/BadaHertz52/react-modules/blob/step1/hooks/src/components/CardNumbers.tsx)
