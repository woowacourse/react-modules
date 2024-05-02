# maru-nice-hooks

## 설치 방법
```bash
npm i maru-nice-hooks
```

## 사용 예시

```tsx
function App() {
  const cvcInfo = useCVC('111');
  const passwordInfo = usePassword('22');
  const cardholderInfo = useCardHolder('a b');
  const expiryDate = useExpiryDate({ month: '01', year: '24' }, { month: { isAutoFocus: true } });
  const cardTypeInfo = useCardType({
    initialValue: '카드사를 입력해주세요',
    options: ['BC', 'KB', '하나', '우리'],
    placeholder: '카드사를 입력해주세요',
  });
  const cardNumbersInfo = useCardNumbers(
    { first: '1234', second: '1234', third: '1234', fourth: '1234' },
    { isAutoFocus: true },
  );
}
```

## useCardHolder
- 카드 소유자 이름 입력 필드를 위한 커스텀 훅 생성

### params
```ts
initialValue : string
```

### return
- value: 입력 필드의 현재 값. 초기값으로 주어진 initialValue가 대문자로 변환되어 설정.
- handleChange: 입력 필드의 값이 변경될 때 호출되는 함수. 입력 값의 유효성을 실시간으로 검사하고, 유효하지 않은 값에 대해서는 상태 업데이트 중단
- handleBlur: 입력 필드에서 포커스가 벗어날 때 호출되는 함수. 이 함수는 최종 값의 형식 검증.
- errorInfo: 현재 입력 값의 유효성 정보를 담고 있는 객체. isValid와 errorMessage 속성을 포함.


## useCVC
- 카드 CVC 입력 필드를 위한 커스텀 훅 생성

### params
```ts
initialValue : string
```

### return
- value: 입력 필드의 현재 값. 이 값은 initialValue로 설정.
- handleChange: 입력 필드의 값이 변경될 때 호출되는 함수. 숫자 입력 검증 수행.
- handleBlur: 입력 필드에서 포커스가 벗어날 때 호출되는 함수. CVC의 길이 검증 수행.
- errorInfo: 현재 입력 값의 유효성 정보를 담고 있는 객체. isValid와 errorMessage 속성 포함.


## useExpiryDate
- 카드 유효기간(월/년) 입력 필드를 위한 커스텀 훅 생성

### params
```ts
initialValue : string
 { month?: { isAutoFocus?: boolean }, year?: {isAutoFocus?: boolean } }
```

### return
- month: 월 입력을 관리하는 useExpiryMonth 훅에서 반환된 객체입니다.
  - value: 입력 필드의 현재 값입니다.
  - handleChange: 입력 필드의 값이 변경될 때 호출되는 함수입니다.
  - handleBlur: 입력 필드에서 포커스가 벗어날 때 호출되는 함수입니다.
  - errorInfo: 현재 입력 값의 유효성 정보를 담고 있는 객체입니다.
- year: 년 입력을 관리하는 useExpiryYear 훅에서 반환된 객체입니다.
  - 각 속성은 month와 같습니다.

## usePassword

패스워드 입력 필드를 위한 커스텀 훅을 생성합니다. 초기 값으로 주어진 값의 유효성을 검사하고, 필요에 따라 초기화합니다.
초기 값의 유효성을 확인하고, 유효성에 맞지 않다면 초기화합니다.

### params
```ts
initialValue: string // 초기 값
```

### return
- value: 입력된 값
- handleChange: 입력된 값이 숫자인지 확인하고, 숫자가 아닌 경우 오류 메시지를 반환합니다. 또한 입력 값이 유효한지 여부를 isValid로 표시합니다.
- handleBlur:
입력된 값의 길이가 0이거나 2인지 확인하고, 그렇지 않은 경우 오류 메시지를 반환합니다. 또한 입력 값이 유효한지 여부를 isValid로 표시합니다.
- errorInfo: 오류 정보를 담고 있는 객체


## useCardNumbers
카드 번호 입력 필드를 위한 커스텀 훅을 생성합니다. 초기 값으로 주어진 값의 유효성을 검사하고, 필요에 따라 초기화합니다.
초기 값의 유효성을 확인하고, 유효성에 맞지 않다면 초기화합니다. 만약 옵션으로 오토포커스가 설정되어 있다면, 다음 카드 번호 필드로 자동으로 포커스를 이동시킵니다.

### params
```ts
initialValue: (Record<string, string>) // 초기 값 (각 카드 번호 필드에 대한 초기 값)
options: ({ isAutoFocus: boolean }) // 추가 옵션 객체 (오토포커스 여부)
```

### return
- value: 입력된 값
- handleChange: 입력된 값의 변경을 처리하고, 유효성 검사를 수행합니다. 입력 값이 숫자가 아니거나 길이가 올바르지 않은 경우 오류 메시지를 설정합니다.
- handleBlur: 입력된 값의 포커스가 떠날 때, 입력 값의 길이가 올바른지 확인하고 오류 메시지를 설정합니다.
- errorInfo: 오류 정보를 담고 있는 객체


## useCardType
카드 타입 선택을 위한 커스텀 훅을 생성합니다. 초기 값으로 주어진 값의 유효성을 검사하고, 필요에 따라 초기화합니다.
초기 값의 유효성을 확인하고, 유효성에 맞지 않다면 초기화합니다.


### params
```ts
initialValue: string // 초기 값
options: string[] // 카드 타입의 옵션 목록
placeholder: string // 선택지가 없을 때 보여질 플레이스홀더
```

### return
- value: 선택된 값
- handleChange: 선택된 값이 변경될 때의 처리 함수
- errorInfo: 오류 정보를 담고 있는 객체
