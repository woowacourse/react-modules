import React, { ComponentProps } from "react";
import "./App.css";
import {
  useCardPasswordInput,
  useCardExpirationDateInput,
  useCardNumbersInput,
  useCardCVCInput,
  useCardCompanyInput,
} from "./lib";

export interface InputProps extends ComponentProps<"input"> {
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
      <p>Detected brand: {cardBrand}</p>
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
