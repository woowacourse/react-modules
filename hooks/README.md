# laireca-custom-hooks

> 카드 결제 관련 입력 필드를 쉽게 구현할 수 있도록 도와주는 커스텀 훅 모음입니다.
> <br />
> 사용자는 카드 번호, 유효 기간, 카드사 선택, CVC, 비밀번호 입력 시 <ins>**상태 관리**</ins>와 <ins>**에러 판별**</ins>, <ins>**에러 메시지 처리**</ins>를 손쉽게 할 수 있습니다.

---

## 📦 Install

```bash
npm install laireca-custom-hooks
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

| 반환값                         | 설명                                              |
| ------------------------------ | ------------------------------------------------- |
| `입력값 상태`                  | 입력된 실제 값 (예: `cardNumbers`, `cardCVC` 등 ) |
| `onChangeHandler`              | 입력 이벤트 핸들러                                |
| `에러 메시지` (`errorMessage`) | 유효성 검증 실패 시 보여줄 메시지                 |

---

## 🧪 사용 예시

```tsx
import React from 'react';
import {
  useCardPasswordInput,
  useCardExpDateInput,
  useCardNumbersInput,
  useCardCVCInput,
  useCardCompanyInput,
} from 'laireca-custom-hooks';

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

function CardNumberInput() {
  const { cardNumbers, onChangeHandler, errorMessage } = useCardNumbersInput();

  return (
    <>
      <h3>카드 번호</h3>
      <input type="text" name="0" onChange={onChangeHandler} />
      <input type="text" name="1" onChange={onChangeHandler} />
      <input type="text" name="2" onChange={onChangeHandler} />
      <input type="text" name="3" onChange={onChangeHandler} />
      <p>{errorMessage}</p>
      <p>입력 값: {cardNumbers}</p>
    </>
  );
}

function CardExpDateInput() {
  const { cardExpDate, onChangeHandler, errorMessage } = useCardExpDateInput();

  return (
    <>
      <h3>유효 기간</h3>
      <input type="text" name="month" onChange={onChangeHandler} />
      <input type="text" name="year" onChange={onChangeHandler} />
      <p>{errorMessage}</p>
      <p>
        month: {cardExpDate.month}, year: {cardExpDate.year}
      </p>
    </>
  );
}

function CardCVCInput() {
  const { cardCVC, onChangeHandler, errorMessage } = useCardCVCInput();

  return (
    <>
      <h3>CVC</h3>
      <input type="text" name="cvc" onChange={onChangeHandler} />
      <p>{errorMessage}</p>
      <p>입력 값: {cardCVC}</p>
    </>
  );
}

function CardPasswordInput() {
  const { password, onChangeHandler, errorMessage } = useCardPasswordInput();

  return (
    <>
      <h3>비밀번호</h3>
      <input type="password" name="cardPassword" onChange={onChangeHandler} />
      <p>{errorMessage}</p>
      <p>입력 값: {password}</p>
    </>
  );
}

function App() {
  return (
    <form>
      <CardBrandSelect />
      <CardNumberInput />
      <CardExpDateInput />
      <CardCVCInput />
      <CardPasswordInput />
    </form>
  );
}

export default App;
```

---

## 🪪 License

MIT
