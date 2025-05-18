# oa-custom-hooks

> 카드 결제 관련 입력 필드를 쉽게 구현할 수 있도록 도와주는 커스텀 훅 모음입니다.
> <br />
> 사용자는 카드 번호, 유효 기간, 카드사 선택, CVC, 비밀번호 입력 시 <ins>**상태 관리**</ins>와 <ins>**에러 판별**</ins>, <ins>**에러 메시지 처리**</ins>를 손쉽게 할 수 있습니다.

---

## 📦 Install

```bash
npm install oa-custom-hooks
```

---

## ✨ 제공 훅 목록

- `useCardNumbersInput` – 카드 번호 입력 관리 및 카드 브랜드 자동 인식
- `useCardExpDateInput` – 유효 기간 (월/년) 입력 관리
- `useCardCompanyInput` – 카드사 선택값 관리
- `useCardCVCInput` – CVC 입력 관리
- `useCardPasswordInput` – 비밀번호 입력 관리

---

## 🔧 공통 반환값

각 훅은 다음과 같은 공통 값을 반환합니다:

| 반환값            | 설명                                            |
| ----------------- | ----------------------------------------------- |
| `입력값 상태`     | 입력된 실제 값 (예: `cardNumber`, `cardCVC` 등) |
| `onChangeHandler` | 입력 이벤트 핸들러                              |
| `error`           | 오류 정보 객체 (`isValid`, `errorMessage` 포함) |

---

## 📋 훅별 반환값 상세

### useCardNumbersInput

| 반환값             | 설명                                     |
| ------------------ | ---------------------------------------- |
| `cardNumberGroups` | 카드 번호를 그룹별로 분리한 배열         |
| `cardNumber`       | 전체 카드 번호 문자열                    |
| `cardBrand`        | 인식된 카드 브랜드 ('VISA', 'MASTER' 등) |
| `formatPattern`    | 카드 번호 형식 패턴                      |
| `onChangeHandler`  | 카드 번호 입력 이벤트 핸들러             |
| `error`            | 오류 정보 객체                           |

### useCardExpDateInput

| 반환값            | 설명                            |
| ----------------- | ------------------------------- |
| `cardExpDate`     | 유효기간 객체 (`month`, `year`) |
| `onChangeHandler` | 유효기간 입력 이벤트 핸들러     |
| `error`           | 오류 정보 객체                  |

### useCardCVCInput

| 반환값            | 설명                   |
| ----------------- | ---------------------- |
| `cardCVC`         | CVC 입력값 문자열      |
| `onChangeHandler` | CVC 입력 이벤트 핸들러 |
| `error`           | 오류 정보 객체         |

### useCardPasswordInput

| 반환값            | 설명                        |
| ----------------- | --------------------------- |
| `password`        | 비밀번호 입력값 문자열      |
| `onChangeHandler` | 비밀번호 입력 이벤트 핸들러 |
| `error`           | 오류 정보 객체              |

### useCardCompanyInput

| 반환값            | 설명                      |
| ----------------- | ------------------------- |
| `cardCompany`     | 선택된 카드사 문자열      |
| `onChangeHandler` | 카드사 선택 이벤트 핸들러 |

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
} from 'oa-custom-hooks';

function CardBrandSelect() {
  const { cardCompany, onChangeHandler } = useCardCompanyInput();

  return (
    <div>
      <select onChange={onChangeHandler}>
        <option value="">카드사 선택</option>
        <option value="하나카드">하나카드</option>
        <option value="삼성카드">삼성카드</option>
        <option value="토스카드">토스카드</option>
      </select>
      <p>선택된 카드 브랜드: {cardCompany}</p>
    </div>
  );
}

function CardNumberInput() {
  const { cardNumberGroups, onChangeHandler, error, cardBrand } = useCardNumbersInput();

  return (
    <>
      <h3>카드 번호</h3>
      <div>
        <input
          type="text"
          name="0"
          value={cardNumberGroups[0]}
          onChange={onChangeHandler}
          maxLength={4}
        />
        <input
          type="text"
          name="1"
          value={cardNumberGroups[1]}
          onChange={onChangeHandler}
          maxLength={4}
        />
        <input
          type="text"
          name="2"
          value={cardNumberGroups[2]}
          onChange={onChangeHandler}
          maxLength={4}
        />
        <input
          type="text"
          name="3"
          value={cardNumberGroups[3]}
          onChange={onChangeHandler}
          maxLength={4}
        />
      </div>
      {!error.isValid && <p className="error">{error.errorMessage}</p>}
      <p>카드 브랜드: {cardBrand}</p>
    </>
  );
}

function CardExpDateInput() {
  const { cardExpDate, onChangeHandler, error } = useCardExpDateInput();

  return (
    <>
      <h3>유효 기간</h3>
      <div>
        <input
          type="text"
          name="month"
          value={cardExpDate.month}
          onChange={onChangeHandler}
          placeholder="MM"
          maxLength={2}
        />
        <input
          type="text"
          name="year"
          value={cardExpDate.year}
          onChange={onChangeHandler}
          placeholder="YY"
          maxLength={2}
        />
      </div>
      {!error.isValid && <p className="error">{error.errorMessage}</p>}
    </>
  );
}

function CardCVCInput() {
  const { cardCVC, onChangeHandler, error } = useCardCVCInput();

  return (
    <>
      <h3>CVC</h3>
      <input type="text" name="cvc" value={cardCVC} onChange={onChangeHandler} maxLength={3} />
      {!error.isValid && <p className="error">{error.errorMessage}</p>}
    </>
  );
}

function CardPasswordInput() {
  const { password, onChangeHandler, error } = useCardPasswordInput();

  return (
    <>
      <h3>비밀번호</h3>
      <input
        type="password"
        name="cardPassword"
        value={password}
        onChange={onChangeHandler}
        maxLength={2}
      />
      {!error.isValid && <p className="error">{error.errorMessage}</p>}
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

## 📝 고급 사용법

### 자동 포커스 이동 구현하기

카드 번호 입력 시 한 입력 필드가 채워지면 자동으로 다음 필드로 포커스가 이동하도록 구현할 수 있습니다:

```tsx
import { useRef } from 'react';
import { useCardNumbersInput } from 'oa-custom-hooks';

function CardNumberInput() {
  const { cardNumberGroups, formatPattern, onChangeHandler, error, cardBrand } =
    useCardNumbersInput();
  const inputRefs = useRef<Array<HTMLInputElement | null>>([]);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const index = Number(name);

    // 기본 이벤트 핸들러 호출
    onChangeHandler(e);

    // 입력 길이가 최대에 도달하면 다음 입력 필드로 포커스 이동
    if (value.length >= formatPattern[index] && index < formatPattern.length - 1) {
      const nextInput = inputRefs.current[index + 1];
      if (nextInput) {
        nextInput.focus();
      }
    }
  };

  return (
    <div>
      <h3>카드 번호</h3>
      <div>
        {formatPattern.map((maxLength, index) => (
          <input
            key={index}
            type="text"
            name={index.toString()}
            value={cardNumberGroups[index] || ''}
            onChange={handleInput}
            maxLength={maxLength}
            ref={(el) => {
              inputRefs.current[index] = el;
            }}
            placeholder={`${'*'.repeat(maxLength)}`}
          />
        ))}
      </div>
      {!error.isValid && <p className="error">{error.errorMessage}</p>}
      <p>카드 브랜드: {cardBrand}</p>
    </div>
  );
}
```

---

## 🪪 License

MIT
