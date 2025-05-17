## 📦 kirin-payment-hook

> 카드 결제 정보를 위한 입력 유효성 검증 + 상태 관리를 지원하는 커스텀 훅 모음입니다.
>
> 각 훅은 상태와 함께 포맷팅, 에러 메시지, 유효성 검사 함수 등을 제공합니다.

---

## 🛠 설치

```bash
npm install kirin-payment-hook
```

---

## 🚀 제공 훅 목록

```tsx
import {
  useCardNumberValidation,
  useExpirationDateValidation,
  useCvcNumberValidation,
  usePasswordValidation,
} from 'kirin-payment-hook';
```

| Hook 이름                     | 설명                                              |
| ----------------------------- | ------------------------------------------------- |
| `useCardNumberValidation`     | 카드 번호 유효성 검사 + 브랜드 식별 + 자동 포맷팅 |
| `useExpirationDateValidation` | 만료일 (월/년) 유효성 검사 (MM/YY)                |
| `useCvcNumberValidation`      | CVC 3자리 유효성 검사                             |
| `usePasswordValidation`       | 비밀번호 앞 2자리 유효성 검사                     |

---

## 🧪 사용 예시

### 📇 카드 번호

```tsx
const {
  inputStates,        // 숫자만 담긴 원본 입력값
  formattedValue,     // 포맷된 표시용 값
  onChange,           // 커링된 onChange 핸들러
  errorMessage,       // 현재 에러 메시지
  noError,            // 전체 유효성 여부
  cardBrand,          // 식별된 브랜드 (예: 'visa', 'amex')
  format              // 브랜드별 포맷 (예: [4, 4, 4, 4])
} = useCardNumberValidation();

return (
  <inputvalue={formattedValue}
    onChange={onChange()}
    placeholder="카드 번호를 입력하세요"
  />
);
```

---

## 🔍 리턴 타입 설명

### 공통 구조 (모든 훅 공통)

| 필드명         | 타입                                     | 설명                             |
| -------------- | ---------------------------------------- | -------------------------------- |
| `inputStates`  | string / { month: string, year: string } | 입력 상태값                      |
| `onChange`     | 커링된 `(e) => void` 핸들러              | input에서 직접 연결 가능         |
| `errorMessage` | string                                   | 현재 상태에 해당하는 에러 메시지 |
| `noError`      | boolean                                  | 전체 입력이 유효할 경우 `true`   |

---

### 💳 `useCardNumberValidation` 전용 필드

| 필드명           | 타입     | 설명                                                             |
| ---------------- | -------- | ---------------------------------------------------------------- |
| `cardBrand`      | string   | 카드 브랜드 식별 결과 (`'visa'`, `'amex'`, `'unionpay'`, ... 등) |
| `formattedValue` | string   | 포맷팅된 카드 번호 (`XXXX XXXX XXXX XXXX`)                       |
| `format`         | number[] | 카드사별 구분 형식 ([4, 4, 4, 4] 등)                             |

---

### 📆 `useExpirationDateValidation` 전용 필드

| 필드명        | 타입                                 | 설명                                  |
| ------------- | ------------------------------------ | ------------------------------------- |
| `inputStates` | `{ month: string, year: string }`    | 월/년 각각의 입력 상태                |
| `onChange`    | `(keyof inputStates) => (e) => void` | `month`, `year` 키에 맞는 변경 핸들러 |

---

## 🧩 기타 특징

- `useCardNumberValidation`은 **입력값 기반 자동 카드사 식별 및 포맷 적용**
- 모든 훅은 **유효성 검사와 상태 업데이트를 동시에 수행**
- **에러 메시지 자동 제공 + 유효 상태 여부 (`noError`) 제공**
