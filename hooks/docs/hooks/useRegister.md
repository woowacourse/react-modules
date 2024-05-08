# useRegister hook

## How to use

1. 아래는 `useCardNumbers` 훅과 함께 사용한 예시입니다.

```jsx
import { useCardNumbers, useRegister } from "easy-payments-hooks";

const DEFAULT_INPUT_LENGTH = 4;

function App() {
  const {
    numbers: { firstState, secondState, thirdState, fourthState },
    errorList: [firstErrorType, secondErrorType, thirdErrorType, fourthErrorType],
    cardBrand,
    inputMaxLengthList,
  } = useCardNumbers();

  const { errorType: firstErrType, ...firstNumberAttrs } = useRegister("firstNumber", {
    value: firstState[0],
    onChange: (e: ChangeEvent<HTMLInputElement>) => firstState[1](e.target.value),
    customType: "number",
    required: true,
    maxLength: DEFAULT_INPUT_LENGTH,
  });

  const { errorType: secondErrType, ...secondNumberAttrs } = useRegister("secondNumber", {
    value: secondState[0],
    onChange: (e: ChangeEvent<HTMLInputElement>) => secondState[1](e.target.value),
    customType: "number",
    maxLength: inputMaxLengthList ? inputMaxLengthList[1] : DEFAULT_INPUT_LENGTH,
  });

  const { errorType: thirdErrType, ...thirdNumberAttrs } = useRegister("secondNumber", {
    value: thirdState[0],
    onChange: (e: ChangeEvent<HTMLInputElement>) => thirdState[1](e.target.value),
    customType: "number",
    maxLength: inputMaxLengthList ? inputMaxLengthList[2] : DEFAULT_INPUT_LENGTH,
  });

  const { errorType: fourthErrType, ...fourthNumberAttrs } = useRegister("secondNumber", {
    value: fourthState[0],
    onChange: (e: ChangeEvent<HTMLInputElement>) => fourthState[1](e.target.value),
    customType: "number",
    maxLength: inputMaxLengthList ? inputMaxLengthList[3] : DEFAULT_INPUT_LENGTH,
  });

  return (
    <>
      <h1>Hooks Modules</h1>
      <div>cardBrand : {cardBrand}</div>
      <input {...firstNumberAttrs}></input>
      <div>{firstErrType ?? firstErrorType}</div>
      <input {...secondNumberAttrs}></input>
      <div>{secondErrorType ?? secondErrType}</div>
      <input {...thirdNumberAttrs}></input>
      <div>{thirdErrType ?? thirdErrorType}</div>
      <input {...fourthNumberAttrs} disabled={!(inputMaxLengthList && inputMaxLengthList[3])}></input>
      <div>{fourthErrType ?? fourthErrorType}</div>
    </>
  );
}
```

## Return

| 반환값 (Return)        | 설명 (Description)                                                                             |
| ---------------------- | ---------------------------------------------------------------------------------------------- |
| `errorType`            | 에러 타입을 반환한다.                                                                          |
| `inputAttributeObject` | input의 value값을 확인할 수 있는 객체. key값으로 input의 name값을, value값으로 input의 value값 |

## Parameter

| 입력값 (Parameter)     | 설명 (Description)                                                                |
| ---------------------- | --------------------------------------------------------------------------------- |
| `name`                 | input의 name attribute 속성 값입니다. valueMap과 errorMap의 key값으로 사용됩니다. |
| `inputAttributeObject` | 기존의 HTMLInputAttributes와 동일하지만 약간의 차이점이 있습니다.                 |

### inputAttributeObject

1. `required`: `boolean` 형식으로 작성하세요. input값의 필수 여부를 판단합니다.
2. `customType`: "number" | "english". number일 경우 숫자 이외의 입력을 제한하고, english일 경우 영어 이외의 입력을 제한하고 에러를 발생시킵니다.
