# Card Input Hooks

카드 폼 입력값에 대한 유효성 검사를 실시하는 커스텀 훅입니다.

## 설치

```
npm install card-input-hooks
```

## 훅 종류 및 설명

### 개요

useCardNumber의 경우

인자 : 없음
출력값 : cardNumberStates, onChanges, onBlurs
총 4개의 인풋필드를 위한 state와 이벤트핸들러들을 4개 반환합니다.
cardNumberStates는 InputState[] 타입이며

```typescript
type InputState = {
  value: string;
  errorMessage: string;
  isError: boolean;
};
```

를 사용할 수 있습니다.
onChanges와 onBlurs는 각 이벤트핸들러의 배열입니다.

### 사용예시

```javascript
import { useOwnerName } from "card-input-hooks";
const { ownerName, onChange } = useOwnerName();

return (
  <>
    <h1>Hooks Modules</h1>
    <label>Owner Name</label>
    <div>
      <input value={ownerName.value} onChange={onChange} />
      <div>{ownerName.errorMessage}</div>
      <div>{ownerName.isError}</div>
    </div>
  </>
);
```

### 스크린샷

![alt text](https://i.imgur.com/fu1xegM.png)

### 특이사항

모든 커스텀훅의 사용방법은 동일하나,
useCardNumber은 인풋태그 4개를 위한훅이기때문에
onChanges 배열을 반환하고,
useCVC는 인풋태그 하나를 위한 훅이기때문에
onChange 단일 핸들러를 반환합니다.

### 특징

blur 이벤트와 change 이벤트를 구분하여 사용하고 있습니다.
예를 들어,
카드번호 입력시 총4개의 숫자를 입력해야하는데,
입력도중에 길이검증로직이 동작하여 "길이는 4여야합니다." 라는 에러를 띄우는 건 보기좋지않습니다.

입력길이 검증은 blur이벤트로 구성하고,
잘못된 값 검증은 change 이벤트로 구성되어있습니다.

### 특징2

나만의 검증을 위해 나만의 커스텀 훅을 직접만들어 사용할 수 있습니다.

```typescript
import useInput, { InputState } from "./domains/useInput";
import { Validator } from "./domains/validation";
import useValidations from "./domains/useValidations";
import { makeLengthBlurValidator, numericOnlyValidator } from "./constants/validators";

export const monthValidator: Validator = {
  validate: (value) => Number(value) >= 1 && Number(value) <= 12,
  errorMessage: "월의 범위는 1~12여야 합니다.",
  index: [0],
};
const validators: Validator[] = [numericOnlyValidator, monthValidator, makeLengthBlurValidator(2)];
const useExpiryDate = () => {
  const expiryDates: InputState[] = [useInput(""), useInput("")];

  const { inputStates, onChanges, onBlurs } = useValidations(expiryDates, validators);

  return { expiryDates: inputStates, onChanges, onBlurs };
};

export default useExpiryDate;
```

위는 useExpiryDate의 코드인데요.
useInput과 useValidations 만을 import하여,
나만의 Validator를 추가하여 위와같이 나만의 커스텀 훅을 즉각적으로 만들어 사용할 수 있습니다.

#### 커스텀 Input사용을 위한 Validator 설명

```typescript
interface Validator {
  validate: (value: string) => boolean;
  errorMessage: string;
  index?: number[];
  type?: "change" | "blur";
}
```

validate: 검증함수입니다. 올바른 상태일때 true를 반환합니다.
errorMessage: error발생시 보여줄 메세지입니다.
index: 선택입력입니다. 미입력시, 모든 인풋태그를 동시에 검증합니다. [1,3]으로 입력시, 첫번쨰와 3번쨰 인풋태그만 해당 검증을 적용합니다.
type: onChange이벤트시 에러를 검증할 지, onBlur 이벤트시 에러를 검증할 지 선택할 수 있습니다.

makeLengthBlurValidator, numericOnlyValidator와 같은 기본적인 Validator들은 제공해주고있습니다.

## 검증로직

### useCardNumber

[월, 년] 순으로 저장된 InputState[]를 반환합니다.

- 각 필드는 숫자만 입력 가능합니다.
- 월의 범위는 1~12여야 합니다.
- 필드의 길이는 4여야합니다. (blur 이벤트)

#### 사용한 CardBrand 규칙

- Visa: 4로 시작하는 16자리 숫자
- MasterCard: 51~55로 시작하는 16자리 숫자
- Diners: 36으로 시작하는 14자리 숫자
  - 예시: 3612 345678 9012
- AMEX: 34, 37로 시작하는 15자리 숫자
  - 예시 (34로 시작): 3412 345678 90123
  - 예시 (37로 시작): 3712 345678 90123
- 유니온페이: 카드의 앞 번호가 아래 3가지 조건을 만족하는 16자리 숫자
  - 622126~622925로 시작하는 경우: 6221 2612 3456 7890
  - 624~626로 시작하는 경우: 6240 1234 5678 9012
  - 6282~6288로 시작하는 경우: 6282 1234 5678 9012

### useExpiryDate

월, 년 순으로 반환

- 숫자만 입력가능합니다.
- 월의 범위는 1~12여야 합니다.
- 필드의 길이는 3입니다. (blur 이벤트)

### useOwnerName

- 영어 대문자와 공백만 입력 가능합니다.
- 공백은 2번 이상 연속할 수 없습니다.
- 이름의 길이는 30 이하입니다.

### usePassword

- 숫자만 입력가능합니다.
- 필드의 길이는 4입니다. (blur 이벤트)

### useCardCompany

- 등록되어있는 카드사만 입력 가능합니다.

등록되어있는 카드사 :"BC카드", "신한카드", "카카오뱅크", "현대카드", "우리카드", "롯데카드", "하나카드", "국민카드"
