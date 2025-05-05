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

- `useCardNumbersInput` – 카드 번호 입력 관리
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

## 🧪 사용 예시

```tsx
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
  const { cardNumbers, onChangeHandler, errorMessage } = useCardNumbersInput();
  return (
    <InputField
      title="카드 번호"
      label="라벨 cardNumbers"
      feedbackMessage={errorMessage}
    >
      <Input type="text" name="0" onChange={onChangeHandler} autoFocus />
      <Input type="text" name="1" onChange={onChangeHandler} autoFocus />
      <Input type="text" name="2" onChange={onChangeHandler} autoFocus />
      <Input type="text" name="3" onChange={onChangeHandler} autoFocus />
      <p>인풋 실시간 value : {cardNumbers}</p>
    </InputField>
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
