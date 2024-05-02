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
      <input
        value={ownerName.value}
        onChange={onChange}
      />
      <div>{ownerName.errorMessage}</div>
      <div>{ownerName.isError}</div>
    </div>
  </>
);
```

### 스크린샷

![alt text](<스크린샷 2024-05-02 172940.png>)

### 특이사항

모든 커스텀훅의 사용방법은 동일하나,
useCardNumber은 인풋태그 4개를 위한훅이기때문에
onChanges 배열을 반환하고,
useCVC는 인풋태그 하나를 위한 훅이기때문에
onChange 단일 핸들러를 반환합니다.

### 특징

blur 이벤트와 change 이벤트를 대응합니다.
입력길이 검증은 blur 이벤트로 구성하고,
잘못된 값 검증은 change 이벤트로 구성되어 있습니다.

입력 도중에 에러가 발생하는 것이 UX에 좋지않기때문에
blur 이벤트로 대응합니다.

## 검증로직

### useCardNumber

[월, 년] 순으로 저장된 InputState[]를 반환합니다.

- 각 필드는 숫자만 입력 가능합니다.
- 월의 범위는 1~12여야 합니다.
- 필드의 길이는 4여야합니다. (blur 이벤트)

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
