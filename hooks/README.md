# @yeji0214/hooks

카드 등록 UI에 특화된 커스텀 훅 모음입니다.

[![npm version](https://img.shields.io/npm/v/@yeji0214/hooks.svg)](https://www.npmjs.com/package/@yeji0214/hooks)
[![license](https://img.shields.io/npm/l/@yeji0214/hooks.svg)](LICENSE)

---

## ✨ 제공 훅 목록

| 훅 이름              | 사용 목적                       |
| -------------------- | ------------------------------- |
| `useCardNumberInput` | 4칸 카드 번호 입력 상태 관리    |
| `useExpiryDateInput` | 유효 기간(MM/YY) 입력 관리      |
| `useSingleInput`     | CVC, 비밀번호 등 단일 인풋 처리 |

---

## 📦 설치

```bash
npm install @yeji0214/hooks
```

> ⚠️ `react`, `react-dom`이 peerDependencies로 지정되어 있어 사용자가 직접 설치해야 합니다.

---

## 🧩 사용법

### 1. 카드 번호 입력 - `useCardNumberInput`

```tsx
import { useCardNumberInput } from "@yeji0214/hooks";

const CardNumberInput = () => {
  const {
    cardNumber,
    formattedCardNumber,
    cardBrand,
    isValid,
    errorMessage,
    handleChange,
  } = useCardNumberInput();

  return (
    <div>
      <input
        value={formattedCardNumber}
        onChange={handleChange}
        placeholder="카드 번호를 입력하세요"
        maxLength={19}
      />
      {cardBrand && <p>카드사: {cardBrand}</p>}
      {!isValid && errorMessage && (
        <p style={{ color: "red" }}>{errorMessage}</p>
      )}
    </div>
  );
};
```

#### ✅ 반환 값

| 항목                  | 타입                                         | 설명                                                             |
| --------------------- | -------------------------------------------- | ---------------------------------------------------------------- |
| `cardNumber`          | `string`                                     | 숫자만 포함된 원본 카드 번호                                     |
| `formattedCardNumber` | `string`                                     | 카드사 포맷에 따라 자동 포맷된 카드 번호 (`#### #### #### ####`) |
| `cardBrand`           | `string \| null`                             | 자동 식별된 카드 브랜드 (예: `VISA`, `AMEX` 등)                  |
| `isValid`             | `boolean`                                    | 현재 입력된 카드 번호가 해당 카드사 기준으로 유효한지 여부       |
| `errorMessage`        | `string`                                     | 유효성 검사 실패 시 반환되는 에러 메시지                         |
| `handleChange`        | `(e: ChangeEvent<HTMLInputElement>) => void` | input의 onChange 핸들러                                          |

---

## 🏦 지원 카드사 및 식별 조건

| 카드사         | 시작 숫자 범위                                  | 전체 길이 | 포맷 구조 |
| -------------- | ----------------------------------------------- | --------- | --------- |
| **VISA**       | `4`                                             | 16자      | `4-4-4-4` |
| **MASTERCARD** | `51` ~ `55`                                     | 16자      | `4-4-4-4` |
| **AMEX**       | `34`, `37`                                      | 15자      | `4-6-5`   |
| **DINERS**     | `36`                                            | 14자      | `4-6-4`   |
| **UNIONPAY**   | `622126` ~ `622925`, `624`~`626`, `6282`~`6288` | 16자      | `4-4-4-4` |

> ⚠️ 입력값은 숫자만 허용되며, 자동으로 카드사에 맞게 포맷됩니다.  
> ⚠️ 위 조건을 만족하지 않는 경우 `CARD_NUMBER.INVALID` 에러 메시지가 설정됩니다.

---

### 2. 유효 기간 입력 - `useExpiryDateInput`

```tsx
import { useExpiryDateInput } from "@yeji0214/hooks";

const ExpiryInput = () => {
  const { expiryDateState, errorMessage, handleInputChange } =
    useExpiryDateInput();

  return (
    <div>
      <input
        placeholder="MM"
        value={expiryDateState[0].value}
        onChange={(e) => handleInputChange(e, 0)}
        maxLength={2}
      />
      <input
        placeholder="YY"
        value={expiryDateState[1].value}
        onChange={(e) => handleInputChange(e, 1)}
        maxLength={2}
      />
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
};
```

#### ✅ 반환 값

| 항목                | 타입                                    | 설명                                 |
| ------------------- | --------------------------------------- | ------------------------------------ |
| `expiryDateState`   | `{ value: string; isValid: boolean }[]` | 월(MM), 년(YY) 상태                  |
| `errorMessage`      | `string`                                | 유효성 검사 메시지 (월 또는 년 오류) |
| `handleInputChange` | `(e, index) => void`                    | 입력 핸들러                          |

---

### 3. CVC/비밀번호 등 단일 인풋 - `useSingleInput`

```tsx
import { useSingleInput } from "@yeji0214/hooks";

const CVCInput = () => {
  const { singleState, errorMessage, handleInputChange } = useSingleInput(3);

  return (
    <div>
      <input
        value={singleState.value}
        onChange={handleInputChange}
        maxLength={3}
      />
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
};
```

#### ✅ 반환 값

| 항목                | 타입                                  | 설명             |
| ------------------- | ------------------------------------- | ---------------- |
| `singleState`       | `{ value: string; isValid: boolean }` | 단일 인풋의 상태 |
| `errorMessage`      | `string`                              | 유효성 메시지    |
| `handleInputChange` | `(e) => void`                         | 입력 핸들러      |

---

## 🧪 유효성 검사 항목

- 숫자만 입력 가능
- 입력 자리 수 일치 여부 확인
- 유효하지 않은 월(MM) / 연도(YY) 예외 처리

---

## 📃 라이선스

MIT © 정예지
