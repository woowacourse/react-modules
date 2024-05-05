# useInput hook

## How to use

```jsx
import { useInput } from "easy-payments-hooks";

function App() {
  const { register, valueMap, errorMap } = useInput();

  //...
  return (
    <>
      <input
        {...register("password", {
          type: "password",
          customType: "number",
          required: { message: "password를 입력해주세요." },
          maxLength: 2,
          maxLengthErrorMessage: "2자 이상 입력해주세요.",
        })}
      ></input>
      <div>value값: {valueMap["password"]}</div>
      <div>error값: {errorMap["password"]}</div>
      <input
        {...register("number", {
          type: "number",
          typeErrorMessage: "숫자만 입력해주세요.",
          required: { message: "number를 입력해주세요." },
        })}
      ></input>
      <div>value값: {valueMap["number"]}</div>
      <div>error값: {errorMap["number"]}</div>
    </>
  );
}
```

## Return

| 반환값 (Return) | 설명 (Description)                                                                                              |
| --------------- | --------------------------------------------------------------------------------------------------------------- |
| `register`      | input Attributes를 반환하는 함수. 첫 번째 인자로 name이 들어가고, 두 번째 인자로 inputAttribute속성이 들어간다. |
| `valueMap`      | input의 value값을 확인할 수 있는 객체. key값으로 input의 name값을, value값으로 input의 value값                  |
| `errorMap`      | input의 error값을 확인할 수 있는 객체. key값으로 input의 name값을, value값으로 errorMessage값                   |

## register hook

```tsx
const { name, ref, value, placeholder, onChange, onBlur } = register(`name`, `inputAttributeObject`);
```

| 입력값 (Parameter)     | 설명 (Description)                                                                |
| ---------------------- | --------------------------------------------------------------------------------- |
| `name`                 | input의 name attribute 속성 값입니다. valueMap과 errorMap의 key값으로 사용됩니다. |
| `inputAttributeObject` | 기존의 HTMLInputAttributes와 동일하지만 약간의 차이점이 있습니다.                 |

### inputAttributeObject

1. `required`: {message: string} 형식으로 작성하세요. input의 value값이 없을 경우 message값은 errorMessage값으로 사용됩니다.
2. `customType`: "number" | "english". number일 경우 숫자 이외의 입력을 제한하고, english일 경우 영어 이외의 입력을 제한하고 에러를 발생시킵니다.
3. `typeErrorMessage`: string형식으로 작성하세요. customType이 에러가 발생한다면, 이 속성의 값을 errorMessage로 사용합니다.
4. `maxLengthErrorMessage`: string형식으로 작성하세요. input Attribute의 maxLength값 이상의 입력값을 입력하려 시도하면 제한하고 이 에러 메세지를 반환합니다.
