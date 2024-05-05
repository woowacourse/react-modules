# newjeans

`newjeans`는 React 환경에서 카드 정보의 유효성을 검증하기 위한 커스텀 훅들을 모아둔 라이브러리입니다. 직관적이고 간편하게 카드 정보 입력 필드의 유효성을 검사할 수 있습니다.

이 라이브러리는 카드 번호의 유효성, 만료 날짜, CVC(카드 검증 코드), 그리고 카드 소유자의 이름 등 주요 카드 정보 입력에 대한 유효성 검증을 제공합니다.

## 라이브러리 설치

```
npm i newjeans
```

# newjeans - useCardholderName Hook

카드 소유자명 입력값이 영문 대문자로만 이루어져 있으며, 양 끝에 공백이 없고, 단어 사이의 공백이 한 칸을 넘지 않도록 하는 등의 기준을 충족하는지 확인합니다.

## useCardholderName

### 검사 목록

- 영문 대문자와 공백만을 허용합니다.
- 입력값의 양 끝에 공백이 없어야 합니다.
- 단어 사이의 공백은 최대 한 칸만 허용됩니다.

### 사용 방법

```tsx
import React from 'react';
import { useCardholderName } from 'newjeans';

function CardholderNameInput() {
  const { cardholderName, isValid, errorMessage, onChange } =
    useCardholderName();

  return (
    <div>
      <input
        type='text'
        value={cardholderName}
        onChange={onChange}
        placeholder='카드 소유자명 입력'
      />
      {!isValid && <p style={{ color: 'red' }}>{errorMessage}</p>}
    </div>
  );
}

export default CardholderNameInput;
```

### 유효성 검증

`useCardholderName` 훅은 다음 조건들을 만족하는지 검사 후 값을 업데이트 합니다.

1. **대문자와 공백만 포함:** 입력값은 영문 대문자와 공백만을 포함해야 합니다.
2. **양 끝 공백 제거:** 입력값의 양 끝에는 공백이 포함될 수 없습니다.
3. **중간 공백 제한:** 단어 사이의 공백은 최대 한 칸까지만 허용됩니다.

## useCardIssuer

### 기능

- 사용자 입력에 대한 카드 발행사 유효성 검증
- 유효한 카드 발행사: BC카드, 신한카드, 카카오뱅크, 현대카드, 우리카드, 롯데카드, 하나카드, 국민카드

### 설치 방법

이 코드를 사용하기 전에, 해당 프로젝트 안에서 `useValidation` Hook을 정의해야 합니다. 이 예제에서는 `../useValidation` 경로에서 가져옵니다.

### 사용 방법

```tsx
import React from 'react';
import { useCardIssuer } from 'newjeans';

function CardIssuerComponent() {
  const { cardIssuer, onChange, isValid, errorMessage } = useCardIssuer();

  return (
    <div>
      <select onChange={onChange} value={cardIssuer}>
        <option value=''>카드 발행사 선택</option>
        {[
          'BC카드',
          '신한카드',
          '카카오뱅크',
          '현대카드',
          '우리카드',
          '롯데카드',
          '하나카드',
          '국민카드',
        ].map(issuer => (
          <option key={issuer} value={issuer}>
            {issuer}
          </option>
        ))}
      </select>
      {!isValid && <p style={{ color: 'red' }}>{errorMessage}</p>}
    </div>
  );
}
```

## useCardNumber

`useCardNumber` 훅은 React 프로젝트에서 사용자가 입력한 카드 번호의 유효성을 검증합니다. 이 훅은 네 개의 카드 번호 부분(각각 4자리)을 별도로 입력받아, 각 부분이 숫자로만 이루어져 있고 정확히 4자리인지를 검증합니다. 유효하지 않은 입력에 대해서는 적절한 오류 메시지를 반환합니다.

### 사용 예제

```tsx
import React from 'react';
import { useCardNumber } from 'newjeans';

function CardNumberForm() {
  const { cardNumberParts, onChangeCardNumberPart } = useCardNumber();

  return (
    <div>
      {cardNumberParts.map((part, index) => (
        <input
          key={index}
          onChange={onChangeCardNumberPart[index]}
          type='text'
          maxLength='4'
        />
      ))}
    </div>
  );
}
```

## useCVC

`useCVC`는 React 프로젝트에서 사용자가 입력한 카드 CVC 번호를 검증하는 Custom Hook입니다. 이 Hook은 사용자가 입력한 CVC 번호가 3자리 숫자로만 구성되었는지를 확인하고, 그렇지 않을 경우 적절한 오류 메시지를 반환합니다.

### 사용 방법

```tsx
import React from 'react';
import { useCVC } from 'newjeans';

function CVCEnterForm() {
  const { cvc, onChange, isValid, errorMessage } = useCVC();

  return (
    <div>
      <input onChange={onChange} type='text' maxLength='3' />
      {!isValid && <p>{errorMessage}</p>}
    </div>
  );
}
```

## useExpiryDate

`useExpiryDate`는 사용자로부터 신용카드의 유효기한(월과 년)을 입력받아 해당 입력값이 유효한지 검증하는 React 훅입니다. 이 훅은 유효기한 월이 01에서 12 사이이며, 입력 날짜가 현재보다 과거인지 확인합니다. 또한, 월과 년도 모두 2자리 숫자로 제한됩니다.

```jsx
import React from 'react';
import { useExpiryDate } from 'newjeans';

function ExpiryDateForm() {
  const { expiryMonth, expiryYear, onChangeExpiryMonth, onChangeExpiryYear } =
    useExpiryDate();

  return (
    <div>
      <div>
        <label>유효기간 월:</label>
        <input onChange={onChangeMonth} type='text' maxLength='2' />
      </div>
      <div>
        <label>유효기간 년:</label>
        <input onChange={onChangeExpiryYear} type='text' maxLength='2' />
      </div>
    </div>
  );
}
```

## usePasswordPrefix

React 환경에서 사용자의 입력을 받아 비밀번호의 앞자리 수를 유효성을 검사하는 Custom Hook입니다. 비밀번호 앞자리는 숫자만 포함해야 하며, 정해진 길이(2자리)를 만족해야 합니다.

### 사용 방법

```tsx
import React from 'react';
import { usePasswordPrefix } from 'newjeans'; // 실제 파일 경로에 맞게 수정하세요.

function PasswordInput() {
  const { passwordPrefix, onChange, isValid, errorMessage } =
    usePasswordPrefix();

  return (
    <div>
      <label>비밀번호 앞자리:</label>
      <input onChange={onChange} type='text' maxLength='2' />
      {!isValid && <p style={{ color: 'red' }}>{errorMessage}</p>}
    </div>
  );
}
```
