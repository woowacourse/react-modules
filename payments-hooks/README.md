# @dev-dino22/payments-hooks

카드 결제 관련 입력 필드를 쉽게 구현할 수 있도록 도와주는 커스텀 훅 모음입니다.

사용자는 카드 번호, 유효 기간, 카드사 선택, CVC, 비밀번호 입력 시  
**상태 관리**와 **에러 판별**, **에러 메시지 처리**를 손쉽게 할 수 있습니다.

## 📦 Install

```js
npm install @dev-dino22/payments-hooks
```

---

## ✨ 제공 훅 목록

- `useCardNumbersInput` – 카드 번호 입력 관리 및 브랜드/유효성 체크
- `useCardExpDateInput` – 유효 기간 (월/년) 입력 관리
- `useCardCompanyInput` – 카드사 선택값 관리
- `useCardCVCInput` – CVC 입력 관리
- `useCardPasswordInput` – 비밀번호 입력 관리

---

## 🔧 공통 반환값

각 훅은 다음과 같은 공통 값을 반환합니다:

| 반환값                         | 설명                                             |
| ------------------------------ | ------------------------------------------------ |
| `onChangeHandler`              | 입력 이벤트 핸들러                               |
| `에러 메시지` (`errorMessage`) | 유효성 검증 실패 시 보여줄 메시지                |
| `입력값 상태`                  | 입력된 실제 값 (예: `cardNumbers`, `cardCVC` 등) |

---

## (New!) useCardNumbersInput

- 브랜드 체크 기능이 추가되었습니다.
- 브랜드 별로 cardNumbersInfo의 배열 길이가 달라져, 사용자의 입력에 따라 input 개수를 실시간으로 조절할 수 있습니다.

### 🔧 **Return 값**

| Return Value      | Type                                                                | Description                              |
| ----------------- | ------------------------------------------------------------------- | ---------------------------------------- |
| `cardNumbersInfo` | `{ value: string, errorMessage: string }[]`                         | 각 인풋 필드의 값과 에러 메시지 정보     |
| `onChangeHandler` | `(index: number) => (event: ChangeEvent<HTMLInputElement>) => void` | 카드 번호가 입력될 때 호출되는 핸들러    |
| `cardBrand`       | `string`                                                            | 감지된 카드 브랜드 (Visa, MasterCard 등) |
| `cardBlocks`      | `number[]`                                                          | 각 인풋 필드의 최대 글자 수 배열         |

```tsx
import { useCardNumbersInput } from "@dev-dino22/modal-components";
import Input from "./Input";

const CardNumberInput = () => {
  const { cardNumbersInfo, onChangeHandler, cardBrand, cardBlocks } =
    useCardNumbersInput();

  return (
    <div className="card-number-inputs">
      {cardNumbersInfo.map(({ value }, i) => (
        <Input
          key={i}
          type="text"
          value={value}
          onChange={onChangeHandler(i)}
          maxLength={cardBlocks[i]}
          inputMode="numeric"
          autoComplete="cc-number"
        />
      ))}

      <p>선택된 카드 브랜드: {cardBrand}</p>

      <p>
        에러메세지:{" "}
        {
          cardNumbersInfo.find(({ errorMessage }) => errorMessage !== "")
            ?.errorMessage
        }
      </p>
    </div>
  );
};
```

---

## 🧪 훅 전체 사용 예시

```tsx
import React, { ComponentProps } from "react";
import "./App.css";
import {
  useCardPasswordInput,
  useCardExpirationDateInput,
  useCardNumbersInput,
  useCardCVCInput,
  useCardCompanyInput,
} from "./lib";

interface InputProps extends ComponentProps<"input"> {
  isValid?: boolean;
}

function CardBrandSelect() {
  const { cardCompany, onChangeHandler } = useCardCompanyInput();
  return (
    <div>
      <select onChange={onChangeHandler}>
        <option></option>
        <option>하나카드</option>
        <option>삼성카드</option>
        <option>토스카드</option>
      </select>
      <p>선택된 카드 브랜드: {cardCompany}</p>
    </div>
  );
}

function Input({ isValid, ...props }: InputProps) {
  return <input {...props} />;
}

export interface InputFieldProps {
  title: string;
  label: string;
  feedbackMessage?: string;
  children: React.ReactNode;
}

function InputField({
  title,
  label,
  feedbackMessage,
  children,
}: InputFieldProps) {
  return (
    <div>
      <div>
        <h3>{title}</h3>
      </div>
      <div>
        <label className="tx-lg">{label}</label>
        <div>{children}</div>
        <p>{feedbackMessage}</p>
      </div>
    </div>
  );
}

const CardNumberInput = () => {
  const { cardNumbersInfo, onChangeHandler, cardBrand, cardBlocks } =
    useCardNumbersInput();

  return (
    <div className="card-number-inputs">
      {cardNumbersInfo.map(({ value }, i) => (
        <Input
          key={i}
          type="text"
          value={value}
          onChange={onChangeHandler(i)}
          maxLength={cardBlocks[i]}
          inputMode="numeric"
          autoComplete="cc-number"
        />
      ))}
      <p>선택된 카드 브랜드: {cardBrand}</p>
      <p>
        에러메세지:
        {
          cardNumbersInfo.find(({ errorMessage }) => errorMessage !== "")
            ?.errorMessage
        }
      </p>
    </div>
  );
};

const CardExpirationDateInput = () => {
  const { cardExpirationDate, onChangeHandler, errorMessage } =
    useCardExpirationDateInput();
  return (
    <InputField
      title="유효기간"
      label="라벨 cardExpDate"
      feedbackMessage={errorMessage}
    >
      <Input type="text" name="month" onChange={onChangeHandler} autoFocus />
      <Input type="text" name="year" onChange={onChangeHandler} autoFocus />
      <p>인풋 실시간 value - month : {cardExpirationDate.month}</p>
      <p>인풋 실시간 value - year : {cardExpirationDate.year}</p>
    </InputField>
  );
};

const CardCVCInput = () => {
  const { cardCVC, onChangeHandler, errorMessage } = useCardCVCInput();
  return (
    <InputField title="CVC" label="라벨 cardCVC" feedbackMessage={errorMessage}>
      <Input type="text" name="cvc" onChange={onChangeHandler} autoFocus />
      <p>인풋 실시간 value : {cardCVC}</p>
    </InputField>
  );
};

const CardPasswordInput = () => {
  const { cardPassword, onChangeHandler, errorMessage } =
    useCardPasswordInput();
  return (
    <InputField
      title="비밀번호"
      label="라벨 비밀번호"
      feedbackMessage={errorMessage}
    >
      <Input
        type="password"
        name="cardPassword"
        onChange={onChangeHandler}
        autoFocus
      />
      <p>인풋 실시간 value : {cardPassword}</p>
    </InputField>
  );
};

function App() {
  return (
    <form>
      <div>
        <div>
          <CardBrandSelect />
          <CardNumberInput />
          <CardExpirationDateInput />
          <CardCVCInput />
          <CardPasswordInput />
        </div>
        <div></div>
      </div>
    </form>
  );
}

export default App;
```

---

## 🪪 License

MIT
